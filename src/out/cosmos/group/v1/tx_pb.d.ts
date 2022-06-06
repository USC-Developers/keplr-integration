import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as cosmos_group_v1_types_pb from '../../../cosmos/group/v1/types_pb';
import * as cosmos_msg_v1_msg_pb from '../../../cosmos/msg/v1/msg_pb';


export class MsgCreateGroup extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): MsgCreateGroup;

  getMembersList(): Array<cosmos_group_v1_types_pb.MemberRequest>;
  setMembersList(value: Array<cosmos_group_v1_types_pb.MemberRequest>): MsgCreateGroup;
  clearMembersList(): MsgCreateGroup;
  addMembers(value?: cosmos_group_v1_types_pb.MemberRequest, index?: number): cosmos_group_v1_types_pb.MemberRequest;

  getMetadata(): string;
  setMetadata(value: string): MsgCreateGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateGroup.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateGroup): MsgCreateGroup.AsObject;
  static serializeBinaryToWriter(message: MsgCreateGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateGroup;
  static deserializeBinaryFromReader(message: MsgCreateGroup, reader: jspb.BinaryReader): MsgCreateGroup;
}

export namespace MsgCreateGroup {
  export type AsObject = {
    admin: string,
    membersList: Array<cosmos_group_v1_types_pb.MemberRequest.AsObject>,
    metadata: string,
  }
}

export class MsgCreateGroupResponse extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): MsgCreateGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateGroupResponse): MsgCreateGroupResponse.AsObject;
  static serializeBinaryToWriter(message: MsgCreateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateGroupResponse;
  static deserializeBinaryFromReader(message: MsgCreateGroupResponse, reader: jspb.BinaryReader): MsgCreateGroupResponse;
}

export namespace MsgCreateGroupResponse {
  export type AsObject = {
    groupId: number,
  }
}

export class MsgUpdateGroupMembers extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): MsgUpdateGroupMembers;

  getGroupId(): number;
  setGroupId(value: number): MsgUpdateGroupMembers;

  getMemberUpdatesList(): Array<cosmos_group_v1_types_pb.MemberRequest>;
  setMemberUpdatesList(value: Array<cosmos_group_v1_types_pb.MemberRequest>): MsgUpdateGroupMembers;
  clearMemberUpdatesList(): MsgUpdateGroupMembers;
  addMemberUpdates(value?: cosmos_group_v1_types_pb.MemberRequest, index?: number): cosmos_group_v1_types_pb.MemberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupMembers.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupMembers): MsgUpdateGroupMembers.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupMembers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupMembers;
  static deserializeBinaryFromReader(message: MsgUpdateGroupMembers, reader: jspb.BinaryReader): MsgUpdateGroupMembers;
}

export namespace MsgUpdateGroupMembers {
  export type AsObject = {
    admin: string,
    groupId: number,
    memberUpdatesList: Array<cosmos_group_v1_types_pb.MemberRequest.AsObject>,
  }
}

export class MsgUpdateGroupMembersResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponse.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupMembersResponse;
  static deserializeBinaryFromReader(message: MsgUpdateGroupMembersResponse, reader: jspb.BinaryReader): MsgUpdateGroupMembersResponse;
}

export namespace MsgUpdateGroupMembersResponse {
  export type AsObject = {
  }
}

export class MsgUpdateGroupAdmin extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): MsgUpdateGroupAdmin;

  getGroupId(): number;
  setGroupId(value: number): MsgUpdateGroupAdmin;

  getNewAdmin(): string;
  setNewAdmin(value: string): MsgUpdateGroupAdmin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupAdmin.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupAdmin): MsgUpdateGroupAdmin.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupAdmin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupAdmin;
  static deserializeBinaryFromReader(message: MsgUpdateGroupAdmin, reader: jspb.BinaryReader): MsgUpdateGroupAdmin;
}

export namespace MsgUpdateGroupAdmin {
  export type AsObject = {
    admin: string,
    groupId: number,
    newAdmin: string,
  }
}

export class MsgUpdateGroupAdminResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupAdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponse.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupAdminResponse;
  static deserializeBinaryFromReader(message: MsgUpdateGroupAdminResponse, reader: jspb.BinaryReader): MsgUpdateGroupAdminResponse;
}

export namespace MsgUpdateGroupAdminResponse {
  export type AsObject = {
  }
}

export class MsgUpdateGroupMetadata extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): MsgUpdateGroupMetadata;

  getGroupId(): number;
  setGroupId(value: number): MsgUpdateGroupMetadata;

  getMetadata(): string;
  setMetadata(value: string): MsgUpdateGroupMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupMetadata): MsgUpdateGroupMetadata.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupMetadata;
  static deserializeBinaryFromReader(message: MsgUpdateGroupMetadata, reader: jspb.BinaryReader): MsgUpdateGroupMetadata;
}

export namespace MsgUpdateGroupMetadata {
  export type AsObject = {
    admin: string,
    groupId: number,
    metadata: string,
  }
}

export class MsgUpdateGroupMetadataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupMetadataResponse;
  static deserializeBinaryFromReader(message: MsgUpdateGroupMetadataResponse, reader: jspb.BinaryReader): MsgUpdateGroupMetadataResponse;
}

export namespace MsgUpdateGroupMetadataResponse {
  export type AsObject = {
  }
}

export class MsgCreateGroupPolicy extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): MsgCreateGroupPolicy;

  getGroupId(): number;
  setGroupId(value: number): MsgCreateGroupPolicy;

  getMetadata(): string;
  setMetadata(value: string): MsgCreateGroupPolicy;

  getDecisionPolicy(): google_protobuf_any_pb.Any | undefined;
  setDecisionPolicy(value?: google_protobuf_any_pb.Any): MsgCreateGroupPolicy;
  hasDecisionPolicy(): boolean;
  clearDecisionPolicy(): MsgCreateGroupPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateGroupPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateGroupPolicy): MsgCreateGroupPolicy.AsObject;
  static serializeBinaryToWriter(message: MsgCreateGroupPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateGroupPolicy;
  static deserializeBinaryFromReader(message: MsgCreateGroupPolicy, reader: jspb.BinaryReader): MsgCreateGroupPolicy;
}

export namespace MsgCreateGroupPolicy {
  export type AsObject = {
    admin: string,
    groupId: number,
    metadata: string,
    decisionPolicy?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class MsgCreateGroupPolicyResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): MsgCreateGroupPolicyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateGroupPolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponse.AsObject;
  static serializeBinaryToWriter(message: MsgCreateGroupPolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateGroupPolicyResponse;
  static deserializeBinaryFromReader(message: MsgCreateGroupPolicyResponse, reader: jspb.BinaryReader): MsgCreateGroupPolicyResponse;
}

export namespace MsgCreateGroupPolicyResponse {
  export type AsObject = {
    address: string,
  }
}

export class MsgUpdateGroupPolicyAdmin extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): MsgUpdateGroupPolicyAdmin;

  getGroupPolicyAddress(): string;
  setGroupPolicyAddress(value: string): MsgUpdateGroupPolicyAdmin;

  getNewAdmin(): string;
  setNewAdmin(value: string): MsgUpdateGroupPolicyAdmin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupPolicyAdmin.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdmin.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupPolicyAdmin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupPolicyAdmin;
  static deserializeBinaryFromReader(message: MsgUpdateGroupPolicyAdmin, reader: jspb.BinaryReader): MsgUpdateGroupPolicyAdmin;
}

export namespace MsgUpdateGroupPolicyAdmin {
  export type AsObject = {
    admin: string,
    groupPolicyAddress: string,
    newAdmin: string,
  }
}

