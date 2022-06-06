/**
 * @fileoverview gRPC-Web generated client stub for cosmos.group.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_group_v1_tx_pb from '../../../cosmos/group/v1/tx_pb';


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

  methodDescriptorCreateGroup = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/CreateGroup',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgCreateGroup,
    cosmos_group_v1_tx_pb.MsgCreateGroupResponse,
    (request: cosmos_group_v1_tx_pb.MsgCreateGroup) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgCreateGroupResponse.deserializeBinary
  );

  createGroup(
    request: cosmos_group_v1_tx_pb.MsgCreateGroup,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgCreateGroupResponse>;

  createGroup(
    request: cosmos_group_v1_tx_pb.MsgCreateGroup,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgCreateGroupResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgCreateGroupResponse>;

  createGroup(
    request: cosmos_group_v1_tx_pb.MsgCreateGroup,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgCreateGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/CreateGroup',
        request,
        metadata || {},
        this.methodDescriptorCreateGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/CreateGroup',
    request,
    metadata || {},
    this.methodDescriptorCreateGroup);
  }

  methodDescriptorUpdateGroupMembers = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/UpdateGroupMembers',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgUpdateGroupMembers,
    cosmos_group_v1_tx_pb.MsgUpdateGroupMembersResponse,
    (request: cosmos_group_v1_tx_pb.MsgUpdateGroupMembers) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgUpdateGroupMembersResponse.deserializeBinary
  );

  updateGroupMembers(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupMembers,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgUpdateGroupMembersResponse>;

  updateGroupMembers(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupMembers,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupMembersResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgUpdateGroupMembersResponse>;

  updateGroupMembers(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupMembers,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupMembersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/UpdateGroupMembers',
        request,
        metadata || {},
        this.methodDescriptorUpdateGroupMembers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupMembers',
    request,
    metadata || {},
    this.methodDescriptorUpdateGroupMembers);
  }

  methodDescriptorUpdateGroupAdmin = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/UpdateGroupAdmin',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgUpdateGroupAdmin,
    cosmos_group_v1_tx_pb.MsgUpdateGroupAdminResponse,
    (request: cosmos_group_v1_tx_pb.MsgUpdateGroupAdmin) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgUpdateGroupAdminResponse.deserializeBinary
  );

  updateGroupAdmin(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupAdmin,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgUpdateGroupAdminResponse>;

  updateGroupAdmin(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupAdmin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupAdminResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgUpdateGroupAdminResponse>;

  updateGroupAdmin(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupAdmin,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/UpdateGroupAdmin',
        request,
        metadata || {},
        this.methodDescriptorUpdateGroupAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupAdmin',
    request,
    metadata || {},
    this.methodDescriptorUpdateGroupAdmin);
  }

  methodDescriptorUpdateGroupMetadata = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/UpdateGroupMetadata',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgUpdateGroupMetadata,
    cosmos_group_v1_tx_pb.MsgUpdateGroupMetadataResponse,
    (request: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadata) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgUpdateGroupMetadataResponse.deserializeBinary
  );

  updateGroupMetadata(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadata,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgUpdateGroupMetadataResponse>;

  updateGroupMetadata(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadata,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadataResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgUpdateGroupMetadataResponse>;

  updateGroupMetadata(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadata,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/UpdateGroupMetadata',
        request,
        metadata || {},
        this.methodDescriptorUpdateGroupMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupMetadata',
    request,
    metadata || {},
    this.methodDescriptorUpdateGroupMetadata);
  }

  methodDescriptorCreateGroupPolicy = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/CreateGroupPolicy',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgCreateGroupPolicy,
    cosmos_group_v1_tx_pb.MsgCreateGroupPolicyResponse,
    (request: cosmos_group_v1_tx_pb.MsgCreateGroupPolicy) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgCreateGroupPolicyResponse.deserializeBinary
  );

  createGroupPolicy(
    request: cosmos_group_v1_tx_pb.MsgCreateGroupPolicy,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgCreateGroupPolicyResponse>;

  createGroupPolicy(
    request: cosmos_group_v1_tx_pb.MsgCreateGroupPolicy,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgCreateGroupPolicyResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgCreateGroupPolicyResponse>;

  createGroupPolicy(
    request: cosmos_group_v1_tx_pb.MsgCreateGroupPolicy,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgCreateGroupPolicyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/CreateGroupPolicy',
        request,
        metadata || {},
        this.methodDescriptorCreateGroupPolicy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/CreateGroupPolicy',
    request,
    metadata || {},
    this.methodDescriptorCreateGroupPolicy);
  }

  methodDescriptorCreateGroupWithPolicy = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/CreateGroupWithPolicy',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicy,
    cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicyResponse,
    (request: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicy) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicyResponse.deserializeBinary
  );

  createGroupWithPolicy(
    request: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicy,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicyResponse>;

  createGroupWithPolicy(
    request: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicy,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicyResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicyResponse>;

  createGroupWithPolicy(
    request: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicy,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgCreateGroupWithPolicyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/CreateGroupWithPolicy',
        request,
        metadata || {},
        this.methodDescriptorCreateGroupWithPolicy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/CreateGroupWithPolicy',
    request,
    metadata || {},
    this.methodDescriptorCreateGroupWithPolicy);
  }

  methodDescriptorUpdateGroupPolicyAdmin = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/UpdateGroupPolicyAdmin',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdmin,
    cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdminResponse,
    (request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdmin) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdminResponse.deserializeBinary
  );

  updateGroupPolicyAdmin(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdmin,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdminResponse>;

  updateGroupPolicyAdmin(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdmin,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdminResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdminResponse>;

  updateGroupPolicyAdmin(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdmin,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/UpdateGroupPolicyAdmin',
        request,
        metadata || {},
        this.methodDescriptorUpdateGroupPolicyAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupPolicyAdmin',
    request,
    metadata || {},
    this.methodDescriptorUpdateGroupPolicyAdmin);
  }

  methodDescriptorUpdateGroupPolicyDecisionPolicy = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/UpdateGroupPolicyDecisionPolicy',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy,
    cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse,
    (request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse.deserializeBinary
  );

  updateGroupPolicyDecisionPolicy(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse>;

  updateGroupPolicyDecisionPolicy(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse>;

  updateGroupPolicyDecisionPolicy(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/UpdateGroupPolicyDecisionPolicy',
        request,
        metadata || {},
        this.methodDescriptorUpdateGroupPolicyDecisionPolicy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupPolicyDecisionPolicy',
    request,
    metadata || {},
    this.methodDescriptorUpdateGroupPolicyDecisionPolicy);
  }

  methodDescriptorUpdateGroupPolicyMetadata = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/UpdateGroupPolicyMetadata',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadata,
    cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadataResponse,
    (request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadata) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadataResponse.deserializeBinary
  );

  updateGroupPolicyMetadata(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadata,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadataResponse>;

  updateGroupPolicyMetadata(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadata,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadataResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadataResponse>;

  updateGroupPolicyMetadata(
    request: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadata,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgUpdateGroupPolicyMetadataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/UpdateGroupPolicyMetadata',
        request,
        metadata || {},
        this.methodDescriptorUpdateGroupPolicyMetadata,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupPolicyMetadata',
    request,
    metadata || {},
    this.methodDescriptorUpdateGroupPolicyMetadata);
  }

  methodDescriptorSubmitProposal = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/SubmitProposal',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgSubmitProposal,
    cosmos_group_v1_tx_pb.MsgSubmitProposalResponse,
    (request: cosmos_group_v1_tx_pb.MsgSubmitProposal) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgSubmitProposalResponse.deserializeBinary
  );

  submitProposal(
    request: cosmos_group_v1_tx_pb.MsgSubmitProposal,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgSubmitProposalResponse>;

  submitProposal(
    request: cosmos_group_v1_tx_pb.MsgSubmitProposal,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgSubmitProposalResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgSubmitProposalResponse>;

  submitProposal(
    request: cosmos_group_v1_tx_pb.MsgSubmitProposal,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgSubmitProposalResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/SubmitProposal',
        request,
        metadata || {},
        this.methodDescriptorSubmitProposal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/SubmitProposal',
    request,
    metadata || {},
    this.methodDescriptorSubmitProposal);
  }

  methodDescriptorWithdrawProposal = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/WithdrawProposal',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgWithdrawProposal,
    cosmos_group_v1_tx_pb.MsgWithdrawProposalResponse,
    (request: cosmos_group_v1_tx_pb.MsgWithdrawProposal) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgWithdrawProposalResponse.deserializeBinary
  );

  withdrawProposal(
    request: cosmos_group_v1_tx_pb.MsgWithdrawProposal,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgWithdrawProposalResponse>;

  withdrawProposal(
    request: cosmos_group_v1_tx_pb.MsgWithdrawProposal,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgWithdrawProposalResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgWithdrawProposalResponse>;

  withdrawProposal(
    request: cosmos_group_v1_tx_pb.MsgWithdrawProposal,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgWithdrawProposalResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/WithdrawProposal',
        request,
        metadata || {},
        this.methodDescriptorWithdrawProposal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/WithdrawProposal',
    request,
    metadata || {},
    this.methodDescriptorWithdrawProposal);
  }

  methodDescriptorVote = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/Vote',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgVote,
    cosmos_group_v1_tx_pb.MsgVoteResponse,
    (request: cosmos_group_v1_tx_pb.MsgVote) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgVoteResponse.deserializeBinary
  );

  vote(
    request: cosmos_group_v1_tx_pb.MsgVote,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgVoteResponse>;

  vote(
    request: cosmos_group_v1_tx_pb.MsgVote,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgVoteResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgVoteResponse>;

  vote(
    request: cosmos_group_v1_tx_pb.MsgVote,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgVoteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/Vote',
        request,
        metadata || {},
        this.methodDescriptorVote,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/Vote',
    request,
    metadata || {},
    this.methodDescriptorVote);
  }

  methodDescriptorExec = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/Exec',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgExec,
    cosmos_group_v1_tx_pb.MsgExecResponse,
    (request: cosmos_group_v1_tx_pb.MsgExec) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgExecResponse.deserializeBinary
  );

  exec(
    request: cosmos_group_v1_tx_pb.MsgExec,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgExecResponse>;

  exec(
    request: cosmos_group_v1_tx_pb.MsgExec,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgExecResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgExecResponse>;

  exec(
    request: cosmos_group_v1_tx_pb.MsgExec,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgExecResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/Exec',
        request,
        metadata || {},
        this.methodDescriptorExec,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/Exec',
    request,
    metadata || {},
    this.methodDescriptorExec);
  }

  methodDescriptorLeaveGroup = new grpcWeb.MethodDescriptor(
    '/cosmos.group.v1.Msg/LeaveGroup',
    grpcWeb.MethodType.UNARY,
    cosmos_group_v1_tx_pb.MsgLeaveGroup,
    cosmos_group_v1_tx_pb.MsgLeaveGroupResponse,
    (request: cosmos_group_v1_tx_pb.MsgLeaveGroup) => {
      return request.serializeBinary();
    },
    cosmos_group_v1_tx_pb.MsgLeaveGroupResponse.deserializeBinary
  );

  leaveGroup(
    request: cosmos_group_v1_tx_pb.MsgLeaveGroup,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_group_v1_tx_pb.MsgLeaveGroupResponse>;

  leaveGroup(
    request: cosmos_group_v1_tx_pb.MsgLeaveGroup,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgLeaveGroupResponse) => void): grpcWeb.ClientReadableStream<cosmos_group_v1_tx_pb.MsgLeaveGroupResponse>;

  leaveGroup(
    request: cosmos_group_v1_tx_pb.MsgLeaveGroup,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_group_v1_tx_pb.MsgLeaveGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.group.v1.Msg/LeaveGroup',
        request,
        metadata || {},
        this.methodDescriptorLeaveGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.group.v1.Msg/LeaveGroup',
    request,
    metadata || {},
    this.methodDescriptorLeaveGroup);
  }

}

