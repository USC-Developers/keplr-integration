/**
 * @fileoverview gRPC-Web generated client stub for cosmos.feegrant.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_feegrant_v1beta1_tx_pb from '../../../cosmos/feegrant/v1beta1/tx_pb';


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

  methodDescriptorGrantAllowance = new grpcWeb.MethodDescriptor(
    '/cosmos.feegrant.v1beta1.Msg/GrantAllowance',
    grpcWeb.MethodType.UNARY,
    cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse,
    (request: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance) => {
      return request.serializeBinary();
    },
    cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse.deserializeBinary
  );

  grantAllowance(
    request: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse>;

  grantAllowance(
    request: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse) => void): grpcWeb.ClientReadableStream<cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse>;

  grantAllowance(
    request: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowance,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_feegrant_v1beta1_tx_pb.MsgGrantAllowanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.feegrant.v1beta1.Msg/GrantAllowance',
        request,
        metadata || {},
        this.methodDescriptorGrantAllowance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.feegrant.v1beta1.Msg/GrantAllowance',
    request,
    metadata || {},
    this.methodDescriptorGrantAllowance);
  }

  methodDescriptorRevokeAllowance = new grpcWeb.MethodDescriptor(
    '/cosmos.feegrant.v1beta1.Msg/RevokeAllowance',
    grpcWeb.MethodType.UNARY,
    cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse,
    (request: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance) => {
      return request.serializeBinary();
    },
    cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse.deserializeBinary
  );

  revokeAllowance(
    request: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse>;

  revokeAllowance(
    request: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse) => void): grpcWeb.ClientReadableStream<cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse>;

  revokeAllowance(
    request: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowance,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_feegrant_v1beta1_tx_pb.MsgRevokeAllowanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.feegrant.v1beta1.Msg/RevokeAllowance',
        request,
        metadata || {},
        this.methodDescriptorRevokeAllowance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.feegrant.v1beta1.Msg/RevokeAllowance',
    request,
    metadata || {},
    this.methodDescriptorRevokeAllowance);
  }

}

