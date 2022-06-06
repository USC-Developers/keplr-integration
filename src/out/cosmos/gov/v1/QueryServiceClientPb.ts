/**
 * @fileoverview gRPC-Web generated client stub for cosmos.gov.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_gov_v1_query_pb from '../../../cosmos/gov/v1/query_pb';


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

  methodDescriptorProposal = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Query/Proposal',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_query_pb.QueryProposalRequest,
    cosmos_gov_v1_query_pb.QueryProposalResponse,
    (request: cosmos_gov_v1_query_pb.QueryProposalRequest) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_query_pb.QueryProposalResponse.deserializeBinary
  );

  proposal(
    request: cosmos_gov_v1_query_pb.QueryProposalRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_query_pb.QueryProposalResponse>;

  proposal(
    request: cosmos_gov_v1_query_pb.QueryProposalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryProposalResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_query_pb.QueryProposalResponse>;

  proposal(
    request: cosmos_gov_v1_query_pb.QueryProposalRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryProposalResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Query/Proposal',
        request,
        metadata || {},
        this.methodDescriptorProposal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Query/Proposal',
    request,
    metadata || {},
    this.methodDescriptorProposal);
  }

  methodDescriptorProposals = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Query/Proposals',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_query_pb.QueryProposalsRequest,
    cosmos_gov_v1_query_pb.QueryProposalsResponse,
    (request: cosmos_gov_v1_query_pb.QueryProposalsRequest) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_query_pb.QueryProposalsResponse.deserializeBinary
  );

  proposals(
    request: cosmos_gov_v1_query_pb.QueryProposalsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_query_pb.QueryProposalsResponse>;

  proposals(
    request: cosmos_gov_v1_query_pb.QueryProposalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryProposalsResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_query_pb.QueryProposalsResponse>;

  proposals(
    request: cosmos_gov_v1_query_pb.QueryProposalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryProposalsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Query/Proposals',
        request,
        metadata || {},
        this.methodDescriptorProposals,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Query/Proposals',
    request,
    metadata || {},
    this.methodDescriptorProposals);
  }

  methodDescriptorVote = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Query/Vote',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_query_pb.QueryVoteRequest,
    cosmos_gov_v1_query_pb.QueryVoteResponse,
    (request: cosmos_gov_v1_query_pb.QueryVoteRequest) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_query_pb.QueryVoteResponse.deserializeBinary
  );

  vote(
    request: cosmos_gov_v1_query_pb.QueryVoteRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_query_pb.QueryVoteResponse>;

  vote(
    request: cosmos_gov_v1_query_pb.QueryVoteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryVoteResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_query_pb.QueryVoteResponse>;

  vote(
    request: cosmos_gov_v1_query_pb.QueryVoteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryVoteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Query/Vote',
        request,
        metadata || {},
        this.methodDescriptorVote,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Query/Vote',
    request,
    metadata || {},
    this.methodDescriptorVote);
  }

  methodDescriptorVotes = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Query/Votes',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_query_pb.QueryVotesRequest,
    cosmos_gov_v1_query_pb.QueryVotesResponse,
    (request: cosmos_gov_v1_query_pb.QueryVotesRequest) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_query_pb.QueryVotesResponse.deserializeBinary
  );

  votes(
    request: cosmos_gov_v1_query_pb.QueryVotesRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_query_pb.QueryVotesResponse>;

  votes(
    request: cosmos_gov_v1_query_pb.QueryVotesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryVotesResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_query_pb.QueryVotesResponse>;

  votes(
    request: cosmos_gov_v1_query_pb.QueryVotesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryVotesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Query/Votes',
        request,
        metadata || {},
        this.methodDescriptorVotes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Query/Votes',
    request,
    metadata || {},
    this.methodDescriptorVotes);
  }

  methodDescriptorParams = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Query/Params',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_query_pb.QueryParamsRequest,
    cosmos_gov_v1_query_pb.QueryParamsResponse,
    (request: cosmos_gov_v1_query_pb.QueryParamsRequest) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_query_pb.QueryParamsResponse.deserializeBinary
  );

  params(
    request: cosmos_gov_v1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_gov_v1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryParamsResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_query_pb.QueryParamsResponse>;

  params(
    request: cosmos_gov_v1_query_pb.QueryParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryParamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Query/Params',
        request,
        metadata || {},
        this.methodDescriptorParams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Query/Params',
    request,
    metadata || {},
    this.methodDescriptorParams);
  }

  methodDescriptorDeposit = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Query/Deposit',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_query_pb.QueryDepositRequest,
    cosmos_gov_v1_query_pb.QueryDepositResponse,
    (request: cosmos_gov_v1_query_pb.QueryDepositRequest) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_query_pb.QueryDepositResponse.deserializeBinary
  );

  deposit(
    request: cosmos_gov_v1_query_pb.QueryDepositRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_query_pb.QueryDepositResponse>;

  deposit(
    request: cosmos_gov_v1_query_pb.QueryDepositRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryDepositResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_query_pb.QueryDepositResponse>;

  deposit(
    request: cosmos_gov_v1_query_pb.QueryDepositRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryDepositResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Query/Deposit',
        request,
        metadata || {},
        this.methodDescriptorDeposit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Query/Deposit',
    request,
    metadata || {},
    this.methodDescriptorDeposit);
  }

  methodDescriptorDeposits = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Query/Deposits',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_query_pb.QueryDepositsRequest,
    cosmos_gov_v1_query_pb.QueryDepositsResponse,
    (request: cosmos_gov_v1_query_pb.QueryDepositsRequest) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_query_pb.QueryDepositsResponse.deserializeBinary
  );

  deposits(
    request: cosmos_gov_v1_query_pb.QueryDepositsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_query_pb.QueryDepositsResponse>;

  deposits(
    request: cosmos_gov_v1_query_pb.QueryDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryDepositsResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_query_pb.QueryDepositsResponse>;

  deposits(
    request: cosmos_gov_v1_query_pb.QueryDepositsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryDepositsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Query/Deposits',
        request,
        metadata || {},
        this.methodDescriptorDeposits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Query/Deposits',
    request,
    metadata || {},
    this.methodDescriptorDeposits);
  }

  methodDescriptorTallyResult = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Query/TallyResult',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_query_pb.QueryTallyResultRequest,
    cosmos_gov_v1_query_pb.QueryTallyResultResponse,
    (request: cosmos_gov_v1_query_pb.QueryTallyResultRequest) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_query_pb.QueryTallyResultResponse.deserializeBinary
  );

  tallyResult(
    request: cosmos_gov_v1_query_pb.QueryTallyResultRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_query_pb.QueryTallyResultResponse>;

  tallyResult(
    request: cosmos_gov_v1_query_pb.QueryTallyResultRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryTallyResultResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_query_pb.QueryTallyResultResponse>;

  tallyResult(
    request: cosmos_gov_v1_query_pb.QueryTallyResultRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_query_pb.QueryTallyResultResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Query/TallyResult',
        request,
        metadata || {},
        this.methodDescriptorTallyResult,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Query/TallyResult',
    request,
    metadata || {},
    this.methodDescriptorTallyResult);
  }

}

