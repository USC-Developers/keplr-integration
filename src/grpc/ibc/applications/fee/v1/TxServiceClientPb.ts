/**
 * @fileoverview gRPC-Web generated client stub for ibc.applications.fee.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ibc_applications_fee_v1_tx_pb from '../../../../ibc/applications/fee/v1/tx_pb';


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

  methodDescriptorRegisterCounterpartyAddress = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Msg/RegisterCounterpartyAddress',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyAddress,
    ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyAddressResponse,
    (request: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyAddress) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyAddressResponse.deserializeBinary
  );

  registerCounterpartyAddress(
    request: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyAddress,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyAddressResponse>;

  registerCounterpartyAddress(
    request: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyAddress,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyAddressResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyAddressResponse>;

  registerCounterpartyAddress(
    request: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyAddress,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_tx_pb.MsgRegisterCounterpartyAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Msg/RegisterCounterpartyAddress',
        request,
        metadata || {},
        this.methodDescriptorRegisterCounterpartyAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Msg/RegisterCounterpartyAddress',
    request,
    metadata || {},
    this.methodDescriptorRegisterCounterpartyAddress);
  }

  methodDescriptorPayPacketFee = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Msg/PayPacketFee',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_tx_pb.MsgPayPacketFee,
    ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeResponse,
    (request: ibc_applications_fee_v1_tx_pb.MsgPayPacketFee) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeResponse.deserializeBinary
  );

  payPacketFee(
    request: ibc_applications_fee_v1_tx_pb.MsgPayPacketFee,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeResponse>;

  payPacketFee(
    request: ibc_applications_fee_v1_tx_pb.MsgPayPacketFee,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeResponse>;

  payPacketFee(
    request: ibc_applications_fee_v1_tx_pb.MsgPayPacketFee,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Msg/PayPacketFee',
        request,
        metadata || {},
        this.methodDescriptorPayPacketFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Msg/PayPacketFee',
    request,
    metadata || {},
    this.methodDescriptorPayPacketFee);
  }

  methodDescriptorPayPacketFeeAsync = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Msg/PayPacketFeeAsync',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsync,
    ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsyncResponse,
    (request: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsync) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsyncResponse.deserializeBinary
  );

  payPacketFeeAsync(
    request: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsync,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsyncResponse>;

  payPacketFeeAsync(
    request: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsync,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsyncResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsyncResponse>;

  payPacketFeeAsync(
    request: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsync,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_tx_pb.MsgPayPacketFeeAsyncResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Msg/PayPacketFeeAsync',
        request,
        metadata || {},
        this.methodDescriptorPayPacketFeeAsync,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Msg/PayPacketFeeAsync',
    request,
    metadata || {},
    this.methodDescriptorPayPacketFeeAsync);
  }

}

