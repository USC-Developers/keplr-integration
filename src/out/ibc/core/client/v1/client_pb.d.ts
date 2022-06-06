import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class IdentifiedClientState extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): IdentifiedClientState;

  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): IdentifiedClientState;
  hasClientState(): boolean;
  clearClientState(): IdentifiedClientState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedClientState.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedClientState): IdentifiedClientState.AsObject;
  static serializeBinaryToWriter(message: IdentifiedClientState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedClientState;
  static deserializeBinaryFromReader(message: IdentifiedClientState, reader: jspb.BinaryReader): IdentifiedClientState;
}

export namespace IdentifiedClientState {
  export type AsObject = {
    clientId: string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ConsensusStateWithHeight extends jspb.Message {
  getHeight(): Height | undefined;
  setHeight(value?: Height): ConsensusStateWithHeight;
  hasHeight(): boolean;
  clearHeight(): ConsensusStateWithHeight;

  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): ConsensusStateWithHeight;
  hasConsensusState(): boolean;
  clearConsensusState(): ConsensusStateWithHeight;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusStateWithHeight.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusStateWithHeight): ConsensusStateWithHeight.AsObject;
  static serializeBinaryToWriter(message: ConsensusStateWithHeight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusStateWithHeight;
  static deserializeBinaryFromReader(message: ConsensusStateWithHeight, reader: jspb.BinaryReader): ConsensusStateWithHeight;
}

export namespace ConsensusStateWithHeight {
  export type AsObject = {
    height?: Height.AsObject,
    consensusState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ClientConsensusStates extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): ClientConsensusStates;

  getConsensusStatesList(): Array<ConsensusStateWithHeight>;
  setConsensusStatesList(value: Array<ConsensusStateWithHeight>): ClientConsensusStates;
  clearConsensusStatesList(): ClientConsensusStates;
  addConsensusStates(value?: ConsensusStateWithHeight, index?: number): ConsensusStateWithHeight;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientConsensusStates.AsObject;
  static toObject(includeInstance: boolean, msg: ClientConsensusStates): ClientConsensusStates.AsObject;
  static serializeBinaryToWriter(message: ClientConsensusStates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientConsensusStates;
  static deserializeBinaryFromReader(message: ClientConsensusStates, reader: jspb.BinaryReader): ClientConsensusStates;
}

export namespace ClientConsensusStates {
  export type AsObject = {
    clientId: string,
    consensusStatesList: Array<ConsensusStateWithHeight.AsObject>,
  }
}

export class ClientUpdateProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ClientUpdateProposal;

  getDescription(): string;
  setDescription(value: string): ClientUpdateProposal;

  getClientId(): string;
  setClientId(value: string): ClientUpdateProposal;

  getHeader(): google_protobuf_any_pb.Any | undefined;
  setHeader(value?: google_protobuf_any_pb.Any): ClientUpdateProposal;
  hasHeader(): boolean;
  clearHeader(): ClientUpdateProposal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientUpdateProposal.AsObject;
  static toObject(includeInstance: boolean, msg: ClientUpdateProposal): ClientUpdateProposal.AsObject;
  static serializeBinaryToWriter(message: ClientUpdateProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientUpdateProposal;
  static deserializeBinaryFromReader(message: ClientUpdateProposal, reader: jspb.BinaryReader): ClientUpdateProposal;
}

export namespace ClientUpdateProposal {
  export type AsObject = {
    title: string,
    description: string,
    clientId: string,
    header?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class Height extends jspb.Message {
  getRevisionNumber(): number;
  setRevisionNumber(value: number): Height;

  getRevisionHeight(): number;
  setRevisionHeight(value: number): Height;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Height.AsObject;
  static toObject(includeInstance: boolean, msg: Height): Height.AsObject;
  static serializeBinaryToWriter(message: Height, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Height;
  static deserializeBinaryFromReader(message: Height, reader: jspb.BinaryReader): Height;
}

export namespace Height {
  export type AsObject = {
    revisionNumber: number,
    revisionHeight: number,
  }
}

export class Params extends jspb.Message {
  getAllowedClientsList(): Array<string>;
  setAllowedClientsList(value: Array<string>): Params;
  clearAllowedClientsList(): Params;
  addAllowedClients(value: string, index?: number): Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    allowedClientsList: Array<string>,
  }
}

