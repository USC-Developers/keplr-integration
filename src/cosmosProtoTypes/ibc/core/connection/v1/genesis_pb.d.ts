import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as ibc_core_connection_v1_connection_pb from '../../../../ibc/core/connection/v1/connection_pb';


export class GenesisState extends jspb.Message {
  getConnectionsList(): Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection>;
  setConnectionsList(value: Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection>): GenesisState;
  clearConnectionsList(): GenesisState;
  addConnections(value?: ibc_core_connection_v1_connection_pb.IdentifiedConnection, index?: number): ibc_core_connection_v1_connection_pb.IdentifiedConnection;

  getClientConnectionPathsList(): Array<ibc_core_connection_v1_connection_pb.ConnectionPaths>;
  setClientConnectionPathsList(value: Array<ibc_core_connection_v1_connection_pb.ConnectionPaths>): GenesisState;
  clearClientConnectionPathsList(): GenesisState;
  addClientConnectionPaths(value?: ibc_core_connection_v1_connection_pb.ConnectionPaths, index?: number): ibc_core_connection_v1_connection_pb.ConnectionPaths;

  getNextConnectionSequence(): number;
  setNextConnectionSequence(value: number): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    connectionsList: Array<ibc_core_connection_v1_connection_pb.IdentifiedConnection.AsObject>,
    clientConnectionPathsList: Array<ibc_core_connection_v1_connection_pb.ConnectionPaths.AsObject>,
    nextConnectionSequence: number,
  }
}

