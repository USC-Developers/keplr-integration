import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as cosmos_base_query_v1beta1_pagination_pb from '../../../../cosmos/base/query/v1beta1/pagination_pb';
import * as ibc_applications_transfer_v1_transfer_pb from '../../../../ibc/applications/transfer/v1/transfer_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class QueryDenomTraceRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): QueryDenomTraceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTraceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomTraceRequest): QueryDenomTraceRequest.AsObject;
  static serializeBinaryToWriter(message: QueryDenomTraceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTraceRequest;
  static deserializeBinaryFromReader(message: QueryDenomTraceRequest, reader: jspb.BinaryReader): QueryDenomTraceRequest;
}

export namespace QueryDenomTraceRequest {
  export type AsObject = {
    hash: string,
  }
}

export class QueryDenomTraceResponse extends jspb.Message {
  getDenomTrace(): ibc_applications_transfer_v1_transfer_pb.DenomTrace | undefined;
  setDenomTrace(value?: ibc_applications_transfer_v1_transfer_pb.DenomTrace): QueryDenomTraceResponse;
  hasDenomTrace(): boolean;
  clearDenomTrace(): QueryDenomTraceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTraceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomTraceResponse): QueryDenomTraceResponse.AsObject;
  static serializeBinaryToWriter(message: QueryDenomTraceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTraceResponse;
  static deserializeBinaryFromReader(message: QueryDenomTraceResponse, reader: jspb.BinaryReader): QueryDenomTraceResponse;
}

export namespace QueryDenomTraceResponse {
  export type AsObject = {
    denomTrace?: ibc_applications_transfer_v1_transfer_pb.DenomTrace.AsObject,
  }
}

export class QueryDenomTracesRequest extends jspb.Message {
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryDenomTracesRequest;
  hasPagination(): boolean;
  clearPagination(): QueryDenomTracesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTracesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomTracesRequest): QueryDenomTracesRequest.AsObject;
  static serializeBinaryToWriter(message: QueryDenomTracesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTracesRequest;
  static deserializeBinaryFromReader(message: QueryDenomTracesRequest, reader: jspb.BinaryReader): QueryDenomTracesRequest;
}

export namespace QueryDenomTracesRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryDenomTracesResponse extends jspb.Message {
  getDenomTracesList(): Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace>;
  setDenomTracesList(value: Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace>): QueryDenomTracesResponse;
  clearDenomTracesList(): QueryDenomTracesResponse;
  addDenomTraces(value?: ibc_applications_transfer_v1_transfer_pb.DenomTrace, index?: number): ibc_applications_transfer_v1_transfer_pb.DenomTrace;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryDenomTracesResponse;
  hasPagination(): boolean;
  clearPagination(): QueryDenomTracesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomTracesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomTracesResponse): QueryDenomTracesResponse.AsObject;
  static serializeBinaryToWriter(message: QueryDenomTracesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomTracesResponse;
  static deserializeBinaryFromReader(message: QueryDenomTracesResponse, reader: jspb.BinaryReader): QueryDenomTracesResponse;
}

export namespace QueryDenomTracesResponse {
  export type AsObject = {
    denomTracesList: Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
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
  getParams(): ibc_applications_transfer_v1_transfer_pb.Params | undefined;
  setParams(value?: ibc_applications_transfer_v1_transfer_pb.Params): QueryParamsResponse;
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
    params?: ibc_applications_transfer_v1_transfer_pb.Params.AsObject,
  }
}

export class QueryDenomHashRequest extends jspb.Message {
  getTrace(): string;
  setTrace(value: string): QueryDenomHashRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomHashRequest): QueryDenomHashRequest.AsObject;
  static serializeBinaryToWriter(message: QueryDenomHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomHashRequest;
  static deserializeBinaryFromReader(message: QueryDenomHashRequest, reader: jspb.BinaryReader): QueryDenomHashRequest;
}

export namespace QueryDenomHashRequest {
  export type AsObject = {
    trace: string,
  }
}

export class QueryDenomHashResponse extends jspb.Message {
  getHash(): string;
  setHash(value: string): QueryDenomHashResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomHashResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomHashResponse): QueryDenomHashResponse.AsObject;
  static serializeBinaryToWriter(message: QueryDenomHashResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomHashResponse;
  static deserializeBinaryFromReader(message: QueryDenomHashResponse, reader: jspb.BinaryReader): QueryDenomHashResponse;
}

export namespace QueryDenomHashResponse {
  export type AsObject = {
    hash: string,
  }
}

