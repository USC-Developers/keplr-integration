/**
 * @fileoverview gRPC-Web generated client stub for gaia.usc.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as gaia_usc_v1beta1_query_pb from '../../../gaia/usc/v1beta1/query_pb';


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

  methodDescriptorPool = new grpcWeb.MethodDescriptor(
    '/gaia.usc.v1beta1.Query/Pool',
    grpcWeb.MethodType.UNARY,
    gaia_usc_v1beta1_query_pb.QueryPoolRequest,
    gaia_usc_v1beta1_query_pb.QueryPoolResponse,
    (request: gaia_usc_v1beta1_query_pb.QueryPoolRequest) => {
      return request.serializeBinary();
    },
    gaia_usc_v1beta1_query_pb.QueryPoolResponse.deserializeBinary
  );

  pool(
    request: gaia_usc_v1beta1_query_pb.QueryPoolRequest,
    metadata: grpcWeb.Metadata | null): Promise<gaia_usc_v1beta1_query_pb.QueryPoolResponse>;

  pool(
    request: gaia_usc_v1beta1_query_pb.QueryPoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gaia_usc_v1beta1_query_pb.QueryPoolResponse) => void): grpcWeb.ClientReadableStream<gaia_usc_v1beta1_query_pb.QueryPoolResponse>;

  pool(
    request: gaia_usc_v1beta1_query_pb.QueryPoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gaia_usc_v1beta1_query_pb.QueryPoolResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaia.usc.v1beta1.Query/Pool',
        request,
        metadata || {},
        this.methodDescriptorPool,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaia.usc.v1beta1.Query/Pool',
    request,
    metadata || {},
    this.methodDescriptorPool);
  }

  methodDescriptorParams = new grpcWeb.MethodDescriptor(
    '/gaia.usc.v1beta1.Query/Params',
    grpcWeb.MethodType.UNARY,
    gaia_usc_v1beta1_query_pb.QueryParamsRequest,
    gaia_usc_v1beta1_query_pb.QueryParamsResponse,
    (request: gaia_usc_v1beta1_query_pb.QueryParamsRequest) => {
      return request.serializeBinary();
    },
    gaia_usc_v1beta1_query_pb.QueryParamsResponse.deserializeBinary
  );

  params(
    request: gaia_usc_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<gaia_usc_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: gaia_usc_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gaia_usc_v1beta1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<gaia_usc_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: gaia_usc_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gaia_usc_v1beta1_query_pb.QueryParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaia.usc.v1beta1.Query/Params',
        request,
        metadata || {},
        this.methodDescriptorParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaia.usc.v1beta1.Query/Params',
    request,
    metadata || {},
    this.methodDescriptorParams);
  }

}

