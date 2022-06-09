import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as gaia_usc_v1beta1_usc_pb from '../../../gaia/usc/v1beta1/usc_pb';


export class GenesisState extends jspb.Message {
  getParams(): gaia_usc_v1beta1_usc_pb.Params | undefined;
  setParams(value?: gaia_usc_v1beta1_usc_pb.Params): GenesisState;
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
    params?: gaia_usc_v1beta1_usc_pb.Params.AsObject,
  }
}

