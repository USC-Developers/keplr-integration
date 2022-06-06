import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as cosmos_vesting_v1beta1_vesting_pb from '../../../cosmos/vesting/v1beta1/vesting_pb';
import * as cosmos_msg_v1_msg_pb from '../../../cosmos/msg/v1/msg_pb';


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

export class MsgCreatePermanentLockedAccount extends jspb.Message {
  getFromAddress(): string;
  setFromAddress(value: string): MsgCreatePermanentLockedAccount;

  getToAddress(): string;
  setToAddress(value: string): MsgCreatePermanentLockedAccount;

  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgCreatePermanentLockedAccount;
  clearAmountList(): MsgCreatePermanentLockedAccount;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreatePermanentLockedAccount.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccount.AsObject;
  static serializeBinaryToWriter(message: MsgCreatePermanentLockedAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreatePermanentLockedAccount;
  static deserializeBinaryFromReader(message: MsgCreatePermanentLockedAccount, reader: jspb.BinaryReader): MsgCreatePermanentLockedAccount;
}

export namespace MsgCreatePermanentLockedAccount {
  export type AsObject = {
    fromAddress: string,
    toAddress: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class MsgCreatePermanentLockedAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreatePermanentLockedAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponse.AsObject;
  static serializeBinaryToWriter(message: MsgCreatePermanentLockedAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreatePermanentLockedAccountResponse;
  static deserializeBinaryFromReader(message: MsgCreatePermanentLockedAccountResponse, reader: jspb.BinaryReader): MsgCreatePermanentLockedAccountResponse;
}

export namespace MsgCreatePermanentLockedAccountResponse {
  export type AsObject = {
  }
}

export class MsgCreatePeriodicVestingAccount extends jspb.Message {
  getFromAddress(): string;
  setFromAddress(value: string): MsgCreatePeriodicVestingAccount;

  getToAddress(): string;
  setToAddress(value: string): MsgCreatePeriodicVestingAccount;

  getStartTime(): number;
  setStartTime(value: number): MsgCreatePeriodicVestingAccount;

  getVestingPeriodsList(): Array<cosmos_vesting_v1beta1_vesting_pb.Period>;
  setVestingPeriodsList(value: Array<cosmos_vesting_v1beta1_vesting_pb.Period>): MsgCreatePeriodicVestingAccount;
  clearVestingPeriodsList(): MsgCreatePeriodicVestingAccount;
  addVestingPeriods(value?: cosmos_vesting_v1beta1_vesting_pb.Period, index?: number): cosmos_vesting_v1beta1_vesting_pb.Period;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreatePeriodicVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccount.AsObject;
  static serializeBinaryToWriter(message: MsgCreatePeriodicVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreatePeriodicVestingAccount;
  static deserializeBinaryFromReader(message: MsgCreatePeriodicVestingAccount, reader: jspb.BinaryReader): MsgCreatePeriodicVestingAccount;
}

export namespace MsgCreatePeriodicVestingAccount {
  export type AsObject = {
    fromAddress: string,
    toAddress: string,
    startTime: number,
    vestingPeriodsList: Array<cosmos_vesting_v1beta1_vesting_pb.Period.AsObject>,
  }
}

export class MsgCreatePeriodicVestingAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreatePeriodicVestingAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponse.AsObject;
  static serializeBinaryToWriter(message: MsgCreatePeriodicVestingAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreatePeriodicVestingAccountResponse;
  static deserializeBinaryFromReader(message: MsgCreatePeriodicVestingAccountResponse, reader: jspb.BinaryReader): MsgCreatePeriodicVestingAccountResponse;
}

export namespace MsgCreatePeriodicVestingAccountResponse {
  export type AsObject = {
  }
}

