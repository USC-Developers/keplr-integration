import { SigningStargateClient, SearchByHeightQuery } from "@cosmjs/stargate";

import { encodePubkey } from "@cosmjs/proto-signing";

import { coin as coinInstance } from "@cosmjs/launchpad";

import { encodeSecp256k1Pubkey } from "@cosmjs/amino";
import { BaseAccount, ModuleAccount } from "./grpc/cosmos/auth/v1beta1/auth_pb";
import Long from "long";
import { fromBase64 } from "@cosmjs/encoding";

import { Secp256k1 } from "@cosmjs/crypto";
import { QueryClient as BaknQuery } from "./grpc/cosmos/bank/v1beta1/QueryServiceClientPb";
//import {  QueryDenomMetadataRequest, QueryDenomsMetadataRequest, QueryBalanceRequest}  from "./cosmosProtoTypes/cosmos/bank/v1beta1/query_pb" ;
import { QueryAllBalancesRequest } from "./grpc/cosmos/bank/v1beta1/query_pb";
import { MsgClient as TxBankClien } from "./grpc/cosmos/bank/v1beta1/TxServiceClientPb";
import { MsgSend } from "./grpc/cosmos/bank/v1beta1/tx_pb";
import { MsgMintUSC, MsgRedeemCollateral } from "./grpc/gaia/usc/v1beta1/tx_pb";
//import {  }  from "./grpc/gaia/usc/v1beta1/TxServiceClientPb";
import { SignMode } from "./grpc/cosmos/tx/signing/v1beta1/signing_pb";
import { Any } from "./grpc/google/protobuf/any_pb";
import { PubKey } from "./grpc/cosmos/crypto/secp256k1/keys_pb";
import { ServiceClient } from "./grpc/cosmos/tx/v1beta1/ServiceServiceClientPb";
import {
  TxBody,
  Tx,
  TxRaw,
  Fee,
  AuthInfo,
  SignerInfo,
  ModeInfo,
  SignDoc,
} from "./grpc/cosmos/tx/v1beta1/tx_pb";
import { Coin } from "./grpc/cosmos/base/v1beta1/coin_pb";

import {
  SimulateRequest,
  BroadcastTxRequest,
  BroadcastMode,
} from "./grpc/cosmos/tx/v1beta1/service_pb";
import { QueryAccountRequest } from "./grpc/cosmos/auth/v1beta1/query_pb";

import { QueryClient as AuthClient } from "./grpc/cosmos/auth/v1beta1/QueryServiceClientPb";

import { getCoinList } from "./helpers";
import { MsgType } from "./global";

interface OfflineSigner {
  chainId?: string;
  getAccounts(): string[];
}

const w: any = window;

class KeplrClient {
  signer: any;
  account: {
    address: string;
    pubKey: Uint8Array;
    sequence: number;
    accountNumber: number
  } = {
    address: "",
    pubKey: Uint8Array.from([]),
    sequence: 0,
    accountNumber: 0
  };
  stargate: SigningStargateClient | undefined;
  chain: string = "";
  rpc: string = "";
  rest: string = "";
  feesDenom:string = 'stake'
  proxy = "http://localhost:8080";
  txService: ServiceClient;


  constructor(chain: string, rpc: string, rest: string) {
    this.chain = chain;
    this.rpc = rpc;
    this.rest = rest;
    this.txService = new ServiceClient(this.proxy);
    return this;
  }

  public async connect() {
    try {
      try {
        await w.keplr.enable(this.chain);
      } catch (e) {
        await w.keplr.experimentalSuggestChain(
          setChain(this.chain, this.rpc, this.rest)
        );
        await w.keplr.enable(this.chain);
      }

      this.signer = w.getOfflineSigner(this.chain);

      this.account.address = (await this.signer?.getAccounts())[0].address;

      const account = await this.getAccount();
      this.account = {
        ...this.account,
        ...account,
      };

      console.log(this.account);

      return this;
    } catch (e) {
      throw e;
    }
  }

  public async getBalance() {
    const client = new BaknQuery(this.proxy);

    const req = new QueryAllBalancesRequest().setAddress(this.account.address);

    client.allBalances(req, {}, (err, res) => {
      console.log(err);
      console.log(res);
    });
  }

