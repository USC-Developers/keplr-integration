import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as cosmos_base_query_v1beta1_pagination_pb from '../../../cosmos/base/query/v1beta1/pagination_pb';
import * as cosmos_authz_v1beta1_authz_pb from '../../../cosmos/authz/v1beta1/authz_pb';


export class QueryGrantsRequest extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): QueryGrantsRequest;

  getGrantee(): string;
  setGrantee(value: string): QueryGrantsRequest;

  getMsgTypeUrl(): string;
  setMsgTypeUrl(value: string): QueryGrantsRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryGrantsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryGrantsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGrantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGrantsRequest): QueryGrantsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryGrantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGrantsRequest;
  static deserializeBinaryFromReader(message: QueryGrantsRequest, reader: jspb.BinaryReader): QueryGrantsRequest;
}

export namespace QueryGrantsRequest {
  export type AsObject = {
    granter: string,
    grantee: string,
    msgTypeUrl: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGrantsResponse extends jspb.Message {
  getGrantsList(): Array<cosmos_authz_v1beta1_authz_pb.Grant>;
  setGrantsList(value: Array<cosmos_authz_v1beta1_authz_pb.Grant>): QueryGrantsResponse;
  clearGrantsList(): QueryGrantsResponse;
  addGrants(value?: cosmos_authz_v1beta1_authz_pb.Grant, index?: number): cosmos_authz_v1beta1_authz_pb.Grant;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryGrantsResponse;
  hasPagination(): boolean;
  clearPagination(): QueryGrantsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGrantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGrantsResponse): QueryGrantsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryGrantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGrantsResponse;
  static deserializeBinaryFromReader(message: QueryGrantsResponse, reader: jspb.BinaryReader): QueryGrantsResponse;
}

export namespace QueryGrantsResponse {
  export type AsObject = {
    grantsList: Array<cosmos_authz_v1beta1_authz_pb.Grant.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryGranterGrantsRequest extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): QueryGranterGrantsRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryGranterGrantsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryGranterGrantsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGranterGrantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGranterGrantsRequest): QueryGranterGrantsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryGranterGrantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGranterGrantsRequest;
  static deserializeBinaryFromReader(message: QueryGranterGrantsRequest, reader: jspb.BinaryReader): QueryGranterGrantsRequest;
}

export namespace QueryGranterGrantsRequest {
  export type AsObject = {
    granter: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGranterGrantsResponse extends jspb.Message {
  getGrantsList(): Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization>;
  setGrantsList(value: Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization>): QueryGranterGrantsResponse;
  clearGrantsList(): QueryGranterGrantsResponse;
  addGrants(value?: cosmos_authz_v1beta1_authz_pb.GrantAuthorization, index?: number): cosmos_authz_v1beta1_authz_pb.GrantAuthorization;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryGranterGrantsResponse;
  hasPagination(): boolean;
  clearPagination(): QueryGranterGrantsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGranterGrantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGranterGrantsResponse): QueryGranterGrantsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryGranterGrantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGranterGrantsResponse;
  static deserializeBinaryFromReader(message: QueryGranterGrantsResponse, reader: jspb.BinaryReader): QueryGranterGrantsResponse;
}

export namespace QueryGranterGrantsResponse {
  export type AsObject = {
    grantsList: Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryGranteeGrantsRequest extends jspb.Message {
  getGrantee(): string;
  setGrantee(value: string): QueryGranteeGrantsRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryGranteeGrantsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryGranteeGrantsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGranteeGrantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGranteeGrantsRequest): QueryGranteeGrantsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryGranteeGrantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGranteeGrantsRequest;
  static deserializeBinaryFromReader(message: QueryGranteeGrantsRequest, reader: jspb.BinaryReader): QueryGranteeGrantsRequest;
}

export namespace QueryGranteeGrantsRequest {
  export type AsObject = {
    grantee: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryGranteeGrantsResponse extends jspb.Message {
  getGrantsList(): Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization>;
  setGrantsList(value: Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization>): QueryGranteeGrantsResponse;
  clearGrantsList(): QueryGranteeGrantsResponse;
  addGrants(value?: cosmos_authz_v1beta1_authz_pb.GrantAuthorization, index?: number): cosmos_authz_v1beta1_authz_pb.GrantAuthorization;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryGranteeGrantsResponse;
  hasPagination(): boolean;
  clearPagination(): QueryGranteeGrantsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGranteeGrantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGranteeGrantsResponse): QueryGranteeGrantsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryGranteeGrantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGranteeGrantsResponse;
  static deserializeBinaryFromReader(message: QueryGranteeGrantsResponse, reader: jspb.BinaryReader): QueryGranteeGrantsResponse;
}

export namespace QueryGranteeGrantsResponse {
  export type AsObject = {
    grantsList: Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

