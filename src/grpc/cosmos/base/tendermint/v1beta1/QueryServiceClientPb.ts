/**
 * @fileoverview gRPC-Web generated client stub for cosmos.base.tendermint.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_base_tendermint_v1beta1_query_pb from '../../../../cosmos/base/tendermint/v1beta1/query_pb';


export class ServiceClient {
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

  methodDescriptorGetNodeInfo = new grpcWeb.MethodDescriptor(
    '/cosmos.base.tendermint.v1beta1.Service/GetNodeInfo',
    grpcWeb.MethodType.UNARY,
    cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse,
    (request: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse.deserializeBinary
  );

  getNodeInfo(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse>;

  getNodeInfo(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse>;

  getNodeInfo(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.tendermint.v1beta1.Service/GetNodeInfo',
        request,
        metadata || {},
        this.methodDescriptorGetNodeInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetNodeInfo',
    request,
    metadata || {},
    this.methodDescriptorGetNodeInfo);
  }

  methodDescriptorGetSyncing = new grpcWeb.MethodDescriptor(
    '/cosmos.base.tendermint.v1beta1.Service/GetSyncing',
    grpcWeb.MethodType.UNARY,
    cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse,
    (request: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse.deserializeBinary
  );

  getSyncing(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse>;

  getSyncing(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse>;

  getSyncing(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.tendermint.v1beta1.Service/GetSyncing',
        request,
        metadata || {},
        this.methodDescriptorGetSyncing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetSyncing',
    request,
    metadata || {},
    this.methodDescriptorGetSyncing);
  }

  methodDescriptorGetLatestBlock = new grpcWeb.MethodDescriptor(
    '/cosmos.base.tendermint.v1beta1.Service/GetLatestBlock',
    grpcWeb.MethodType.UNARY,
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse,
    (request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse.deserializeBinary
  );

  getLatestBlock(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse>;

  getLatestBlock(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse>;

  getLatestBlock(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.tendermint.v1beta1.Service/GetLatestBlock',
        request,
        metadata || {},
        this.methodDescriptorGetLatestBlock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetLatestBlock',
    request,
    metadata || {},
    this.methodDescriptorGetLatestBlock);
  }

  methodDescriptorGetBlockByHeight = new grpcWeb.MethodDescriptor(
    '/cosmos.base.tendermint.v1beta1.Service/GetBlockByHeight',
    grpcWeb.MethodType.UNARY,
    cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse,
    (request: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse.deserializeBinary
  );

  getBlockByHeight(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse>;

  getBlockByHeight(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse>;

  getBlockByHeight(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.tendermint.v1beta1.Service/GetBlockByHeight',
        request,
        metadata || {},
        this.methodDescriptorGetBlockByHeight,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetBlockByHeight',
    request,
    metadata || {},
    this.methodDescriptorGetBlockByHeight);
  }

  methodDescriptorGetLatestValidatorSet = new grpcWeb.MethodDescriptor(
    '/cosmos.base.tendermint.v1beta1.Service/GetLatestValidatorSet',
    grpcWeb.MethodType.UNARY,
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse,
    (request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse.deserializeBinary
  );

  getLatestValidatorSet(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse>;

  getLatestValidatorSet(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse>;

  getLatestValidatorSet(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.tendermint.v1beta1.Service/GetLatestValidatorSet',
        request,
        metadata || {},
        this.methodDescriptorGetLatestValidatorSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetLatestValidatorSet',
    request,
    metadata || {},
    this.methodDescriptorGetLatestValidatorSet);
  }

  methodDescriptorGetValidatorSetByHeight = new grpcWeb.MethodDescriptor(
    '/cosmos.base.tendermint.v1beta1.Service/GetValidatorSetByHeight',
    grpcWeb.MethodType.UNARY,
    cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse,
    (request: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse.deserializeBinary
  );

  getValidatorSetByHeight(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse>;

  getValidatorSetByHeight(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse>;

  getValidatorSetByHeight(
    request: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.tendermint.v1beta1.Service/GetValidatorSetByHeight',
        request,
        metadata || {},
        this.methodDescriptorGetValidatorSetByHeight,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetValidatorSetByHeight',
    request,
    metadata || {},
    this.methodDescriptorGetValidatorSetByHeight);
  }

}

