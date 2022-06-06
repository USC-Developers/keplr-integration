/**
 * @fileoverview gRPC-Web generated client stub for cosmos.group.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_group_v1_query_pb from '../../../cosmos/group/v1/query_pb';


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

  methodDescriptorGroupInfo = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/GroupInfo',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryGroupInfoRequest,
    cosmos_group_v1_query_pb.QueryGroupInfoResponse,
    (request: cosmos_group_v1_query_pb.QueryGroupInfoRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryGroupInfoResponse.deserializeBinary
  );

  groupInfo(
    request: cosmos_group_v1_query_pb.QueryGroupInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryGroupInfoResponse>;

  groupInfo(
    request: cosmos_group_v1_query_pb.QueryGroupInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupInfoResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryGroupInfoResponse>;

  groupInfo(
    request: cosmos_group_v1_query_pb.QueryGroupInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/GroupInfo',
        request,
        metadata || {},
        this.methodDescriptorGroupInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/GroupInfo',
    request,
    metadata || {},
    this.methodDescriptorGroupInfo);
  }

  methodDescriptorGroupPolicyInfo = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/GroupPolicyInfo',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryGroupPolicyInfoRequest,
    cosmos_group_v1_query_pb.QueryGroupPolicyInfoResponse,
    (request: cosmos_group_v1_query_pb.QueryGroupPolicyInfoRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryGroupPolicyInfoResponse.deserializeBinary
  );

  groupPolicyInfo(
    request: cosmos_group_v1_query_pb.QueryGroupPolicyInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryGroupPolicyInfoResponse>;

  groupPolicyInfo(
    request: cosmos_group_v1_query_pb.QueryGroupPolicyInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupPolicyInfoResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryGroupPolicyInfoResponse>;

  groupPolicyInfo(
    request: cosmos_group_v1_query_pb.QueryGroupPolicyInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupPolicyInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/GroupPolicyInfo',
        request,
        metadata || {},
        this.methodDescriptorGroupPolicyInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/GroupPolicyInfo',
    request,
    metadata || {},
    this.methodDescriptorGroupPolicyInfo);
  }

  methodDescriptorGroupMembers = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/GroupMembers',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryGroupMembersRequest,
    cosmos_group_v1_query_pb.QueryGroupMembersResponse,
    (request: cosmos_group_v1_query_pb.QueryGroupMembersRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryGroupMembersResponse.deserializeBinary
  );

  groupMembers(
    request: cosmos_group_v1_query_pb.QueryGroupMembersRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryGroupMembersResponse>;

  groupMembers(
    request: cosmos_group_v1_query_pb.QueryGroupMembersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupMembersResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryGroupMembersResponse>;

  groupMembers(
    request: cosmos_group_v1_query_pb.QueryGroupMembersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupMembersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/GroupMembers',
        request,
        metadata || {},
        this.methodDescriptorGroupMembers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/GroupMembers',
    request,
    metadata || {},
    this.methodDescriptorGroupMembers);
  }

  methodDescriptorGroupsByAdmin = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/GroupsByAdmin',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryGroupsByAdminRequest,
    cosmos_group_v1_query_pb.QueryGroupsByAdminResponse,
    (request: cosmos_group_v1_query_pb.QueryGroupsByAdminRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryGroupsByAdminResponse.deserializeBinary
  );

  groupsByAdmin(
    request: cosmos_group_v1_query_pb.QueryGroupsByAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryGroupsByAdminResponse>;

  groupsByAdmin(
    request: cosmos_group_v1_query_pb.QueryGroupsByAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupsByAdminResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryGroupsByAdminResponse>;

  groupsByAdmin(
    request: cosmos_group_v1_query_pb.QueryGroupsByAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupsByAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/GroupsByAdmin',
        request,
        metadata || {},
        this.methodDescriptorGroupsByAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/GroupsByAdmin',
    request,
    metadata || {},
    this.methodDescriptorGroupsByAdmin);
  }

  methodDescriptorGroupPoliciesByGroup = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/GroupPoliciesByGroup',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupRequest,
    cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupResponse,
    (request: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupResponse.deserializeBinary
  );

  groupPoliciesByGroup(
    request: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupResponse>;

  groupPoliciesByGroup(
    request: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupResponse>;

  groupPoliciesByGroup(
    request: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupPoliciesByGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/GroupPoliciesByGroup',
        request,
        metadata || {},
        this.methodDescriptorGroupPoliciesByGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/GroupPoliciesByGroup',
    request,
    metadata || {},
    this.methodDescriptorGroupPoliciesByGroup);
  }

  methodDescriptorGroupPoliciesByAdmin = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/GroupPoliciesByAdmin',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminRequest,
    cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminResponse,
    (request: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminResponse.deserializeBinary
  );

  groupPoliciesByAdmin(
    request: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminResponse>;

  groupPoliciesByAdmin(
    request: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminResponse>;

  groupPoliciesByAdmin(
    request: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupPoliciesByAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/GroupPoliciesByAdmin',
        request,
        metadata || {},
        this.methodDescriptorGroupPoliciesByAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/GroupPoliciesByAdmin',
    request,
    metadata || {},
    this.methodDescriptorGroupPoliciesByAdmin);
  }

  methodDescriptorProposal = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/Proposal',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryProposalRequest,
    cosmos_group_v1_query_pb.QueryProposalResponse,
    (request: cosmos_group_v1_query_pb.QueryProposalRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryProposalResponse.deserializeBinary
  );

  proposal(
    request: cosmos_group_v1_query_pb.QueryProposalRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryProposalResponse>;

  proposal(
    request: cosmos_group_v1_query_pb.QueryProposalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryProposalResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryProposalResponse>;

  proposal(
    request: cosmos_group_v1_query_pb.QueryProposalRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryProposalResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/Proposal',
        request,
        metadata || {},
        this.methodDescriptorProposal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/Proposal',
    request,
    metadata || {},
    this.methodDescriptorProposal);
  }

  methodDescriptorProposalsByGroupPolicy = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/ProposalsByGroupPolicy',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyRequest,
    cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyResponse,
    (request: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyResponse.deserializeBinary
  );

  proposalsByGroupPolicy(
    request: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyResponse>;

  proposalsByGroupPolicy(
    request: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyResponse>;

  proposalsByGroupPolicy(
    request: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryProposalsByGroupPolicyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/ProposalsByGroupPolicy',
        request,
        metadata || {},
        this.methodDescriptorProposalsByGroupPolicy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/ProposalsByGroupPolicy',
    request,
    metadata || {},
    this.methodDescriptorProposalsByGroupPolicy);
  }

  methodDescriptorVoteByProposalVoter = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/VoteByProposalVoter',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryVoteByProposalVoterRequest,
    cosmos_group_v1_query_pb.QueryVoteByProposalVoterResponse,
    (request: cosmos_group_v1_query_pb.QueryVoteByProposalVoterRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryVoteByProposalVoterResponse.deserializeBinary
  );

  voteByProposalVoter(
    request: cosmos_group_v1_query_pb.QueryVoteByProposalVoterRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryVoteByProposalVoterResponse>;

  voteByProposalVoter(
    request: cosmos_group_v1_query_pb.QueryVoteByProposalVoterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryVoteByProposalVoterResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryVoteByProposalVoterResponse>;

  voteByProposalVoter(
    request: cosmos_group_v1_query_pb.QueryVoteByProposalVoterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryVoteByProposalVoterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/VoteByProposalVoter',
        request,
        metadata || {},
        this.methodDescriptorVoteByProposalVoter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/VoteByProposalVoter',
    request,
    metadata || {},
    this.methodDescriptorVoteByProposalVoter);
  }

  methodDescriptorVotesByProposal = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/VotesByProposal',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryVotesByProposalRequest,
    cosmos_group_v1_query_pb.QueryVotesByProposalResponse,
    (request: cosmos_group_v1_query_pb.QueryVotesByProposalRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryVotesByProposalResponse.deserializeBinary
  );

  votesByProposal(
    request: cosmos_group_v1_query_pb.QueryVotesByProposalRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryVotesByProposalResponse>;

  votesByProposal(
    request: cosmos_group_v1_query_pb.QueryVotesByProposalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryVotesByProposalResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryVotesByProposalResponse>;

  votesByProposal(
    request: cosmos_group_v1_query_pb.QueryVotesByProposalRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryVotesByProposalResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/VotesByProposal',
        request,
        metadata || {},
        this.methodDescriptorVotesByProposal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/VotesByProposal',
    request,
    metadata || {},
    this.methodDescriptorVotesByProposal);
  }

  methodDescriptorVotesByVoter = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/VotesByVoter',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryVotesByVoterRequest,
    cosmos_group_v1_query_pb.QueryVotesByVoterResponse,
    (request: cosmos_group_v1_query_pb.QueryVotesByVoterRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryVotesByVoterResponse.deserializeBinary
  );

  votesByVoter(
    request: cosmos_group_v1_query_pb.QueryVotesByVoterRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryVotesByVoterResponse>;

  votesByVoter(
    request: cosmos_group_v1_query_pb.QueryVotesByVoterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryVotesByVoterResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryVotesByVoterResponse>;

  votesByVoter(
    request: cosmos_group_v1_query_pb.QueryVotesByVoterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryVotesByVoterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/VotesByVoter',
        request,
        metadata || {},
        this.methodDescriptorVotesByVoter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/VotesByVoter',
    request,
    metadata || {},
    this.methodDescriptorVotesByVoter);
  }

  methodDescriptorGroupsByMember = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/GroupsByMember',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryGroupsByMemberRequest,
    cosmos_group_v1_query_pb.QueryGroupsByMemberResponse,
    (request: cosmos_group_v1_query_pb.QueryGroupsByMemberRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryGroupsByMemberResponse.deserializeBinary
  );

  groupsByMember(
    request: cosmos_group_v1_query_pb.QueryGroupsByMemberRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryGroupsByMemberResponse>;

  groupsByMember(
    request: cosmos_group_v1_query_pb.QueryGroupsByMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupsByMemberResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryGroupsByMemberResponse>;

  groupsByMember(
    request: cosmos_group_v1_query_pb.QueryGroupsByMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryGroupsByMemberResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/GroupsByMember',
        request,
        metadata || {},
        this.methodDescriptorGroupsByMember,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/GroupsByMember',
    request,
    metadata || {},
    this.methodDescriptorGroupsByMember);
  }

  methodDescriptorTallyResult = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Query/TallyResult',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_query_pb.QueryTallyResultRequest,
    cosmos_group_v1_query_pb.QueryTallyResultResponse,
    (request: cosmos_group_v1_query_pb.QueryTallyResultRequest) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_query_pb.QueryTallyResultResponse.deserializeBinary
  );

  tallyResult(
    request: cosmos_group_v1_query_pb.QueryTallyResultRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_query_pb.QueryTallyResultResponse>;

  tallyResult(
    request: cosmos_group_v1_query_pb.QueryTallyResultRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryTallyResultResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_query_pb.QueryTallyResultResponse>;

  tallyResult(
    request: cosmos_group_v1_query_pb.QueryTallyResultRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_query_pb.QueryTallyResultResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Query/TallyResult',
        request,
        metadata || {},
        this.methodDescriptorTallyResult,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Query/TallyResult',
    request,
    metadata || {},
    this.methodDescriptorTallyResult);
  }

}

