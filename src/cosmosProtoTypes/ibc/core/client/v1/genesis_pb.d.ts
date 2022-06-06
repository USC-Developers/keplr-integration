import * as jspb from 'google-protobuf'

import * as ibc_core_client_v1_client_pb from '../../../../ibc/core/client/v1/client_pb';
import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class GenesisState extends jspb.Message {
  getClientsList(): Array<ibc_core_client_v1_client_pb.IdentifiedClientState>;
  setClientsList(value: Array<ibc_core_client_v1_client_pb.IdentifiedClientState>): GenesisState;
  clearClientsList(): GenesisState;
  addClients(value?: ibc_core_client_v1_client_pb.IdentifiedClientState, index?: number): ibc_core_client_v1_client_pb.IdentifiedClientState;

  getClientsConsensusList(): Array<ibc_core_client_v1_client_pb.ClientConsensusStates>;
  setClientsConsensusList(value: Array<ibc_core_client_v1_client_pb.ClientConsensusStates>): GenesisState;
  clearClientsConsensusList(): GenesisState;
  addClientsConsensus(value?: ibc_core_client_v1_client_pb.ClientConsensusStates, index?: number): ibc_core_client_v1_client_pb.ClientConsensusStates;

  getClientsMetadataList(): Array<IdentifiedGenesisMetadata>;
  setClientsMetadataList(value: Array<IdentifiedGenesisMetadata>): GenesisState;
  clearClientsMetadataList(): GenesisState;
  addClientsMetadata(value?: IdentifiedGenesisMetadata, index?: number): IdentifiedGenesisMetadata;

  getParams(): ibc_core_client_v1_client_pb.Params | undefined;
  setParams(value?: ibc_core_client_v1_client_pb.Params): GenesisState;
  hasParams(): boolean;
  clearParams(): GenesisState;

  getCreateLocalhost(): boolean;
  setCreateLocalhost(value: boolean): GenesisState;

  getNextClientSequence(): number;
  setNextClientSequence(value: number): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    clientsList: Array<ibc_core_client_v1_client_pb.IdentifiedClientState.AsObject>,
    clientsConsensusList: Array<ibc_core_client_v1_client_pb.ClientConsensusStates.AsObject>,
    clientsMetadataList: Array<IdentifiedGenesisMetadata.AsObject>,
    params?: ibc_core_client_v1_client_pb.Params.AsObject,
    createLocalhost: boolean,
    nextClientSequence: number,
  }
}

export class GenesisMetadata extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): GenesisMetadata;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): GenesisMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisMetadata): GenesisMetadata.AsObject;
  static serializeBinaryToWriter(message: GenesisMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisMetadata;
  static deserializeBinaryFromReader(message: GenesisMetadata, reader: jspb.BinaryReader): GenesisMetadata;
}

export namespace GenesisMetadata {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
  }
}

export class IdentifiedGenesisMetadata extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): IdentifiedGenesisMetadata;

  getClientMetadataList(): Array<GenesisMetadata>;
  setClientMetadataList(value: Array<GenesisMetadata>): IdentifiedGenesisMetadata;
  clearClientMetadataList(): IdentifiedGenesisMetadata;
  addClientMetadata(value?: GenesisMetadata, index?: number): GenesisMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedGenesisMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedGenesisMetadata): IdentifiedGenesisMetadata.AsObject;
  static serializeBinaryToWriter(message: IdentifiedGenesisMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedGenesisMetadata;
  static deserializeBinaryFromReader(message: IdentifiedGenesisMetadata, reader: jspb.BinaryReader): IdentifiedGenesisMetadata;
}

export namespace IdentifiedGenesisMetadata {
  export type AsObject = {
    clientId: string,
    clientMetadataList: Array<GenesisMetadata.AsObject>,
  }
}