  public async sendWithCosmo(msg: any[], memo: string) {
    if (this.stargate) {
      const gas = await this.stargate.simulate(this.account.address, msg, memo);

      console.log(gas);

      const res = await this.stargate.signAndBroadcast(
        this.account.address,
        msg,
        {
          gas: (gas * 1.4).toFixed(0),
          amount: [coinInstance(1, "stake")],
        },
        memo
      );

      console.log(res);
    }
  }

  public async getTrx(hash: string) {
    return await this.stargate?.getTx(hash);
  }

  private async getAccount() {
    const client = new AuthClient(this.proxy);
    const req = new QueryAccountRequest().setAddress(this.account.address);

    try {
      const res = await client.account(req, null);

      const { accountNumber, sequence } = BaseAccount.deserializeBinary(
        res.toObject()?.account.value
      ).toObject();

      return { accountNumber, sequence };
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  private buildTxBody(msg: MsgType, typeUrl: string, memo: string) {
    const wrappedMsg = new Any()
      .setTypeUrl(typeUrl)
      .setValue(msg.serializeBinary());
    const txBody = new TxBody()
      .setMessagesList([wrappedMsg])
      .setTimeoutHeight(0)
      .setExtensionOptionsList([])
      .setMemo(memo);

    return txBody.serializeBinary();
  }

  private async setPubKey() {
    try {
      const key = await w.keplr.getKey(this.chain);
      console.log(key, 'key')
      const pubKey = encodePubkey(encodeSecp256k1Pubkey(key.pubKey));

      console.log(pubKey);

      this.account.pubKey = pubKey.value;
      return this.account.pubKey;
    } catch (e) {
      return Uint8Array.from([]);
    }
  }

  private setSignDoc(bodyBytes: Uint8Array, authInfoBytes: Uint8Array) {
    const signDoc = new SignDoc();
    signDoc.setBodyBytes(bodyBytes);
    signDoc.setAuthInfoBytes(authInfoBytes);
    signDoc.setChainId(this.chain);
    signDoc.setAccountNumber(this.account.accountNumber);

    return signDoc.serializeBinary();
  }

  private async setTxAuthInfo(fees?: number) {

    const pubKey = this.account.pubKey.byteLength > 0 ? this.account.pubKey : (await this.setPubKey());

  
    const pubKeyAny = new Any();

    pubKeyAny.setTypeUrl("/cosmos.crypto.secp256k1.PubKey");
    pubKeyAny.setValue(pubKey);

    const authInfo = new AuthInfo();

    const signerInfo = new SignerInfo();
    const modeInfo = new ModeInfo();
    const singleModeInfo = new ModeInfo.Single();
    singleModeInfo.setMode(SignMode.SIGN_MODE_DIRECT);
    modeInfo.setSingle(singleModeInfo);

    signerInfo.setPublicKey(pubKeyAny);
    signerInfo.setModeInfo(modeInfo);

    signerInfo.setSequence(this.account.sequence);

    authInfo
      .setSignerInfosList([signerInfo])
      .setFee(
        new Fee()
          .setGasLimit(100000)
          .setAmountList([new Coin().setAmount(fees? String(fees) : '0').setDenom(this.feesDenom)])
      );

      return authInfo.serializeBinary()
  }

  private async buildTx  (bodyBytes:Uint8Array) {
    const authInfoBytes = await this.setTxAuthInfo();
    const signDocBytes = this.setSignDoc(bodyBytes, authInfoBytes);

    const tx = new TxRaw()
    .setBodyBytes(bodyBytes)
    .setAuthInfoBytes(authInfoBytes)
    .setSignaturesList([signDocBytes])
    .serializeBinary();

    return  [tx, signDocBytes]
  }

  private async Simulate(tx: Uint8Array) {
    const req = new SimulateRequest().setTxBytes(tx);

    try {
      const { gasInfo } = (
        await this.txService.simulate(req, null)
      )?.toObject();
      return gasInfo?.gasUsed;
    } catch (e) {
      console.log(e, "in Simulate");
      return undefined;
    }
  }
  //'/cosmos.bank.v1beta1.MsgSend'

  private async Broadcast(signDoc: SignDoc, gas: number, bodyBytes:Uint8Array) {

    

    try {

      const account = await this.getAccount();
      this.account = {
        ...this.account,
        ...account,
      };


      return w.keplr.signDirect(this.chain, this.account.address, signDoc.toObject()).then(async (sig:any) => {

        console.log(sig)

        const authInfoBytes = await this.setTxAuthInfo(gas)

        const tx = new TxRaw()
          .setBodyBytes(bodyBytes)
          .setAuthInfoBytes(authInfoBytes)
          .setSignaturesList([sig.signature.signature])
          .serializeBinary();

          const req = new BroadcastTxRequest()
          .setTxBytes(tx)
          .setMode(BroadcastMode.BROADCAST_MODE_BLOCK);

        return await this.txService.broadcastTx(req, null);
      }).catch((err:any) => console.log(err))
      
  
    } catch (e) {
      console.log(e)
      return undefined
    }
  }

  public async mintUSC() {
    const msg = new MsgMintUSC()
    .setAddress(this.account.address)
    .setCollateralAmountList(getCoinList(1000, 'uusdt'))

    const bodyBytes = this.buildTxBody(msg, '/gaia.usc.v1beta1.MsgMintUSC', 'Mining USC tokens')

    const [tx, signDocBytes] = await this.buildTx(bodyBytes)

    const gas = await this.Simulate(tx)

    const res = await this.Broadcast(SignDoc.deserializeBinary(signDocBytes), 2500 , bodyBytes)

    console.log(res)
  }

  public async burnUSC() {
    const msg = new MsgRedeemCollateral()
    .setAddress(this.account.address)
    .setUscAmount(getCoinList(555555, "ausc")[0])

    const bodyBytes = this.buildTxBody(msg, '/gaia.usc.v1beta1.MsgRedeemCollateral', 'Burn USC tokens')

    const [tx, signDocBytes] = await this.buildTx(bodyBytes)
    
    //const gas = await this.Simulate(tx)
    
    //.console.log(gas)

    const res = await this.Broadcast(SignDoc.deserializeBinary(signDocBytes), 2500, bodyBytes)

    console.log(res)
   
  }


  public async transferCoins(toAddress:string, amount: number) {

    const msg = new MsgSend()
    .setToAddress(toAddress)
    .setAmountList(getCoinList(amount, 'stake'))
    .setFromAddress(this.account.address);

    const bodyBytes = this.buildTxBody(msg, '/cosmos.bank.v1beta1.MsgSend', `Send Coins to ${toAddress}`)
   
    const [tx, signDocBytes] = await this.buildTx(bodyBytes)


    const gas = await this.Simulate(tx)
   

    const res = await this.Broadcast(SignDoc.deserializeBinary(signDocBytes), 2500, bodyBytes)

    console.log(res)
    
  }
}

export default (chain: string, rpc: string, rest: string): KeplrClient =>
  new KeplrClient(chain, rpc, rest);

const setChain = (chain: string, rpc: string, rest: string) => ({
  chainId: chain,
  chainName: "USC_GAIA",
  rpc: `https://${rpc}`,
  rest: `http://${rest}`,
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "cosmos",
    bech32PrefixAccPub: "cosmos" + "pub",
    bech32PrefixValAddr: "cosmos" + "valoper",
    bech32PrefixValPub: "cosmos" + "valoperpub",
    bech32PrefixConsAddr: "cosmos" + "valcons",
    bech32PrefixConsPub: "cosmos" + "valconspub",
  },
  currencies: [
    {
      coinDenom: "stake",
      coinMinimalDenom: "stake",
      coinDecimals: 0,
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "uusdt",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "stake",
      coinMinimalDenom: "stake",
      coinDecimals: 0,
    },
  ],
  stakeCurrency: {
    coinDenom: "stake",
    coinMinimalDenom: "stake",
    coinDecimals: 0,
  },
  coinType: 118,
  gasPriceStep: {
    low: 0.01,
    average: 0.025,
    high: 0.03,
  },
  features: ["cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"],
});
