/**
 * @fileoverview gRPC-Web generated client stub for cosmos.slashing.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_slashing_v1beta1_tx_pb from '../../../cosmos/slashing/v1beta1/tx_pb';


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

  methodDescriptorUnjail = new grpcWeb.MethodDescriptor(
    '/cosmos.slashing.v1beta1.Msg/Unjail',
    grpcWeb.MethodType.UNARY,
    cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse,
    (request: cosmos_slashing_v1beta1_tx_pb.MsgUnjail) => {
      return request.serializeBinary();
    },
    cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse.deserializeBinary
  );

  unjail(
    request: cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse>;

  unjail(
    request: cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse) => void): grpcWeb.ClientReadableStream<cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse>;

  unjail(
    request: cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.slashing.v1beta1.Msg/Unjail',
        request,
        metadata || {},
        this.methodDescriptorUnjail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.slashing.v1beta1.Msg/Unjail',
    request,
    metadata || {},
    this.methodDescriptorUnjail);
  }

}

