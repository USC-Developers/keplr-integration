import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';


export class GenesisState extends jspb.Message {
  getGenTxsList(): Array<Uint8Array | string>;
  setGenTxsList(value: Array<Uint8Array | string>): GenesisState;
  clearGenTxsList(): GenesisState;
  addGenTxs(value: Uint8Array | string, index?: number): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    genTxsList: Array<Uint8Array | string>,
  }
}