export class MsgCreateGroupWithPolicy extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): MsgCreateGroupWithPolicy;

  getMembersList(): Array<cosmos_group_v1_types_pb.MemberRequest>;
  setMembersList(value: Array<cosmos_group_v1_types_pb.MemberRequest>): MsgCreateGroupWithPolicy;
  clearMembersList(): MsgCreateGroupWithPolicy;
  addMembers(value?: cosmos_group_v1_types_pb.MemberRequest, index?: number): cosmos_group_v1_types_pb.MemberRequest;

  getGroupMetadata(): string;
  setGroupMetadata(value: string): MsgCreateGroupWithPolicy;

  getGroupPolicyMetadata(): string;
  setGroupPolicyMetadata(value: string): MsgCreateGroupWithPolicy;

  getGroupPolicyAsAdmin(): boolean;
  setGroupPolicyAsAdmin(value: boolean): MsgCreateGroupWithPolicy;

  getDecisionPolicy(): google_protobuf_any_pb.Any | undefined;
  setDecisionPolicy(value?: google_protobuf_any_pb.Any): MsgCreateGroupWithPolicy;
  hasDecisionPolicy(): boolean;
  clearDecisionPolicy(): MsgCreateGroupWithPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateGroupWithPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicy.AsObject;
  static serializeBinaryToWriter(message: MsgCreateGroupWithPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateGroupWithPolicy;
  static deserializeBinaryFromReader(message: MsgCreateGroupWithPolicy, reader: jspb.BinaryReader): MsgCreateGroupWithPolicy;
}

export namespace MsgCreateGroupWithPolicy {
  export type AsObject = {
    admin: string,
    membersList: Array<cosmos_group_v1_types_pb.MemberRequest.AsObject>,
    groupMetadata: string,
    groupPolicyMetadata: string,
    groupPolicyAsAdmin: boolean,
    decisionPolicy?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class MsgCreateGroupWithPolicyResponse extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): MsgCreateGroupWithPolicyResponse;

  getGroupPolicyAddress(): string;
  setGroupPolicyAddress(value: string): MsgCreateGroupWithPolicyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateGroupWithPolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponse.AsObject;
  static serializeBinaryToWriter(message: MsgCreateGroupWithPolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateGroupWithPolicyResponse;
  static deserializeBinaryFromReader(message: MsgCreateGroupWithPolicyResponse, reader: jspb.BinaryReader): MsgCreateGroupWithPolicyResponse;
}

export namespace MsgCreateGroupWithPolicyResponse {
  export type AsObject = {
    groupId: number,
    groupPolicyAddress: string,
  }
}

export class MsgUpdateGroupPolicyAdminResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupPolicyAdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponse.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupPolicyAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupPolicyAdminResponse;
  static deserializeBinaryFromReader(message: MsgUpdateGroupPolicyAdminResponse, reader: jspb.BinaryReader): MsgUpdateGroupPolicyAdminResponse;
}

export namespace MsgUpdateGroupPolicyAdminResponse {
  export type AsObject = {
  }
}

export class MsgUpdateGroupPolicyDecisionPolicy extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): MsgUpdateGroupPolicyDecisionPolicy;

  getGroupPolicyAddress(): string;
  setGroupPolicyAddress(value: string): MsgUpdateGroupPolicyDecisionPolicy;

  getDecisionPolicy(): google_protobuf_any_pb.Any | undefined;
  setDecisionPolicy(value?: google_protobuf_any_pb.Any): MsgUpdateGroupPolicyDecisionPolicy;
  hasDecisionPolicy(): boolean;
  clearDecisionPolicy(): MsgUpdateGroupPolicyDecisionPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupPolicyDecisionPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicy.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupPolicyDecisionPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupPolicyDecisionPolicy;
  static deserializeBinaryFromReader(message: MsgUpdateGroupPolicyDecisionPolicy, reader: jspb.BinaryReader): MsgUpdateGroupPolicyDecisionPolicy;
}

export namespace MsgUpdateGroupPolicyDecisionPolicy {
  export type AsObject = {
    admin: string,
    groupPolicyAddress: string,
    decisionPolicy?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class MsgUpdateGroupPolicyDecisionPolicyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupPolicyDecisionPolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponse.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupPolicyDecisionPolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupPolicyDecisionPolicyResponse;
  static deserializeBinaryFromReader(message: MsgUpdateGroupPolicyDecisionPolicyResponse, reader: jspb.BinaryReader): MsgUpdateGroupPolicyDecisionPolicyResponse;
}

export namespace MsgUpdateGroupPolicyDecisionPolicyResponse {
  export type AsObject = {
  }
}

export class MsgUpdateGroupPolicyMetadata extends jspb.Message {
  getAdmin(): string;
  setAdmin(value: string): MsgUpdateGroupPolicyMetadata;

