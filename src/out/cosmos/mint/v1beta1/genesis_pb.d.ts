import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_mint_v1beta1_mint_pb from '../../../cosmos/mint/v1beta1/mint_pb';


export class GenesisState extends jspb.Message {
  getMinter(): cosmos_mint_v1beta1_mint_pb.Minter | undefined;
  setMinter(value?: cosmos_mint_v1beta1_mint_pb.Minter): GenesisState;
  hasMinter(): boolean;
  clearMinter(): GenesisState;

  getParams(): cosmos_mint_v1beta1_mint_pb.Params | undefined;
  setParams(value?: cosmos_mint_v1beta1_mint_pb.Params): GenesisState;
  hasParams(): boolean;
  clearParams(): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    minter?: cosmos_mint_v1beta1_mint_pb.Minter.AsObject,
    params?: cosmos_mint_v1beta1_mint_pb.Params.AsObject,
  }
}

