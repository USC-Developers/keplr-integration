/**
 * @fileoverview gRPC-Web generated client stub for cosmos.feegrant.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_feegrant_v1beta1_query_pb from '../../../cosmos/feegrant/v1beta1/query_pb';


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

  methodDescriptorAllowance = new grpcWeb.MethodDescriptor(
    '/cosmos.feegrant.v1beta1.Query/Allowance',
    grpcWeb.MethodType.UNARY,
    cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
    cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse,
    (request: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest) => {
      return request.serializeBinary();
    },
    cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse.deserializeBinary
  );

  allowance(
    request: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse>;

  allowance(
    request: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse) => void): grpcWeb.ClientReadableStream<cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse>;

  allowance(
    request: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_feegrant_v1beta1_query_pb.QueryAllowanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.feegrant.v1beta1.Query/Allowance',
        request,
        metadata || {},
        this.methodDescriptorAllowance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.feegrant.v1beta1.Query/Allowance',
    request,
    metadata || {},
    this.methodDescriptorAllowance);
  }

  methodDescriptorAllowances = new grpcWeb.MethodDescriptor(
    '/cosmos.feegrant.v1beta1.Query/Allowances',
    grpcWeb.MethodType.UNARY,
    cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
    cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse,
    (request: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest) => {
      return request.serializeBinary();
    },
    cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse.deserializeBinary
  );

  allowances(
    request: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse>;

  allowances(
    request: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse) => void): grpcWeb.ClientReadableStream<cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse>;

  allowances(
    request: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.feegrant.v1beta1.Query/Allowances',
        request,
        metadata || {},
        this.methodDescriptorAllowances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.feegrant.v1beta1.Query/Allowances',
    request,
    metadata || {},
    this.methodDescriptorAllowances);
  }

  methodDescriptorAllowancesByGranter = new grpcWeb.MethodDescriptor(
    '/cosmos.feegrant.v1beta1.Query/AllowancesByGranter',
    grpcWeb.MethodType.UNARY,
    cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterRequest,
    cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterResponse,
    (request: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterRequest) => {
      return request.serializeBinary();
    },
    cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterResponse.deserializeBinary
  );

  allowancesByGranter(
    request: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterResponse>;

  allowancesByGranter(
    request: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterResponse) => void): grpcWeb.ClientReadableStream<cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterResponse>;

  allowancesByGranter(
    request: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_feegrant_v1beta1_query_pb.QueryAllowancesByGranterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.feegrant.v1beta1.Query/AllowancesByGranter',
        request,
        metadata || {},
        this.methodDescriptorAllowancesByGranter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.feegrant.v1beta1.Query/AllowancesByGranter',
    request,
    metadata || {},
    this.methodDescriptorAllowancesByGranter);
  }

}

