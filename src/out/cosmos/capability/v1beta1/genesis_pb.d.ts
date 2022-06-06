import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_capability_v1beta1_capability_pb from '../../../cosmos/capability/v1beta1/capability_pb';


export class GenesisOwners extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): GenesisOwners;

  getIndexOwners(): cosmos_capability_v1beta1_capability_pb.CapabilityOwners | undefined;
  setIndexOwners(value?: cosmos_capability_v1beta1_capability_pb.CapabilityOwners): GenesisOwners;
  hasIndexOwners(): boolean;
  clearIndexOwners(): GenesisOwners;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisOwners.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisOwners): GenesisOwners.AsObject;
  static serializeBinaryToWriter(message: GenesisOwners, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisOwners;
  static deserializeBinaryFromReader(message: GenesisOwners, reader: jspb.BinaryReader): GenesisOwners;
}

export namespace GenesisOwners {
  export type AsObject = {
    index: number,
    indexOwners?: cosmos_capability_v1beta1_capability_pb.CapabilityOwners.AsObject,
  }
}

export class GenesisState extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): GenesisState;

  getOwnersList(): Array<GenesisOwners>;
  setOwnersList(value: Array<GenesisOwners>): GenesisState;
  clearOwnersList(): GenesisState;
  addOwners(value?: GenesisOwners, index?: number): GenesisOwners;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    index: number,
    ownersList: Array<GenesisOwners.AsObject>,
  }
}

