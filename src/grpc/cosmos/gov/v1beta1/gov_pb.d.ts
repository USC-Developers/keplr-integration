import * as jspb from 'google-protobuf'

import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';
import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class WeightedVoteOption extends jspb.Message {
  getOption(): VoteOption;
  setOption(value: VoteOption): WeightedVoteOption;

  getWeight(): string;
  setWeight(value: string): WeightedVoteOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeightedVoteOption.AsObject;
  static toObject(includeInstance: boolean, msg: WeightedVoteOption): WeightedVoteOption.AsObject;
  static serializeBinaryToWriter(message: WeightedVoteOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeightedVoteOption;
  static deserializeBinaryFromReader(message: WeightedVoteOption, reader: jspb.BinaryReader): WeightedVoteOption;
}

export namespace WeightedVoteOption {
  export type AsObject = {
    option: VoteOption,
    weight: string,
  }
}

export class TextProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): TextProposal;

  getDescription(): string;
  setDescription(value: string): TextProposal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextProposal.AsObject;
  static toObject(includeInstance: boolean, msg: TextProposal): TextProposal.AsObject;
  static serializeBinaryToWriter(message: TextProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextProposal;
  static deserializeBinaryFromReader(message: TextProposal, reader: jspb.BinaryReader): TextProposal;
}

export namespace TextProposal {
  export type AsObject = {
    title: string,
    description: string,
  }
}

export class Deposit extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): Deposit;

  getDepositor(): string;
  setDepositor(value: string): Deposit;

  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): Deposit;
  clearAmountList(): Deposit;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deposit.AsObject;
  static toObject(includeInstance: boolean, msg: Deposit): Deposit.AsObject;
  static serializeBinaryToWriter(message: Deposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deposit;
  static deserializeBinaryFromReader(message: Deposit, reader: jspb.BinaryReader): Deposit;
}

export namespace Deposit {
  export type AsObject = {
    proposalId: number,
    depositor: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class Proposal extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): Proposal;

  getContent(): google_protobuf_any_pb.Any | undefined;
  setContent(value?: google_protobuf_any_pb.Any): Proposal;
  hasContent(): boolean;
  clearContent(): Proposal;

  getStatus(): ProposalStatus;
  setStatus(value: ProposalStatus): Proposal;

  getFinalTallyResult(): TallyResult | undefined;
  setFinalTallyResult(value?: TallyResult): Proposal;
  hasFinalTallyResult(): boolean;
  clearFinalTallyResult(): Proposal;

  getSubmitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSubmitTime(value?: google_protobuf_timestamp_pb.Timestamp): Proposal;
  hasSubmitTime(): boolean;
  clearSubmitTime(): Proposal;

  getDepositEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDepositEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Proposal;
  hasDepositEndTime(): boolean;
  clearDepositEndTime(): Proposal;

  getTotalDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTotalDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): Proposal;
  clearTotalDepositList(): Proposal;
  addTotalDeposit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getVotingStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVotingStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Proposal;
  hasVotingStartTime(): boolean;
  clearVotingStartTime(): Proposal;

  getVotingEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVotingEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Proposal;
  hasVotingEndTime(): boolean;
  clearVotingEndTime(): Proposal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposal.AsObject;
  static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
  static serializeBinaryToWriter(message: Proposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proposal;
  static deserializeBinaryFromReader(message: Proposal, reader: jspb.BinaryReader): Proposal;
}

export namespace Proposal {
  export type AsObject = {
    proposalId: number,
    content?: google_protobuf_any_pb.Any.AsObject,
    status: ProposalStatus,
    finalTallyResult?: TallyResult.AsObject,
    submitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    depositEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    votingStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    votingEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TallyResult extends jspb.Message {
  getYes(): string;
  setYes(value: string): TallyResult;

  getAbstain(): string;
  setAbstain(value: string): TallyResult;

  getNo(): string;
  setNo(value: string): TallyResult;

  getNoWithVeto(): string;
  setNoWithVeto(value: string): TallyResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TallyResult.AsObject;
  static toObject(includeInstance: boolean, msg: TallyResult): TallyResult.AsObject;
  static serializeBinaryToWriter(message: TallyResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TallyResult;
  static deserializeBinaryFromReader(message: TallyResult, reader: jspb.BinaryReader): TallyResult;
}

export namespace TallyResult {
  export type AsObject = {
    yes: string,
    abstain: string,
    no: string,
    noWithVeto: string,
  }
}

export class Vote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): Vote;

  getVoter(): string;
  setVoter(value: string): Vote;

  getOption(): VoteOption;
  setOption(value: VoteOption): Vote;

  getOptionsList(): Array<WeightedVoteOption>;
  setOptionsList(value: Array<WeightedVoteOption>): Vote;
  clearOptionsList(): Vote;
  addOptions(value?: WeightedVoteOption, index?: number): WeightedVoteOption;

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
    optionsList: Array<WeightedVoteOption.AsObject>,
  }
}

export class DepositParams extends jspb.Message {
  getMinDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setMinDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): DepositParams;
  clearMinDepositList(): DepositParams;
  addMinDeposit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getMaxDepositPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setMaxDepositPeriod(value?: google_protobuf_duration_pb.Duration): DepositParams;
  hasMaxDepositPeriod(): boolean;
  clearMaxDepositPeriod(): DepositParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositParams.AsObject;
  static toObject(includeInstance: boolean, msg: DepositParams): DepositParams.AsObject;
  static serializeBinaryToWriter(message: DepositParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositParams;
  static deserializeBinaryFromReader(message: DepositParams, reader: jspb.BinaryReader): DepositParams;
}

export namespace DepositParams {
  export type AsObject = {
    minDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    maxDepositPeriod?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class VotingParams extends jspb.Message {
  getVotingPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setVotingPeriod(value?: google_protobuf_duration_pb.Duration): VotingParams;
  hasVotingPeriod(): boolean;
  clearVotingPeriod(): VotingParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VotingParams.AsObject;
  static toObject(includeInstance: boolean, msg: VotingParams): VotingParams.AsObject;
  static serializeBinaryToWriter(message: VotingParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VotingParams;
  static deserializeBinaryFromReader(message: VotingParams, reader: jspb.BinaryReader): VotingParams;
}

export namespace VotingParams {
  export type AsObject = {
    votingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class TallyParams extends jspb.Message {
  getQuorum(): Uint8Array | string;
  getQuorum_asU8(): Uint8Array;
  getQuorum_asB64(): string;
  setQuorum(value: Uint8Array | string): TallyParams;

  getThreshold(): Uint8Array | string;
  getThreshold_asU8(): Uint8Array;
  getThreshold_asB64(): string;
  setThreshold(value: Uint8Array | string): TallyParams;

  getVetoThreshold(): Uint8Array | string;
  getVetoThreshold_asU8(): Uint8Array;
  getVetoThreshold_asB64(): string;
  setVetoThreshold(value: Uint8Array | string): TallyParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TallyParams.AsObject;
  static toObject(includeInstance: boolean, msg: TallyParams): TallyParams.AsObject;
  static serializeBinaryToWriter(message: TallyParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TallyParams;
  static deserializeBinaryFromReader(message: TallyParams, reader: jspb.BinaryReader): TallyParams;
}

export namespace TallyParams {
  export type AsObject = {
    quorum: Uint8Array | string,
    threshold: Uint8Array | string,
    vetoThreshold: Uint8Array | string,
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
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  PROPOSAL_STATUS_PASSED = 3,
  PROPOSAL_STATUS_REJECTED = 4,
  PROPOSAL_STATUS_FAILED = 5,
}
