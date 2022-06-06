/**
 * @fileoverview gRPC-Web generated client stub for cosmos.distribution.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_distribution_v1beta1_tx_pb from '../../../cosmos/distribution/v1beta1/tx_pb';


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

  methodDescriptorSetWithdrawAddress = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse,
    (request: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse.deserializeBinary
  );

  setWithdrawAddress(
    request: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse>;

  setWithdrawAddress(
    request: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse>;

  setWithdrawAddress(
    request: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddress,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_tx_pb.MsgSetWithdrawAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress',
        request,
        metadata || {},
        this.methodDescriptorSetWithdrawAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress',
    request,
    metadata || {},
    this.methodDescriptorSetWithdrawAddress);
  }

  methodDescriptorWithdrawDelegatorReward = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse,
    (request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse.deserializeBinary
  );

  withdrawDelegatorReward(
    request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse>;

  withdrawDelegatorReward(
    request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse>;

  withdrawDelegatorReward(
    request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorReward,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawDelegatorRewardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward',
        request,
        metadata || {},
        this.methodDescriptorWithdrawDelegatorReward,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward',
    request,
    metadata || {},
    this.methodDescriptorWithdrawDelegatorReward);
  }

  methodDescriptorWithdrawValidatorCommission = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse,
    (request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse.deserializeBinary
  );

  withdrawValidatorCommission(
    request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse>;

  withdrawValidatorCommission(
    request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse>;

  withdrawValidatorCommission(
    request: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommission,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_tx_pb.MsgWithdrawValidatorCommissionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission',
        request,
        metadata || {},
        this.methodDescriptorWithdrawValidatorCommission,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission',
    request,
    metadata || {},
    this.methodDescriptorWithdrawValidatorCommission);
  }

  methodDescriptorFundCommunityPool = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Msg/FundCommunityPool',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse,
    (request: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse.deserializeBinary
  );

  fundCommunityPool(
    request: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse>;

  fundCommunityPool(
    request: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse>;

  fundCommunityPool(
    request: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPool,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_tx_pb.MsgFundCommunityPoolResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Msg/FundCommunityPool',
        request,
        metadata || {},
        this.methodDescriptorFundCommunityPool,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/FundCommunityPool',
    request,
    metadata || {},
    this.methodDescriptorFundCommunityPool);
  }

}

