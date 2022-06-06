import * as jspb from 'google-protobuf'



export class StoreKVPair extends jspb.Message {
  getStoreKey(): string;
  setStoreKey(value: string): StoreKVPair;

  getDelete(): boolean;
  setDelete(value: boolean): StoreKVPair;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): StoreKVPair;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): StoreKVPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreKVPair.AsObject;
  static toObject(includeInstance: boolean, msg: StoreKVPair): StoreKVPair.AsObject;
  static serializeBinaryToWriter(message: StoreKVPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreKVPair;
  static deserializeBinaryFromReader(message: StoreKVPair, reader: jspb.BinaryReader): StoreKVPair;
}

export namespace StoreKVPair {
  export type AsObject = {
    storeKey: string,
    pb_delete: boolean,
    key: Uint8Array | string,
    value: Uint8Array | string,
  }
}

