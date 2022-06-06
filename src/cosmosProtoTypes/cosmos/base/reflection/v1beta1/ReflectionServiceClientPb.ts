/**
 * @fileoverview gRPC-Web generated client stub for cosmos.base.reflection.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_base_reflection_v1beta1_reflection_pb from '../../../../cosmos/base/reflection/v1beta1/reflection_pb';


export class ReflectionServiceClient {
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

  methodDescriptorListAllInterfaces = new grpcWeb.MethodDescriptor(
    '/cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces',
    grpcWeb.MethodType.UNARY,
    cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse,
    (request: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse.deserializeBinary
  );

  listAllInterfaces(
    request: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse>;

  listAllInterfaces(
    request: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse>;

  listAllInterfaces(
    request: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v1beta1_reflection_pb.ListAllInterfacesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces',
        request,
        metadata || {},
        this.methodDescriptorListAllInterfaces,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces',
    request,
    metadata || {},
    this.methodDescriptorListAllInterfaces);
  }

  methodDescriptorListImplementations = new grpcWeb.MethodDescriptor(
    '/cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations',
    grpcWeb.MethodType.UNARY,
    cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse,
    (request: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse.deserializeBinary
  );

  listImplementations(
    request: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse>;

  listImplementations(
    request: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse>;

  listImplementations(
    request: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v1beta1_reflection_pb.ListImplementationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations',
        request,
        metadata || {},
        this.methodDescriptorListImplementations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations',
    request,
    metadata || {},
    this.methodDescriptorListImplementations);
  }

}

