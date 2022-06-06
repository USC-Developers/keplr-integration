/**
 * @fileoverview gRPC-Web generated client stub for cosmos.nft.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_nft_v1beta1_tx_pb from '../../../cosmos/nft/v1beta1/tx_pb';


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
    '/cosmos.nft.v1beta1.Msg/Send',
    grpcWeb.MethodType.UNARY,
    cosmos_nft_v1beta1_tx_pb.MsgSend,
    cosmos_nft_v1beta1_tx_pb.MsgSendResponse,
    (request: cosmos_nft_v1beta1_tx_pb.MsgSend) => {
      return request.serializeBinary();
    },
    cosmos_nft_v1beta1_tx_pb.MsgSendResponse.deserializeBinary
  );

  send(
    request: cosmos_nft_v1beta1_tx_pb.MsgSend,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_nft_v1beta1_tx_pb.MsgSendResponse>;

  send(
    request: cosmos_nft_v1beta1_tx_pb.MsgSend,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_tx_pb.MsgSendResponse) => void): grpcWeb.ClientReadableStream<cosmos_nft_v1beta1_tx_pb.MsgSendResponse>;

  send(
    request: cosmos_nft_v1beta1_tx_pb.MsgSend,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_nft_v1beta1_tx_pb.MsgSendResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.nft.v1beta1.Msg/Send',
        request,
        metadata || {},
        this.methodDescriptorSend,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.nft.v1beta1.Msg/Send',
    request,
    metadata || {},
    this.methodDescriptorSend);
  }

}

