/**
 * @fileoverview gRPC-Web generated client stub for cosmos.vesting.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_vesting_v1beta1_tx_pb from '../../../cosmos/vesting/v1beta1/tx_pb';


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

  methodDescriptorCreateVestingAccount = new grpcWeb.MethodDescriptor(
    '/cosmos.vesting.v1beta1.Msg/CreateVestingAccount',
    grpcWeb.MethodType.UNARY,
    cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount,
    cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse,
    (request: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount) => {
      return request.serializeBinary();
    },
    cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse.deserializeBinary
  );

  createVestingAccount(
    request: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse>;

  createVestingAccount(
    request: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse) => void): grpcWeb.ClientReadableStream<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse>;

  createVestingAccount(
    request: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.vesting.v1beta1.Msg/CreateVestingAccount',
        request,
        metadata || {},
        this.methodDescriptorCreateVestingAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.vesting.v1beta1.Msg/CreateVestingAccount',
    request,
    metadata || {},
    this.methodDescriptorCreateVestingAccount);
  }

  methodDescriptorCreatePermanentLockedAccount = new grpcWeb.MethodDescriptor(
    '/cosmos.vesting.v1beta1.Msg/CreatePermanentLockedAccount',
    grpcWeb.MethodType.UNARY,
    cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccount,
    cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccountResponse,
    (request: cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccount) => {
      return request.serializeBinary();
    },
    cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccountResponse.deserializeBinary
  );

  createPermanentLockedAccount(
    request: cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccount,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccountResponse>;

  createPermanentLockedAccount(
    request: cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccount,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccountResponse) => void): grpcWeb.ClientReadableStream<cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccountResponse>;

  createPermanentLockedAccount(
    request: cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccount,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.vesting.v1beta1.Msg/CreatePermanentLockedAccount',
        request,
        metadata || {},
        this.methodDescriptorCreatePermanentLockedAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.vesting.v1beta1.Msg/CreatePermanentLockedAccount',
    request,
    metadata || {},
    this.methodDescriptorCreatePermanentLockedAccount);
  }

  methodDescriptorCreatePeriodicVestingAccount = new grpcWeb.MethodDescriptor(
    '/cosmos.vesting.v1beta1.Msg/CreatePeriodicVestingAccount',
    grpcWeb.MethodType.UNARY,
    cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccount,
    cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccountResponse,
    (request: cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccount) => {
      return request.serializeBinary();
    },
    cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccountResponse.deserializeBinary
  );

  createPeriodicVestingAccount(
    request: cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccount,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccountResponse>;

  createPeriodicVestingAccount(
    request: cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccount,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccountResponse) => void): grpcWeb.ClientReadableStream<cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccountResponse>;

  createPeriodicVestingAccount(
    request: cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccount,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.vesting.v1beta1.Msg/CreatePeriodicVestingAccount',
        request,
        metadata || {},
        this.methodDescriptorCreatePeriodicVestingAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.vesting.v1beta1.Msg/CreatePeriodicVestingAccount',
    request,
    metadata || {},
    this.methodDescriptorCreatePeriodicVestingAccount);
  }

}