  getGroupPolicyAddress(): string;
  setGroupPolicyAddress(value: string): MsgUpdateGroupPolicyMetadata;

  getMetadata(): string;
  setMetadata(value: string): MsgUpdateGroupPolicyMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupPolicyMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadata.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupPolicyMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupPolicyMetadata;
  static deserializeBinaryFromReader(message: MsgUpdateGroupPolicyMetadata, reader: jspb.BinaryReader): MsgUpdateGroupPolicyMetadata;
}

export namespace MsgUpdateGroupPolicyMetadata {
  export type AsObject = {
    admin: string,
    groupPolicyAddress: string,
    metadata: string,
  }
}

export class MsgUpdateGroupPolicyMetadataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateGroupPolicyMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponse.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateGroupPolicyMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateGroupPolicyMetadataResponse;
  static deserializeBinaryFromReader(message: MsgUpdateGroupPolicyMetadataResponse, reader: jspb.BinaryReader): MsgUpdateGroupPolicyMetadataResponse;
}

export namespace MsgUpdateGroupPolicyMetadataResponse {
  export type AsObject = {
  }
}

export class MsgSubmitProposal extends jspb.Message {
  getGroupPolicyAddress(): string;
  setGroupPolicyAddress(value: string): MsgSubmitProposal;

  getProposersList(): Array<string>;
  setProposersList(value: Array<string>): MsgSubmitProposal;
  clearProposersList(): MsgSubmitProposal;
  addProposers(value: string, index?: number): MsgSubmitProposal;

  getMetadata(): string;
  setMetadata(value: string): MsgSubmitProposal;

  getMessagesList(): Array<google_protobuf_any_pb.Any>;
  setMessagesList(value: Array<google_protobuf_any_pb.Any>): MsgSubmitProposal;
  clearMessagesList(): MsgSubmitProposal;
  addMessages(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  getExec(): Exec;
  setExec(value: Exec): MsgSubmitProposal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitProposal.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitProposal): MsgSubmitProposal.AsObject;
  static serializeBinaryToWriter(message: MsgSubmitProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitProposal;
  static deserializeBinaryFromReader(message: MsgSubmitProposal, reader: jspb.BinaryReader): MsgSubmitProposal;
}

export namespace MsgSubmitProposal {
  export type AsObject = {
    groupPolicyAddress: string,
    proposersList: Array<string>,
    metadata: string,
    messagesList: Array<google_protobuf_any_pb.Any.AsObject>,
    exec: Exec,
  }
}

export class MsgSubmitProposalResponse extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): MsgSubmitProposalResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitProposalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitProposalResponse): MsgSubmitProposalResponse.AsObject;
  static serializeBinaryToWriter(message: MsgSubmitProposalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitProposalResponse;
  static deserializeBinaryFromReader(message: MsgSubmitProposalResponse, reader: jspb.BinaryReader): MsgSubmitProposalResponse;
}

export namespace MsgSubmitProposalResponse {
  export type AsObject = {
    proposalId: number,
  }
}

export class MsgWithdrawProposal extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): MsgWithdrawProposal;

  getAddress(): string;
  setAddress(value: string): MsgWithdrawProposal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawProposal.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawProposal): MsgWithdrawProposal.AsObject;
  static serializeBinaryToWriter(message: MsgWithdrawProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawProposal;
  static deserializeBinaryFromReader(message: MsgWithdrawProposal, reader: jspb.BinaryReader): MsgWithdrawProposal;
}

export namespace MsgWithdrawProposal {
  export type AsObject = {
    proposalId: number,
    address: string,
  }
}

