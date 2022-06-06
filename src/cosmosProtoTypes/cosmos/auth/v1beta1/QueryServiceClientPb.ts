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

  methodDescriptorModuleAccounts = new grpcWeb.MethodDescriptor(
    '/cosmos.auth.v1beta1.Query/ModuleAccounts',
    grpcWeb.MethodType.UNARY,
    cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest,
    cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse,
    (request: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest) => {
      return request.serializeBinary();
    },
    cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse.deserializeBinary
  );

  moduleAccounts(
    request: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse>;

  moduleAccounts(
    request: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse) => void): grpcWeb.ClientReadableStream<cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse>;

  moduleAccounts(
    request: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.auth.v1beta1.Query/ModuleAccounts',
        request,
        metadata || {},
        this.methodDescriptorModuleAccounts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.auth.v1beta1.Query/ModuleAccounts',
    request,
    metadata || {},
    this.methodDescriptorModuleAccounts);
  }

  methodDescriptorBech32Prefix = new grpcWeb.MethodDescriptor(
    '/cosmos.auth.v1beta1.Query/Bech32Prefix',
    grpcWeb.MethodType.UNARY,
    cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest,
    cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse,
    (request: cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest) => {
      return request.serializeBinary();
    },
    cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse.deserializeBinary
  );

  bech32Prefix(
    request: cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse>;

  bech32Prefix(
    request: cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse) => void): grpcWeb.ClientReadableStream<cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse>;

  bech32Prefix(
    request: cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.auth.v1beta1.Query/Bech32Prefix',
        request,
        metadata || {},
        this.methodDescriptorBech32Prefix,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Bech32Prefix',
    request,
    metadata || {},
    this.methodDescriptorBech32Prefix);
  }

  methodDescriptorAddressBytesToString = new grpcWeb.MethodDescriptor(
    '/cosmos.auth.v1beta1.Query/AddressBytesToString',
    grpcWeb.MethodType.UNARY,
    cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest,
    cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse,
    (request: cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest) => {
      return request.serializeBinary();
    },
    cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse.deserializeBinary
  );

  addressBytesToString(
    request: cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse>;

  addressBytesToString(
    request: cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse) => void): grpcWeb.ClientReadableStream<cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse>;

  addressBytesToString(
    request: cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.auth.v1beta1.Query/AddressBytesToString',
        request,
        metadata || {},
        this.methodDescriptorAddressBytesToString,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.auth.v1beta1.Query/AddressBytesToString',
    request,
    metadata || {},
    this.methodDescriptorAddressBytesToString);
  }

  methodDescriptorAddressStringToBytes = new grpcWeb.MethodDescriptor(
    '/cosmos.auth.v1beta1.Query/AddressStringToBytes',
    grpcWeb.MethodType.UNARY,
    cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest,
    cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse,
    (request: cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest) => {
      return request.serializeBinary();
    },
    cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse.deserializeBinary
  );

  addressStringToBytes(
    request: cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse>;

  addressStringToBytes(
    request: cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse) => void): grpcWeb.ClientReadableStream<cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse>;

  addressStringToBytes(
    request: cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.auth.v1beta1.Query/AddressStringToBytes',
        request,
        metadata || {},
        this.methodDescriptorAddressStringToBytes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.auth.v1beta1.Query/AddressStringToBytes',
    request,
    metadata || {},
    this.methodDescriptorAddressStringToBytes);
  }

}

