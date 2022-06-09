import * as jspb from 'google-protobuf'

import * as cosmos_base_query_v1beta1_pagination_pb from '../../../cosmos/base/query/v1beta1/pagination_pb';
import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as cosmos_auth_v1beta1_auth_pb from '../../../cosmos/auth/v1beta1/auth_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';


export class QueryAccountsRequest extends jspb.Message {
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryAccountsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryAccountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountsRequest): QueryAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountsRequest;
  static deserializeBinaryFromReader(message: QueryAccountsRequest, reader: jspb.BinaryReader): QueryAccountsRequest;
}

export namespace QueryAccountsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryAccountsResponse extends jspb.Message {
  getAccountsList(): Array<google_protobuf_any_pb.Any>;
  setAccountsList(value: Array<google_protobuf_any_pb.Any>): QueryAccountsResponse;
  clearAccountsList(): QueryAccountsResponse;
  addAccounts(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryAccountsResponse;
  hasPagination(): boolean;
  clearPagination(): QueryAccountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountsResponse): QueryAccountsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountsResponse;
  static deserializeBinaryFromReader(message: QueryAccountsResponse, reader: jspb.BinaryReader): QueryAccountsResponse;
}

export namespace QueryAccountsResponse {
  export type AsObject = {
    accountsList: Array<google_protobuf_any_pb.Any.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryAccountRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): QueryAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountRequest): QueryAccountRequest.AsObject;
  static serializeBinaryToWriter(message: QueryAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountRequest;
  static deserializeBinaryFromReader(message: QueryAccountRequest, reader: jspb.BinaryReader): QueryAccountRequest;
}

export namespace QueryAccountRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueryAccountResponse extends jspb.Message {
  getAccount(): google_protobuf_any_pb.Any | undefined;
  setAccount(value?: google_protobuf_any_pb.Any): QueryAccountResponse;
  hasAccount(): boolean;
  clearAccount(): QueryAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountResponse): QueryAccountResponse.AsObject;
  static serializeBinaryToWriter(message: QueryAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountResponse;
  static deserializeBinaryFromReader(message: QueryAccountResponse, reader: jspb.BinaryReader): QueryAccountResponse;
}

export namespace QueryAccountResponse {
  export type AsObject = {
    account?: google_protobuf_any_pb.Any.AsObject,
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
  getParams(): cosmos_auth_v1beta1_auth_pb.Params | undefined;
  setParams(value?: cosmos_auth_v1beta1_auth_pb.Params): QueryParamsResponse;
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
    params?: cosmos_auth_v1beta1_auth_pb.Params.AsObject,
  }
}

