/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.connection.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ibc_core_connection_v1_tx_pb from '../../../../ibc/core/connection/v1/tx_pb';


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

  methodDescriptorConnectionOpenInit = new grpcWeb.MethodDescriptor(
    '/ibc.core.connection.v1.Msg/ConnectionOpenInit',
    grpcWeb.MethodType.UNARY,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse,
    (request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit) => {
      return request.serializeBinary();
    },
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse.deserializeBinary
  );

  connectionOpenInit(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse>;

  connectionOpenInit(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse) => void): grpcWeb.ClientReadableStream<ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse>;

  connectionOpenInit(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.connection.v1.Msg/ConnectionOpenInit',
        request,
        metadata || {},
        this.methodDescriptorConnectionOpenInit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenInit',
    request,
    metadata || {},
    this.methodDescriptorConnectionOpenInit);
  }

  methodDescriptorConnectionOpenTry = new grpcWeb.MethodDescriptor(
    '/ibc.core.connection.v1.Msg/ConnectionOpenTry',
    grpcWeb.MethodType.UNARY,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse,
    (request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry) => {
      return request.serializeBinary();
    },
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse.deserializeBinary
  );

  connectionOpenTry(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse>;

  connectionOpenTry(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse) => void): grpcWeb.ClientReadableStream<ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse>;

  connectionOpenTry(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.connection.v1.Msg/ConnectionOpenTry',
        request,
        metadata || {},
        this.methodDescriptorConnectionOpenTry,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenTry',
    request,
    metadata || {},
    this.methodDescriptorConnectionOpenTry);
  }

  methodDescriptorConnectionOpenAck = new grpcWeb.MethodDescriptor(
    '/ibc.core.connection.v1.Msg/ConnectionOpenAck',
    grpcWeb.MethodType.UNARY,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse,
    (request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck) => {
      return request.serializeBinary();
    },
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse.deserializeBinary
  );

  connectionOpenAck(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse>;

  connectionOpenAck(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse) => void): grpcWeb.ClientReadableStream<ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse>;

  connectionOpenAck(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.connection.v1.Msg/ConnectionOpenAck',
        request,
        metadata || {},
        this.methodDescriptorConnectionOpenAck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenAck',
    request,
    metadata || {},
    this.methodDescriptorConnectionOpenAck);
  }

  methodDescriptorConnectionOpenConfirm = new grpcWeb.MethodDescriptor(
    '/ibc.core.connection.v1.Msg/ConnectionOpenConfirm',
    grpcWeb.MethodType.UNARY,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse,
    (request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm) => {
      return request.serializeBinary();
    },
    ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse.deserializeBinary
  );

  connectionOpenConfirm(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse>;

  connectionOpenConfirm(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse) => void): grpcWeb.ClientReadableStream<ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse>;

  connectionOpenConfirm(
    request: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.connection.v1.Msg/ConnectionOpenConfirm',
        request,
        metadata || {},
        this.methodDescriptorConnectionOpenConfirm,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenConfirm',
    request,
    metadata || {},
    this.methodDescriptorConnectionOpenConfirm);
  }

}

