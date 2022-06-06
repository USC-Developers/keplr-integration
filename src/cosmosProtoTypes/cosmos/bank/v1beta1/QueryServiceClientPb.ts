/**
 * @fileoverview gRPC-Web generated client stub for cosmos.bank.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_bank_v1beta1_query_pb from '../../../cosmos/bank/v1beta1/query_pb';


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

  methodDescriptorBalance = new grpcWeb.MethodDescriptor(
    '/cosmos.bank.v1beta1.Query/Balance',
    grpcWeb.MethodType.UNARY,
    cosmos_bank_v1beta1_query_pb.QueryBalanceRequest,
    cosmos_bank_v1beta1_query_pb.QueryBalanceResponse,
    (request: cosmos_bank_v1beta1_query_pb.QueryBalanceRequest) => {
      return request.serializeBinary();
    },
    cosmos_bank_v1beta1_query_pb.QueryBalanceResponse.deserializeBinary
  );

  balance(
    request: cosmos_bank_v1beta1_query_pb.QueryBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_bank_v1beta1_query_pb.QueryBalanceResponse>;

  balance(
    request: cosmos_bank_v1beta1_query_pb.QueryBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryBalanceResponse) => void): grpcWeb.ClientReadableStream<cosmos_bank_v1beta1_query_pb.QueryBalanceResponse>;

  balance(
    request: cosmos_bank_v1beta1_query_pb.QueryBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryBalanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.bank.v1beta1.Query/Balance',
        request,
        metadata || {},
        this.methodDescriptorBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.bank.v1beta1.Query/Balance',
    request,
    metadata || {},
    this.methodDescriptorBalance);
  }

  methodDescriptorAllBalances = new grpcWeb.MethodDescriptor(
    '/cosmos.bank.v1beta1.Query/AllBalances',
    grpcWeb.MethodType.UNARY,
    cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest,
    cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse,
    (request: cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest) => {
      return request.serializeBinary();
    },
    cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse.deserializeBinary
  );

  allBalances(
    request: cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse>;

  allBalances(
    request: cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse) => void): grpcWeb.ClientReadableStream<cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse>;

  allBalances(
    request: cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryAllBalancesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.bank.v1beta1.Query/AllBalances',
        request,
        metadata || {},
        this.methodDescriptorAllBalances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.bank.v1beta1.Query/AllBalances',
    request,
    metadata || {},
    this.methodDescriptorAllBalances);
  }

  methodDescriptorSpendableBalances = new grpcWeb.MethodDescriptor(
    '/cosmos.bank.v1beta1.Query/SpendableBalances',
    grpcWeb.MethodType.UNARY,
    cosmos_bank_v1beta1_query_pb.QuerySpendableBalancesRequest,
    cosmos_bank_v1beta1_query_pb.QuerySpendableBalancesResponse,
    (request: cosmos_bank_v1beta1_query_pb.QuerySpendableBalancesRequest) => {
      return request.serializeBinary();
    },
    cosmos_bank_v1beta1_query_pb.QuerySpendableBalancesResponse.deserializeBinary
  );

  spendableBalances(
    request: cosmos_bank_v1beta1_query_pb.QuerySpendableBalancesRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_bank_v1beta1_query_pb.QuerySpendableBalancesResponse>;

  spendableBalances(
    request: cosmos_bank_v1beta1_query_pb.QuerySpendableBalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QuerySpendableBalancesResponse) => void): grpcWeb.ClientReadableStream<cosmos_bank_v1beta1_query_pb.QuerySpendableBalancesResponse>;

  spendableBalances(
    request: cosmos_bank_v1beta1_query_pb.QuerySpendableBalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QuerySpendableBalancesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.bank.v1beta1.Query/SpendableBalances',
        request,
        metadata || {},
        this.methodDescriptorSpendableBalances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.bank.v1beta1.Query/SpendableBalances',
    request,
    metadata || {},
    this.methodDescriptorSpendableBalances);
  }

  methodDescriptorTotalSupply = new grpcWeb.MethodDescriptor(
    '/cosmos.bank.v1beta1.Query/TotalSupply',
    grpcWeb.MethodType.UNARY,
    cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest,
    cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse,
    (request: cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest) => {
      return request.serializeBinary();
    },
    cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse.deserializeBinary
  );

  totalSupply(
    request: cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse>;

  totalSupply(
    request: cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse) => void): grpcWeb.ClientReadableStream<cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse>;

  totalSupply(
    request: cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryTotalSupplyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.bank.v1beta1.Query/TotalSupply',
        request,
        metadata || {},
        this.methodDescriptorTotalSupply,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.bank.v1beta1.Query/TotalSupply',
    request,
    metadata || {},
    this.methodDescriptorTotalSupply);
  }

  methodDescriptorSupplyOf = new grpcWeb.MethodDescriptor(
    '/cosmos.bank.v1beta1.Query/SupplyOf',
    grpcWeb.MethodType.UNARY,
    cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest,
    cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse,
    (request: cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest) => {
      return request.serializeBinary();
    },
    cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse.deserializeBinary
  );

  supplyOf(
    request: cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse>;

  supplyOf(
    request: cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse) => void): grpcWeb.ClientReadableStream<cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse>;

  supplyOf(
    request: cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QuerySupplyOfResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.bank.v1beta1.Query/SupplyOf',
        request,
        metadata || {},
        this.methodDescriptorSupplyOf,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.bank.v1beta1.Query/SupplyOf',
    request,
    metadata || {},
    this.methodDescriptorSupplyOf);
  }

  methodDescriptorParams = new grpcWeb.MethodDescriptor(
    '/cosmos.bank.v1beta1.Query/Params',
    grpcWeb.MethodType.UNARY,
    cosmos_bank_v1beta1_query_pb.QueryParamsRequest,
    cosmos_bank_v1beta1_query_pb.QueryParamsResponse,
    (request: cosmos_bank_v1beta1_query_pb.QueryParamsRequest) => {
      return request.serializeBinary();
    },
    cosmos_bank_v1beta1_query_pb.QueryParamsResponse.deserializeBinary
  );

  params(
    request: cosmos_bank_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_bank_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_bank_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<cosmos_bank_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_bank_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.bank.v1beta1.Query/Params',
        request,
        metadata || {},
        this.methodDescriptorParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.bank.v1beta1.Query/Params',
    request,
    metadata || {},
    this.methodDescriptorParams);
  }

  methodDescriptorDenomMetadata = new grpcWeb.MethodDescriptor(
    '/cosmos.bank.v1beta1.Query/DenomMetadata',
    grpcWeb.MethodType.UNARY,
    cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest,
    cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse,
    (request: cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest) => {
      return request.serializeBinary();
    },
    cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse.deserializeBinary
  );

  denomMetadata(
    request: cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse>;

  denomMetadata(
    request: cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse) => void): grpcWeb.ClientReadableStream<cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse>;

  denomMetadata(
    request: cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryDenomMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.bank.v1beta1.Query/DenomMetadata',
        request,
        metadata || {},
        this.methodDescriptorDenomMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.bank.v1beta1.Query/DenomMetadata',
    request,
    metadata || {},
    this.methodDescriptorDenomMetadata);
  }

  methodDescriptorDenomsMetadata = new grpcWeb.MethodDescriptor(
    '/cosmos.bank.v1beta1.Query/DenomsMetadata',
    grpcWeb.MethodType.UNARY,
    cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest,
    cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse,
    (request: cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest) => {
      return request.serializeBinary();
    },
    cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse.deserializeBinary
  );

  denomsMetadata(
    request: cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse>;

  denomsMetadata(
    request: cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse) => void): grpcWeb.ClientReadableStream<cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse>;

  denomsMetadata(
    request: cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.bank.v1beta1.Query/DenomsMetadata',
        request,
        metadata || {},
        this.methodDescriptorDenomsMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.bank.v1beta1.Query/DenomsMetadata',
    request,
    metadata || {},
    this.methodDescriptorDenomsMetadata);
  }

  methodDescriptorDenomOwners = new grpcWeb.MethodDescriptor(
    '/cosmos.bank.v1beta1.Query/DenomOwners',
    grpcWeb.MethodType.UNARY,
    cosmos_bank_v1beta1_query_pb.QueryDenomOwnersRequest,
    cosmos_bank_v1beta1_query_pb.QueryDenomOwnersResponse,
    (request: cosmos_bank_v1beta1_query_pb.QueryDenomOwnersRequest) => {
      return request.serializeBinary();
    },
    cosmos_bank_v1beta1_query_pb.QueryDenomOwnersResponse.deserializeBinary
  );

  denomOwners(
    request: cosmos_bank_v1beta1_query_pb.QueryDenomOwnersRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_bank_v1beta1_query_pb.QueryDenomOwnersResponse>;

  denomOwners(
    request: cosmos_bank_v1beta1_query_pb.QueryDenomOwnersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryDenomOwnersResponse) => void): grpcWeb.ClientReadableStream<cosmos_bank_v1beta1_query_pb.QueryDenomOwnersResponse>;

  denomOwners(
    request: cosmos_bank_v1beta1_query_pb.QueryDenomOwnersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_query_pb.QueryDenomOwnersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.bank.v1beta1.Query/DenomOwners',
        request,
        metadata || {},
        this.methodDescriptorDenomOwners,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.bank.v1beta1.Query/DenomOwners',
    request,
    metadata || {},
    this.methodDescriptorDenomOwners);
  }

}

