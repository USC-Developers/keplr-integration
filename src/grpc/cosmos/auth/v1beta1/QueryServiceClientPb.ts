/**
 * @fileoverview gRPC-Web generated client stub for cosmos.auth.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_auth_v1beta1_query_pb from '../../../cosmos/auth/v1beta1/query_pb';


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

  methodDescriptorAccounts = new grpcWeb.MethodDescriptor(
    '/cosmos.auth.v1beta1.Query/Accounts',
    grpcWeb.MethodType.UNARY,
    cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    cosmos_auth_v1beta1_query_pb.QueryAccountsResponse,
    (request: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest) => {
      return request.serializeBinary();
    },
    cosmos_auth_v1beta1_query_pb.QueryAccountsResponse.deserializeBinary
  );

  accounts(
    request: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_auth_v1beta1_query_pb.QueryAccountsResponse>;

  accounts(
    request: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.QueryAccountsResponse) => void): grpcWeb.ClientReadableStream<cosmos_auth_v1beta1_query_pb.QueryAccountsResponse>;

  accounts(
    request: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.QueryAccountsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.auth.v1beta1.Query/Accounts',
        request,
        metadata || {},
        this.methodDescriptorAccounts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Accounts',
    request,
    metadata || {},
    this.methodDescriptorAccounts);
  }

  methodDescriptorAccount = new grpcWeb.MethodDescriptor(
    '/cosmos.auth.v1beta1.Query/Account',
    grpcWeb.MethodType.UNARY,
    cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    cosmos_auth_v1beta1_query_pb.QueryAccountResponse,
    (request: cosmos_auth_v1beta1_query_pb.QueryAccountRequest) => {
      return request.serializeBinary();
    },
    cosmos_auth_v1beta1_query_pb.QueryAccountResponse.deserializeBinary
  );

  account(
    request: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_auth_v1beta1_query_pb.QueryAccountResponse>;

  account(
    request: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.QueryAccountResponse) => void): grpcWeb.ClientReadableStream<cosmos_auth_v1beta1_query_pb.QueryAccountResponse>;

  account(
    request: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.QueryAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.auth.v1beta1.Query/Account',
        request,
        metadata || {},
        this.methodDescriptorAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Account',
    request,
    metadata || {},
    this.methodDescriptorAccount);
  }

  methodDescriptorParams = new grpcWeb.MethodDescriptor(
    '/cosmos.auth.v1beta1.Query/Params',
    grpcWeb.MethodType.UNARY,
    cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    cosmos_auth_v1beta1_query_pb.QueryParamsResponse,
    (request: cosmos_auth_v1beta1_query_pb.QueryParamsRequest) => {
      return request.serializeBinary();
    },
    cosmos_auth_v1beta1_query_pb.QueryParamsResponse.deserializeBinary
  );

  params(
    request: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_auth_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<cosmos_auth_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.QueryParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.auth.v1beta1.Query/Params',
        request,
        metadata || {},
        this.methodDescriptorParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Params',
    request,
    metadata || {},
    this.methodDescriptorParams);
  }

}

