/**
 * @fileoverview gRPC-Web generated client stub for cosmos.staking.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_staking_v1beta1_query_pb from '../../../cosmos/staking/v1beta1/query_pb';


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

  methodDescriptorValidators = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/Validators',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse.deserializeBinary
  );

  validators(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse>;

  validators(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse>;

  validators(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryValidatorsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/Validators',
        request,
        metadata || {},
        this.methodDescriptorValidators,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Validators',
    request,
    metadata || {},
    this.methodDescriptorValidators);
  }

  methodDescriptorValidator = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/Validator',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryValidatorRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryValidatorResponse.deserializeBinary
  );

  validator(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryValidatorResponse>;

  validator(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryValidatorResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryValidatorResponse>;

  validator(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryValidatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/Validator',
        request,
        metadata || {},
        this.methodDescriptorValidator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Validator',
    request,
    metadata || {},
    this.methodDescriptorValidator);
  }

  methodDescriptorValidatorDelegations = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/ValidatorDelegations',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse.deserializeBinary
  );

  validatorDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse>;

  validatorDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse>;

  validatorDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryValidatorDelegationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/ValidatorDelegations',
        request,
        metadata || {},
        this.methodDescriptorValidatorDelegations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/ValidatorDelegations',
    request,
    metadata || {},
    this.methodDescriptorValidatorDelegations);
  }

  methodDescriptorValidatorUnbondingDelegations = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse.deserializeBinary
  );

  validatorUnbondingDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse>;

  validatorUnbondingDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse>;

  validatorUnbondingDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryValidatorUnbondingDelegationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations',
        request,
        metadata || {},
        this.methodDescriptorValidatorUnbondingDelegations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations',
    request,
    metadata || {},
    this.methodDescriptorValidatorUnbondingDelegations);
  }

  methodDescriptorDelegation = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/Delegation',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegationResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryDelegationRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryDelegationResponse.deserializeBinary
  );

  delegation(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryDelegationResponse>;

  delegation(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryDelegationResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryDelegationResponse>;

  delegation(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryDelegationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/Delegation',
        request,
        metadata || {},
        this.methodDescriptorDelegation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Delegation',
    request,
    metadata || {},
    this.methodDescriptorDelegation);
  }

  methodDescriptorUnbondingDelegation = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/UnbondingDelegation',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
    cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse.deserializeBinary
  );

  unbondingDelegation(
    request: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse>;

  unbondingDelegation(
    request: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse>;

  unbondingDelegation(
    request: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryUnbondingDelegationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/UnbondingDelegation',
        request,
        metadata || {},
        this.methodDescriptorUnbondingDelegation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/UnbondingDelegation',
    request,
    metadata || {},
    this.methodDescriptorUnbondingDelegation);
  }

  methodDescriptorDelegatorDelegations = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/DelegatorDelegations',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse.deserializeBinary
  );

  delegatorDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse>;

  delegatorDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse>;

  delegatorDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryDelegatorDelegationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/DelegatorDelegations',
        request,
        metadata || {},
        this.methodDescriptorDelegatorDelegations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorDelegations',
    request,
    metadata || {},
    this.methodDescriptorDelegatorDelegations);
  }

  methodDescriptorDelegatorUnbondingDelegations = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse.deserializeBinary
  );

  delegatorUnbondingDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse>;

  delegatorUnbondingDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse>;

  delegatorUnbondingDelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryDelegatorUnbondingDelegationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations',
        request,
        metadata || {},
        this.methodDescriptorDelegatorUnbondingDelegations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations',
    request,
    metadata || {},
    this.methodDescriptorDelegatorUnbondingDelegations);
  }

  methodDescriptorRedelegations = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/Redelegations',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
    cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse.deserializeBinary
  );

  redelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse>;

  redelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse>;

  redelegations(
    request: cosmos_staking_v1beta1_query_pb.QueryRedelegationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryRedelegationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/Redelegations',
        request,
        metadata || {},
        this.methodDescriptorRedelegations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Redelegations',
    request,
    metadata || {},
    this.methodDescriptorRedelegations);
  }

  methodDescriptorDelegatorValidators = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/DelegatorValidators',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse.deserializeBinary
  );

  delegatorValidators(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse>;

  delegatorValidators(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse>;

  delegatorValidators(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/DelegatorValidators',
        request,
        metadata || {},
        this.methodDescriptorDelegatorValidators,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorValidators',
    request,
    metadata || {},
    this.methodDescriptorDelegatorValidators);
  }

  methodDescriptorDelegatorValidator = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/DelegatorValidator',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse.deserializeBinary
  );

  delegatorValidator(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse>;

  delegatorValidator(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse>;

  delegatorValidator(
    request: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryDelegatorValidatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/DelegatorValidator',
        request,
        metadata || {},
        this.methodDescriptorDelegatorValidator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorValidator',
    request,
    metadata || {},
    this.methodDescriptorDelegatorValidator);
  }

  methodDescriptorHistoricalInfo = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/HistoricalInfo',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
    cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse.deserializeBinary
  );

  historicalInfo(
    request: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse>;

  historicalInfo(
    request: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse>;

  historicalInfo(
    request: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryHistoricalInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/HistoricalInfo',
        request,
        metadata || {},
        this.methodDescriptorHistoricalInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/HistoricalInfo',
    request,
    metadata || {},
    this.methodDescriptorHistoricalInfo);
  }

  methodDescriptorPool = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/Pool',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
    cosmos_staking_v1beta1_query_pb.QueryPoolResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryPoolRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryPoolResponse.deserializeBinary
  );

  pool(
    request: cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryPoolResponse>;

  pool(
    request: cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryPoolResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryPoolResponse>;

  pool(
    request: cosmos_staking_v1beta1_query_pb.QueryPoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryPoolResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/Pool',
        request,
        metadata || {},
        this.methodDescriptorPool,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Pool',
    request,
    metadata || {},
    this.methodDescriptorPool);
  }

  methodDescriptorParams = new grpcWeb.MethodDescriptor(
    '/cosmos.staking.v1beta1.Query/Params',
    grpcWeb.MethodType.UNARY,
    cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
    cosmos_staking_v1beta1_query_pb.QueryParamsResponse,
    (request: cosmos_staking_v1beta1_query_pb.QueryParamsRequest) => {
      return request.serializeBinary();
    },
    cosmos_staking_v1beta1_query_pb.QueryParamsResponse.deserializeBinary
  );

  params(
    request: cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_staking_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<cosmos_staking_v1beta1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_staking_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_staking_v1beta1_query_pb.QueryParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.staking.v1beta1.Query/Params',
        request,
        metadata || {},
        this.methodDescriptorParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Params',
    request,
    metadata || {},
    this.methodDescriptorParams);
  }

}

