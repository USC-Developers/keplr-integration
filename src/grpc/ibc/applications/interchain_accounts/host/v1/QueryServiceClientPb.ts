/**
 * @fileoverview gRPC-Web generated client stub for ibc.applications.interchain_accounts.host.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ibc_applications_interchain_accounts_host_v1_query_pb from '../../../../../ibc/applications/interchain_accounts/host/v1/query_pb';


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
    '/ibc.applications.interchain_accounts.host.v1.Query/Params',
    grpcWeb.MethodType.UNARY,
    ibc_applications_interchain_accounts_host_v1_query_pb.QueryParamsRequest,
    ibc_applications_interchain_accounts_host_v1_query_pb.QueryParamsResponse,
    (request: ibc_applications_interchain_accounts_host_v1_query_pb.QueryParamsRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_interchain_accounts_host_v1_query_pb.QueryParamsResponse.deserializeBinary
  );

  params(
    request: ibc_applications_interchain_accounts_host_v1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_interchain_accounts_host_v1_query_pb.QueryParamsResponse>;

  params(
    request: ibc_applications_interchain_accounts_host_v1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_interchain_accounts_host_v1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_interchain_accounts_host_v1_query_pb.QueryParamsResponse>;

  params(
    request: ibc_applications_interchain_accounts_host_v1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_interchain_accounts_host_v1_query_pb.QueryParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.interchain_accounts.host.v1.Query/Params',
        request,
        metadata || {},
        this.methodDescriptorParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.interchain_accounts.host.v1.Query/Params',
    request,
    metadata || {},
    this.methodDescriptorParams);
  }

}

