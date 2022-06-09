/**
 * @fileoverview gRPC-Web generated client stub for cosmos.staking.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_staking_v1beta1_tx_pb from '../../../cosmos/staking/v1beta1/tx_pb';


export class MsgClient {
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

  methodDescriptorCreateValidator = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Msg/CreateValidator',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
    cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse,
    (request: cosmos_staking_v1beta1_tx_pb.MsgCreateValidator) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse.deserializeBinary
  );

  createValidator(
    request: cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse>;

  createValidator(
    request: cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse>;

  createValidator(
    request: cosmos_staking_v1beta1_tx_pb.MsgCreateValidator,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_tx_pb.MsgCreateValidatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Msg/CreateValidator',
        request,
        metadata || {},
        this.methodDescriptorCreateValidator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/CreateValidator',
    request,
    metadata || {},
    this.methodDescriptorCreateValidator);
  }

  methodDescriptorEditValidator = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Msg/EditValidator',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
    cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse,
    (request: cosmos_staking_v1beta1_tx_pb.MsgEditValidator) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse.deserializeBinary
  );

  editValidator(
    request: cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse>;

  editValidator(
    request: cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse>;

  editValidator(
    request: cosmos_staking_v1beta1_tx_pb.MsgEditValidator,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_tx_pb.MsgEditValidatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Msg/EditValidator',
        request,
        metadata || {},
        this.methodDescriptorEditValidator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/EditValidator',
    request,
    metadata || {},
    this.methodDescriptorEditValidator);
  }

  methodDescriptorDelegate = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Msg/Delegate',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_tx_pb.MsgDelegate,
    cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse,
    (request: cosmos_staking_v1beta1_tx_pb.MsgDelegate) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse.deserializeBinary
  );

  delegate(
    request: cosmos_staking_v1beta1_tx_pb.MsgDelegate,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse>;

  delegate(
    request: cosmos_staking_v1beta1_tx_pb.MsgDelegate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse>;

  delegate(
    request: cosmos_staking_v1beta1_tx_pb.MsgDelegate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_tx_pb.MsgDelegateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Msg/Delegate',
        request,
        metadata || {},
        this.methodDescriptorDelegate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/Delegate',
    request,
    metadata || {},
    this.methodDescriptorDelegate);
  }

  methodDescriptorBeginRedelegate = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Msg/BeginRedelegate',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
    cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse,
    (request: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse.deserializeBinary
  );

  beginRedelegate(
    request: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse>;

  beginRedelegate(
    request: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse>;

  beginRedelegate(
    request: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_tx_pb.MsgBeginRedelegateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Msg/BeginRedelegate',
        request,
        metadata || {},
        this.methodDescriptorBeginRedelegate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/BeginRedelegate',
    request,
    metadata || {},
    this.methodDescriptorBeginRedelegate);
  }

  methodDescriptorUndelegate = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Msg/Undelegate',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
    cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse,
    (request: cosmos_staking_v1beta1_tx_pb.MsgUndelegate) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse.deserializeBinary
  );

  undelegate(
    request: cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse>;

  undelegate(
    request: cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse>;

  undelegate(
    request: cosmos_staking_v1beta1_tx_pb.MsgUndelegate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_tx_pb.MsgUndelegateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Msg/Undelegate',
        request,
        metadata || {},
        this.methodDescriptorUndelegate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/Undelegate',
    request,
    metadata || {},
    this.methodDescriptorUndelegate);
  }

}

