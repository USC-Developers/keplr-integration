/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.connection.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ibc_core_connection_v1_query_pb from '../../../../ibc/core/connection/v1/query_pb';


export class QueryClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorConnection = new grpcWeb.MethodDescriptor(
    '/ibc.core.connection.v1.Query/Connection',
    grpcWeb.MethodType.UNARY,
    ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionResponse,
    (request: ibc_core_connection_v1_query_pb.QueryConnectionRequest) => {
      return request.serializeBinary();
    },
    ibc_core_connection_v1_query_pb.QueryConnectionResponse.deserializeBinary
  );

  connection(
    request: ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_connection_v1_query_pb.QueryConnectionResponse>;

  connection(
    request: ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_query_pb.QueryConnectionResponse) => void): grpcWeb.ClientReadableStream<ibc_core_connection_v1_query_pb.QueryConnectionResponse>;

  connection(
    request: ibc_core_connection_v1_query_pb.QueryConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_query_pb.QueryConnectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.connection.v1.Query/Connection',
        request,
        metadata || {},
        this.methodDescriptorConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.connection.v1.Query/Connection',
    request,
    metadata || {},
    this.methodDescriptorConnection);
  }

  methodDescriptorConnections = new grpcWeb.MethodDescriptor(
    '/ibc.core.connection.v1.Query/Connections',
    grpcWeb.MethodType.UNARY,
    ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionsResponse,
    (request: ibc_core_connection_v1_query_pb.QueryConnectionsRequest) => {
      return request.serializeBinary();
    },
    ibc_core_connection_v1_query_pb.QueryConnectionsResponse.deserializeBinary
  );

  connections(
    request: ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_connection_v1_query_pb.QueryConnectionsResponse>;

  connections(
    request: ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_query_pb.QueryConnectionsResponse) => void): grpcWeb.ClientReadableStream<ibc_core_connection_v1_query_pb.QueryConnectionsResponse>;

  connections(
    request: ibc_core_connection_v1_query_pb.QueryConnectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_query_pb.QueryConnectionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.connection.v1.Query/Connections',
        request,
        metadata || {},
        this.methodDescriptorConnections,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.connection.v1.Query/Connections',
    request,
    metadata || {},
    this.methodDescriptorConnections);
  }

  methodDescriptorClientConnections = new grpcWeb.MethodDescriptor(
    '/ibc.core.connection.v1.Query/ClientConnections',
    grpcWeb.MethodType.UNARY,
    ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse,
    (request: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest) => {
      return request.serializeBinary();
    },
    ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse.deserializeBinary
  );

  clientConnections(
    request: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse>;

  clientConnections(
    request: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse) => void): grpcWeb.ClientReadableStream<ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse>;

  clientConnections(
    request: ibc_core_connection_v1_query_pb.QueryClientConnectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_query_pb.QueryClientConnectionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.connection.v1.Query/ClientConnections',
        request,
        metadata || {},
        this.methodDescriptorClientConnections,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.connection.v1.Query/ClientConnections',
    request,
    metadata || {},
    this.methodDescriptorClientConnections);
  }

  methodDescriptorConnectionClientState = new grpcWeb.MethodDescriptor(
    '/ibc.core.connection.v1.Query/ConnectionClientState',
    grpcWeb.MethodType.UNARY,
    ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse,
    (request: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest) => {
      return request.serializeBinary();
    },
    ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse.deserializeBinary
  );

  connectionClientState(
    request: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse>;

  connectionClientState(
    request: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse) => void): grpcWeb.ClientReadableStream<ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse>;

  connectionClientState(
    request: ibc_core_connection_v1_query_pb.QueryConnectionClientStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_query_pb.QueryConnectionClientStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.connection.v1.Query/ConnectionClientState',
        request,
        metadata || {},
        this.methodDescriptorConnectionClientState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.connection.v1.Query/ConnectionClientState',
    request,
    metadata || {},
    this.methodDescriptorConnectionClientState);
  }

  methodDescriptorConnectionConsensusState = new grpcWeb.MethodDescriptor(
    '/ibc.core.connection.v1.Query/ConnectionConsensusState',
    grpcWeb.MethodType.UNARY,
    ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse,
    (request: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest) => {
      return request.serializeBinary();
    },
    ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse.deserializeBinary
  );

  connectionConsensusState(
    request: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse>;

  connectionConsensusState(
    request: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse) => void): grpcWeb.ClientReadableStream<ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse>;

  connectionConsensusState(
    request: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_query_pb.QueryConnectionConsensusStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.connection.v1.Query/ConnectionConsensusState',
        request,
        metadata || {},
        this.methodDescriptorConnectionConsensusState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.connection.v1.Query/ConnectionConsensusState',
    request,
    metadata || {},
    this.methodDescriptorConnectionConsensusState);
  }

}

