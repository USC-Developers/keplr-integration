import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../../gogoproto/gogo_pb';


export class Params extends jspb.Message {
  getHostEnabled(): boolean;
  setHostEnabled(value: boolean): Params;

  getAllowMessagesList(): Array<string>;
  setAllowMessagesList(value: Array<string>): Params;
  clearAllowMessagesList(): Params;
  addAllowMessages(value: string, index?: number): Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    hostEnabled: boolean,
    allowMessagesList: Array<string>,
  }
}

