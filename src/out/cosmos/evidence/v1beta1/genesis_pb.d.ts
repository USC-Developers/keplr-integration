import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class GenesisState extends jspb.Message {
  getEvidenceList(): Array<google_protobuf_any_pb.Any>;
  setEvidenceList(value: Array<google_protobuf_any_pb.Any>): GenesisState;
  clearEvidenceList(): GenesisState;
  addEvidence(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    evidenceList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

