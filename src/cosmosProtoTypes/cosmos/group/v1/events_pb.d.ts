import * as jspb from 'google-protobuf'

import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as cosmos_group_v1_types_pb from '../../../cosmos/group/v1/types_pb';


export class EventCreateGroup extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): EventCreateGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventCreateGroup.AsObject;
  static toObject(includeInstance: boolean, msg: EventCreateGroup): EventCreateGroup.AsObject;
  static serializeBinaryToWriter(message: EventCreateGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventCreateGroup;
  static deserializeBinaryFromReader(message: EventCreateGroup, reader: jspb.BinaryReader): EventCreateGroup;
}

export namespace EventCreateGroup {
  export type AsObject = {
    groupId: number,
  }
}

export class EventUpdateGroup extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): EventUpdateGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventUpdateGroup.AsObject;
  static toObject(includeInstance: boolean, msg: EventUpdateGroup): EventUpdateGroup.AsObject;
  static serializeBinaryToWriter(message: EventUpdateGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventUpdateGroup;
  static deserializeBinaryFromReader(message: EventUpdateGroup, reader: jspb.BinaryReader): EventUpdateGroup;
}

export namespace EventUpdateGroup {
  export type AsObject = {
    groupId: number,
  }
}

export class EventCreateGroupPolicy extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): EventCreateGroupPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventCreateGroupPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: EventCreateGroupPolicy): EventCreateGroupPolicy.AsObject;
  static serializeBinaryToWriter(message: EventCreateGroupPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventCreateGroupPolicy;
  static deserializeBinaryFromReader(message: EventCreateGroupPolicy, reader: jspb.BinaryReader): EventCreateGroupPolicy;
}

export namespace EventCreateGroupPolicy {
  export type AsObject = {
    address: string,
  }
}

export class EventUpdateGroupPolicy extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): EventUpdateGroupPolicy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventUpdateGroupPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: EventUpdateGroupPolicy): EventUpdateGroupPolicy.AsObject;
  static serializeBinaryToWriter(message: EventUpdateGroupPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventUpdateGroupPolicy;
  static deserializeBinaryFromReader(message: EventUpdateGroupPolicy, reader: jspb.BinaryReader): EventUpdateGroupPolicy;
}

export namespace EventUpdateGroupPolicy {
  export type AsObject = {
    address: string,
  }
}

export class EventSubmitProposal extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): EventSubmitProposal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSubmitProposal.AsObject;
  static toObject(includeInstance: boolean, msg: EventSubmitProposal): EventSubmitProposal.AsObject;
  static serializeBinaryToWriter(message: EventSubmitProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSubmitProposal;
  static deserializeBinaryFromReader(message: EventSubmitProposal, reader: jspb.BinaryReader): EventSubmitProposal;
}

export namespace EventSubmitProposal {
  export type AsObject = {
    proposalId: number,
  }
}

export class EventWithdrawProposal extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): EventWithdrawProposal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventWithdrawProposal.AsObject;
  static toObject(includeInstance: boolean, msg: EventWithdrawProposal): EventWithdrawProposal.AsObject;
  static serializeBinaryToWriter(message: EventWithdrawProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventWithdrawProposal;
  static deserializeBinaryFromReader(message: EventWithdrawProposal, reader: jspb.BinaryReader): EventWithdrawProposal;
}

export namespace EventWithdrawProposal {
  export type AsObject = {
    proposalId: number,
  }
}

export class EventVote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): EventVote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventVote.AsObject;
  static toObject(includeInstance: boolean, msg: EventVote): EventVote.AsObject;
  static serializeBinaryToWriter(message: EventVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventVote;
  static deserializeBinaryFromReader(message: EventVote, reader: jspb.BinaryReader): EventVote;
}

export namespace EventVote {
  export type AsObject = {
    proposalId: number,
  }
}

export class EventExec extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): EventExec;

  getResult(): cosmos_group_v1_types_pb.ProposalExecutorResult;
  setResult(value: cosmos_group_v1_types_pb.ProposalExecutorResult): EventExec;

  getLogs(): string;
  setLogs(value: string): EventExec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventExec.AsObject;
  static toObject(includeInstance: boolean, msg: EventExec): EventExec.AsObject;
  static serializeBinaryToWriter(message: EventExec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventExec;
  static deserializeBinaryFromReader(message: EventExec, reader: jspb.BinaryReader): EventExec;
}

export namespace EventExec {
  export type AsObject = {
    proposalId: number,
    result: cosmos_group_v1_types_pb.ProposalExecutorResult,
    logs: string,
  }
}

export class EventLeaveGroup extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): EventLeaveGroup;

  getAddress(): string;
  setAddress(value: string): EventLeaveGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventLeaveGroup.AsObject;
  static toObject(includeInstance: boolean, msg: EventLeaveGroup): EventLeaveGroup.AsObject;
  static serializeBinaryToWriter(message: EventLeaveGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventLeaveGroup;
  static deserializeBinaryFromReader(message: EventLeaveGroup, reader: jspb.BinaryReader): EventLeaveGroup;
}

export namespace EventLeaveGroup {
  export type AsObject = {
    groupId: number,
    address: string,
  }
}

