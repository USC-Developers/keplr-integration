import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class Member extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): Member;

  getWeight(): string;
  setWeight(value: string): Member;

  getMetadata(): string;
  setMetadata(value: string): Member;

  getAddedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAddedAt(value?: google_protobuf_timestamp_pb.Timestamp): Member;
  hasAddedAt(): boolean;
  clearAddedAt(): Member;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    address: string,
    weight: string,
    metadata: string,
    addedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class MemberRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): MemberRequest;

  getWeight(): string;
  setWeight(value: string): MemberRequest;

  getMetadata(): string;
  setMetadata(value: string): MemberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MemberRequest): MemberRequest.AsObject;
  static serializeBinaryToWriter(message: MemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberRequest;
  static deserializeBinaryFromReader(message: MemberRequest, reader: jspb.BinaryReader): MemberRequest;
}

export namespace MemberRequest {
  export type AsObject = {
    address: string,
    weight: string,
    metadata: string,
  }
}

export class ThresholdDecisionPolicy extends jspb.Message {
  getThreshold(): string;
  setThreshold(value: string): ThresholdDecisionPolicy;

  getWindows(): DecisionPolicyWindows | undefined;
  setWindows(value?: DecisionPolicyWindows): ThresholdDecisionPolicy;
  hasWindows(): boolean;
  clearWindows(): ThresholdDecisionPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThresholdDecisionPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: ThresholdDecisionPolicy): ThresholdDecisionPolicy.AsObject;
  static serializeBinaryToWriter(message: ThresholdDecisionPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThresholdDecisionPolicy;
  static deserializeBinaryFromReader(message: ThresholdDecisionPolicy, reader: jspb.BinaryReader): ThresholdDecisionPolicy;
}

export namespace ThresholdDecisionPolicy {
  export type AsObject = {
    threshold: string,
    windows?: DecisionPolicyWindows.AsObject,
  }
}

export class PercentageDecisionPolicy extends jspb.Message {
  getPercentage(): string;
  setPercentage(value: string): PercentageDecisionPolicy;

  getWindows(): DecisionPolicyWindows | undefined;
  setWindows(value?: DecisionPolicyWindows): PercentageDecisionPolicy;
  hasWindows(): boolean;
  clearWindows(): PercentageDecisionPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PercentageDecisionPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: PercentageDecisionPolicy): PercentageDecisionPolicy.AsObject;
  static serializeBinaryToWriter(message: PercentageDecisionPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PercentageDecisionPolicy;
  static deserializeBinaryFromReader(message: PercentageDecisionPolicy, reader: jspb.BinaryReader): PercentageDecisionPolicy;
}

export namespace PercentageDecisionPolicy {
  export type AsObject = {
    percentage: string,
    windows?: DecisionPolicyWindows.AsObject,
  }
}

export class DecisionPolicyWindows extends jspb.Message {
  getVotingPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setVotingPeriod(value?: google_protobuf_duration_pb.Duration): DecisionPolicyWindows;
  hasVotingPeriod(): boolean;
  clearVotingPeriod(): DecisionPolicyWindows;

  getMinExecutionPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setMinExecutionPeriod(value?: google_protobuf_duration_pb.Duration): DecisionPolicyWindows;
  hasMinExecutionPeriod(): boolean;
  clearMinExecutionPeriod(): DecisionPolicyWindows;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecisionPolicyWindows.AsObject;
  static toObject(includeInstance: boolean, msg: DecisionPolicyWindows): DecisionPolicyWindows.AsObject;
  static serializeBinaryToWriter(message: DecisionPolicyWindows, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecisionPolicyWindows;
  static deserializeBinaryFromReader(message: DecisionPolicyWindows, reader: jspb.BinaryReader): DecisionPolicyWindows;
}

export namespace DecisionPolicyWindows {
  export type AsObject = {
    votingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    minExecutionPeriod?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class GroupInfo extends jspb.Message {
  getId(): number;
  setId(value: number): GroupInfo;

  getAdmin(): string;
  setAdmin(value: string): GroupInfo;

  getMetadata(): string;
  setMetadata(value: string): GroupInfo;

  getVersion(): number;
  setVersion(value: number): GroupInfo;

  getTotalWeight(): string;
  setTotalWeight(value: string): GroupInfo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GroupInfo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): GroupInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInfo): GroupInfo.AsObject;
  static serializeBinaryToWriter(message: GroupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInfo;
  static deserializeBinaryFromReader(message: GroupInfo, reader: jspb.BinaryReader): GroupInfo;
}

export namespace GroupInfo {
  export type AsObject = {
    id: number,
    admin: string,
    metadata: string,
    version: number,
    totalWeight: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GroupMember extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): GroupMember;

  getMember(): Member | undefined;
  setMember(value?: Member): GroupMember;
  hasMember(): boolean;
  clearMember(): GroupMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMember.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMember): GroupMember.AsObject;
  static serializeBinaryToWriter(message: GroupMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMember;
  static deserializeBinaryFromReader(message: GroupMember, reader: jspb.BinaryReader): GroupMember;
}

export namespace GroupMember {
  export type AsObject = {
    groupId: number,
    member?: Member.AsObject,
  }
}

export class GroupPolicyInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): GroupPolicyInfo;

  getGroupId(): number;
  setGroupId(value: number): GroupPolicyInfo;

  getAdmin(): string;
  setAdmin(value: string): GroupPolicyInfo;

  getMetadata(): string;
  setMetadata(value: string): GroupPolicyInfo;

