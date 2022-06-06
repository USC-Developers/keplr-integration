import * as jspb from 'google-protobuf'

import * as cosmos_app_v1alpha1_module_pb from '../../../../cosmos/app/v1alpha1/module_pb';


export class Module extends jspb.Message {
  getSealKeeper(): boolean;
  setSealKeeper(value: boolean): Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    sealKeeper: boolean,
  }
}

