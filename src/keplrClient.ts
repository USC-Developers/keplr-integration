

import {
  SigningStargateClient,SearchByHeightQuery
    
} from "@cosmjs/stargate";

import {

  encodePubkey,

} from "@cosmjs/proto-signing";

import {

  coin as coinInstance,
} from "@cosmjs/launchpad";


import {
  encodeSecp256k1Pubkey,

} from "@cosmjs/amino";
import { BaseAccount, ModuleAccount } from "./grpc/cosmos/auth/v1beta1/auth_pb"
import Long from 'long'
import { fromBase64  } from "@cosmjs/encoding";

import { Secp256k1 } from "@cosmjs/crypto";
import { QueryClient as BaknQuery } from "./grpc/cosmos/bank/v1beta1/QueryServiceClientPb" ;
//import {  QueryDenomMetadataRequest, QueryDenomsMetadataRequest, QueryBalanceRequest}  from "./cosmosProtoTypes/cosmos/bank/v1beta1/query_pb" ;
import {   QueryAllBalancesRequest}  from "./grpc/cosmos/bank/v1beta1/query_pb" ;
import {   MsgClient as TxBankClien}  from "./grpc/cosmos/bank/v1beta1/TxServiceClientPb" ;
import {  MsgSend}  from "./grpc/cosmos/bank/v1beta1/tx_pb" ;
import {  MsgMintUSC}  from "./grpc/gaia/usc/v1beta1/tx_pb";
//import {  }  from "./grpc/gaia/usc/v1beta1/TxServiceClientPb";
import { SignMode } from "./grpc/cosmos/tx/signing/v1beta1/signing_pb";
import { Any } from "./grpc/google/protobuf/any_pb";
import { PubKey } from "./grpc/cosmos/crypto/secp256k1/keys_pb";
import {  ServiceClient  }  from "./grpc/cosmos/tx/v1beta1/ServiceServiceClientPb" 
import { TxBody, Tx, TxRaw, Fee, AuthInfo, SignerInfo, ModeInfo, SignDoc } from './grpc/cosmos/tx/v1beta1/tx_pb'
import { Coin } from './grpc/cosmos/base/v1beta1/coin_pb'

import { SimulateRequest, BroadcastTxRequest, BroadcastMode} from "./grpc/cosmos/tx/v1beta1/service_pb";
import { QueryAccountRequest} from "./grpc/cosmos/auth/v1beta1/query_pb";

import { QueryClient as AuthClient} from "./grpc/cosmos/auth/v1beta1/QueryServiceClientPb";

import {getCoinList} from './helpers'
import {MsgType} from './global'

interface OfflineSigner {
  chainId?: string;
  getAccounts(): string[];
}

const w: any = window;

class KeplrClient {
  signer: any;
  account: string = "";
  stargate: SigningStargateClient | undefined;

  chain:string = ''
  rpc: string = ''
  rest: string = ''
  proxy = 'http://localhost:8080'
  txService: ServiceClient 


  constructor(chain: string, rpc: string, rest:string) {

    this.chain = chain
    this.rpc = rpc
    this.rest = rest
    this.txService = new ServiceClient(this.proxy)
    return this
 
    
  }

  public async connect() {
    try {

      try {
        await w.keplr.enable(this.chain)
    
      } catch (e) {
        await w.keplr.experimentalSuggestChain(setChain(this.chain, this.rpc, this.rest));
        await w.keplr.enable(this.chain)
      }

      

      this.signer = w.getOfflineSigner(this.chain);

      this.account = (await this.signer?.getAccounts())[0].address;

      console.log(this.account);

      this.stargate = await SigningStargateClient.connectWithSigner(
        this.rpc,
        this.signer!
       // {
          // gasPrice: GasPrice.fromString(`0.1uosmo`),
        //}
      );


      return this
    } catch (e) {
      throw e;
    }
  }

  public async getBalance() {
    const client = new BaknQuery(this.proxy)

    const req = new QueryAllBalancesRequest().setAddress(this.account);

    client.allBalances(req, {}, (err, res) => {
      console.log(err);
      console.log(res);
    })


  }

  public async sendWithCosmo(
    msg: any[],
    memo: string
  ) {
   
    if (this.stargate) {

     const gas = await this.stargate.simulate(this.account, msg, memo)

     console.log(gas);

     const res = await this.stargate.signAndBroadcast(this.account, msg, {
      gas: (gas * 1.4).toFixed(0),
      amount: [coinInstance(1, "stake")],
    } , memo) 


     console.log(res);

    }
  }


  public async getTrx(hash:string) {
    return await this.stargate?.getTx(hash);
  }

  private async getAccount() {
    const client = new AuthClient(this.proxy)
    const req = new QueryAccountRequest().setAddress(this.account)

    try {
      const res = await client.account(req, null)
     
      const {accountNumber, sequence} = BaseAccount.deserializeBinary(res.toObject()?.account.value).toObject()

      return {accountNumber, sequence}
    } catch (e) {
      console.log(e)
      return null
    }
  }

  private buildTxBody(msg:MsgType, typeUrl: string, memo: string) {
   
    const wrappedMsg = new Any().setTypeUrl(typeUrl).setValue(msg.serializeBinary())
    const txBody = new TxBody().setMessagesList([wrappedMsg]).setTimeoutHeight(0).setExtensionOptionsList([]).setMemo(memo)
    
    return txBody.serializeBinary();
  }

  private async setPubKey() {
    try {
      const key = await this.signer.keplr.getKey(this.chain)
    } catch (e) {
      
    }
 
  }

  private setTxAuthInfo() {
    const pubKeyAny = new Any();


  }


