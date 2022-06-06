/**
 * @fileoverview gRPC-Web generated client stub for cosmos.distribution.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_distribution_v1beta1_query_pb from '../../../cosmos/distribution/v1beta1/query_pb';


export class QueryClient {
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

  methodDescriptorParams = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Query/Params',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryParamsResponse,
    (request: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_query_pb.QueryParamsResponse.deserializeBinary
  );

  params(
    request: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_distribution_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Query/Params',
        request,
        metadata || {},
        this.methodDescriptorParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/Params',
    request,
    metadata || {},
    this.methodDescriptorParams);
  }

  methodDescriptorValidatorOutstandingRewards = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse,
    (request: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse.deserializeBinary
  );

  validatorOutstandingRewards(
    request: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse>;

  validatorOutstandingRewards(
    request: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse>;

  validatorOutstandingRewards(
    request: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryValidatorOutstandingRewardsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards',
        request,
        metadata || {},
        this.methodDescriptorValidatorOutstandingRewards,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards',
    request,
    metadata || {},
    this.methodDescriptorValidatorOutstandingRewards);
  }

  methodDescriptorValidatorCommission = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Query/ValidatorCommission',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse,
    (request: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse.deserializeBinary
  );

  validatorCommission(
    request: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse>;

  validatorCommission(
    request: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse>;

  validatorCommission(
    request: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryValidatorCommissionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Query/ValidatorCommission',
        request,
        metadata || {},
        this.methodDescriptorValidatorCommission,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/ValidatorCommission',
    request,
    metadata || {},
    this.methodDescriptorValidatorCommission);
  }

  methodDescriptorValidatorSlashes = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Query/ValidatorSlashes',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse,
    (request: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse.deserializeBinary
  );

  validatorSlashes(
    request: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse>;

  validatorSlashes(
    request: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse>;

  validatorSlashes(
    request: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryValidatorSlashesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Query/ValidatorSlashes',
        request,
        metadata || {},
        this.methodDescriptorValidatorSlashes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/ValidatorSlashes',
    request,
    metadata || {},
    this.methodDescriptorValidatorSlashes);
  }

  methodDescriptorDelegationRewards = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Query/DelegationRewards',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse,
    (request: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse.deserializeBinary
  );

  delegationRewards(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse>;

  delegationRewards(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse>;

  delegationRewards(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryDelegationRewardsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Query/DelegationRewards',
        request,
        metadata || {},
        this.methodDescriptorDelegationRewards,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegationRewards',
    request,
    metadata || {},
    this.methodDescriptorDelegationRewards);
  }

  methodDescriptorDelegationTotalRewards = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Query/DelegationTotalRewards',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse,
    (request: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse.deserializeBinary
  );

  delegationTotalRewards(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse>;

  delegationTotalRewards(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse>;

  delegationTotalRewards(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryDelegationTotalRewardsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Query/DelegationTotalRewards',
        request,
        metadata || {},
        this.methodDescriptorDelegationTotalRewards,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegationTotalRewards',
    request,
    metadata || {},
    this.methodDescriptorDelegationTotalRewards);
  }

  methodDescriptorDelegatorValidators = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Query/DelegatorValidators',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse,
    (request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse.deserializeBinary
  );

  delegatorValidators(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse>;

  delegatorValidators(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse>;

  delegatorValidators(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorValidatorsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Query/DelegatorValidators',
        request,
        metadata || {},
        this.methodDescriptorDelegatorValidators,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegatorValidators',
    request,
    metadata || {},
    this.methodDescriptorDelegatorValidators);
  }

  methodDescriptorDelegatorWithdrawAddress = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse,
    (request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse.deserializeBinary
  );

  delegatorWithdrawAddress(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse>;

  delegatorWithdrawAddress(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse>;

  delegatorWithdrawAddress(
    request: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryDelegatorWithdrawAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress',
        request,
        metadata || {},
        this.methodDescriptorDelegatorWithdrawAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress',
    request,
    metadata || {},
    this.methodDescriptorDelegatorWithdrawAddress);
  }

  methodDescriptorCommunityPool = new grpcWeb.MethodDescriptor(
    '/cosmos.distribution.v1beta1.Query/CommunityPool',
    grpcWeb.MethodType.UNARY,
    cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse,
    (request: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest) => {
      return request.serializeBinary();
    },
    cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse.deserializeBinary
  );

  communityPool(
    request: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse>;

  communityPool(
    request: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse) => void): grpcWeb.ClientReadableStream<cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse>;

  communityPool(
    request: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_distribution_v1beta1_query_pb.QueryCommunityPoolResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.distribution.v1beta1.Query/CommunityPool',
        request,
        metadata || {},
        this.methodDescriptorCommunityPool,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/CommunityPool',
    request,
    metadata || {},
    this.methodDescriptorCommunityPool);
  }

}

