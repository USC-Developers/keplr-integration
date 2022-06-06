import * as jspb from 'google-protobuf'

import * as ibc_core_connection_v1_connection_pb from '../../../../ibc/core/connection/v1/connection_pb';
import * as ibc_core_channel_v1_channel_pb from '../../../../ibc/core/channel/v1/channel_pb';
import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class ClientState extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): ClientState;

  getFrozenSequence(): number;
  setFrozenSequence(value: number): ClientState;

  getConsensusState(): ConsensusState | undefined;
  setConsensusState(value?: ConsensusState): ClientState;
  hasConsensusState(): boolean;
  clearConsensusState(): ClientState;

  getAllowUpdateAfterProposal(): boolean;
  setAllowUpdateAfterProposal(value: boolean): ClientState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientState.AsObject;
  static toObject(includeInstance: boolean, msg: ClientState): ClientState.AsObject;
  static serializeBinaryToWriter(message: ClientState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientState;
  static deserializeBinaryFromReader(message: ClientState, reader: jspb.BinaryReader): ClientState;
}

export namespace ClientState {
  export type AsObject = {
    sequence: number,
    frozenSequence: number,
    consensusState?: ConsensusState.AsObject,
    allowUpdateAfterProposal: boolean,
  }
}

export class ConsensusState extends jspb.Message {
  getPublicKey(): google_protobuf_any_pb.Any | undefined;
  setPublicKey(value?: google_protobuf_any_pb.Any): ConsensusState;
  hasPublicKey(): boolean;
  clearPublicKey(): ConsensusState;

  getDiversifier(): string;
  setDiversifier(value: string): ConsensusState;

  getTimestamp(): number;
  setTimestamp(value: number): ConsensusState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusState.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusState): ConsensusState.AsObject;
  static serializeBinaryToWriter(message: ConsensusState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusState;
  static deserializeBinaryFromReader(message: ConsensusState, reader: jspb.BinaryReader): ConsensusState;
}

export namespace ConsensusState {
  export type AsObject = {
    publicKey?: google_protobuf_any_pb.Any.AsObject,
    diversifier: string,
    timestamp: number,
  }
}

export class Header extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): Header;

  getTimestamp(): number;
  setTimestamp(value: number): Header;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): Header;

  getNewPublicKey(): google_protobuf_any_pb.Any | undefined;
  setNewPublicKey(value?: google_protobuf_any_pb.Any): Header;
  hasNewPublicKey(): boolean;
  clearNewPublicKey(): Header;

  getNewDiversifier(): string;
  setNewDiversifier(value: string): Header;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    sequence: number,
    timestamp: number,
    signature: Uint8Array | string,
    newPublicKey?: google_protobuf_any_pb.Any.AsObject,
    newDiversifier: string,
  }
}

export class Misbehaviour extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): Misbehaviour;

  getSequence(): number;
  setSequence(value: number): Misbehaviour;

  getSignatureOne(): SignatureAndData | undefined;
  setSignatureOne(value?: SignatureAndData): Misbehaviour;
  hasSignatureOne(): boolean;
  clearSignatureOne(): Misbehaviour;

  getSignatureTwo(): SignatureAndData | undefined;
  setSignatureTwo(value?: SignatureAndData): Misbehaviour;
  hasSignatureTwo(): boolean;
  clearSignatureTwo(): Misbehaviour;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Misbehaviour.AsObject;
  static toObject(includeInstance: boolean, msg: Misbehaviour): Misbehaviour.AsObject;
  static serializeBinaryToWriter(message: Misbehaviour, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Misbehaviour;
  static deserializeBinaryFromReader(message: Misbehaviour, reader: jspb.BinaryReader): Misbehaviour;
}

export namespace Misbehaviour {
  export type AsObject = {
    clientId: string,
    sequence: number,
    signatureOne?: SignatureAndData.AsObject,
    signatureTwo?: SignatureAndData.AsObject,
  }
}

export class SignatureAndData extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): SignatureAndData;

  getDataType(): DataType;
  setDataType(value: DataType): SignatureAndData;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): SignatureAndData;

  getTimestamp(): number;
  setTimestamp(value: number): SignatureAndData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureAndData.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureAndData): SignatureAndData.AsObject;
  static serializeBinaryToWriter(message: SignatureAndData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureAndData;
  static deserializeBinaryFromReader(message: SignatureAndData, reader: jspb.BinaryReader): SignatureAndData;
}

