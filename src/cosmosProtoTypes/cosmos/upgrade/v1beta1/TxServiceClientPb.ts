/**
 * @fileoverview gRPC-Web generated client stub for cosmos.upgrade.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_upgrade_v1beta1_tx_pb from '../../../cosmos/upgrade/v1beta1/tx_pb';


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

  methodDescriptorSoftwareUpgrade = new grpcWeb.MethodDescriptor(
    '/cosmos.upgrade.v1beta1.Msg/SoftwareUpgrade',
    grpcWeb.MethodType.UNARY,
    cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgrade,
    cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgradeResponse,
    (request: cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgrade) => {
      return request.serializeBinary();
    },
    cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgradeResponse.deserializeBinary
  );

  softwareUpgrade(
    request: cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgrade,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgradeResponse>;

  softwareUpgrade(
    request: cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgrade,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgradeResponse) => void): grpcWeb.ClientReadableStream<cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgradeResponse>;

  softwareUpgrade(
    request: cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgrade,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_tx_pb.MsgSoftwareUpgradeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.upgrade.v1beta1.Msg/SoftwareUpgrade',
        request,
        metadata || {},
        this.methodDescriptorSoftwareUpgrade,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.upgrade.v1beta1.Msg/SoftwareUpgrade',
    request,
    metadata || {},
    this.methodDescriptorSoftwareUpgrade);
  }

  methodDescriptorCancelUpgrade = new grpcWeb.MethodDescriptor(
    '/cosmos.upgrade.v1beta1.Msg/CancelUpgrade',
    grpcWeb.MethodType.UNARY,
    cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgrade,
    cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgradeResponse,
    (request: cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgrade) => {
      return request.serializeBinary();
    },
    cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgradeResponse.deserializeBinary
  );

  cancelUpgrade(
    request: cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgrade,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgradeResponse>;

  cancelUpgrade(
    request: cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgrade,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgradeResponse) => void): grpcWeb.ClientReadableStream<cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgradeResponse>;

  cancelUpgrade(
    request: cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgrade,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_tx_pb.MsgCancelUpgradeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.upgrade.v1beta1.Msg/CancelUpgrade',
        request,
        metadata || {},
        this.methodDescriptorCancelUpgrade,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.upgrade.v1beta1.Msg/CancelUpgrade',
    request,
    metadata || {},
    this.methodDescriptorCancelUpgrade);
  }

}

