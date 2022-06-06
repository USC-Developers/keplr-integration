import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as ibc_core_client_v1_client_pb from '../../../../ibc/core/client/v1/client_pb';
import * as ibc_core_connection_v1_connection_pb from '../../../../ibc/core/connection/v1/connection_pb';


export class MsgConnectionOpenInit extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): MsgConnectionOpenInit;

  getCounterparty(): ibc_core_connection_v1_connection_pb.Counterparty | undefined;
  setCounterparty(value?: ibc_core_connection_v1_connection_pb.Counterparty): MsgConnectionOpenInit;
  hasCounterparty(): boolean;
  clearCounterparty(): MsgConnectionOpenInit;

  getVersion(): ibc_core_connection_v1_connection_pb.Version | undefined;
  setVersion(value?: ibc_core_connection_v1_connection_pb.Version): MsgConnectionOpenInit;
  hasVersion(): boolean;
  clearVersion(): MsgConnectionOpenInit;

  getDelayPeriod(): number;
  setDelayPeriod(value: number): MsgConnectionOpenInit;

  getSigner(): string;
  setSigner(value: string): MsgConnectionOpenInit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenInit.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenInit): MsgConnectionOpenInit.AsObject;
  static serializeBinaryToWriter(message: MsgConnectionOpenInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenInit;
  static deserializeBinaryFromReader(message: MsgConnectionOpenInit, reader: jspb.BinaryReader): MsgConnectionOpenInit;
}

export namespace MsgConnectionOpenInit {
  export type AsObject = {
    clientId: string,
    counterparty?: ibc_core_connection_v1_connection_pb.Counterparty.AsObject,
    version?: ibc_core_connection_v1_connection_pb.Version.AsObject,
    delayPeriod: number,
    signer: string,
  }
}

export class MsgConnectionOpenInitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenInitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenInitResponse): MsgConnectionOpenInitResponse.AsObject;
  static serializeBinaryToWriter(message: MsgConnectionOpenInitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenInitResponse;
  static deserializeBinaryFromReader(message: MsgConnectionOpenInitResponse, reader: jspb.BinaryReader): MsgConnectionOpenInitResponse;
}

export namespace MsgConnectionOpenInitResponse {
  export type AsObject = {
  }
}

export class MsgConnectionOpenTry extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): MsgConnectionOpenTry;

  getPreviousConnectionId(): string;
  setPreviousConnectionId(value: string): MsgConnectionOpenTry;

  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): MsgConnectionOpenTry;
  hasClientState(): boolean;
  clearClientState(): MsgConnectionOpenTry;

  getCounterparty(): ibc_core_connection_v1_connection_pb.Counterparty | undefined;
  setCounterparty(value?: ibc_core_connection_v1_connection_pb.Counterparty): MsgConnectionOpenTry;
  hasCounterparty(): boolean;
  clearCounterparty(): MsgConnectionOpenTry;

  getDelayPeriod(): number;
  setDelayPeriod(value: number): MsgConnectionOpenTry;

  getCounterpartyVersionsList(): Array<ibc_core_connection_v1_connection_pb.Version>;
  setCounterpartyVersionsList(value: Array<ibc_core_connection_v1_connection_pb.Version>): MsgConnectionOpenTry;
  clearCounterpartyVersionsList(): MsgConnectionOpenTry;
  addCounterpartyVersions(value?: ibc_core_connection_v1_connection_pb.Version, index?: number): ibc_core_connection_v1_connection_pb.Version;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): MsgConnectionOpenTry;
  hasProofHeight(): boolean;
  clearProofHeight(): MsgConnectionOpenTry;

  getProofInit(): Uint8Array | string;
  getProofInit_asU8(): Uint8Array;
  getProofInit_asB64(): string;
  setProofInit(value: Uint8Array | string): MsgConnectionOpenTry;

  getProofClient(): Uint8Array | string;
  getProofClient_asU8(): Uint8Array;
  getProofClient_asB64(): string;
  setProofClient(value: Uint8Array | string): MsgConnectionOpenTry;

  getProofConsensus(): Uint8Array | string;
  getProofConsensus_asU8(): Uint8Array;
  getProofConsensus_asB64(): string;
  setProofConsensus(value: Uint8Array | string): MsgConnectionOpenTry;

  getConsensusHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setConsensusHeight(value?: ibc_core_client_v1_client_pb.Height): MsgConnectionOpenTry;
  hasConsensusHeight(): boolean;
  clearConsensusHeight(): MsgConnectionOpenTry;

  getSigner(): string;
  setSigner(value: string): MsgConnectionOpenTry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenTry.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenTry): MsgConnectionOpenTry.AsObject;
  static serializeBinaryToWriter(message: MsgConnectionOpenTry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenTry;
  static deserializeBinaryFromReader(message: MsgConnectionOpenTry, reader: jspb.BinaryReader): MsgConnectionOpenTry;
}

