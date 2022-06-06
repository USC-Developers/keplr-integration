import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as ibc_core_client_v1_genesis_pb from '../../../../ibc/core/client/v1/genesis_pb';
import * as ibc_core_connection_v1_genesis_pb from '../../../../ibc/core/connection/v1/genesis_pb';
import * as ibc_core_channel_v1_genesis_pb from '../../../../ibc/core/channel/v1/genesis_pb';


export class GenesisState extends jspb.Message {
  getClientGenesis(): ibc_core_client_v1_genesis_pb.GenesisState | undefined;
  setClientGenesis(value?: ibc_core_client_v1_genesis_pb.GenesisState): GenesisState;
  hasClientGenesis(): boolean;
  clearClientGenesis(): GenesisState;

  getConnectionGenesis(): ibc_core_connection_v1_genesis_pb.GenesisState | undefined;
  setConnectionGenesis(value?: ibc_core_connection_v1_genesis_pb.GenesisState): GenesisState;
  hasConnectionGenesis(): boolean;
  clearConnectionGenesis(): GenesisState;

  getChannelGenesis(): ibc_core_channel_v1_genesis_pb.GenesisState | undefined;
  setChannelGenesis(value?: ibc_core_channel_v1_genesis_pb.GenesisState): GenesisState;
  hasChannelGenesis(): boolean;
  clearChannelGenesis(): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    clientGenesis?: ibc_core_client_v1_genesis_pb.GenesisState.AsObject,
    connectionGenesis?: ibc_core_connection_v1_genesis_pb.GenesisState.AsObject,
    channelGenesis?: ibc_core_channel_v1_genesis_pb.GenesisState.AsObject,
  }
}

