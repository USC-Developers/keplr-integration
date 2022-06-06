/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.client.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ibc_core_client_v1_tx_pb from '../../../../ibc/core/client/v1/tx_pb';


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

  methodDescriptorCreateClient = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Msg/CreateClient',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_tx_pb.MsgCreateClient,
    ibc_core_client_v1_tx_pb.MsgCreateClientResponse,
    (request: ibc_core_client_v1_tx_pb.MsgCreateClient) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_tx_pb.MsgCreateClientResponse.deserializeBinary
  );

  createClient(
    request: ibc_core_client_v1_tx_pb.MsgCreateClient,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_tx_pb.MsgCreateClientResponse>;

  createClient(
    request: ibc_core_client_v1_tx_pb.MsgCreateClient,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_tx_pb.MsgCreateClientResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_tx_pb.MsgCreateClientResponse>;

  createClient(
    request: ibc_core_client_v1_tx_pb.MsgCreateClient,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_tx_pb.MsgCreateClientResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Msg/CreateClient',
        request,
        metadata || {},
        this.methodDescriptorCreateClient,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Msg/CreateClient',
    request,
    metadata || {},
    this.methodDescriptorCreateClient);
  }

  methodDescriptorUpdateClient = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Msg/UpdateClient',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_tx_pb.MsgUpdateClient,
    ibc_core_client_v1_tx_pb.MsgUpdateClientResponse,
    (request: ibc_core_client_v1_tx_pb.MsgUpdateClient) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_tx_pb.MsgUpdateClientResponse.deserializeBinary
  );

  updateClient(
    request: ibc_core_client_v1_tx_pb.MsgUpdateClient,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_tx_pb.MsgUpdateClientResponse>;

  updateClient(
    request: ibc_core_client_v1_tx_pb.MsgUpdateClient,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_tx_pb.MsgUpdateClientResponse>;

  updateClient(
    request: ibc_core_client_v1_tx_pb.MsgUpdateClient,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Msg/UpdateClient',
        request,
        metadata || {},
        this.methodDescriptorUpdateClient,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Msg/UpdateClient',
    request,
    metadata || {},
    this.methodDescriptorUpdateClient);
  }

  methodDescriptorUpgradeClient = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Msg/UpgradeClient',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse,
    (request: ibc_core_client_v1_tx_pb.MsgUpgradeClient) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse.deserializeBinary
  );

  upgradeClient(
    request: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse>;

  upgradeClient(
    request: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse>;

  upgradeClient(
    request: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Msg/UpgradeClient',
        request,
        metadata || {},
        this.methodDescriptorUpgradeClient,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Msg/UpgradeClient',
    request,
    metadata || {},
    this.methodDescriptorUpgradeClient);
  }

  methodDescriptorSubmitMisbehaviour = new grpcWeb.MethodDescriptor(
    '/ibc.core.client.v1.Msg/SubmitMisbehaviour',
    grpcWeb.MethodType.UNARY,
    ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse,
    (request: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour) => {
      return request.serializeBinary();
    },
    ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse.deserializeBinary
  );

  submitMisbehaviour(
    request: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse>;

  submitMisbehaviour(
    request: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse) => void): grpcWeb.ClientReadableStream<ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse>;

  submitMisbehaviour(
    request: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.client.v1.Msg/SubmitMisbehaviour',
        request,
        metadata || {},
        this.methodDescriptorSubmitMisbehaviour,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.client.v1.Msg/SubmitMisbehaviour',
    request,
    metadata || {},
    this.methodDescriptorSubmitMisbehaviour);
  }

}

