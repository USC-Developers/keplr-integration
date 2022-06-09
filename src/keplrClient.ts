

import {
  SigningStargateClient,
  coin,

} from "@cosmjs/stargate";

import Long from 'long'
import { encodeSecp256k1Pubkey, makeSignDoc as makeSignDocAmino,  } from "@cosmjs/amino";


import { QueryClient as BaknQuery } from "./grpc/cosmos/bank/v1beta1/QueryServiceClientPb" ;
//import {  QueryDenomMetadataRequest, QueryDenomsMetadataRequest, QueryBalanceRequest}  from "./cosmosProtoTypes/cosmos/bank/v1beta1/query_pb" ;
import {   QueryAllBalancesRequest}  from "./grpc/cosmos/bank/v1beta1/query_pb" ;
import {   MsgClient as TxBankClien}  from "./grpc/cosmos/bank/v1beta1/TxServiceClientPb" ;
import {  MsgSend}  from "./grpc/cosmos/bank/v1beta1/tx_pb" ;
import { SignMode } from "./grpc/cosmos/tx/signing/v1beta1/signing_pb";
import { Any } from "./grpc/google/protobuf/any_pb";

import {  ServiceClient  }  from "./grpc/cosmos/tx/v1beta1/ServiceServiceClientPb" 
import { TxBody, Tx, TxRaw, Fee, AuthInfo, SignerInfo, ModeInfo } from './grpc/cosmos/tx/v1beta1/tx_pb'
import { Coin } from './grpc/cosmos/base/v1beta1/coin_pb'

import { SimulateRequest, BroadcastTxRequest } from "./grpc/cosmos/tx/v1beta1/service_pb";



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
  rest: string
  proxy = 'http://localhost:8080'


  constructor(chain: string, rpc: string, rest:string) {

    this.chain = chain
    this.rpc = rpc
    this.rest = rest
    
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
      amount: [coin(1, "stake")],
    } , memo) 


     console.log(res);

    }
  }


  public async getTrx(hash:string) {
    return await this.stargate?.getTx(hash);
  }


  public async simulateCustomMsg() {

    //const acc = (await this.signer.getAccounts());
    

    const coin = new Coin()

    coin.setAmount('1')
    coin.setDenom('stake')


    const msg = new MsgSend().setFromAddress(this.account).setToAddress('cosmos15zwjg6q62lcejtz4fauq5ltm0zlrwam8003lyz').setAmountList([coin])
    const msgBytes = msg.serializeBinary();

    const wrappedMsg = new Any().setTypeUrl('/cosmos.bank.v1beta1.Msg').setValue(Uint8Array.from(msgBytes));

    const txBody = new TxBody().setMessagesList(Array.from([wrappedMsg])).setMemo("Some memo")//.setTimeoutHeight(9999).setExtensionOptionsList([]);
    
    const txBodyBytes = txBody.serializeBinary();


    /*const signer = new SignerInfo().setSequence(0).setModeInfo(new ModeInfo().setSingle(new ModeInfo.Single().setMode(SignMode.SIGN_MODE_DIRECT)));//.setPublicKey(acc[0].pubkey)
    console.log('bigot');*/

    const tx = new Tx().setBody(txBody)//.setAuthInfo(new AuthInfo().setFee(new Fee()).setSignerInfosList([
    //  signer
   // ]))
    const rawTx = new TxRaw().setBodyBytes(txBodyBytes).serializeBinary()
    

    const client = new ServiceClient(this.proxy);


    const req = new SimulateRequest().setTx(tx).setTxBytes(rawTx)
    console.log(req);
   
    client.simulate(req, null, (err, res) => {
      console.log(err);
      console.log(res);
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