export namespace MsgConnectionOpenTry {
  export type AsObject = {
    clientId: string,
    previousConnectionId: string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
    counterparty?: ibc_core_connection_v1_connection_pb.Counterparty.AsObject,
    delayPeriod: number,
    counterpartyVersionsList: Array<ibc_core_connection_v1_connection_pb.Version.AsObject>,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    proofInit: Uint8Array | string,
    proofClient: Uint8Array | string,
    proofConsensus: Uint8Array | string,
    consensusHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgConnectionOpenTryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenTryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenTryResponse): MsgConnectionOpenTryResponse.AsObject;
  static serializeBinaryToWriter(message: MsgConnectionOpenTryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenTryResponse;
  static deserializeBinaryFromReader(message: MsgConnectionOpenTryResponse, reader: jspb.BinaryReader): MsgConnectionOpenTryResponse;
}

export namespace MsgConnectionOpenTryResponse {
  export type AsObject = {
  }
}

export class MsgConnectionOpenAck extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): MsgConnectionOpenAck;

  getCounterpartyConnectionId(): string;
  setCounterpartyConnectionId(value: string): MsgConnectionOpenAck;

  getVersion(): ibc_core_connection_v1_connection_pb.Version | undefined;
  setVersion(value?: ibc_core_connection_v1_connection_pb.Version): MsgConnectionOpenAck;
  hasVersion(): boolean;
  clearVersion(): MsgConnectionOpenAck;

  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): MsgConnectionOpenAck;
  hasClientState(): boolean;
  clearClientState(): MsgConnectionOpenAck;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): MsgConnectionOpenAck;
  hasProofHeight(): boolean;
  clearProofHeight(): MsgConnectionOpenAck;

  getProofTry(): Uint8Array | string;
  getProofTry_asU8(): Uint8Array;
  getProofTry_asB64(): string;
  setProofTry(value: Uint8Array | string): MsgConnectionOpenAck;

  getProofClient(): Uint8Array | string;
  getProofClient_asU8(): Uint8Array;
  getProofClient_asB64(): string;
  setProofClient(value: Uint8Array | string): MsgConnectionOpenAck;

  getProofConsensus(): Uint8Array | string;
  getProofConsensus_asU8(): Uint8Array;
  getProofConsensus_asB64(): string;
  setProofConsensus(value: Uint8Array | string): MsgConnectionOpenAck;

  getConsensusHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setConsensusHeight(value?: ibc_core_client_v1_client_pb.Height): MsgConnectionOpenAck;
  hasConsensusHeight(): boolean;
  clearConsensusHeight(): MsgConnectionOpenAck;

  getSigner(): string;
  setSigner(value: string): MsgConnectionOpenAck;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenAck.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenAck): MsgConnectionOpenAck.AsObject;
  static serializeBinaryToWriter(message: MsgConnectionOpenAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenAck;
  static deserializeBinaryFromReader(message: MsgConnectionOpenAck, reader: jspb.BinaryReader): MsgConnectionOpenAck;
}

export namespace MsgConnectionOpenAck {
  export type AsObject = {
    connectionId: string,
    counterpartyConnectionId: string,
    version?: ibc_core_connection_v1_connection_pb.Version.AsObject,
    clientState?: google_protobuf_any_pb.Any.AsObject,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    proofTry: Uint8Array | string,
    proofClient: Uint8Array | string,
    proofConsensus: Uint8Array | string,
    consensusHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgConnectionOpenAckResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenAckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenAckResponse): MsgConnectionOpenAckResponse.AsObject;
  static serializeBinaryToWriter(message: MsgConnectionOpenAckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenAckResponse;
  static deserializeBinaryFromReader(message: MsgConnectionOpenAckResponse, reader: jspb.BinaryReader): MsgConnectionOpenAckResponse;
}

export namespace MsgConnectionOpenAckResponse {
  export type AsObject = {
  }
}

export class MsgConnectionOpenConfirm extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): MsgConnectionOpenConfirm;

  getProofAck(): Uint8Array | string;
  getProofAck_asU8(): Uint8Array;
  getProofAck_asB64(): string;
  setProofAck(value: Uint8Array | string): MsgConnectionOpenConfirm;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): MsgConnectionOpenConfirm;
  hasProofHeight(): boolean;
  clearProofHeight(): MsgConnectionOpenConfirm;

  getSigner(): string;
  setSigner(value: string): MsgConnectionOpenConfirm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenConfirm.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenConfirm): MsgConnectionOpenConfirm.AsObject;
  static serializeBinaryToWriter(message: MsgConnectionOpenConfirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenConfirm;
  static deserializeBinaryFromReader(message: MsgConnectionOpenConfirm, reader: jspb.BinaryReader): MsgConnectionOpenConfirm;
}

export namespace MsgConnectionOpenConfirm {
  export type AsObject = {
    connectionId: string,
    proofAck: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgConnectionOpenConfirmResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenConfirmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenConfirmResponse): MsgConnectionOpenConfirmResponse.AsObject;
  static serializeBinaryToWriter(message: MsgConnectionOpenConfirmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenConfirmResponse;
  static deserializeBinaryFromReader(message: MsgConnectionOpenConfirmResponse, reader: jspb.BinaryReader): MsgConnectionOpenConfirmResponse;
}

export namespace MsgConnectionOpenConfirmResponse {
  export type AsObject = {
  }
}

