/**
 * @fileoverview gRPC-Web generated client stub for ibc.applications.transfer.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ibc_applications_transfer_v1_query_pb from '../../../../ibc/applications/transfer/v1/query_pb';


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

  methodDescriptorDenomTrace = new grpcWeb.MethodDescriptor(
    '/ibc.applications.transfer.v1.Query/DenomTrace',
    grpcWeb.MethodType.UNARY,
    ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse,
    (request: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse.deserializeBinary
  );

  denomTrace(
    request: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse>;

  denomTrace(
    request: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse>;

  denomTrace(
    request: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.transfer.v1.Query/DenomTrace',
        request,
        metadata || {},
        this.methodDescriptorDenomTrace,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.transfer.v1.Query/DenomTrace',
    request,
    metadata || {},
    this.methodDescriptorDenomTrace);
  }

  methodDescriptorDenomTraces = new grpcWeb.MethodDescriptor(
    '/ibc.applications.transfer.v1.Query/DenomTraces',
    grpcWeb.MethodType.UNARY,
    ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse,
    (request: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse.deserializeBinary
  );

  denomTraces(
    request: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse>;

  denomTraces(
    request: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse>;

  denomTraces(
    request: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.transfer.v1.Query/DenomTraces',
        request,
        metadata || {},
        this.methodDescriptorDenomTraces,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.transfer.v1.Query/DenomTraces',
    request,
    metadata || {},
    this.methodDescriptorDenomTraces);
  }

  methodDescriptorParams = new grpcWeb.MethodDescriptor(
    '/ibc.applications.transfer.v1.Query/Params',
    grpcWeb.MethodType.UNARY,
    ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    ibc_applications_transfer_v1_query_pb.QueryParamsResponse,
    (request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_transfer_v1_query_pb.QueryParamsResponse.deserializeBinary
  );

  params(
    request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_transfer_v1_query_pb.QueryParamsResponse>;

  params(
    request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_transfer_v1_query_pb.QueryParamsResponse>;

  params(
    request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.transfer.v1.Query/Params',
        request,
        metadata || {},
        this.methodDescriptorParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.transfer.v1.Query/Params',
    request,
    metadata || {},
    this.methodDescriptorParams);
  }

}

