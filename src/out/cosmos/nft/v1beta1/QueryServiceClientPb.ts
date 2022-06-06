/**
 * @fileoverview gRPC-Web generated client stub for cosmos.nft.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_nft_v1beta1_query_pb from '../../../cosmos/nft/v1beta1/query_pb';


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
    '/cosmos.nft.v1beta1.Query/Balance',
    grpcWeb.MethodType.UNARY,
    cosmos_nft_v1beta1_query_pb.QueryBalanceRequest,
    cosmos_nft_v1beta1_query_pb.QueryBalanceResponse,
    (request: cosmos_nft_v1beta1_query_pb.QueryBalanceRequest) => {
      return request.serializeBinary();
    },
    cosmos_nft_v1beta1_query_pb.QueryBalanceResponse.deserializeBinary
  );

  balance(
    request: cosmos_nft_v1beta1_query_pb.QueryBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_nft_v1beta1_query_pb.QueryBalanceResponse>;

  balance(
    request: cosmos_nft_v1beta1_query_pb.QueryBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryBalanceResponse) => void): grpcWeb.ClientReadableStream<cosmos_nft_v1beta1_query_pb.QueryBalanceResponse>;

  balance(
    request: cosmos_nft_v1beta1_query_pb.QueryBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryBalanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.nft.v1beta1.Query/Balance',
        request,
        metadata || {},
        this.methodDescriptorBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Balance',
    request,
    metadata || {},
    this.methodDescriptorBalance);
  }

  methodDescriptorOwner = new grpcWeb.MethodDescriptor(
    '/cosmos.nft.v1beta1.Query/Owner',
    grpcWeb.MethodType.UNARY,
    cosmos_nft_v1beta1_query_pb.QueryOwnerRequest,
    cosmos_nft_v1beta1_query_pb.QueryOwnerResponse,
    (request: cosmos_nft_v1beta1_query_pb.QueryOwnerRequest) => {
      return request.serializeBinary();
    },
    cosmos_nft_v1beta1_query_pb.QueryOwnerResponse.deserializeBinary
  );

  owner(
    request: cosmos_nft_v1beta1_query_pb.QueryOwnerRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_nft_v1beta1_query_pb.QueryOwnerResponse>;

  owner(
    request: cosmos_nft_v1beta1_query_pb.QueryOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryOwnerResponse) => void): grpcWeb.ClientReadableStream<cosmos_nft_v1beta1_query_pb.QueryOwnerResponse>;

  owner(
    request: cosmos_nft_v1beta1_query_pb.QueryOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryOwnerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.nft.v1beta1.Query/Owner',
        request,
        metadata || {},
        this.methodDescriptorOwner,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Owner',
    request,
    metadata || {},
    this.methodDescriptorOwner);
  }

  methodDescriptorSupply = new grpcWeb.MethodDescriptor(
    '/cosmos.nft.v1beta1.Query/Supply',
    grpcWeb.MethodType.UNARY,
    cosmos_nft_v1beta1_query_pb.QuerySupplyRequest,
    cosmos_nft_v1beta1_query_pb.QuerySupplyResponse,
    (request: cosmos_nft_v1beta1_query_pb.QuerySupplyRequest) => {
      return request.serializeBinary();
    },
    cosmos_nft_v1beta1_query_pb.QuerySupplyResponse.deserializeBinary
  );

  supply(
    request: cosmos_nft_v1beta1_query_pb.QuerySupplyRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_nft_v1beta1_query_pb.QuerySupplyResponse>;

  supply(
    request: cosmos_nft_v1beta1_query_pb.QuerySupplyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QuerySupplyResponse) => void): grpcWeb.ClientReadableStream<cosmos_nft_v1beta1_query_pb.QuerySupplyResponse>;

  supply(
    request: cosmos_nft_v1beta1_query_pb.QuerySupplyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QuerySupplyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.nft.v1beta1.Query/Supply',
        request,
        metadata || {},
        this.methodDescriptorSupply,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Supply',
    request,
    metadata || {},
    this.methodDescriptorSupply);
  }

  methodDescriptorNFTs = new grpcWeb.MethodDescriptor(
    '/cosmos.nft.v1beta1.Query/NFTs',
    grpcWeb.MethodType.UNARY,
    cosmos_nft_v1beta1_query_pb.QueryNFTsRequest,
    cosmos_nft_v1beta1_query_pb.QueryNFTsResponse,
    (request: cosmos_nft_v1beta1_query_pb.QueryNFTsRequest) => {
      return request.serializeBinary();
    },
    cosmos_nft_v1beta1_query_pb.QueryNFTsResponse.deserializeBinary
  );

  nFTs(
    request: cosmos_nft_v1beta1_query_pb.QueryNFTsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_nft_v1beta1_query_pb.QueryNFTsResponse>;

  nFTs(
    request: cosmos_nft_v1beta1_query_pb.QueryNFTsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryNFTsResponse) => void): grpcWeb.ClientReadableStream<cosmos_nft_v1beta1_query_pb.QueryNFTsResponse>;

  nFTs(
    request: cosmos_nft_v1beta1_query_pb.QueryNFTsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryNFTsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.nft.v1beta1.Query/NFTs',
        request,
        metadata || {},
        this.methodDescriptorNFTs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.nft.v1beta1.Query/NFTs',
    request,
    metadata || {},
    this.methodDescriptorNFTs);
  }

  methodDescriptorNFT = new grpcWeb.MethodDescriptor(
    '/cosmos.nft.v1beta1.Query/NFT',
    grpcWeb.MethodType.UNARY,
    cosmos_nft_v1beta1_query_pb.QueryNFTRequest,
    cosmos_nft_v1beta1_query_pb.QueryNFTResponse,
    (request: cosmos_nft_v1beta1_query_pb.QueryNFTRequest) => {
      return request.serializeBinary();
    },
    cosmos_nft_v1beta1_query_pb.QueryNFTResponse.deserializeBinary
  );

  nFT(
    request: cosmos_nft_v1beta1_query_pb.QueryNFTRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_nft_v1beta1_query_pb.QueryNFTResponse>;

  nFT(
    request: cosmos_nft_v1beta1_query_pb.QueryNFTRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryNFTResponse) => void): grpcWeb.ClientReadableStream<cosmos_nft_v1beta1_query_pb.QueryNFTResponse>;

  nFT(
    request: cosmos_nft_v1beta1_query_pb.QueryNFTRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryNFTResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.nft.v1beta1.Query/NFT',
        request,
        metadata || {},
        this.methodDescriptorNFT,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.nft.v1beta1.Query/NFT',
    request,
    metadata || {},
    this.methodDescriptorNFT);
  }

  methodDescriptorClass = new grpcWeb.MethodDescriptor(
    '/cosmos.nft.v1beta1.Query/Class',
    grpcWeb.MethodType.UNARY,
    cosmos_nft_v1beta1_query_pb.QueryClassRequest,
    cosmos_nft_v1beta1_query_pb.QueryClassResponse,
    (request: cosmos_nft_v1beta1_query_pb.QueryClassRequest) => {
      return request.serializeBinary();
    },
    cosmos_nft_v1beta1_query_pb.QueryClassResponse.deserializeBinary
  );

  class(
    request: cosmos_nft_v1beta1_query_pb.QueryClassRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_nft_v1beta1_query_pb.QueryClassResponse>;

  class(
    request: cosmos_nft_v1beta1_query_pb.QueryClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryClassResponse) => void): grpcWeb.ClientReadableStream<cosmos_nft_v1beta1_query_pb.QueryClassResponse>;

  class(
    request: cosmos_nft_v1beta1_query_pb.QueryClassRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryClassResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.nft.v1beta1.Query/Class',
        request,
        metadata || {},
        this.methodDescriptorClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Class',
    request,
    metadata || {},
    this.methodDescriptorClass);
  }

  methodDescriptorClasses = new grpcWeb.MethodDescriptor(
    '/cosmos.nft.v1beta1.Query/Classes',
    grpcWeb.MethodType.UNARY,
    cosmos_nft_v1beta1_query_pb.QueryClassesRequest,
    cosmos_nft_v1beta1_query_pb.QueryClassesResponse,
    (request: cosmos_nft_v1beta1_query_pb.QueryClassesRequest) => {
      return request.serializeBinary();
    },
    cosmos_nft_v1beta1_query_pb.QueryClassesResponse.deserializeBinary
  );

  classes(
    request: cosmos_nft_v1beta1_query_pb.QueryClassesRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_nft_v1beta1_query_pb.QueryClassesResponse>;

  classes(
    request: cosmos_nft_v1beta1_query_pb.QueryClassesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryClassesResponse) => void): grpcWeb.ClientReadableStream<cosmos_nft_v1beta1_query_pb.QueryClassesResponse>;

  classes(
    request: cosmos_nft_v1beta1_query_pb.QueryClassesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_query_pb.QueryClassesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.nft.v1beta1.Query/Classes',
        request,
        metadata || {},
        this.methodDescriptorClasses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Classes',
    request,
    metadata || {},
    this.methodDescriptorClasses);
  }

}

