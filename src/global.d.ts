
import {  MsgSend}  from "./grpc/cosmos/bank/v1beta1/tx_pb" ;

import {  MsgMintUSC, MsgRedeemCollateral}  from "./grpc/gaia/usc/v1beta1/tx_pb";
export type MsgType = MsgSend | MsgMintUSC | MsgRedeemCollateral