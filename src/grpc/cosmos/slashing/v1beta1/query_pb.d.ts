import * as jspb from 'google-protobuf'

import * as cosmos_base_query_v1beta1_pagination_pb from '../../../cosmos/base/query/v1beta1/pagination_pb';
import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as cosmos_slashing_v1beta1_slashing_pb from '../../../cosmos/slashing/v1beta1/slashing_pb';


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
  getParams(): cosmos_slashing_v1beta1_slashing_pb.Params | undefined;
  setParams(value?: cosmos_slashing_v1beta1_slashing_pb.Params): QueryParamsResponse;
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
    params?: cosmos_slashing_v1beta1_slashing_pb.Params.AsObject,
  }
}

export class QuerySigningInfoRequest extends jspb.Message {
  getConsAddress(): string;
  setConsAddress(value: string): QuerySigningInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySigningInfoRequest): QuerySigningInfoRequest.AsObject;
  static serializeBinaryToWriter(message: QuerySigningInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningInfoRequest;
  static deserializeBinaryFromReader(message: QuerySigningInfoRequest, reader: jspb.BinaryReader): QuerySigningInfoRequest;
}

export namespace QuerySigningInfoRequest {
  export type AsObject = {
    consAddress: string,
  }
}

export class QuerySigningInfoResponse extends jspb.Message {
  getValSigningInfo(): cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo | undefined;
  setValSigningInfo(value?: cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo): QuerySigningInfoResponse;
  hasValSigningInfo(): boolean;
  clearValSigningInfo(): QuerySigningInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySigningInfoResponse): QuerySigningInfoResponse.AsObject;
  static serializeBinaryToWriter(message: QuerySigningInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningInfoResponse;
  static deserializeBinaryFromReader(message: QuerySigningInfoResponse, reader: jspb.BinaryReader): QuerySigningInfoResponse;
}

export namespace QuerySigningInfoResponse {
  export type AsObject = {
    valSigningInfo?: cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.AsObject,
  }
}

export class QuerySigningInfosRequest extends jspb.Message {
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QuerySigningInfosRequest;
  hasPagination(): boolean;
  clearPagination(): QuerySigningInfosRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningInfosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySigningInfosRequest): QuerySigningInfosRequest.AsObject;
  static serializeBinaryToWriter(message: QuerySigningInfosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningInfosRequest;
  static deserializeBinaryFromReader(message: QuerySigningInfosRequest, reader: jspb.BinaryReader): QuerySigningInfosRequest;
}

export namespace QuerySigningInfosRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QuerySigningInfosResponse extends jspb.Message {
  getInfoList(): Array<cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo>;
  setInfoList(value: Array<cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo>): QuerySigningInfosResponse;
  clearInfoList(): QuerySigningInfosResponse;
  addInfo(value?: cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo, index?: number): cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QuerySigningInfosResponse;
  hasPagination(): boolean;
  clearPagination(): QuerySigningInfosResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySigningInfosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySigningInfosResponse): QuerySigningInfosResponse.AsObject;
  static serializeBinaryToWriter(message: QuerySigningInfosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySigningInfosResponse;
  static deserializeBinaryFromReader(message: QuerySigningInfosResponse, reader: jspb.BinaryReader): QuerySigningInfosResponse;
}

export namespace QuerySigningInfosResponse {
  export type AsObject = {
    infoList: Array<cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

