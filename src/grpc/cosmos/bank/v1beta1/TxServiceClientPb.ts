/**
 * @fileoverview gRPC-Web generated client stub for cosmos.bank.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_bank_v1beta1_tx_pb from '../../../cosmos/bank/v1beta1/tx_pb';


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

  methodDescriptorSend = new grpcWeb.MethodDescriptor(
    '/cosmos.bank.v1beta1.Msg/Send',
    grpcWeb.MethodType.UNARY,
    cosmos_bank_v1beta1_tx_pb.MsgSend,
    cosmos_bank_v1beta1_tx_pb.MsgSendResponse,
    (request: cosmos_bank_v1beta1_tx_pb.MsgSend) => {
      return request.serializeBinary();
    },
    cosmos_bank_v1beta1_tx_pb.MsgSendResponse.deserializeBinary
  );

  send(
    request: cosmos_bank_v1beta1_tx_pb.MsgSend,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_bank_v1beta1_tx_pb.MsgSendResponse>;

  send(
    request: cosmos_bank_v1beta1_tx_pb.MsgSend,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_tx_pb.MsgSendResponse) => void): grpcWeb.ClientReadableStream<cosmos_bank_v1beta1_tx_pb.MsgSendResponse>;

  send(
    request: cosmos_bank_v1beta1_tx_pb.MsgSend,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_tx_pb.MsgSendResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.bank.v1beta1.Msg/Send',
        request,
        metadata || {},
        this.methodDescriptorSend,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.bank.v1beta1.Msg/Send',
    request,
    metadata || {},
    this.methodDescriptorSend);
  }

  methodDescriptorMultiSend = new grpcWeb.MethodDescriptor(
    '/cosmos.bank.v1beta1.Msg/MultiSend',
    grpcWeb.MethodType.UNARY,
    cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
    cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse,
    (request: cosmos_bank_v1beta1_tx_pb.MsgMultiSend) => {
      return request.serializeBinary();
    },
    cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse.deserializeBinary
  );

  multiSend(
    request: cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse>;

  multiSend(
    request: cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse) => void): grpcWeb.ClientReadableStream<cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse>;

  multiSend(
    request: cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.bank.v1beta1.Msg/MultiSend',
        request,
        metadata || {},
        this.methodDescriptorMultiSend,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.bank.v1beta1.Msg/MultiSend',
    request,
    metadata || {},
    this.methodDescriptorMultiSend);
  }

}

