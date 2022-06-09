import * as jspb from 'google-protobuf'

import * as cosmos_feegrant_v1beta1_feegrant_pb from '../../../cosmos/feegrant/v1beta1/feegrant_pb';
import * as cosmos_base_query_v1beta1_pagination_pb from '../../../cosmos/base/query/v1beta1/pagination_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';


export class QueryAllowanceRequest extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): QueryAllowanceRequest;

  getGrantee(): string;
  setGrantee(value: string): QueryAllowanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllowanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllowanceRequest): QueryAllowanceRequest.AsObject;
  static serializeBinaryToWriter(message: QueryAllowanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllowanceRequest;
  static deserializeBinaryFromReader(message: QueryAllowanceRequest, reader: jspb.BinaryReader): QueryAllowanceRequest;
}

export namespace QueryAllowanceRequest {
  export type AsObject = {
    granter: string,
    grantee: string,
  }
}

export class QueryAllowanceResponse extends jspb.Message {
  getAllowance(): cosmos_feegrant_v1beta1_feegrant_pb.Grant | undefined;
  setAllowance(value?: cosmos_feegrant_v1beta1_feegrant_pb.Grant): QueryAllowanceResponse;
  hasAllowance(): boolean;
  clearAllowance(): QueryAllowanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllowanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllowanceResponse): QueryAllowanceResponse.AsObject;
  static serializeBinaryToWriter(message: QueryAllowanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllowanceResponse;
  static deserializeBinaryFromReader(message: QueryAllowanceResponse, reader: jspb.BinaryReader): QueryAllowanceResponse;
}

export namespace QueryAllowanceResponse {
  export type AsObject = {
    allowance?: cosmos_feegrant_v1beta1_feegrant_pb.Grant.AsObject,
  }
}

export class QueryAllowancesRequest extends jspb.Message {
  getGrantee(): string;
  setGrantee(value: string): QueryAllowancesRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryAllowancesRequest;
  hasPagination(): boolean;
  clearPagination(): QueryAllowancesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllowancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllowancesRequest): QueryAllowancesRequest.AsObject;
  static serializeBinaryToWriter(message: QueryAllowancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllowancesRequest;
  static deserializeBinaryFromReader(message: QueryAllowancesRequest, reader: jspb.BinaryReader): QueryAllowancesRequest;
}

export namespace QueryAllowancesRequest {
  export type AsObject = {
    grantee: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryAllowancesResponse extends jspb.Message {
  getAllowancesList(): Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant>;
  setAllowancesList(value: Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant>): QueryAllowancesResponse;
  clearAllowancesList(): QueryAllowancesResponse;
  addAllowances(value?: cosmos_feegrant_v1beta1_feegrant_pb.Grant, index?: number): cosmos_feegrant_v1beta1_feegrant_pb.Grant;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryAllowancesResponse;
  hasPagination(): boolean;
  clearPagination(): QueryAllowancesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAllowancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAllowancesResponse): QueryAllowancesResponse.AsObject;
  static serializeBinaryToWriter(message: QueryAllowancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAllowancesResponse;
  static deserializeBinaryFromReader(message: QueryAllowancesResponse, reader: jspb.BinaryReader): QueryAllowancesResponse;
}

export namespace QueryAllowancesResponse {
  export type AsObject = {
    allowancesList: Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