export namespace SignatureAndData {
  export type AsObject = {
    signature: Uint8Array | string,
    dataType: DataType,
    data: Uint8Array | string,
    timestamp: number,
  }
}

export class TimestampedSignatureData extends jspb.Message {
  getSignatureData(): Uint8Array | string;
  getSignatureData_asU8(): Uint8Array;
  getSignatureData_asB64(): string;
  setSignatureData(value: Uint8Array | string): TimestampedSignatureData;

  getTimestamp(): number;
  setTimestamp(value: number): TimestampedSignatureData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampedSignatureData.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampedSignatureData): TimestampedSignatureData.AsObject;
  static serializeBinaryToWriter(message: TimestampedSignatureData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampedSignatureData;
  static deserializeBinaryFromReader(message: TimestampedSignatureData, reader: jspb.BinaryReader): TimestampedSignatureData;
}

export namespace TimestampedSignatureData {
  export type AsObject = {
    signatureData: Uint8Array | string,
    timestamp: number,
  }
}

export class SignBytes extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): SignBytes;

  getTimestamp(): number;
  setTimestamp(value: number): SignBytes;

  getDiversifier(): string;
  setDiversifier(value: string): SignBytes;

  getDataType(): DataType;
  setDataType(value: DataType): SignBytes;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): SignBytes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignBytes.AsObject;
  static toObject(includeInstance: boolean, msg: SignBytes): SignBytes.AsObject;
  static serializeBinaryToWriter(message: SignBytes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignBytes;
  static deserializeBinaryFromReader(message: SignBytes, reader: jspb.BinaryReader): SignBytes;
}

export namespace SignBytes {
  export type AsObject = {
    sequence: number,
    timestamp: number,
    diversifier: string,
    dataType: DataType,
    data: Uint8Array | string,
  }
}

export class HeaderData extends jspb.Message {
  getNewPubKey(): google_protobuf_any_pb.Any | undefined;
  setNewPubKey(value?: google_protobuf_any_pb.Any): HeaderData;
  hasNewPubKey(): boolean;
  clearNewPubKey(): HeaderData;

  getNewDiversifier(): string;
  setNewDiversifier(value: string): HeaderData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderData.AsObject;
  static toObject(includeInstance: boolean, msg: HeaderData): HeaderData.AsObject;
  static serializeBinaryToWriter(message: HeaderData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeaderData;
  static deserializeBinaryFromReader(message: HeaderData, reader: jspb.BinaryReader): HeaderData;
}

export namespace HeaderData {
  export type AsObject = {
    newPubKey?: google_protobuf_any_pb.Any.AsObject,
    newDiversifier: string,
  }
}

export class ClientStateData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): ClientStateData;

  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): ClientStateData;
  hasClientState(): boolean;
  clearClientState(): ClientStateData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientStateData.AsObject;
  static toObject(includeInstance: boolean, msg: ClientStateData): ClientStateData.AsObject;
  static serializeBinaryToWriter(message: ClientStateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientStateData;
  static deserializeBinaryFromReader(message: ClientStateData, reader: jspb.BinaryReader): ClientStateData;
}

export namespace ClientStateData {
  export type AsObject = {
    path: Uint8Array | string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ConsensusStateData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): ConsensusStateData;

  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): ConsensusStateData;
  hasConsensusState(): boolean;
  clearConsensusState(): ConsensusStateData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusStateData.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusStateData): ConsensusStateData.AsObject;
  static serializeBinaryToWriter(message: ConsensusStateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusStateData;
  static deserializeBinaryFromReader(message: ConsensusStateData, reader: jspb.BinaryReader): ConsensusStateData;
}

export namespace ConsensusStateData {
  export type AsObject = {
    path: Uint8Array | string,
    consensusState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ConnectionStateData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): ConnectionStateData;

  getConnection(): ibc_core_connection_v1_connection_pb.ConnectionEnd | undefined;
  setConnection(value?: ibc_core_connection_v1_connection_pb.ConnectionEnd): ConnectionStateData;
  hasConnection(): boolean;
  clearConnection(): ConnectionStateData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionStateData.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionStateData): ConnectionStateData.AsObject;
  static serializeBinaryToWriter(message: ConnectionStateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionStateData;
  static deserializeBinaryFromReader(message: ConnectionStateData, reader: jspb.BinaryReader): ConnectionStateData;
}

