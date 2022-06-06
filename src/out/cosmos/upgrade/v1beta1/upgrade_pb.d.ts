import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Plan extends jspb.Message {
  getName(): string;
  setName(value: string): Plan;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): Plan;
  hasTime(): boolean;
  clearTime(): Plan;

  getHeight(): number;
  setHeight(value: number): Plan;

  getInfo(): string;
  setInfo(value: string): Plan;

  getUpgradedClientState(): google_protobuf_any_pb.Any | undefined;
  setUpgradedClientState(value?: google_protobuf_any_pb.Any): Plan;
  hasUpgradedClientState(): boolean;
  clearUpgradedClientState(): Plan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plan.AsObject;
  static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
  static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plan;
  static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
}

export namespace Plan {
  export type AsObject = {
    name: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    height: number,
    info: string,
    upgradedClientState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class SoftwareUpgradeProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): SoftwareUpgradeProposal;

  getDescription(): string;
  setDescription(value: string): SoftwareUpgradeProposal;

  getPlan(): Plan | undefined;
  setPlan(value?: Plan): SoftwareUpgradeProposal;
  hasPlan(): boolean;
  clearPlan(): SoftwareUpgradeProposal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SoftwareUpgradeProposal.AsObject;
  static toObject(includeInstance: boolean, msg: SoftwareUpgradeProposal): SoftwareUpgradeProposal.AsObject;
  static serializeBinaryToWriter(message: SoftwareUpgradeProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SoftwareUpgradeProposal;
  static deserializeBinaryFromReader(message: SoftwareUpgradeProposal, reader: jspb.BinaryReader): SoftwareUpgradeProposal;
}

export namespace SoftwareUpgradeProposal {
  export type AsObject = {
    title: string,
    description: string,
    plan?: Plan.AsObject,
  }
}

export class CancelSoftwareUpgradeProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CancelSoftwareUpgradeProposal;

  getDescription(): string;
  setDescription(value: string): CancelSoftwareUpgradeProposal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelSoftwareUpgradeProposal.AsObject;
  static toObject(includeInstance: boolean, msg: CancelSoftwareUpgradeProposal): CancelSoftwareUpgradeProposal.AsObject;
  static serializeBinaryToWriter(message: CancelSoftwareUpgradeProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelSoftwareUpgradeProposal;
  static deserializeBinaryFromReader(message: CancelSoftwareUpgradeProposal, reader: jspb.BinaryReader): CancelSoftwareUpgradeProposal;
}

export namespace CancelSoftwareUpgradeProposal {
  export type AsObject = {
    title: string,
    description: string,
  }
}

export class ModuleVersion extends jspb.Message {
  getName(): string;
  setName(value: string): ModuleVersion;

  getVersion(): number;
  setVersion(value: number): ModuleVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleVersion.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleVersion): ModuleVersion.AsObject;
  static serializeBinaryToWriter(message: ModuleVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleVersion;
  static deserializeBinaryFromReader(message: ModuleVersion, reader: jspb.BinaryReader): ModuleVersion;
}

export namespace ModuleVersion {
  export type AsObject = {
    name: string,
    version: number,
  }
}

