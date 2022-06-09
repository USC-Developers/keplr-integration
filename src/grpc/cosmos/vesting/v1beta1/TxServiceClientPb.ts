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

}

