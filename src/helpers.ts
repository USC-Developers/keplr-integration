import { Coin } from './grpc/cosmos/base/v1beta1/coin_pb'


export const getCoinList = (amount: number, denom:string) => [new Coin().setAmount(String(amount)).setDenom(denom)]