export class MsgWithdrawProposalResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawProposalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawProposalResponse): MsgWithdrawProposalResponse.AsObject;
  static serializeBinaryToWriter(message: MsgWithdrawProposalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawProposalResponse;
  static deserializeBinaryFromReader(message: MsgWithdrawProposalResponse, reader: jspb.BinaryReader): MsgWithdrawProposalResponse;
}

export namespace MsgWithdrawProposalResponse {
  export type AsObject = {
  }
}

export class MsgVote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): MsgVote;

  getVoter(): string;
  setVoter(value: string): MsgVote;

  getOption(): cosmos_group_v1_types_pb.VoteOption;
  setOption(value: cosmos_group_v1_types_pb.VoteOption): MsgVote;

  getMetadata(): string;
  setMetadata(value: string): MsgVote;

  getExec(): Exec;
  setExec(value: Exec): MsgVote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVote.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVote): MsgVote.AsObject;
  static serializeBinaryToWriter(message: MsgVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVote;
  static deserializeBinaryFromReader(message: MsgVote, reader: jspb.BinaryReader): MsgVote;
}

export namespace MsgVote {
  export type AsObject = {
    proposalId: number,
    voter: string,
    option: cosmos_group_v1_types_pb.VoteOption,
    metadata: string,
    exec: Exec,
  }
}

export class MsgVoteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVoteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVoteResponse): MsgVoteResponse.AsObject;
  static serializeBinaryToWriter(message: MsgVoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVoteResponse;
  static deserializeBinaryFromReader(message: MsgVoteResponse, reader: jspb.BinaryReader): MsgVoteResponse;
}

export namespace MsgVoteResponse {
  export type AsObject = {
  }
}

export class MsgExec extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): MsgExec;

  getExecutor(): string;
  setExecutor(value: string): MsgExec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExec.AsObject;
  static toObject(includeInstance: boolean, msg: MsgExec): MsgExec.AsObject;
  static serializeBinaryToWriter(message: MsgExec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExec;
  static deserializeBinaryFromReader(message: MsgExec, reader: jspb.BinaryReader): MsgExec;
}

export namespace MsgExec {
  export type AsObject = {
    proposalId: number,
    executor: string,
  }
}

export class MsgExecResponse extends jspb.Message {
  getResult(): cosmos_group_v1_types_pb.ProposalExecutorResult;
  setResult(value: cosmos_group_v1_types_pb.ProposalExecutorResult): MsgExecResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExecResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgExecResponse): MsgExecResponse.AsObject;
  static serializeBinaryToWriter(message: MsgExecResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExecResponse;
  static deserializeBinaryFromReader(message: MsgExecResponse, reader: jspb.BinaryReader): MsgExecResponse;
}

export namespace MsgExecResponse {
  export type AsObject = {
    result: cosmos_group_v1_types_pb.ProposalExecutorResult,
  }
}

export class MsgLeaveGroup extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): MsgLeaveGroup;

  getGroupId(): number;
  setGroupId(value: number): MsgLeaveGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgLeaveGroup.AsObject;
  static toObject(includeInstance: boolean, msg: MsgLeaveGroup): MsgLeaveGroup.AsObject;
  static serializeBinaryToWriter(message: MsgLeaveGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgLeaveGroup;
  static deserializeBinaryFromReader(message: MsgLeaveGroup, reader: jspb.BinaryReader): MsgLeaveGroup;
}

export namespace MsgLeaveGroup {
  export type AsObject = {
    address: string,
    groupId: number,
  }
}

export class MsgLeaveGroupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgLeaveGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgLeaveGroupResponse): MsgLeaveGroupResponse.AsObject;
  static serializeBinaryToWriter(message: MsgLeaveGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgLeaveGroupResponse;
  static deserializeBinaryFromReader(message: MsgLeaveGroupResponse, reader: jspb.BinaryReader): MsgLeaveGroupResponse;
}

export namespace MsgLeaveGroupResponse {
  export type AsObject = {
  }
}

export enum Exec { 
  EXEC_UNSPECIFIED = 0,
  EXEC_TRY = 1,
}
