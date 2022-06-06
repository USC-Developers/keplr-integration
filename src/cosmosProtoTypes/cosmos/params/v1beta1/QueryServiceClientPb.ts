/**
 * @fileoverview gRPC-Web generated client stub for cosmos.params.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_params_v1beta1_query_pb from '../../../cosmos/params/v1beta1/query_pb';


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

  methodDescriptorParams = new grpcWeb.MethodDescriptor(
    '/cosmos.params.v1beta1.Query/Params',
    grpcWeb.MethodType.UNARY,
    cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    cosmos_params_v1beta1_query_pb.QueryParamsResponse,
    (request: cosmos_params_v1beta1_query_pb.QueryParamsRequest) => {
      return request.serializeBinary();
    },
    cosmos_params_v1beta1_query_pb.QueryParamsResponse.deserializeBinary
  );

  params(
    request: cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_params_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_params_v1beta1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<cosmos_params_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_params_v1beta1_query_pb.QueryParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.params.v1beta1.Query/Params',
        request,
        metadata || {},
        this.methodDescriptorParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.params.v1beta1.Query/Params',
    request,
    metadata || {},
    this.methodDescriptorParams);
  }

  methodDescriptorSubspaces = new grpcWeb.MethodDescriptor(
    '/cosmos.params.v1beta1.Query/Subspaces',
    grpcWeb.MethodType.UNARY,
    cosmos_params_v1beta1_query_pb.QuerySubspacesRequest,
    cosmos_params_v1beta1_query_pb.QuerySubspacesResponse,
    (request: cosmos_params_v1beta1_query_pb.QuerySubspacesRequest) => {
      return request.serializeBinary();
    },
    cosmos_params_v1beta1_query_pb.QuerySubspacesResponse.deserializeBinary
  );

  subspaces(
    request: cosmos_params_v1beta1_query_pb.QuerySubspacesRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_params_v1beta1_query_pb.QuerySubspacesResponse>;

  subspaces(
    request: cosmos_params_v1beta1_query_pb.QuerySubspacesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_params_v1beta1_query_pb.QuerySubspacesResponse) => void): grpcWeb.ClientReadableStream<cosmos_params_v1beta1_query_pb.QuerySubspacesResponse>;

  subspaces(
    request: cosmos_params_v1beta1_query_pb.QuerySubspacesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_params_v1beta1_query_pb.QuerySubspacesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.params.v1beta1.Query/Subspaces',
        request,
        metadata || {},
        this.methodDescriptorSubspaces,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.params.v1beta1.Query/Subspaces',
    request,
    metadata || {},
    this.methodDescriptorSubspaces);
  }

}

