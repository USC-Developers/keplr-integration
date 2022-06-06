/**
 * @fileoverview gRPC-Web generated client stub for cosmos.slashing.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_slashing_v1beta1_query_pb from '../../../cosmos/slashing/v1beta1/query_pb';


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
    '/cosmos.slashing.v1beta1.Query/Params',
    grpcWeb.MethodType.UNARY,
    cosmos_slashing_v1beta1_query_pb.QueryParamsRequest,
    cosmos_slashing_v1beta1_query_pb.QueryParamsResponse,
    (request: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest) => {
      return request.serializeBinary();
    },
    cosmos_slashing_v1beta1_query_pb.QueryParamsResponse.deserializeBinary
  );

  params(
    request: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_slashing_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_slashing_v1beta1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<cosmos_slashing_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_slashing_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_slashing_v1beta1_query_pb.QueryParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.slashing.v1beta1.Query/Params',
        request,
        metadata || {},
        this.methodDescriptorParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.slashing.v1beta1.Query/Params',
    request,
    metadata || {},
    this.methodDescriptorParams);
  }

  methodDescriptorSigningInfo = new grpcWeb.MethodDescriptor(
    '/cosmos.slashing.v1beta1.Query/SigningInfo',
    grpcWeb.MethodType.UNARY,
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest,
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse,
    (request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest) => {
      return request.serializeBinary();
    },
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse.deserializeBinary
  );

  signingInfo(
    request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse>;

  signingInfo(
    request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse) => void): grpcWeb.ClientReadableStream<cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse>;

  signingInfo(
    request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.slashing.v1beta1.Query/SigningInfo',
        request,
        metadata || {},
        this.methodDescriptorSigningInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.slashing.v1beta1.Query/SigningInfo',
    request,
    metadata || {},
    this.methodDescriptorSigningInfo);
  }

  methodDescriptorSigningInfos = new grpcWeb.MethodDescriptor(
    '/cosmos.slashing.v1beta1.Query/SigningInfos',
    grpcWeb.MethodType.UNARY,
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest,
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse,
    (request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest) => {
      return request.serializeBinary();
    },
    cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse.deserializeBinary
  );

  signingInfos(
    request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse>;

  signingInfos(
    request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse) => void): grpcWeb.ClientReadableStream<cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse>;

  signingInfos(
    request: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_slashing_v1beta1_query_pb.QuerySigningInfosResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.slashing.v1beta1.Query/SigningInfos',
        request,
        metadata || {},
        this.methodDescriptorSigningInfos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.slashing.v1beta1.Query/SigningInfos',
    request,
    metadata || {},
    this.methodDescriptorSigningInfos);
  }

}

