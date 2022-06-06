import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';
import * as cosmos_auth_v1beta1_auth_pb from '../../../cosmos/auth/v1beta1/auth_pb';


export class BaseVestingAccount extends jspb.Message {
  getBaseAccount(): cosmos_auth_v1beta1_auth_pb.BaseAccount | undefined;
  setBaseAccount(value?: cosmos_auth_v1beta1_auth_pb.BaseAccount): BaseVestingAccount;
  hasBaseAccount(): boolean;
  clearBaseAccount(): BaseVestingAccount;

  getOriginalVestingList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setOriginalVestingList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): BaseVestingAccount;
  clearOriginalVestingList(): BaseVestingAccount;
  addOriginalVesting(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getDelegatedFreeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setDelegatedFreeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): BaseVestingAccount;
  clearDelegatedFreeList(): BaseVestingAccount;
  addDelegatedFree(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getDelegatedVestingList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setDelegatedVestingList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): BaseVestingAccount;
  clearDelegatedVestingList(): BaseVestingAccount;
  addDelegatedVesting(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getEndTime(): number;
  setEndTime(value: number): BaseVestingAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: BaseVestingAccount): BaseVestingAccount.AsObject;
  static serializeBinaryToWriter(message: BaseVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseVestingAccount;
  static deserializeBinaryFromReader(message: BaseVestingAccount, reader: jspb.BinaryReader): BaseVestingAccount;
}

export namespace BaseVestingAccount {
  export type AsObject = {
    baseAccount?: cosmos_auth_v1beta1_auth_pb.BaseAccount.AsObject,
    originalVestingList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    delegatedFreeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    delegatedVestingList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    endTime: number,
  }
}

export class ContinuousVestingAccount extends jspb.Message {
  getBaseVestingAccount(): BaseVestingAccount | undefined;
  setBaseVestingAccount(value?: BaseVestingAccount): ContinuousVestingAccount;
  hasBaseVestingAccount(): boolean;
  clearBaseVestingAccount(): ContinuousVestingAccount;

  getStartTime(): number;
  setStartTime(value: number): ContinuousVestingAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContinuousVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ContinuousVestingAccount): ContinuousVestingAccount.AsObject;
  static serializeBinaryToWriter(message: ContinuousVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContinuousVestingAccount;
  static deserializeBinaryFromReader(message: ContinuousVestingAccount, reader: jspb.BinaryReader): ContinuousVestingAccount;
}

export namespace ContinuousVestingAccount {
  export type AsObject = {
    baseVestingAccount?: BaseVestingAccount.AsObject,
    startTime: number,
  }
}

export class DelayedVestingAccount extends jspb.Message {
  getBaseVestingAccount(): BaseVestingAccount | undefined;
  setBaseVestingAccount(value?: BaseVestingAccount): DelayedVestingAccount;
  hasBaseVestingAccount(): boolean;
  clearBaseVestingAccount(): DelayedVestingAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelayedVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: DelayedVestingAccount): DelayedVestingAccount.AsObject;
  static serializeBinaryToWriter(message: DelayedVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelayedVestingAccount;
  static deserializeBinaryFromReader(message: DelayedVestingAccount, reader: jspb.BinaryReader): DelayedVestingAccount;
}

export namespace DelayedVestingAccount {
  export type AsObject = {
    baseVestingAccount?: BaseVestingAccount.AsObject,
  }
}

export class Period extends jspb.Message {
  getLength(): number;
  setLength(value: number): Period;

  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): Period;
  clearAmountList(): Period;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Period.AsObject;
  static toObject(includeInstance: boolean, msg: Period): Period.AsObject;
  static serializeBinaryToWriter(message: Period, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Period;
  static deserializeBinaryFromReader(message: Period, reader: jspb.BinaryReader): Period;
}

export namespace Period {
  export type AsObject = {
    length: number,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class PeriodicVestingAccount extends jspb.Message {
  getBaseVestingAccount(): BaseVestingAccount | undefined;
  setBaseVestingAccount(value?: BaseVestingAccount): PeriodicVestingAccount;
  hasBaseVestingAccount(): boolean;
  clearBaseVestingAccount(): PeriodicVestingAccount;

  getStartTime(): number;
  setStartTime(value: number): PeriodicVestingAccount;

  getVestingPeriodsList(): Array<Period>;
  setVestingPeriodsList(value: Array<Period>): PeriodicVestingAccount;
  clearVestingPeriodsList(): PeriodicVestingAccount;
  addVestingPeriods(value?: Period, index?: number): Period;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeriodicVestingAccount.AsObject;
  static toObject(includeInstance: boolean, msg: PeriodicVestingAccount): PeriodicVestingAccount.AsObject;
  static serializeBinaryToWriter(message: PeriodicVestingAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeriodicVestingAccount;
  static deserializeBinaryFromReader(message: PeriodicVestingAccount, reader: jspb.BinaryReader): PeriodicVestingAccount;
}

export namespace PeriodicVestingAccount {
  export type AsObject = {
    baseVestingAccount?: BaseVestingAccount.AsObject,
    startTime: number,
    vestingPeriodsList: Array<Period.AsObject>,
  }
}

export class PermanentLockedAccount extends jspb.Message {
  getBaseVestingAccount(): BaseVestingAccount | undefined;
  setBaseVestingAccount(value?: BaseVestingAccount): PermanentLockedAccount;
  hasBaseVestingAccount(): boolean;
  clearBaseVestingAccount(): PermanentLockedAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermanentLockedAccount.AsObject;
  static toObject(includeInstance: boolean, msg: PermanentLockedAccount): PermanentLockedAccount.AsObject;
  static serializeBinaryToWriter(message: PermanentLockedAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermanentLockedAccount;
  static deserializeBinaryFromReader(message: PermanentLockedAccount, reader: jspb.BinaryReader): PermanentLockedAccount;
}

export namespace PermanentLockedAccount {
  export type AsObject = {
    baseVestingAccount?: BaseVestingAccount.AsObject,
  }
}

