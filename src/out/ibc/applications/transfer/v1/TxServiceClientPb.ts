/**
 * @fileoverview gRPC-Web generated client stub for ibc.applications.transfer.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ibc_applications_transfer_v1_tx_pb from '../../../../ibc/applications/transfer/v1/tx_pb';


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

  methodDescriptorTransfer = new grpcWeb.MethodDescriptor(
    '/ibc.applications.transfer.v1.Msg/Transfer',
    grpcWeb.MethodType.UNARY,
    ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    ibc_applications_transfer_v1_tx_pb.MsgTransferResponse,
    (request: ibc_applications_transfer_v1_tx_pb.MsgTransfer) => {
      return request.serializeBinary();
    },
    ibc_applications_transfer_v1_tx_pb.MsgTransferResponse.deserializeBinary
  );

  transfer(
    request: ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_transfer_v1_tx_pb.MsgTransferResponse>;

  transfer(
    request: ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_transfer_v1_tx_pb.MsgTransferResponse>;

  transfer(
    request: ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.transfer.v1.Msg/Transfer',
        request,
        metadata || {},
        this.methodDescriptorTransfer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.transfer.v1.Msg/Transfer',
    request,
    metadata || {},
    this.methodDescriptorTransfer);
  }

}

