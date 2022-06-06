import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class BasicAllowance extends jspb.Message {
  getSpendLimitList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setSpendLimitList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): BasicAllowance;
  clearSpendLimitList(): BasicAllowance;
  addSpendLimit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): BasicAllowance;
  hasExpiration(): boolean;
  clearExpiration(): BasicAllowance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: BasicAllowance): BasicAllowance.AsObject;
  static serializeBinaryToWriter(message: BasicAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicAllowance;
  static deserializeBinaryFromReader(message: BasicAllowance, reader: jspb.BinaryReader): BasicAllowance;
}

export namespace BasicAllowance {
  export type AsObject = {
    spendLimitList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PeriodicAllowance extends jspb.Message {
  getBasic(): BasicAllowance | undefined;
  setBasic(value?: BasicAllowance): PeriodicAllowance;
  hasBasic(): boolean;
  clearBasic(): PeriodicAllowance;

  getPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setPeriod(value?: google_protobuf_duration_pb.Duration): PeriodicAllowance;
  hasPeriod(): boolean;
  clearPeriod(): PeriodicAllowance;

  getPeriodSpendLimitList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setPeriodSpendLimitList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): PeriodicAllowance;
  clearPeriodSpendLimitList(): PeriodicAllowance;
  addPeriodSpendLimit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getPeriodCanSpendList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setPeriodCanSpendList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): PeriodicAllowance;
  clearPeriodCanSpendList(): PeriodicAllowance;
  addPeriodCanSpend(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getPeriodReset(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPeriodReset(value?: google_protobuf_timestamp_pb.Timestamp): PeriodicAllowance;
  hasPeriodReset(): boolean;
  clearPeriodReset(): PeriodicAllowance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeriodicAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: PeriodicAllowance): PeriodicAllowance.AsObject;
  static serializeBinaryToWriter(message: PeriodicAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeriodicAllowance;
  static deserializeBinaryFromReader(message: PeriodicAllowance, reader: jspb.BinaryReader): PeriodicAllowance;
}

export namespace PeriodicAllowance {
  export type AsObject = {
    basic?: BasicAllowance.AsObject,
    period?: google_protobuf_duration_pb.Duration.AsObject,
    periodSpendLimitList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    periodCanSpendList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    periodReset?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AllowedMsgAllowance extends jspb.Message {
  getAllowance(): google_protobuf_any_pb.Any | undefined;
  setAllowance(value?: google_protobuf_any_pb.Any): AllowedMsgAllowance;
  hasAllowance(): boolean;
  clearAllowance(): AllowedMsgAllowance;

  getAllowedMessagesList(): Array<string>;
  setAllowedMessagesList(value: Array<string>): AllowedMsgAllowance;
  clearAllowedMessagesList(): AllowedMsgAllowance;
  addAllowedMessages(value: string, index?: number): AllowedMsgAllowance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowedMsgAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: AllowedMsgAllowance): AllowedMsgAllowance.AsObject;
  static serializeBinaryToWriter(message: AllowedMsgAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowedMsgAllowance;
  static deserializeBinaryFromReader(message: AllowedMsgAllowance, reader: jspb.BinaryReader): AllowedMsgAllowance;
}

export namespace AllowedMsgAllowance {
  export type AsObject = {
    allowance?: google_protobuf_any_pb.Any.AsObject,
    allowedMessagesList: Array<string>,
  }
}

export class Grant extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): Grant;

  getGrantee(): string;
  setGrantee(value: string): Grant;

  getAllowance(): google_protobuf_any_pb.Any | undefined;
  setAllowance(value?: google_protobuf_any_pb.Any): Grant;
  hasAllowance(): boolean;
  clearAllowance(): Grant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Grant.AsObject;
  static toObject(includeInstance: boolean, msg: Grant): Grant.AsObject;
  static serializeBinaryToWriter(message: Grant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Grant;
  static deserializeBinaryFromReader(message: Grant, reader: jspb.BinaryReader): Grant;
}

export namespace Grant {
  export type AsObject = {
    granter: string,
    grantee: string,
    allowance?: google_protobuf_any_pb.Any.AsObject,
  }
}

