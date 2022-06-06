import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';


export class Capability extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): Capability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Capability.AsObject;
  static toObject(includeInstance: boolean, msg: Capability): Capability.AsObject;
  static serializeBinaryToWriter(message: Capability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Capability;
  static deserializeBinaryFromReader(message: Capability, reader: jspb.BinaryReader): Capability;
}

export namespace Capability {
  export type AsObject = {
    index: number,
  }
}

export class Owner extends jspb.Message {
  getModule(): string;
  setModule(value: string): Owner;

  getName(): string;
  setName(value: string): Owner;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Owner.AsObject;
  static toObject(includeInstance: boolean, msg: Owner): Owner.AsObject;
  static serializeBinaryToWriter(message: Owner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Owner;
  static deserializeBinaryFromReader(message: Owner, reader: jspb.BinaryReader): Owner;
}

export namespace Owner {
  export type AsObject = {
    module: string,
    name: string,
  }
}

export class CapabilityOwners extends jspb.Message {
  getOwnersList(): Array<Owner>;
  setOwnersList(value: Array<Owner>): CapabilityOwners;
  clearOwnersList(): CapabilityOwners;
  addOwners(value?: Owner, index?: number): Owner;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityOwners.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityOwners): CapabilityOwners.AsObject;
  static serializeBinaryToWriter(message: CapabilityOwners, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityOwners;
  static deserializeBinaryFromReader(message: CapabilityOwners, reader: jspb.BinaryReader): CapabilityOwners;
}

export namespace CapabilityOwners {
  export type AsObject = {
    ownersList: Array<Owner.AsObject>,
  }
}

