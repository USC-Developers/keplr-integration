/**
 * @fileoverview gRPC-Web generated client stub for cosmos.upgrade.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_upgrade_v1beta1_query_pb from '../../../cosmos/upgrade/v1beta1/query_pb';


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

  methodDescriptorCurrentPlan = new grpcWeb.MethodDescriptor(
    '/cosmos.upgrade.v1beta1.Query/CurrentPlan',
    grpcWeb.MethodType.UNARY,
    cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse,
    (request: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest) => {
      return request.serializeBinary();
    },
    cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse.deserializeBinary
  );

  currentPlan(
    request: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse>;

  currentPlan(
    request: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse) => void): grpcWeb.ClientReadableStream<cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse>;

  currentPlan(
    request: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_query_pb.QueryCurrentPlanResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.upgrade.v1beta1.Query/CurrentPlan',
        request,
        metadata || {},
        this.methodDescriptorCurrentPlan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.upgrade.v1beta1.Query/CurrentPlan',
    request,
    metadata || {},
    this.methodDescriptorCurrentPlan);
  }

  methodDescriptorAppliedPlan = new grpcWeb.MethodDescriptor(
    '/cosmos.upgrade.v1beta1.Query/AppliedPlan',
    grpcWeb.MethodType.UNARY,
    cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse,
    (request: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest) => {
      return request.serializeBinary();
    },
    cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse.deserializeBinary
  );

  appliedPlan(
    request: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse>;

  appliedPlan(
    request: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse) => void): grpcWeb.ClientReadableStream<cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse>;

  appliedPlan(
    request: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_query_pb.QueryAppliedPlanResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.upgrade.v1beta1.Query/AppliedPlan',
        request,
        metadata || {},
        this.methodDescriptorAppliedPlan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.upgrade.v1beta1.Query/AppliedPlan',
    request,
    metadata || {},
    this.methodDescriptorAppliedPlan);
  }

  methodDescriptorUpgradedConsensusState = new grpcWeb.MethodDescriptor(
    '/cosmos.upgrade.v1beta1.Query/UpgradedConsensusState',
    grpcWeb.MethodType.UNARY,
    cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse,
    (request: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest) => {
      return request.serializeBinary();
    },
    cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse.deserializeBinary
  );

  upgradedConsensusState(
    request: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse>;

  upgradedConsensusState(
    request: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpcWeb.ClientReadableStream<cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse>;

  upgradedConsensusState(
    request: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_query_pb.QueryUpgradedConsensusStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.upgrade.v1beta1.Query/UpgradedConsensusState',
        request,
        metadata || {},
        this.methodDescriptorUpgradedConsensusState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.upgrade.v1beta1.Query/UpgradedConsensusState',
    request,
    metadata || {},
    this.methodDescriptorUpgradedConsensusState);
  }

  methodDescriptorModuleVersions = new grpcWeb.MethodDescriptor(
    '/cosmos.upgrade.v1beta1.Query/ModuleVersions',
    grpcWeb.MethodType.UNARY,
    cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse,
    (request: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest) => {
      return request.serializeBinary();
    },
    cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse.deserializeBinary
  );

  moduleVersions(
    request: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse>;

  moduleVersions(
    request: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse) => void): grpcWeb.ClientReadableStream<cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse>;

  moduleVersions(
    request: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_query_pb.QueryModuleVersionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.upgrade.v1beta1.Query/ModuleVersions',
        request,
        metadata || {},
        this.methodDescriptorModuleVersions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.upgrade.v1beta1.Query/ModuleVersions',
    request,
    metadata || {},
    this.methodDescriptorModuleVersions);
  }

  methodDescriptorAuthority = new grpcWeb.MethodDescriptor(
    '/cosmos.upgrade.v1beta1.Query/Authority',
    grpcWeb.MethodType.UNARY,
    cosmos_upgrade_v1beta1_query_pb.QueryAuthorityRequest,
    cosmos_upgrade_v1beta1_query_pb.QueryAuthorityResponse,
    (request: cosmos_upgrade_v1beta1_query_pb.QueryAuthorityRequest) => {
      return request.serializeBinary();
    },
    cosmos_upgrade_v1beta1_query_pb.QueryAuthorityResponse.deserializeBinary
  );

  authority(
    request: cosmos_upgrade_v1beta1_query_pb.QueryAuthorityRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_upgrade_v1beta1_query_pb.QueryAuthorityResponse>;

  authority(
    request: cosmos_upgrade_v1beta1_query_pb.QueryAuthorityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_query_pb.QueryAuthorityResponse) => void): grpcWeb.ClientReadableStream<cosmos_upgrade_v1beta1_query_pb.QueryAuthorityResponse>;

  authority(
    request: cosmos_upgrade_v1beta1_query_pb.QueryAuthorityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_upgrade_v1beta1_query_pb.QueryAuthorityResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.upgrade.v1beta1.Query/Authority',
        request,
        metadata || {},
        this.methodDescriptorAuthority,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.upgrade.v1beta1.Query/Authority',
    request,
    metadata || {},
    this.methodDescriptorAuthority);
  }

}

