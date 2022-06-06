import * as jspb from 'google-protobuf'

import * as cosmos_group_v1_types_pb from '../../../cosmos/group/v1/types_pb';


export class GenesisState extends jspb.Message {
  getGroupSeq(): number;
  setGroupSeq(value: number): GenesisState;

  getGroupsList(): Array<cosmos_group_v1_types_pb.GroupInfo>;
  setGroupsList(value: Array<cosmos_group_v1_types_pb.GroupInfo>): GenesisState;
  clearGroupsList(): GenesisState;
  addGroups(value?: cosmos_group_v1_types_pb.GroupInfo, index?: number): cosmos_group_v1_types_pb.GroupInfo;

  getGroupMembersList(): Array<cosmos_group_v1_types_pb.GroupMember>;
  setGroupMembersList(value: Array<cosmos_group_v1_types_pb.GroupMember>): GenesisState;
  clearGroupMembersList(): GenesisState;
  addGroupMembers(value?: cosmos_group_v1_types_pb.GroupMember, index?: number): cosmos_group_v1_types_pb.GroupMember;

  getGroupPolicySeq(): number;
  setGroupPolicySeq(value: number): GenesisState;

  getGroupPoliciesList(): Array<cosmos_group_v1_types_pb.GroupPolicyInfo>;
  setGroupPoliciesList(value: Array<cosmos_group_v1_types_pb.GroupPolicyInfo>): GenesisState;
  clearGroupPoliciesList(): GenesisState;
  addGroupPolicies(value?: cosmos_group_v1_types_pb.GroupPolicyInfo, index?: number): cosmos_group_v1_types_pb.GroupPolicyInfo;

  getProposalSeq(): number;
  setProposalSeq(value: number): GenesisState;

  getProposalsList(): Array<cosmos_group_v1_types_pb.Proposal>;
  setProposalsList(value: Array<cosmos_group_v1_types_pb.Proposal>): GenesisState;
  clearProposalsList(): GenesisState;
  addProposals(value?: cosmos_group_v1_types_pb.Proposal, index?: number): cosmos_group_v1_types_pb.Proposal;

  getVotesList(): Array<cosmos_group_v1_types_pb.Vote>;
  setVotesList(value: Array<cosmos_group_v1_types_pb.Vote>): GenesisState;
  clearVotesList(): GenesisState;
  addVotes(value?: cosmos_group_v1_types_pb.Vote, index?: number): cosmos_group_v1_types_pb.Vote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    groupSeq: number,
    groupsList: Array<cosmos_group_v1_types_pb.GroupInfo.AsObject>,
    groupMembersList: Array<cosmos_group_v1_types_pb.GroupMember.AsObject>,
    groupPolicySeq: number,
    groupPoliciesList: Array<cosmos_group_v1_types_pb.GroupPolicyInfo.AsObject>,
    proposalSeq: number,
    proposalsList: Array<cosmos_group_v1_types_pb.Proposal.AsObject>,
    votesList: Array<cosmos_group_v1_types_pb.Vote.AsObject>,
  }
}

