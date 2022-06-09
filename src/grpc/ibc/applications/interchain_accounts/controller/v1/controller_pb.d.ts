import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../../gogoproto/gogo_pb';


export class Params extends jspb.Message {
  getControllerEnabled(): boolean;
  setControllerEnabled(value: boolean): Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    controllerEnabled: boolean,
  }
}

