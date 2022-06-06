import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';


export class PubKey extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): PubKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubKey.AsObject;
  static toObject(includeInstance: boolean, msg: PubKey): PubKey.AsObject;
  static serializeBinaryToWriter(message: PubKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubKey;
  static deserializeBinaryFromReader(message: PubKey, reader: jspb.BinaryReader): PubKey;
}

export namespace PubKey {
  export type AsObject = {
    key: Uint8Array | string,
  }
}

export class PrivKey extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): PrivKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivKey.AsObject;
  static toObject(includeInstance: boolean, msg: PrivKey): PrivKey.AsObject;
  static serializeBinaryToWriter(message: PrivKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivKey;
  static deserializeBinaryFromReader(message: PrivKey, reader: jspb.BinaryReader): PrivKey;
}

export namespace PrivKey {
  export type AsObject = {
    key: Uint8Array | string,
  }
}