  getVersion(): number;
  setVersion(value: number): GroupPolicyInfo;

  getDecisionPolicy(): google_protobuf_any_pb.Any | undefined;
  setDecisionPolicy(value?: google_protobuf_any_pb.Any): GroupPolicyInfo;
  hasDecisionPolicy(): boolean;
  clearDecisionPolicy(): GroupPolicyInfo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GroupPolicyInfo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): GroupPolicyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupPolicyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GroupPolicyInfo): GroupPolicyInfo.AsObject;
  static serializeBinaryToWriter(message: GroupPolicyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupPolicyInfo;
  static deserializeBinaryFromReader(message: GroupPolicyInfo, reader: jspb.BinaryReader): GroupPolicyInfo;
}

export namespace GroupPolicyInfo {
  export type AsObject = {
    address: string,
    groupId: number,
    admin: string,
    metadata: string,
    version: number,
    decisionPolicy?: google_protobuf_any_pb.Any.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Proposal extends jspb.Message {
  getId(): number;
  setId(value: number): Proposal;

  getGroupPolicyAddress(): string;
  setGroupPolicyAddress(value: string): Proposal;

  getMetadata(): string;
  setMetadata(value: string): Proposal;

  getProposersList(): Array<string>;
  setProposersList(value: Array<string>): Proposal;
  clearProposersList(): Proposal;
  addProposers(value: string, index?: number): Proposal;

  getSubmitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSubmitTime(value?: google_protobuf_timestamp_pb.Timestamp): Proposal;
  hasSubmitTime(): boolean;
  clearSubmitTime(): Proposal;

  getGroupVersion(): number;
  setGroupVersion(value: number): Proposal;

  getGroupPolicyVersion(): number;
  setGroupPolicyVersion(value: number): Proposal;

  getStatus(): ProposalStatus;
  setStatus(value: ProposalStatus): Proposal;

  getFinalTallyResult(): TallyResult | undefined;
  setFinalTallyResult(value?: TallyResult): Proposal;
  hasFinalTallyResult(): boolean;
  clearFinalTallyResult(): Proposal;

  getVotingPeriodEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVotingPeriodEnd(value?: google_protobuf_timestamp_pb.Timestamp): Proposal;
  hasVotingPeriodEnd(): boolean;
  clearVotingPeriodEnd(): Proposal;

  getExecutorResult(): ProposalExecutorResult;
  setExecutorResult(value: ProposalExecutorResult): Proposal;

  getMessagesList(): Array<google_protobuf_any_pb.Any>;
  setMessagesList(value: Array<google_protobuf_any_pb.Any>): Proposal;
  clearMessagesList(): Proposal;
  addMessages(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposal.AsObject;
  static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
  static serializeBinaryToWriter(message: Proposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proposal;
  static deserializeBinaryFromReader(message: Proposal, reader: jspb.BinaryReader): Proposal;
}

export namespace Proposal {
  export type AsObject = {
    id: number,
    groupPolicyAddress: string,
    metadata: string,
    proposersList: Array<string>,
    submitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    groupVersion: number,
    groupPolicyVersion: number,
    status: ProposalStatus,
    finalTallyResult?: TallyResult.AsObject,
    votingPeriodEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    executorResult: ProposalExecutorResult,
    messagesList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class TallyResult extends jspb.Message {
  getYesCount(): string;
  setYesCount(value: string): TallyResult;

  getAbstainCount(): string;
  setAbstainCount(value: string): TallyResult;

  getNoCount(): string;
  setNoCount(value: string): TallyResult;

  getNoWithVetoCount(): string;
  setNoWithVetoCount(value: string): TallyResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TallyResult.AsObject;
  static toObject(includeInstance: boolean, msg: TallyResult): TallyResult.AsObject;
  static serializeBinaryToWriter(message: TallyResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TallyResult;
  static deserializeBinaryFromReader(message: TallyResult, reader: jspb.BinaryReader): TallyResult;
}

export namespace TallyResult {
  export type AsObject = {
    yesCount: string,
    abstainCount: string,
    noCount: string,
    noWithVetoCount: string,
  }
}

export class Vote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): Vote;

  getVoter(): string;
  setVoter(value: string): Vote;

  getOption(): VoteOption;
  setOption(value: VoteOption): Vote;

  getMetadata(): string;
  setMetadata(value: string): Vote;

  getSubmitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSubmitTime(value?: google_protobuf_timestamp_pb.Timestamp): Vote;
  hasSubmitTime(): boolean;
  clearSubmitTime(): Vote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vote.AsObject;
  static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
  static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vote;
  static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
}

export namespace Vote {
  export type AsObject = {
    proposalId: number,
    voter: string,
    option: VoteOption,
    metadata: string,
    submitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export enum VoteOption { 
  VOTE_OPTION_UNSPECIFIED = 0,
  VOTE_OPTION_YES = 1,
  VOTE_OPTION_ABSTAIN = 2,
  VOTE_OPTION_NO = 3,
  VOTE_OPTION_NO_WITH_VETO = 4,
}
export enum ProposalStatus { 
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  PROPOSAL_STATUS_SUBMITTED = 1,
  PROPOSAL_STATUS_ACCEPTED = 2,
  PROPOSAL_STATUS_REJECTED = 3,
  PROPOSAL_STATUS_ABORTED = 4,
  PROPOSAL_STATUS_WITHDRAWN = 5,
}
export enum ProposalExecutorResult { 
  PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0,
  PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1,
  PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2,
  PROPOSAL_EXECUTOR_RESULT_FAILURE = 3,
}
