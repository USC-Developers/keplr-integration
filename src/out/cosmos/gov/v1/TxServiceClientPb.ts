/**
 * @fileoverview gRPC-Web generated client stub for cosmos.gov.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_gov_v1_tx_pb from '../../../cosmos/gov/v1/tx_pb';


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

  methodDescriptorSubmitProposal = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Msg/SubmitProposal',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_tx_pb.MsgSubmitProposal,
    cosmos_gov_v1_tx_pb.MsgSubmitProposalResponse,
    (request: cosmos_gov_v1_tx_pb.MsgSubmitProposal) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_tx_pb.MsgSubmitProposalResponse.deserializeBinary
  );

  submitProposal(
    request: cosmos_gov_v1_tx_pb.MsgSubmitProposal,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_tx_pb.MsgSubmitProposalResponse>;

  submitProposal(
    request: cosmos_gov_v1_tx_pb.MsgSubmitProposal,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_tx_pb.MsgSubmitProposalResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_tx_pb.MsgSubmitProposalResponse>;

  submitProposal(
    request: cosmos_gov_v1_tx_pb.MsgSubmitProposal,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_tx_pb.MsgSubmitProposalResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Msg/SubmitProposal',
        request,
        metadata || {},
        this.methodDescriptorSubmitProposal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Msg/SubmitProposal',
    request,
    metadata || {},
    this.methodDescriptorSubmitProposal);
  }

  methodDescriptorExecLegacyContent = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Msg/ExecLegacyContent',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_tx_pb.MsgExecLegacyContent,
    cosmos_gov_v1_tx_pb.MsgExecLegacyContentResponse,
    (request: cosmos_gov_v1_tx_pb.MsgExecLegacyContent) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_tx_pb.MsgExecLegacyContentResponse.deserializeBinary
  );

  execLegacyContent(
    request: cosmos_gov_v1_tx_pb.MsgExecLegacyContent,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_tx_pb.MsgExecLegacyContentResponse>;

  execLegacyContent(
    request: cosmos_gov_v1_tx_pb.MsgExecLegacyContent,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_tx_pb.MsgExecLegacyContentResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_tx_pb.MsgExecLegacyContentResponse>;

  execLegacyContent(
    request: cosmos_gov_v1_tx_pb.MsgExecLegacyContent,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_tx_pb.MsgExecLegacyContentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Msg/ExecLegacyContent',
        request,
        metadata || {},
        this.methodDescriptorExecLegacyContent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Msg/ExecLegacyContent',
    request,
    metadata || {},
    this.methodDescriptorExecLegacyContent);
  }

  methodDescriptorVote = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Msg/Vote',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_tx_pb.MsgVote,
    cosmos_gov_v1_tx_pb.MsgVoteResponse,
    (request: cosmos_gov_v1_tx_pb.MsgVote) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_tx_pb.MsgVoteResponse.deserializeBinary
  );

  vote(
    request: cosmos_gov_v1_tx_pb.MsgVote,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_tx_pb.MsgVoteResponse>;

  vote(
    request: cosmos_gov_v1_tx_pb.MsgVote,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_tx_pb.MsgVoteResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_tx_pb.MsgVoteResponse>;

  vote(
    request: cosmos_gov_v1_tx_pb.MsgVote,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_tx_pb.MsgVoteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Msg/Vote',
        request,
        metadata || {},
        this.methodDescriptorVote,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Msg/Vote',
    request,
    metadata || {},
    this.methodDescriptorVote);
  }

  methodDescriptorVoteWeighted = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Msg/VoteWeighted',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_tx_pb.MsgVoteWeighted,
    cosmos_gov_v1_tx_pb.MsgVoteWeightedResponse,
    (request: cosmos_gov_v1_tx_pb.MsgVoteWeighted) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_tx_pb.MsgVoteWeightedResponse.deserializeBinary
  );

  voteWeighted(
    request: cosmos_gov_v1_tx_pb.MsgVoteWeighted,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_tx_pb.MsgVoteWeightedResponse>;

  voteWeighted(
    request: cosmos_gov_v1_tx_pb.MsgVoteWeighted,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_tx_pb.MsgVoteWeightedResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_tx_pb.MsgVoteWeightedResponse>;

  voteWeighted(
    request: cosmos_gov_v1_tx_pb.MsgVoteWeighted,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_tx_pb.MsgVoteWeightedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Msg/VoteWeighted',
        request,
        metadata || {},
        this.methodDescriptorVoteWeighted,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Msg/VoteWeighted',
    request,
    metadata || {},
    this.methodDescriptorVoteWeighted);
  }

  methodDescriptorDeposit = new grpcWeb.MethodDescriptor(
    '/cosmos.gov.v1.Msg/Deposit',
    grpcWeb.MethodType.UNARY,
    cosmos_gov_v1_tx_pb.MsgDeposit,
    cosmos_gov_v1_tx_pb.MsgDepositResponse,
    (request: cosmos_gov_v1_tx_pb.MsgDeposit) => {
      return request.serializeBinary();
    },
    cosmos_gov_v1_tx_pb.MsgDepositResponse.deserializeBinary
  );

  deposit(
    request: cosmos_gov_v1_tx_pb.MsgDeposit,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_gov_v1_tx_pb.MsgDepositResponse>;

  deposit(
    request: cosmos_gov_v1_tx_pb.MsgDeposit,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_tx_pb.MsgDepositResponse) => void): grpcWeb.ClientReadableStream<cosmos_gov_v1_tx_pb.MsgDepositResponse>;

  deposit(
    request: cosmos_gov_v1_tx_pb.MsgDeposit,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_gov_v1_tx_pb.MsgDepositResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.gov.v1.Msg/Deposit',
        request,
        metadata || {},
        this.methodDescriptorDeposit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.gov.v1.Msg/Deposit',
    request,
    metadata || {},
    this.methodDescriptorDeposit);
  }

}

