
import {  MsgSend}  from "./grpc/cosmos/bank/v1beta1/tx_pb" ;

import {  MsgMintUSC, MsgRedeemCollateral}  from "./grpc/gaia/usc/v1beta1/tx_pb";

import {KeplrClient} from "./services/keplrClient";

export type MsgType = MsgSend | MsgMintUSC | MsgRedeemCollateral


export interface CosmosAcc {

        address:string
        pubKey: Uint8Array
        sequence: number,
        accountNumber: number

}


export interface ServiceContainer {
    cosmos?: KeplrClient
}


export interface withServiceContainer {
    container: ServiceContainer, 
    setContainer: React.Dispatch<React.SetStateAction<ServiceContainer>>
}

export interface IBCTransfer {
    from: string,
    to: string,
    amount: string,
    denom: string,  
  }


 export interface ExchangeState {

        mintInput: string,
        minthUsingDenom: string,
        burnInput: string,
        transferFrom: string,
        transferTo: string,
        transferAmount: string,
        transferDenom: string,

 } 