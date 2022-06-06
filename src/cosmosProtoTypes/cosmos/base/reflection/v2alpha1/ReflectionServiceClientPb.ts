/**
 * @fileoverview gRPC-Web generated client stub for cosmos.base.reflection.v2alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_base_reflection_v2alpha1_reflection_pb from '../../../../cosmos/base/reflection/v2alpha1/reflection_pb';


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

  methodDescriptorGetAuthnDescriptor = new grpcWeb.MethodDescriptor(
    '/cosmos.base.reflection.v2alpha1.ReflectionService/GetAuthnDescriptor',
    grpcWeb.MethodType.UNARY,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse,
    (request: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse.deserializeBinary
  );

  getAuthnDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse>;

  getAuthnDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse>;

  getAuthnDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetAuthnDescriptorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.reflection.v2alpha1.ReflectionService/GetAuthnDescriptor',
        request,
        metadata || {},
        this.methodDescriptorGetAuthnDescriptor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetAuthnDescriptor',
    request,
    metadata || {},
    this.methodDescriptorGetAuthnDescriptor);
  }

  methodDescriptorGetChainDescriptor = new grpcWeb.MethodDescriptor(
    '/cosmos.base.reflection.v2alpha1.ReflectionService/GetChainDescriptor',
    grpcWeb.MethodType.UNARY,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse,
    (request: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse.deserializeBinary
  );

  getChainDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse>;

  getChainDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse>;

  getChainDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetChainDescriptorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.reflection.v2alpha1.ReflectionService/GetChainDescriptor',
        request,
        metadata || {},
        this.methodDescriptorGetChainDescriptor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetChainDescriptor',
    request,
    metadata || {},
    this.methodDescriptorGetChainDescriptor);
  }

  methodDescriptorGetCodecDescriptor = new grpcWeb.MethodDescriptor(
    '/cosmos.base.reflection.v2alpha1.ReflectionService/GetCodecDescriptor',
    grpcWeb.MethodType.UNARY,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse,
    (request: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse.deserializeBinary
  );

  getCodecDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse>;

  getCodecDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse>;

  getCodecDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetCodecDescriptorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.reflection.v2alpha1.ReflectionService/GetCodecDescriptor',
        request,
        metadata || {},
        this.methodDescriptorGetCodecDescriptor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetCodecDescriptor',
    request,
    metadata || {},
    this.methodDescriptorGetCodecDescriptor);
  }

  methodDescriptorGetConfigurationDescriptor = new grpcWeb.MethodDescriptor(
    '/cosmos.base.reflection.v2alpha1.ReflectionService/GetConfigurationDescriptor',
    grpcWeb.MethodType.UNARY,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse,
    (request: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse.deserializeBinary
  );

  getConfigurationDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse>;

  getConfigurationDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse>;

  getConfigurationDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetConfigurationDescriptorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.reflection.v2alpha1.ReflectionService/GetConfigurationDescriptor',
        request,
        metadata || {},
        this.methodDescriptorGetConfigurationDescriptor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetConfigurationDescriptor',
    request,
    metadata || {},
    this.methodDescriptorGetConfigurationDescriptor);
  }

  methodDescriptorGetQueryServicesDescriptor = new grpcWeb.MethodDescriptor(
    '/cosmos.base.reflection.v2alpha1.ReflectionService/GetQueryServicesDescriptor',
    grpcWeb.MethodType.UNARY,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse,
    (request: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse.deserializeBinary
  );

  getQueryServicesDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse>;

  getQueryServicesDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse>;

  getQueryServicesDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetQueryServicesDescriptorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.reflection.v2alpha1.ReflectionService/GetQueryServicesDescriptor',
        request,
        metadata || {},
        this.methodDescriptorGetQueryServicesDescriptor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetQueryServicesDescriptor',
    request,
    metadata || {},
    this.methodDescriptorGetQueryServicesDescriptor);
  }

  methodDescriptorGetTxDescriptor = new grpcWeb.MethodDescriptor(
    '/cosmos.base.reflection.v2alpha1.ReflectionService/GetTxDescriptor',
    grpcWeb.MethodType.UNARY,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse,
    (request: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest) => {
      return request.serializeBinary();
    },
    cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse.deserializeBinary
  );

  getTxDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse>;

  getTxDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse) => void): grpcWeb.ClientReadableStream<cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse>;

  getTxDescriptor(
    request: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_base_reflection_v2alpha1_reflection_pb.GetTxDescriptorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.base.reflection.v2alpha1.ReflectionService/GetTxDescriptor',
        request,
        metadata || {},
        this.methodDescriptorGetTxDescriptor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetTxDescriptor',
    request,
    metadata || {},
    this.methodDescriptorGetTxDescriptor);
  }

}

