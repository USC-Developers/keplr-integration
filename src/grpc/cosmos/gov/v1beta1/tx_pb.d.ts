import * as jspb from 'google-protobuf'

import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';
import * as cosmos_gov_v1beta1_gov_pb from '../../../cosmos/gov/v1beta1/gov_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class MsgSubmitProposal extends jspb.Message {
  getContent(): google_protobuf_any_pb.Any | undefined;
  setContent(value?: google_protobuf_any_pb.Any): MsgSubmitProposal;
  hasContent(): boolean;
  clearContent(): MsgSubmitProposal;

  getInitialDepositList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setInitialDepositList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgSubmitProposal;
  clearInitialDepositList(): MsgSubmitProposal;
  addInitialDeposit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getProposer(): string;
  setProposer(value: string): MsgSubmitProposal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitProposal.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitProposal): MsgSubmitProposal.AsObject;
  static serializeBinaryToWriter(message: MsgSubmitProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitProposal;
  static deserializeBinaryFromReader(message: MsgSubmitProposal, reader: jspb.BinaryReader): MsgSubmitProposal;
}

export namespace MsgSubmitProposal {
  export type AsObject = {
    content?: google_protobuf_any_pb.Any.AsObject,
    initialDepositList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    proposer: string,
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

export class MsgVote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): MsgVote;

  getVoter(): string;
  setVoter(value: string): MsgVote;

  getOption(): cosmos_gov_v1beta1_gov_pb.VoteOption;
  setOption(value: cosmos_gov_v1beta1_gov_pb.VoteOption): MsgVote;

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
    option: cosmos_gov_v1beta1_gov_pb.VoteOption,
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

export class MsgVoteWeighted extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): MsgVoteWeighted;

  getVoter(): string;
  setVoter(value: string): MsgVoteWeighted;

  getOptionsList(): Array<cosmos_gov_v1beta1_gov_pb.WeightedVoteOption>;
  setOptionsList(value: Array<cosmos_gov_v1beta1_gov_pb.WeightedVoteOption>): MsgVoteWeighted;
  clearOptionsList(): MsgVoteWeighted;
  addOptions(value?: cosmos_gov_v1beta1_gov_pb.WeightedVoteOption, index?: number): cosmos_gov_v1beta1_gov_pb.WeightedVoteOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVoteWeighted.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVoteWeighted): MsgVoteWeighted.AsObject;
  static serializeBinaryToWriter(message: MsgVoteWeighted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVoteWeighted;
  static deserializeBinaryFromReader(message: MsgVoteWeighted, reader: jspb.BinaryReader): MsgVoteWeighted;
}

export namespace MsgVoteWeighted {
  export type AsObject = {
    proposalId: number,
    voter: string,
    optionsList: Array<cosmos_gov_v1beta1_gov_pb.WeightedVoteOption.AsObject>,
  }
}

export class MsgVoteWeightedResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVoteWeightedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVoteWeightedResponse): MsgVoteWeightedResponse.AsObject;
  static serializeBinaryToWriter(message: MsgVoteWeightedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVoteWeightedResponse;
  static deserializeBinaryFromReader(message: MsgVoteWeightedResponse, reader: jspb.BinaryReader): MsgVoteWeightedResponse;
}

export namespace MsgVoteWeightedResponse {
  export type AsObject = {
  }
}

export class MsgDeposit extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): MsgDeposit;

  getDepositor(): string;
  setDepositor(value: string): MsgDeposit;

  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgDeposit;
  clearAmountList(): MsgDeposit;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDeposit): MsgDeposit.AsObject;
  static serializeBinaryToWriter(message: MsgDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDeposit;
  static deserializeBinaryFromReader(message: MsgDeposit, reader: jspb.BinaryReader): MsgDeposit;
}

export namespace MsgDeposit {
  export type AsObject = {
    proposalId: number,
    depositor: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class MsgDepositResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDepositResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDepositResponse): MsgDepositResponse.AsObject;
  static serializeBinaryToWriter(message: MsgDepositResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDepositResponse;
  static deserializeBinaryFromReader(message: MsgDepositResponse, reader: jspb.BinaryReader): MsgDepositResponse;
}

export namespace MsgDepositResponse {
  export type AsObject = {
  }
}

