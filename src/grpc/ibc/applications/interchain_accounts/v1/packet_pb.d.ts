import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class InterchainAccountPacketData extends jspb.Message {
  getType(): Type;
  setType(value: Type): InterchainAccountPacketData;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): InterchainAccountPacketData;

  getMemo(): string;
  setMemo(value: string): InterchainAccountPacketData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterchainAccountPacketData.AsObject;
  static toObject(includeInstance: boolean, msg: InterchainAccountPacketData): InterchainAccountPacketData.AsObject;
  static serializeBinaryToWriter(message: InterchainAccountPacketData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterchainAccountPacketData;
  static deserializeBinaryFromReader(message: InterchainAccountPacketData, reader: jspb.BinaryReader): InterchainAccountPacketData;
}

export namespace InterchainAccountPacketData {
  export type AsObject = {
    type: Type,
    data: Uint8Array | string,
    memo: string,
  }
}

export class CosmosTx extends jspb.Message {
  getMessagesList(): Array<google_protobuf_any_pb.Any>;
  setMessagesList(value: Array<google_protobuf_any_pb.Any>): CosmosTx;
  clearMessagesList(): CosmosTx;
  addMessages(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CosmosTx.AsObject;
  static toObject(includeInstance: boolean, msg: CosmosTx): CosmosTx.AsObject;
  static serializeBinaryToWriter(message: CosmosTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CosmosTx;
  static deserializeBinaryFromReader(message: CosmosTx, reader: jspb.BinaryReader): CosmosTx;
}

export namespace CosmosTx {
  export type AsObject = {
    messagesList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export enum Type { 
  TYPE_UNSPECIFIED = 0,
  TYPE_EXECUTE_TX = 1,
}
