import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as ibc_core_commitment_v1_commitment_pb from '../../../../ibc/core/commitment/v1/commitment_pb';


export class ConnectionEnd extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): ConnectionEnd;

  getVersionsList(): Array<Version>;
  setVersionsList(value: Array<Version>): ConnectionEnd;
  clearVersionsList(): ConnectionEnd;
  addVersions(value?: Version, index?: number): Version;

  getState(): State;
  setState(value: State): ConnectionEnd;

  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): ConnectionEnd;
  hasCounterparty(): boolean;
  clearCounterparty(): ConnectionEnd;

  getDelayPeriod(): number;
  setDelayPeriod(value: number): ConnectionEnd;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionEnd.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionEnd): ConnectionEnd.AsObject;
  static serializeBinaryToWriter(message: ConnectionEnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionEnd;
  static deserializeBinaryFromReader(message: ConnectionEnd, reader: jspb.BinaryReader): ConnectionEnd;
}

export namespace ConnectionEnd {
  export type AsObject = {
    clientId: string,
    versionsList: Array<Version.AsObject>,
    state: State,
    counterparty?: Counterparty.AsObject,
    delayPeriod: number,
  }
}

export class IdentifiedConnection extends jspb.Message {
  getId(): string;
  setId(value: string): IdentifiedConnection;

  getClientId(): string;
  setClientId(value: string): IdentifiedConnection;

  getVersionsList(): Array<Version>;
  setVersionsList(value: Array<Version>): IdentifiedConnection;
  clearVersionsList(): IdentifiedConnection;
  addVersions(value?: Version, index?: number): Version;

  getState(): State;
  setState(value: State): IdentifiedConnection;

  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): IdentifiedConnection;
  hasCounterparty(): boolean;
  clearCounterparty(): IdentifiedConnection;

  getDelayPeriod(): number;
  setDelayPeriod(value: number): IdentifiedConnection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedConnection.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedConnection): IdentifiedConnection.AsObject;
  static serializeBinaryToWriter(message: IdentifiedConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedConnection;
  static deserializeBinaryFromReader(message: IdentifiedConnection, reader: jspb.BinaryReader): IdentifiedConnection;
}

export namespace IdentifiedConnection {
  export type AsObject = {
    id: string,
    clientId: string,
    versionsList: Array<Version.AsObject>,
    state: State,
    counterparty?: Counterparty.AsObject,
    delayPeriod: number,
  }
}

export class Counterparty extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): Counterparty;

  getConnectionId(): string;
  setConnectionId(value: string): Counterparty;

  getPrefix(): ibc_core_commitment_v1_commitment_pb.MerklePrefix | undefined;
  setPrefix(value?: ibc_core_commitment_v1_commitment_pb.MerklePrefix): Counterparty;
  hasPrefix(): boolean;
  clearPrefix(): Counterparty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Counterparty.AsObject;
  static toObject(includeInstance: boolean, msg: Counterparty): Counterparty.AsObject;
  static serializeBinaryToWriter(message: Counterparty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Counterparty;
  static deserializeBinaryFromReader(message: Counterparty, reader: jspb.BinaryReader): Counterparty;
}

export namespace Counterparty {
  export type AsObject = {
    clientId: string,
    connectionId: string,
    prefix?: ibc_core_commitment_v1_commitment_pb.MerklePrefix.AsObject,
  }
}

export class ClientPaths extends jspb.Message {
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): ClientPaths;
  clearPathsList(): ClientPaths;
  addPaths(value: string, index?: number): ClientPaths;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientPaths.AsObject;
  static toObject(includeInstance: boolean, msg: ClientPaths): ClientPaths.AsObject;
  static serializeBinaryToWriter(message: ClientPaths, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientPaths;
  static deserializeBinaryFromReader(message: ClientPaths, reader: jspb.BinaryReader): ClientPaths;
}

export namespace ClientPaths {
  export type AsObject = {
    pathsList: Array<string>,
  }
}

export class ConnectionPaths extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): ConnectionPaths;

  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): ConnectionPaths;
  clearPathsList(): ConnectionPaths;
  addPaths(value: string, index?: number): ConnectionPaths;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionPaths.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionPaths): ConnectionPaths.AsObject;
  static serializeBinaryToWriter(message: ConnectionPaths, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionPaths;
  static deserializeBinaryFromReader(message: ConnectionPaths, reader: jspb.BinaryReader): ConnectionPaths;
}

export namespace ConnectionPaths {
  export type AsObject = {
    clientId: string,
    pathsList: Array<string>,
  }
}

export class Version extends jspb.Message {
  getIdentifier(): string;
  setIdentifier(value: string): Version;

  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): Version;
  clearFeaturesList(): Version;
  addFeatures(value: string, index?: number): Version;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    identifier: string,
    featuresList: Array<string>,
  }
}

export enum State { 
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  STATE_INIT = 1,
  STATE_TRYOPEN = 2,
  STATE_OPEN = 3,
}
