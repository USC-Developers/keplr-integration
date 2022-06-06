import * as jspb from 'google-protobuf'

import * as cosmos_gov_v1_gov_pb from '../../../cosmos/gov/v1/gov_pb';


export class GenesisState extends jspb.Message {
  getStartingProposalId(): number;
  setStartingProposalId(value: number): GenesisState;

  getDepositsList(): Array<cosmos_gov_v1_gov_pb.Deposit>;
  setDepositsList(value: Array<cosmos_gov_v1_gov_pb.Deposit>): GenesisState;
  clearDepositsList(): GenesisState;
  addDeposits(value?: cosmos_gov_v1_gov_pb.Deposit, index?: number): cosmos_gov_v1_gov_pb.Deposit;

  getVotesList(): Array<cosmos_gov_v1_gov_pb.Vote>;
  setVotesList(value: Array<cosmos_gov_v1_gov_pb.Vote>): GenesisState;
  clearVotesList(): GenesisState;
  addVotes(value?: cosmos_gov_v1_gov_pb.Vote, index?: number): cosmos_gov_v1_gov_pb.Vote;

  getProposalsList(): Array<cosmos_gov_v1_gov_pb.Proposal>;
  setProposalsList(value: Array<cosmos_gov_v1_gov_pb.Proposal>): GenesisState;
  clearProposalsList(): GenesisState;
  addProposals(value?: cosmos_gov_v1_gov_pb.Proposal, index?: number): cosmos_gov_v1_gov_pb.Proposal;

  getDepositParams(): cosmos_gov_v1_gov_pb.DepositParams | undefined;
  setDepositParams(value?: cosmos_gov_v1_gov_pb.DepositParams): GenesisState;
  hasDepositParams(): boolean;
  clearDepositParams(): GenesisState;

  getVotingParams(): cosmos_gov_v1_gov_pb.VotingParams | undefined;
  setVotingParams(value?: cosmos_gov_v1_gov_pb.VotingParams): GenesisState;
  hasVotingParams(): boolean;
  clearVotingParams(): GenesisState;

  getTallyParams(): cosmos_gov_v1_gov_pb.TallyParams | undefined;
  setTallyParams(value?: cosmos_gov_v1_gov_pb.TallyParams): GenesisState;
  hasTallyParams(): boolean;
  clearTallyParams(): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    startingProposalId: number,
    depositsList: Array<cosmos_gov_v1_gov_pb.Deposit.AsObject>,
    votesList: Array<cosmos_gov_v1_gov_pb.Vote.AsObject>,
    proposalsList: Array<cosmos_gov_v1_gov_pb.Proposal.AsObject>,
    depositParams?: cosmos_gov_v1_gov_pb.DepositParams.AsObject,
    votingParams?: cosmos_gov_v1_gov_pb.VotingParams.AsObject,
    tallyParams?: cosmos_gov_v1_gov_pb.TallyParams.AsObject,
  }
}