export namespace ConnectionStateData {
  export type AsObject = {
    path: Uint8Array | string,
    connection?: ibc_core_connection_v1_connection_pb.ConnectionEnd.AsObject,
  }
}

export class ChannelStateData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): ChannelStateData;

  getChannel(): ibc_core_channel_v1_channel_pb.Channel | undefined;
  setChannel(value?: ibc_core_channel_v1_channel_pb.Channel): ChannelStateData;
  hasChannel(): boolean;
  clearChannel(): ChannelStateData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelStateData.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelStateData): ChannelStateData.AsObject;
  static serializeBinaryToWriter(message: ChannelStateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelStateData;
  static deserializeBinaryFromReader(message: ChannelStateData, reader: jspb.BinaryReader): ChannelStateData;
}

export namespace ChannelStateData {
  export type AsObject = {
    path: Uint8Array | string,
    channel?: ibc_core_channel_v1_channel_pb.Channel.AsObject,
  }
}

export class PacketCommitmentData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): PacketCommitmentData;

  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): PacketCommitmentData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketCommitmentData.AsObject;
  static toObject(includeInstance: boolean, msg: PacketCommitmentData): PacketCommitmentData.AsObject;
  static serializeBinaryToWriter(message: PacketCommitmentData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketCommitmentData;
  static deserializeBinaryFromReader(message: PacketCommitmentData, reader: jspb.BinaryReader): PacketCommitmentData;
}

export namespace PacketCommitmentData {
  export type AsObject = {
    path: Uint8Array | string,
    commitment: Uint8Array | string,
  }
}

export class PacketAcknowledgementData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): PacketAcknowledgementData;

  getAcknowledgement(): Uint8Array | string;
  getAcknowledgement_asU8(): Uint8Array;
  getAcknowledgement_asB64(): string;
  setAcknowledgement(value: Uint8Array | string): PacketAcknowledgementData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketAcknowledgementData.AsObject;
  static toObject(includeInstance: boolean, msg: PacketAcknowledgementData): PacketAcknowledgementData.AsObject;
  static serializeBinaryToWriter(message: PacketAcknowledgementData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketAcknowledgementData;
  static deserializeBinaryFromReader(message: PacketAcknowledgementData, reader: jspb.BinaryReader): PacketAcknowledgementData;
}

export namespace PacketAcknowledgementData {
  export type AsObject = {
    path: Uint8Array | string,
    acknowledgement: Uint8Array | string,
  }
}

export class PacketReceiptAbsenceData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): PacketReceiptAbsenceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketReceiptAbsenceData.AsObject;
  static toObject(includeInstance: boolean, msg: PacketReceiptAbsenceData): PacketReceiptAbsenceData.AsObject;
  static serializeBinaryToWriter(message: PacketReceiptAbsenceData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketReceiptAbsenceData;
  static deserializeBinaryFromReader(message: PacketReceiptAbsenceData, reader: jspb.BinaryReader): PacketReceiptAbsenceData;
}

export namespace PacketReceiptAbsenceData {
  export type AsObject = {
    path: Uint8Array | string,
  }
}

export class NextSequenceRecvData extends jspb.Message {
  getPath(): Uint8Array | string;
  getPath_asU8(): Uint8Array;
  getPath_asB64(): string;
  setPath(value: Uint8Array | string): NextSequenceRecvData;

  getNextSeqRecv(): number;
  setNextSeqRecv(value: number): NextSequenceRecvData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NextSequenceRecvData.AsObject;
  static toObject(includeInstance: boolean, msg: NextSequenceRecvData): NextSequenceRecvData.AsObject;
  static serializeBinaryToWriter(message: NextSequenceRecvData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NextSequenceRecvData;
  static deserializeBinaryFromReader(message: NextSequenceRecvData, reader: jspb.BinaryReader): NextSequenceRecvData;
}

export namespace NextSequenceRecvData {
  export type AsObject = {
    path: Uint8Array | string,
    nextSeqRecv: number,
  }
}

export enum DataType { 
  DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,
  DATA_TYPE_CLIENT_STATE = 1,
  DATA_TYPE_CONSENSUS_STATE = 2,
  DATA_TYPE_CONNECTION_STATE = 3,
  DATA_TYPE_CHANNEL_STATE = 4,
  DATA_TYPE_PACKET_COMMITMENT = 5,
  DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,
  DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,
  DATA_TYPE_NEXT_SEQUENCE_RECV = 8,
  DATA_TYPE_HEADER = 9,
}
