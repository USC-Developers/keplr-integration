import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';


export class MsgCreateVestingAccount extends jspb.Message {
  getFromAddress(): string;
  setFromAddress(value: string): MsgCreateVestingAccount;

  getToAddress(): string;
  setToAddress(value: string): MsgCreateVestingAccount;

  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgCreateVestingAccount;
  clearAmountList(): MsgCreateVestingAccount;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getEndTime(): number;
  setEndTime(value: number): MsgCreateVestingAccount;

  getDelayed(): boolean;
  setDelayed(value: boolean): MsgCreateVestingAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateVestingAccount): MsgCreateVestingAccount.AsObject;
  static serializeBinaryToWriter(message: MsgCreateVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateVestingAccount;
  static deserializeBinaryFromReader(message: MsgCreateVestingAccount, reader: jspb.BinaryReader): MsgCreateVestingAccount;
}

export namespace MsgCreateVestingAccount {
  export type AsObject = {
    fromAddress: string,
    toAddress: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    endTime: number,
    delayed: boolean,
  }
}

export class MsgCreateVestingAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateVestingAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponse.AsObject;
  static serializeBinaryToWriter(message: MsgCreateVestingAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateVestingAccountResponse;
  static deserializeBinaryFromReader(message: MsgCreateVestingAccountResponse, reader: jspb.BinaryReader): MsgCreateVestingAccountResponse;
}

export namespace MsgCreateVestingAccountResponse {
  export type AsObject = {
  }
}

