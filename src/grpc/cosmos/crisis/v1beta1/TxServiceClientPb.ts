/**
 * @fileoverview gRPC-Web generated client stub for cosmos.crisis.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_crisis_v1beta1_tx_pb from '../../../cosmos/crisis/v1beta1/tx_pb';


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

  methodDescriptorVerifyInvariant = new grpcWeb.MethodDescriptor(
    '/cosmos.crisis.v1beta1.Msg/VerifyInvariant',
    grpcWeb.MethodType.UNARY,
    cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse,
    (request: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant) => {
      return request.serializeBinary();
    },
    cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse.deserializeBinary
  );

  verifyInvariant(
    request: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse>;

  verifyInvariant(
    request: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse) => void): grpcWeb.ClientReadableStream<cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse>;

  verifyInvariant(
    request: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariant,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_crisis_v1beta1_tx_pb.MsgVerifyInvariantResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.crisis.v1beta1.Msg/VerifyInvariant',
        request,
        metadata || {},
        this.methodDescriptorVerifyInvariant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.crisis.v1beta1.Msg/VerifyInvariant',
    request,
    metadata || {},
    this.methodDescriptorVerifyInvariant);
  }

}

