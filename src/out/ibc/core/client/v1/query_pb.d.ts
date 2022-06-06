import * as jspb from 'google-protobuf'

import * as cosmos_base_query_v1beta1_pagination_pb from '../../../../cosmos/base/query/v1beta1/pagination_pb';
import * as ibc_core_client_v1_client_pb from '../../../../ibc/core/client/v1/client_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class QueryClientStateRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): QueryClientStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientStateRequest): QueryClientStateRequest.AsObject;
  static serializeBinaryToWriter(message: QueryClientStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientStateRequest;
  static deserializeBinaryFromReader(message: QueryClientStateRequest, reader: jspb.BinaryReader): QueryClientStateRequest;
}

export namespace QueryClientStateRequest {
  export type AsObject = {
    clientId: string,
  }
}

export class QueryClientStateResponse extends jspb.Message {
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): QueryClientStateResponse;
  hasClientState(): boolean;
  clearClientState(): QueryClientStateResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryClientStateResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryClientStateResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryClientStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientStateResponse): QueryClientStateResponse.AsObject;
  static serializeBinaryToWriter(message: QueryClientStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientStateResponse;
  static deserializeBinaryFromReader(message: QueryClientStateResponse, reader: jspb.BinaryReader): QueryClientStateResponse;
}

export namespace QueryClientStateResponse {
  export type AsObject = {
    clientState?: google_protobuf_any_pb.Any.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryClientStatesRequest extends jspb.Message {
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryClientStatesRequest;
  hasPagination(): boolean;
  clearPagination(): QueryClientStatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientStatesRequest): QueryClientStatesRequest.AsObject;
  static serializeBinaryToWriter(message: QueryClientStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientStatesRequest;
  static deserializeBinaryFromReader(message: QueryClientStatesRequest, reader: jspb.BinaryReader): QueryClientStatesRequest;
}

export namespace QueryClientStatesRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryClientStatesResponse extends jspb.Message {
  getClientStatesList(): Array<ibc_core_client_v1_client_pb.IdentifiedClientState>;
  setClientStatesList(value: Array<ibc_core_client_v1_client_pb.IdentifiedClientState>): QueryClientStatesResponse;
  clearClientStatesList(): QueryClientStatesResponse;
  addClientStates(value?: ibc_core_client_v1_client_pb.IdentifiedClientState, index?: number): ibc_core_client_v1_client_pb.IdentifiedClientState;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryClientStatesResponse;
  hasPagination(): boolean;
  clearPagination(): QueryClientStatesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientStatesResponse): QueryClientStatesResponse.AsObject;
  static serializeBinaryToWriter(message: QueryClientStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientStatesResponse;
  static deserializeBinaryFromReader(message: QueryClientStatesResponse, reader: jspb.BinaryReader): QueryClientStatesResponse;
}

export namespace QueryClientStatesResponse {
  export type AsObject = {
    clientStatesList: Array<ibc_core_client_v1_client_pb.IdentifiedClientState.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryConsensusStateRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): QueryConsensusStateRequest;

  getRevisionNumber(): number;
  setRevisionNumber(value: number): QueryConsensusStateRequest;

  getRevisionHeight(): number;
  setRevisionHeight(value: number): QueryConsensusStateRequest;

  getLatestHeight(): boolean;
  setLatestHeight(value: boolean): QueryConsensusStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConsensusStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConsensusStateRequest): QueryConsensusStateRequest.AsObject;
  static serializeBinaryToWriter(message: QueryConsensusStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConsensusStateRequest;
  static deserializeBinaryFromReader(message: QueryConsensusStateRequest, reader: jspb.BinaryReader): QueryConsensusStateRequest;
}

export namespace QueryConsensusStateRequest {
  export type AsObject = {
    clientId: string,
    revisionNumber: number,
    revisionHeight: number,
    latestHeight: boolean,
  }
}

export class QueryConsensusStateResponse extends jspb.Message {
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): QueryConsensusStateResponse;
  hasConsensusState(): boolean;
  clearConsensusState(): QueryConsensusStateResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryConsensusStateResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryConsensusStateResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryConsensusStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConsensusStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConsensusStateResponse): QueryConsensusStateResponse.AsObject;
  static serializeBinaryToWriter(message: QueryConsensusStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConsensusStateResponse;
  static deserializeBinaryFromReader(message: QueryConsensusStateResponse, reader: jspb.BinaryReader): QueryConsensusStateResponse;
}

export namespace QueryConsensusStateResponse {
  export type AsObject = {
    consensusState?: google_protobuf_any_pb.Any.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryConsensusStatesRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): QueryConsensusStatesRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryConsensusStatesRequest;
  hasPagination(): boolean;
  clearPagination(): QueryConsensusStatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConsensusStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConsensusStatesRequest): QueryConsensusStatesRequest.AsObject;
  static serializeBinaryToWriter(message: QueryConsensusStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConsensusStatesRequest;
  static deserializeBinaryFromReader(message: QueryConsensusStatesRequest, reader: jspb.BinaryReader): QueryConsensusStatesRequest;
}

export namespace QueryConsensusStatesRequest {
  export type AsObject = {
    clientId: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryConsensusStatesResponse extends jspb.Message {
  getConsensusStatesList(): Array<ibc_core_client_v1_client_pb.ConsensusStateWithHeight>;
  setConsensusStatesList(value: Array<ibc_core_client_v1_client_pb.ConsensusStateWithHeight>): QueryConsensusStatesResponse;
  clearConsensusStatesList(): QueryConsensusStatesResponse;
  addConsensusStates(value?: ibc_core_client_v1_client_pb.ConsensusStateWithHeight, index?: number): ibc_core_client_v1_client_pb.ConsensusStateWithHeight;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryConsensusStatesResponse;
  hasPagination(): boolean;
  clearPagination(): QueryConsensusStatesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConsensusStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConsensusStatesResponse): QueryConsensusStatesResponse.AsObject;
  static serializeBinaryToWriter(message: QueryConsensusStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConsensusStatesResponse;
  static deserializeBinaryFromReader(message: QueryConsensusStatesResponse, reader: jspb.BinaryReader): QueryConsensusStatesResponse;
}

export namespace QueryConsensusStatesResponse {
  export type AsObject = {
    consensusStatesList: Array<ibc_core_client_v1_client_pb.ConsensusStateWithHeight.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryClientParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientParamsRequest): QueryClientParamsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryClientParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientParamsRequest;
  static deserializeBinaryFromReader(message: QueryClientParamsRequest, reader: jspb.BinaryReader): QueryClientParamsRequest;
}

export namespace QueryClientParamsRequest {
  export type AsObject = {
  }
}

export class QueryClientParamsResponse extends jspb.Message {
  getParams(): ibc_core_client_v1_client_pb.Params | undefined;
  setParams(value?: ibc_core_client_v1_client_pb.Params): QueryClientParamsResponse;
  hasParams(): boolean;
  clearParams(): QueryClientParamsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientParamsResponse): QueryClientParamsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryClientParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientParamsResponse;
  static deserializeBinaryFromReader(message: QueryClientParamsResponse, reader: jspb.BinaryReader): QueryClientParamsResponse;
}

export namespace QueryClientParamsResponse {
  export type AsObject = {
    params?: ibc_core_client_v1_client_pb.Params.AsObject,
  }
}

