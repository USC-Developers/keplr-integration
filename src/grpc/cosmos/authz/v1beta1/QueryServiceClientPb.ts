/**
 * @fileoverview gRPC-Web generated client stub for cosmos.authz.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_authz_v1beta1_query_pb from '../../../cosmos/authz/v1beta1/query_pb';


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

  methodDescriptorGrants = new grpcWeb.MethodDescriptor(
    '/cosmos.authz.v1beta1.Query/Grants',
    grpcWeb.MethodType.UNARY,
    cosmos_authz_v1beta1_query_pb.QueryGrantsRequest,
    cosmos_authz_v1beta1_query_pb.QueryGrantsResponse,
    (request: cosmos_authz_v1beta1_query_pb.QueryGrantsRequest) => {
      return request.serializeBinary();
    },
    cosmos_authz_v1beta1_query_pb.QueryGrantsResponse.deserializeBinary
  );

  grants(
    request: cosmos_authz_v1beta1_query_pb.QueryGrantsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_authz_v1beta1_query_pb.QueryGrantsResponse>;

  grants(
    request: cosmos_authz_v1beta1_query_pb.QueryGrantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_query_pb.QueryGrantsResponse) => void): grpcWeb.ClientReadableStream<cosmos_authz_v1beta1_query_pb.QueryGrantsResponse>;

  grants(
    request: cosmos_authz_v1beta1_query_pb.QueryGrantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_query_pb.QueryGrantsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.authz.v1beta1.Query/Grants',
        request,
        metadata || {},
        this.methodDescriptorGrants,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.authz.v1beta1.Query/Grants',
    request,
    metadata || {},
    this.methodDescriptorGrants);
  }

  methodDescriptorGranterGrants = new grpcWeb.MethodDescriptor(
    '/cosmos.authz.v1beta1.Query/GranterGrants',
    grpcWeb.MethodType.UNARY,
    cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest,
    cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse,
    (request: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest) => {
      return request.serializeBinary();
    },
    cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse.deserializeBinary
  );

  granterGrants(
    request: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse>;

  granterGrants(
    request: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse) => void): grpcWeb.ClientReadableStream<cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse>;

  granterGrants(
    request: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.authz.v1beta1.Query/GranterGrants',
        request,
        metadata || {},
        this.methodDescriptorGranterGrants,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.authz.v1beta1.Query/GranterGrants',
    request,
    metadata || {},
    this.methodDescriptorGranterGrants);
  }

  methodDescriptorGranteeGrants = new grpcWeb.MethodDescriptor(
    '/cosmos.authz.v1beta1.Query/GranteeGrants',
    grpcWeb.MethodType.UNARY,
    cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest,
    cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse,
    (request: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest) => {
      return request.serializeBinary();
    },
    cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse.deserializeBinary
  );

  granteeGrants(
    request: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse>;

  granteeGrants(
    request: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse) => void): grpcWeb.ClientReadableStream<cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse>;

  granteeGrants(
    request: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.authz.v1beta1.Query/GranteeGrants',
        request,
        metadata || {},
        this.methodDescriptorGranteeGrants,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.authz.v1beta1.Query/GranteeGrants',
    request,
    metadata || {},
    this.methodDescriptorGranteeGrants);
  }

}