  private async Simulate(tx: Uint8Array) {
    const req = new SimulateRequest().setTxBytes(tx)
   
    try {
      const {gasInfo} = (await this.txService.simulate(req ,null))?.toObject()
      return gasInfo?.gasUsed
    } catch (e) {
        console.log(e, 'in Simulate')
        return null
    }

  }
//'/cosmos.bank.v1beta1.MsgSend'

  

  private async Broadcast(tx: Uint8Array, gas: number) {
    const req = new BroadcastTxRequest().setTxBytes(tx).setMode(BroadcastMode.BROADCAST_MODE_BLOCK)

    try {
      const res = await this.txService.broadcastTx(req, null)
    } catch (e) {

    }
  }


  public async mintUSC() {

  }



  public async transferCoins() {

    const client = new ServiceClient(this.proxy);
    const key = await this.signer.keplr.getKey(this.chain)
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(key.pubKey));
   


    

    const coin = new Coin()

    coin.setAmount('1')
    coin.setDenom('stake')

   
    //const msg = new MsgSend().setAddress('cosmos15zwjg6q62lcejtz4fauq5ltm0zlrwam8003lyz').setCollateralAmountList([coin])
    const msg = new MsgSend().setToAddress('cosmos15zwjg6q62lcejtz4fauq5ltm0zlrwam8003lyz').setAmountList([coin]).setFromAddress(this.account)

    const wrappedMsg = new Any().setTypeUrl('/cosmos.bank.v1beta1.MsgSend').setValue(msg.serializeBinary())

    const txBody = new TxBody().setMessagesList([wrappedMsg]).setTimeoutHeight(0).setExtensionOptionsList([]).setMemo('test MEMO')
    

    const bodyBytes  = txBody.serializeBinary();


   const pubKeyAny = new Any();



    pubKeyAny.setTypeUrl('/cosmos.crypto.secp256k1.PubKey');
    pubKeyAny.setValue(pubkey.value);

   const authInfo = new AuthInfo();


   const signerInfo = new SignerInfo();
   const modeInfo = new ModeInfo();
   const singleModeInfo = new ModeInfo.Single();
   singleModeInfo.setMode(SignMode.SIGN_MODE_DIRECT);
   modeInfo.setSingle(singleModeInfo);


   signerInfo.setPublicKey(pubKeyAny);
   signerInfo.setModeInfo(modeInfo);

   signerInfo.setSequence(3);



   authInfo.setSignerInfosList([signerInfo]).setFee(new Fee().setGasLimit(100000).setAmountList([new Coin().setAmount('2500').setDenom('stake')]));
   const authInfoBytes = authInfo.serializeBinary();



   const signDoc = new SignDoc();
   signDoc.setBodyBytes(bodyBytes);
   signDoc.setAuthInfoBytes(authInfoBytes);
   signDoc.setChainId(this.chain);
   signDoc.setAccountNumber(8);


   const signMessage = signDoc.serializeBinary();

  
   //console.log(await w.keplr.getKey(this.chain))

   //console.log(await w.keplr.getKey(this.chain))
   const tx = new TxRaw().setBodyBytes(bodyBytes).setAuthInfoBytes(authInfoBytes).setSignaturesList([signMessage]).serializeBinary()//.setSignaturesList([signature.signature.signature]).serializeBinary()
    const sim = new SimulateRequest().setTxBytes(tx)

   const {gasInfo} = (await client.simulate(sim,null))?.toObject()

   authInfo.setFee(new Fee().setGasLimit(100000).setAmountList([new Coin().setAmount(String(gasInfo?.gasUsed || 10000 /10 * 1.3)).setDenom('stake')]))



   w.keplr.signDirect(this.chain, this.account, signDoc.toObject()).then(async (signature:any) => {

    const tx = new TxRaw().setBodyBytes(signature.signed.bodyBytes).setAuthInfoBytes(signature.signed.authInfoBytes).setSignaturesList([signature.signature.signature]).serializeBinary()

    console.log(signature, 'sig')
    const req = new BroadcastTxRequest().setTxBytes(tx).setMode(BroadcastMode.BROADCAST_MODE_BLOCK)
     console.log('kara')



   client.broadcastTx(req, null, async (err, res:any) => {
      console.log(err);
     
      console.log(res)
     // const tx = await this.stargate?.getTx(res.array[1])
      //console.log(tx)
    })
      
   }).catch((err:any) => {
     console.log(err)
   })



    
  }


}

export default (chain: string, rpc: string, rest: string): KeplrClient => new KeplrClient(chain, rpc, rest)
  


const setChain = (chain:string, rpc:string, rest:string) => ({
  chainId: chain,
  chainName: "USC_GAIA",
  rpc: `https://${rpc}`,
  rest: `http://${rest}`,
  bip44: {
      coinType: 118,
  },
  bech32Config: {
      bech32PrefixAccAddr: "cosmos",
      bech32PrefixAccPub: "cosmos"   + "pub",
      bech32PrefixValAddr: "cosmos"  + "valoper",
      bech32PrefixValPub: "cosmos"   + "valoperpub",
      bech32PrefixConsAddr: "cosmos" + "valcons",
      bech32PrefixConsPub: "cosmos"  + "valconspub",
  },
  currencies: [ 
    {
      coinDenom: "stake",
      coinMinimalDenom: "stake",
      coinDecimals: 0
    },
    {
      coinDenom: "usdt",
      coinMinimalDenom: "uusdt",
      coinDecimals: 6
    }
  ],
  feeCurrencies: [
    {
      coinDenom: "stake",
      coinMinimalDenom: "stake",
      coinDecimals: 0
    }
  ],
  stakeCurrency: {
    coinDenom: "stake",
    coinMinimalDenom: "stake",
    coinDecimals: 0
  },
  coinType: 118,
  gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.03,
  },
  features: [ 
    "cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"
],
})


