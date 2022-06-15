import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';
import * as gaia_usc_v1beta1_usc_pb from '../../../gaia/usc/v1beta1/usc_pb';


export class QueryPoolRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPoolRequest): QueryPoolRequest.AsObject;
  static serializeBinaryToWriter(message: QueryPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPoolRequest;
  static deserializeBinaryFromReader(message: QueryPoolRequest, reader: jspb.BinaryReader): QueryPoolRequest;
}

export namespace QueryPoolRequest {
  export type AsObject = {
  }
}

export class QueryPoolResponse extends jspb.Message {
  getActivePoolList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setActivePoolList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): QueryPoolResponse;
  clearActivePoolList(): QueryPoolResponse;
  addActivePool(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getRedeemingPoolList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setRedeemingPoolList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): QueryPoolResponse;
  clearRedeemingPoolList(): QueryPoolResponse;
  addRedeemingPool(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPoolResponse): QueryPoolResponse.AsObject;
  static serializeBinaryToWriter(message: QueryPoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPoolResponse;
  static deserializeBinaryFromReader(message: QueryPoolResponse, reader: jspb.BinaryReader): QueryPoolResponse;
}

export namespace QueryPoolResponse {
  export type AsObject = {
    activePoolList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    redeemingPoolList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class QueryParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
  static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
  export type AsObject = {
  }
}

export class QueryParamsResponse extends jspb.Message {
  getParams(): gaia_usc_v1beta1_usc_pb.Params | undefined;
  setParams(value?: gaia_usc_v1beta1_usc_pb.Params): QueryParamsResponse;
  hasParams(): boolean;
  clearParams(): QueryParamsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
  static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
  export type AsObject = {
    params?: gaia_usc_v1beta1_usc_pb.Params.AsObject,
  }
}

export class QueryRedeemEntryRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): QueryRedeemEntryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRedeemEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRedeemEntryRequest): QueryRedeemEntryRequest.AsObject;
  static serializeBinaryToWriter(message: QueryRedeemEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRedeemEntryRequest;
  static deserializeBinaryFromReader(message: QueryRedeemEntryRequest, reader: jspb.BinaryReader): QueryRedeemEntryRequest;
}

export namespace QueryRedeemEntryRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueryRedeemEntryResponse extends jspb.Message {
  getEntry(): gaia_usc_v1beta1_usc_pb.RedeemEntry | undefined;
  setEntry(value?: gaia_usc_v1beta1_usc_pb.RedeemEntry): QueryRedeemEntryResponse;
  hasEntry(): boolean;
  clearEntry(): QueryRedeemEntryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRedeemEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRedeemEntryResponse): QueryRedeemEntryResponse.AsObject;
  static serializeBinaryToWriter(message: QueryRedeemEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRedeemEntryResponse;
  static deserializeBinaryFromReader(message: QueryRedeemEntryResponse, reader: jspb.BinaryReader): QueryRedeemEntryResponse;
}

export namespace QueryRedeemEntryResponse {
  export type AsObject = {
    entry?: gaia_usc_v1beta1_usc_pb.RedeemEntry.AsObject,
  }
}

