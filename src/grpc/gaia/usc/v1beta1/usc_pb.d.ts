import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';


export class Params extends jspb.Message {
  getRedeemDur(): google_protobuf_duration_pb.Duration | undefined;
  setRedeemDur(value?: google_protobuf_duration_pb.Duration): Params;
  hasRedeemDur(): boolean;
  clearRedeemDur(): Params;

  getMaxRedeemEntries(): number;
  setMaxRedeemEntries(value: number): Params;

  getCollateralMetasList(): Array<TokenMeta>;
  setCollateralMetasList(value: Array<TokenMeta>): Params;
  clearCollateralMetasList(): Params;
  addCollateralMetas(value?: TokenMeta, index?: number): TokenMeta;

  getUscMeta(): TokenMeta | undefined;
  setUscMeta(value?: TokenMeta): Params;
  hasUscMeta(): boolean;
  clearUscMeta(): Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    redeemDur?: google_protobuf_duration_pb.Duration.AsObject,
    maxRedeemEntries: number,
    collateralMetasList: Array<TokenMeta.AsObject>,
    uscMeta?: TokenMeta.AsObject,
  }
}

export class TokenMeta extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): TokenMeta;

  getDecimals(): number;
  setDecimals(value: number): TokenMeta;

  getDescription(): string;
  setDescription(value: string): TokenMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenMeta.AsObject;
  static toObject(includeInstance: boolean, msg: TokenMeta): TokenMeta.AsObject;
  static serializeBinaryToWriter(message: TokenMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenMeta;
  static deserializeBinaryFromReader(message: TokenMeta, reader: jspb.BinaryReader): TokenMeta;
}

export namespace TokenMeta {
  export type AsObject = {
    denom: string,
    decimals: number,
    description: string,
  }
}

export class RedeemEntry extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): RedeemEntry;

  getOperationsList(): Array<RedeemEntryOperation>;
  setOperationsList(value: Array<RedeemEntryOperation>): RedeemEntry;
  clearOperationsList(): RedeemEntry;
  addOperations(value?: RedeemEntryOperation, index?: number): RedeemEntryOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedeemEntry.AsObject;
  static toObject(includeInstance: boolean, msg: RedeemEntry): RedeemEntry.AsObject;
  static serializeBinaryToWriter(message: RedeemEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedeemEntry;
  static deserializeBinaryFromReader(message: RedeemEntry, reader: jspb.BinaryReader): RedeemEntry;
}

export namespace RedeemEntry {
  export type AsObject = {
    address: string,
    operationsList: Array<RedeemEntryOperation.AsObject>,
  }
}

export class RedeemEntryOperation extends jspb.Message {
  getCreationHeight(): number;
  setCreationHeight(value: number): RedeemEntryOperation;

  getCompletionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletionTime(value?: google_protobuf_timestamp_pb.Timestamp): RedeemEntryOperation;
  hasCompletionTime(): boolean;
  clearCompletionTime(): RedeemEntryOperation;

  getCollateralAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setCollateralAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): RedeemEntryOperation;
  clearCollateralAmountList(): RedeemEntryOperation;
  addCollateralAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedeemEntryOperation.AsObject;
  static toObject(includeInstance: boolean, msg: RedeemEntryOperation): RedeemEntryOperation.AsObject;
  static serializeBinaryToWriter(message: RedeemEntryOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedeemEntryOperation;
  static deserializeBinaryFromReader(message: RedeemEntryOperation, reader: jspb.BinaryReader): RedeemEntryOperation;
}

export namespace RedeemEntryOperation {
  export type AsObject = {
    creationHeight: number,
    completionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    collateralAmountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class RedeemingQueueData extends jspb.Message {
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): RedeemingQueueData;
  clearAddressesList(): RedeemingQueueData;
  addAddresses(value: string, index?: number): RedeemingQueueData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedeemingQueueData.AsObject;
  static toObject(includeInstance: boolean, msg: RedeemingQueueData): RedeemingQueueData.AsObject;
  static serializeBinaryToWriter(message: RedeemingQueueData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedeemingQueueData;
  static deserializeBinaryFromReader(message: RedeemingQueueData, reader: jspb.BinaryReader): RedeemingQueueData;
}

export namespace RedeemingQueueData {
  export type AsObject = {
    addressesList: Array<string>,
  }
}

