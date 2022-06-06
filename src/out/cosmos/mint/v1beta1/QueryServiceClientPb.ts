/**
 * @fileoverview gRPC-Web generated client stub for cosmos.mint.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_mint_v1beta1_query_pb from '../../../cosmos/mint/v1beta1/query_pb';


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
    '/cosmos.mint.v1beta1.Query/Params',
    grpcWeb.MethodType.UNARY,
    cosmos_mint_v1beta1_query_pb.QueryParamsRequest,
    cosmos_mint_v1beta1_query_pb.QueryParamsResponse,
    (request: cosmos_mint_v1beta1_query_pb.QueryParamsRequest) => {
      return request.serializeBinary();
    },
    cosmos_mint_v1beta1_query_pb.QueryParamsResponse.deserializeBinary
  );

  params(
    request: cosmos_mint_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_mint_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_mint_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_mint_v1beta1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<cosmos_mint_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_mint_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_mint_v1beta1_query_pb.QueryParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.mint.v1beta1.Query/Params',
        request,
        metadata || {},
        this.methodDescriptorParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.mint.v1beta1.Query/Params',
    request,
    metadata || {},
    this.methodDescriptorParams);
  }

  methodDescriptorInflation = new grpcWeb.MethodDescriptor(
    '/cosmos.mint.v1beta1.Query/Inflation',
    grpcWeb.MethodType.UNARY,
    cosmos_mint_v1beta1_query_pb.QueryInflationRequest,
    cosmos_mint_v1beta1_query_pb.QueryInflationResponse,
    (request: cosmos_mint_v1beta1_query_pb.QueryInflationRequest) => {
      return request.serializeBinary();
    },
    cosmos_mint_v1beta1_query_pb.QueryInflationResponse.deserializeBinary
  );

  inflation(
    request: cosmos_mint_v1beta1_query_pb.QueryInflationRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_mint_v1beta1_query_pb.QueryInflationResponse>;

  inflation(
    request: cosmos_mint_v1beta1_query_pb.QueryInflationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_mint_v1beta1_query_pb.QueryInflationResponse) => void): grpcWeb.ClientReadableStream<cosmos_mint_v1beta1_query_pb.QueryInflationResponse>;

  inflation(
    request: cosmos_mint_v1beta1_query_pb.QueryInflationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_mint_v1beta1_query_pb.QueryInflationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.mint.v1beta1.Query/Inflation',
        request,
        metadata || {},
        this.methodDescriptorInflation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.mint.v1beta1.Query/Inflation',
    request,
    metadata || {},
    this.methodDescriptorInflation);
  }

  methodDescriptorAnnualProvisions = new grpcWeb.MethodDescriptor(
    '/cosmos.mint.v1beta1.Query/AnnualProvisions',
    grpcWeb.MethodType.UNARY,
    cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest,
    cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse,
    (request: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest) => {
      return request.serializeBinary();
    },
    cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse.deserializeBinary
  );

  annualProvisions(
    request: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse>;

  annualProvisions(
    request: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse) => void): grpcWeb.ClientReadableStream<cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse>;

  annualProvisions(
    request: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.mint.v1beta1.Query/AnnualProvisions',
        request,
        metadata || {},
        this.methodDescriptorAnnualProvisions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.mint.v1beta1.Query/AnnualProvisions',
    request,
    metadata || {},
    this.methodDescriptorAnnualProvisions);
  }

}

