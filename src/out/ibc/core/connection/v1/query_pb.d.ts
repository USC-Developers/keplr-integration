import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as cosmos_base_query_v1beta1_pagination_pb from '../../../../cosmos/base/query/v1beta1/pagination_pb';
import * as ibc_core_client_v1_client_pb from '../../../../ibc/core/client/v1/client_pb';
import * as ibc_core_connection_v1_connection_pb from '../../../../ibc/core/connection/v1/connection_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class QueryConnectionRequest extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): QueryConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionRequest): QueryConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: QueryConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionRequest;
  static deserializeBinaryFromReader(message: QueryConnectionRequest, reader: jspb.BinaryReader): QueryConnectionRequest;
}

export namespace QueryConnectionRequest {
  export type AsObject = {
    connectionId: string,
  }
}

export class QueryConnectionResponse extends jspb.Message {
  getConnection(): ibc_core_connection_v1_connection_pb.ConnectionEnd | undefined;
  setConnection(value?: ibc_core_connection_v1_connection_pb.ConnectionEnd): QueryConnectionResponse;
  hasConnection(): boolean;
  clearConnection(): QueryConnectionResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryConnectionResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryConnectionResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryConnectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionResponse): QueryConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: QueryConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionResponse;
  static deserializeBinaryFromReader(message: QueryConnectionResponse, reader: jspb.BinaryReader): QueryConnectionResponse;
}

export namespace QueryConnectionResponse {
  export type AsObject = {
    connection?: ibc_core_connection_v1_connection_pb.ConnectionEnd.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryConnectionsRequest extends jspb.Message {
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryConnectionsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryConnectionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionsRequest): QueryConnectionsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionsRequest;
  static deserializeBinaryFromReader(message: QueryConnectionsRequest, reader: jspb.BinaryReader): QueryConnectionsRequest;
}

export namespace QueryConnectionsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryConnectionsResponse extends jspb.Message {
  getConnectionsList(): Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection>;
  setConnectionsList(value: Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection>): QueryConnectionsResponse;
  clearConnectionsList(): QueryConnectionsResponse;
  addConnections(value?: ibc_core_connection_v1_connection_pb.IdentifiedConnection, index?: number): ibc_core_connection_v1_connection_pb.IdentifiedConnection;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryConnectionsResponse;
  hasPagination(): boolean;
  clearPagination(): QueryConnectionsResponse;

  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): QueryConnectionsResponse;
  hasHeight(): boolean;
  clearHeight(): QueryConnectionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionsResponse): QueryConnectionsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryConnectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionsResponse;
  static deserializeBinaryFromReader(message: QueryConnectionsResponse, reader: jspb.BinaryReader): QueryConnectionsResponse;
}

export namespace QueryConnectionsResponse {
  export type AsObject = {
    connectionsList: Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    height?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryClientConnectionsRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): QueryClientConnectionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientConnectionsRequest): QueryClientConnectionsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryClientConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientConnectionsRequest;
  static deserializeBinaryFromReader(message: QueryClientConnectionsRequest, reader: jspb.BinaryReader): QueryClientConnectionsRequest;
}

export namespace QueryClientConnectionsRequest {
  export type AsObject = {
    clientId: string,
  }
}

export class QueryClientConnectionsResponse extends jspb.Message {
  getConnectionPathsList(): Array<string>;
  setConnectionPathsList(value: Array<string>): QueryClientConnectionsResponse;
  clearConnectionPathsList(): QueryClientConnectionsResponse;
  addConnectionPaths(value: string, index?: number): QueryClientConnectionsResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryClientConnectionsResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryClientConnectionsResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryClientConnectionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClientConnectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClientConnectionsResponse): QueryClientConnectionsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryClientConnectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClientConnectionsResponse;
  static deserializeBinaryFromReader(message: QueryClientConnectionsResponse, reader: jspb.BinaryReader): QueryClientConnectionsResponse;
}

export namespace QueryClientConnectionsResponse {
  export type AsObject = {
    connectionPathsList: Array<string>,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryConnectionClientStateRequest extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): QueryConnectionClientStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionClientStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionClientStateRequest): QueryConnectionClientStateRequest.AsObject;
  static serializeBinaryToWriter(message: QueryConnectionClientStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionClientStateRequest;
  static deserializeBinaryFromReader(message: QueryConnectionClientStateRequest, reader: jspb.BinaryReader): QueryConnectionClientStateRequest;
}

export namespace QueryConnectionClientStateRequest {
  export type AsObject = {
    connectionId: string,
  }
}

export class QueryConnectionClientStateResponse extends jspb.Message {
  getIdentifiedClientState(): ibc_core_client_v1_client_pb.IdentifiedClientState | undefined;
  setIdentifiedClientState(value?: ibc_core_client_v1_client_pb.IdentifiedClientState): QueryConnectionClientStateResponse;
  hasIdentifiedClientState(): boolean;
  clearIdentifiedClientState(): QueryConnectionClientStateResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryConnectionClientStateResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryConnectionClientStateResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryConnectionClientStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionClientStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionClientStateResponse): QueryConnectionClientStateResponse.AsObject;
  static serializeBinaryToWriter(message: QueryConnectionClientStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionClientStateResponse;
  static deserializeBinaryFromReader(message: QueryConnectionClientStateResponse, reader: jspb.BinaryReader): QueryConnectionClientStateResponse;
}

export namespace QueryConnectionClientStateResponse {
  export type AsObject = {
    identifiedClientState?: ibc_core_client_v1_client_pb.IdentifiedClientState.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryConnectionConsensusStateRequest extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): QueryConnectionConsensusStateRequest;

  getRevisionNumber(): number;
  setRevisionNumber(value: number): QueryConnectionConsensusStateRequest;

  getRevisionHeight(): number;
  setRevisionHeight(value: number): QueryConnectionConsensusStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionConsensusStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequest.AsObject;
  static serializeBinaryToWriter(message: QueryConnectionConsensusStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionConsensusStateRequest;
  static deserializeBinaryFromReader(message: QueryConnectionConsensusStateRequest, reader: jspb.BinaryReader): QueryConnectionConsensusStateRequest;
}

export namespace QueryConnectionConsensusStateRequest {
  export type AsObject = {
    connectionId: string,
    revisionNumber: number,
    revisionHeight: number,
  }
}

export class QueryConnectionConsensusStateResponse extends jspb.Message {
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): QueryConnectionConsensusStateResponse;
  hasConsensusState(): boolean;
  clearConsensusState(): QueryConnectionConsensusStateResponse;

  getClientId(): string;
  setClientId(value: string): QueryConnectionConsensusStateResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryConnectionConsensusStateResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryConnectionConsensusStateResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryConnectionConsensusStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionConsensusStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponse.AsObject;
  static serializeBinaryToWriter(message: QueryConnectionConsensusStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionConsensusStateResponse;
  static deserializeBinaryFromReader(message: QueryConnectionConsensusStateResponse, reader: jspb.BinaryReader): QueryConnectionConsensusStateResponse;
}

export namespace QueryConnectionConsensusStateResponse {
  export type AsObject = {
    consensusState?: google_protobuf_any_pb.Any.AsObject,
    clientId: string,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

