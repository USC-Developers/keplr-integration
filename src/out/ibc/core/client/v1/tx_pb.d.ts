import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as ibc_core_client_v1_client_pb from '../../../../ibc/core/client/v1/client_pb';


export class MsgCreateClient extends jspb.Message {
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): MsgCreateClient;
  hasClientState(): boolean;
  clearClientState(): MsgCreateClient;

  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): MsgCreateClient;
  hasConsensusState(): boolean;
  clearConsensusState(): MsgCreateClient;

  getSigner(): string;
  setSigner(value: string): MsgCreateClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateClient.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateClient): MsgCreateClient.AsObject;
  static serializeBinaryToWriter(message: MsgCreateClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateClient;
  static deserializeBinaryFromReader(message: MsgCreateClient, reader: jspb.BinaryReader): MsgCreateClient;
}

export namespace MsgCreateClient {
  export type AsObject = {
    clientState?: google_protobuf_any_pb.Any.AsObject,
    consensusState?: google_protobuf_any_pb.Any.AsObject,
    signer: string,
  }
}

export class MsgCreateClientResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateClientResponse): MsgCreateClientResponse.AsObject;
  static serializeBinaryToWriter(message: MsgCreateClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateClientResponse;
  static deserializeBinaryFromReader(message: MsgCreateClientResponse, reader: jspb.BinaryReader): MsgCreateClientResponse;
}

export namespace MsgCreateClientResponse {
  export type AsObject = {
  }
}

export class MsgUpdateClient extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): MsgUpdateClient;

  getHeader(): google_protobuf_any_pb.Any | undefined;
  setHeader(value?: google_protobuf_any_pb.Any): MsgUpdateClient;
  hasHeader(): boolean;
  clearHeader(): MsgUpdateClient;

  getSigner(): string;
  setSigner(value: string): MsgUpdateClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateClient.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateClient): MsgUpdateClient.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateClient;
  static deserializeBinaryFromReader(message: MsgUpdateClient, reader: jspb.BinaryReader): MsgUpdateClient;
}

export namespace MsgUpdateClient {
  export type AsObject = {
    clientId: string,
    header?: google_protobuf_any_pb.Any.AsObject,
    signer: string,
  }
}

export class MsgUpdateClientResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateClientResponse): MsgUpdateClientResponse.AsObject;
  static serializeBinaryToWriter(message: MsgUpdateClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateClientResponse;
  static deserializeBinaryFromReader(message: MsgUpdateClientResponse, reader: jspb.BinaryReader): MsgUpdateClientResponse;
}

export namespace MsgUpdateClientResponse {
  export type AsObject = {
  }
}

export class MsgUpgradeClient extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): MsgUpgradeClient;

  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): MsgUpgradeClient;
  hasClientState(): boolean;
  clearClientState(): MsgUpgradeClient;

  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): MsgUpgradeClient;
  hasConsensusState(): boolean;
  clearConsensusState(): MsgUpgradeClient;

  getProofUpgradeClient(): Uint8Array | string;
  getProofUpgradeClient_asU8(): Uint8Array;
  getProofUpgradeClient_asB64(): string;
  setProofUpgradeClient(value: Uint8Array | string): MsgUpgradeClient;

  getProofUpgradeConsensusState(): Uint8Array | string;
  getProofUpgradeConsensusState_asU8(): Uint8Array;
  getProofUpgradeConsensusState_asB64(): string;
  setProofUpgradeConsensusState(value: Uint8Array | string): MsgUpgradeClient;

  getSigner(): string;
  setSigner(value: string): MsgUpgradeClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpgradeClient.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpgradeClient): MsgUpgradeClient.AsObject;
  static serializeBinaryToWriter(message: MsgUpgradeClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpgradeClient;
  static deserializeBinaryFromReader(message: MsgUpgradeClient, reader: jspb.BinaryReader): MsgUpgradeClient;
}

export namespace MsgUpgradeClient {
  export type AsObject = {
    clientId: string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
    consensusState?: google_protobuf_any_pb.Any.AsObject,
    proofUpgradeClient: Uint8Array | string,
    proofUpgradeConsensusState: Uint8Array | string,
    signer: string,
  }
}

export class MsgUpgradeClientResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpgradeClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpgradeClientResponse): MsgUpgradeClientResponse.AsObject;
  static serializeBinaryToWriter(message: MsgUpgradeClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpgradeClientResponse;
  static deserializeBinaryFromReader(message: MsgUpgradeClientResponse, reader: jspb.BinaryReader): MsgUpgradeClientResponse;
}

export namespace MsgUpgradeClientResponse {
  export type AsObject = {
  }
}

export class MsgSubmitMisbehaviour extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): MsgSubmitMisbehaviour;

  getMisbehaviour(): google_protobuf_any_pb.Any | undefined;
  setMisbehaviour(value?: google_protobuf_any_pb.Any): MsgSubmitMisbehaviour;
  hasMisbehaviour(): boolean;
  clearMisbehaviour(): MsgSubmitMisbehaviour;

  getSigner(): string;
  setSigner(value: string): MsgSubmitMisbehaviour;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitMisbehaviour.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitMisbehaviour): MsgSubmitMisbehaviour.AsObject;
  static serializeBinaryToWriter(message: MsgSubmitMisbehaviour, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitMisbehaviour;
  static deserializeBinaryFromReader(message: MsgSubmitMisbehaviour, reader: jspb.BinaryReader): MsgSubmitMisbehaviour;
}

export namespace MsgSubmitMisbehaviour {
  export type AsObject = {
    clientId: string,
    misbehaviour?: google_protobuf_any_pb.Any.AsObject,
    signer: string,
  }
}

export class MsgSubmitMisbehaviourResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitMisbehaviourResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponse.AsObject;
  static serializeBinaryToWriter(message: MsgSubmitMisbehaviourResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitMisbehaviourResponse;
  static deserializeBinaryFromReader(message: MsgSubmitMisbehaviourResponse, reader: jspb.BinaryReader): MsgSubmitMisbehaviourResponse;
}

export namespace MsgSubmitMisbehaviourResponse {
  export type AsObject = {
  }
}

