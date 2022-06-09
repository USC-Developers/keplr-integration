/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.client.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ibc_core_client_v1_query_pb from '../../../../ibc/core/client/v1/query_pb';


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

  methodDescriptorClientState = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Query/ClientState',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_query_pb.QueryClientStateRequest,
    ibc_core_client_v1_query_pb.QueryClientStateResponse,
    (request: ibc_core_client_v1_query_pb.QueryClientStateRequest) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_query_pb.QueryClientStateResponse.deserializeBinary
  );

  clientState(
    request: ibc_core_client_v1_query_pb.QueryClientStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_query_pb.QueryClientStateResponse>;

  clientState(
    request: ibc_core_client_v1_query_pb.QueryClientStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_query_pb.QueryClientStateResponse>;

  clientState(
    request: ibc_core_client_v1_query_pb.QueryClientStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Query/ClientState',
        request,
        metadata || {},
        this.methodDescriptorClientState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Query/ClientState',
    request,
    metadata || {},
    this.methodDescriptorClientState);
  }

  methodDescriptorClientStates = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Query/ClientStates',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    ibc_core_client_v1_query_pb.QueryClientStatesResponse,
    (request: ibc_core_client_v1_query_pb.QueryClientStatesRequest) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_query_pb.QueryClientStatesResponse.deserializeBinary
  );

  clientStates(
    request: ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_query_pb.QueryClientStatesResponse>;

  clientStates(
    request: ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_query_pb.QueryClientStatesResponse>;

  clientStates(
    request: ibc_core_client_v1_query_pb.QueryClientStatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Query/ClientStates',
        request,
        metadata || {},
        this.methodDescriptorClientStates,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Query/ClientStates',
    request,
    metadata || {},
    this.methodDescriptorClientStates);
  }

  methodDescriptorConsensusState = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Query/ConsensusState',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    ibc_core_client_v1_query_pb.QueryConsensusStateResponse,
    (request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_query_pb.QueryConsensusStateResponse.deserializeBinary
  );

  consensusState(
    request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_query_pb.QueryConsensusStateResponse>;

  consensusState(
    request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_query_pb.QueryConsensusStateResponse>;

  consensusState(
    request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Query/ConsensusState',
        request,
        metadata || {},
        this.methodDescriptorConsensusState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Query/ConsensusState',
    request,
    metadata || {},
    this.methodDescriptorConsensusState);
  }

  methodDescriptorConsensusStates = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Query/ConsensusStates',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    ibc_core_client_v1_query_pb.QueryConsensusStatesResponse,
    (request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_query_pb.QueryConsensusStatesResponse.deserializeBinary
  );

  consensusStates(
    request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_query_pb.QueryConsensusStatesResponse>;

  consensusStates(
    request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_query_pb.QueryConsensusStatesResponse>;

  consensusStates(
    request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Query/ConsensusStates',
        request,
        metadata || {},
        this.methodDescriptorConsensusStates,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Query/ConsensusStates',
    request,
    metadata || {},
    this.methodDescriptorConsensusStates);
  }

  methodDescriptorClientStatus = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Query/ClientStatus',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    ibc_core_client_v1_query_pb.QueryClientStatusResponse,
    (request: ibc_core_client_v1_query_pb.QueryClientStatusRequest) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_query_pb.QueryClientStatusResponse.deserializeBinary
  );

  clientStatus(
    request: ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_query_pb.QueryClientStatusResponse>;

  clientStatus(
    request: ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryClientStatusResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_query_pb.QueryClientStatusResponse>;

  clientStatus(
    request: ibc_core_client_v1_query_pb.QueryClientStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryClientStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Query/ClientStatus',
        request,
        metadata || {},
        this.methodDescriptorClientStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Query/ClientStatus',
    request,
    metadata || {},
    this.methodDescriptorClientStatus);
  }

  methodDescriptorClientParams = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Query/ClientParams',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    ibc_core_client_v1_query_pb.QueryClientParamsResponse,
    (request: ibc_core_client_v1_query_pb.QueryClientParamsRequest) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_query_pb.QueryClientParamsResponse.deserializeBinary
  );

  clientParams(
    request: ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_query_pb.QueryClientParamsResponse>;

  clientParams(
    request: ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_query_pb.QueryClientParamsResponse>;

  clientParams(
    request: ibc_core_client_v1_query_pb.QueryClientParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Query/ClientParams',
        request,
        metadata || {},
        this.methodDescriptorClientParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Query/ClientParams',
    request,
    metadata || {},
    this.methodDescriptorClientParams);
  }

  methodDescriptorUpgradedClientState = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Query/UpgradedClientState',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse,
    (request: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse.deserializeBinary
  );

  upgradedClientState(
    request: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse>;

  upgradedClientState(
    request: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse>;

  upgradedClientState(
    request: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Query/UpgradedClientState',
        request,
        metadata || {},
        this.methodDescriptorUpgradedClientState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Query/UpgradedClientState',
    request,
    metadata || {},
    this.methodDescriptorUpgradedClientState);
  }

  methodDescriptorUpgradedConsensusState = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Query/UpgradedConsensusState',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse,
    (request: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse.deserializeBinary
  );

  upgradedConsensusState(
    request: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse>;

  upgradedConsensusState(
    request: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse>;

  upgradedConsensusState(
    request: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Query/UpgradedConsensusState',
        request,
        metadata || {},
        this.methodDescriptorUpgradedConsensusState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Query/UpgradedConsensusState',
    request,
    metadata || {},
    this.methodDescriptorUpgradedConsensusState);
  }

}

