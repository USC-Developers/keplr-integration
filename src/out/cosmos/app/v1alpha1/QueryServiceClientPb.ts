/**
 * @fileoverview gRPC-Web generated client stub for cosmos.app.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_app_v1alpha1_query_pb from '../../../cosmos/app/v1alpha1/query_pb';


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

  methodDescriptorConfig = new grpcWeb.MethodDescriptor(
    '/cosmos.app.v1alpha1.Query/Config',
    grpcWeb.MethodType.UNARY,
    cosmos_app_v1alpha1_query_pb.QueryConfigRequest,
    cosmos_app_v1alpha1_query_pb.QueryConfigResponse,
    (request: cosmos_app_v1alpha1_query_pb.QueryConfigRequest) => {
      return request.serializeBinary();
    },
    cosmos_app_v1alpha1_query_pb.QueryConfigResponse.deserializeBinary
  );

  config(
    request: cosmos_app_v1alpha1_query_pb.QueryConfigRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_app_v1alpha1_query_pb.QueryConfigResponse>;

  config(
    request: cosmos_app_v1alpha1_query_pb.QueryConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_app_v1alpha1_query_pb.QueryConfigResponse) => void): grpcWeb.ClientReadableStream<cosmos_app_v1alpha1_query_pb.QueryConfigResponse>;

  config(
    request: cosmos_app_v1alpha1_query_pb.QueryConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_app_v1alpha1_query_pb.QueryConfigResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.app.v1alpha1.Query/Config',
        request,
        metadata || {},
        this.methodDescriptorConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.app.v1alpha1.Query/Config',
    request,
    metadata || {},
    this.methodDescriptorConfig);
  }

}

