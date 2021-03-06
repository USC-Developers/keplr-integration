import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class Snapshot extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): Snapshot;

  getFormat(): number;
  setFormat(value: number): Snapshot;

  getChunks(): number;
  setChunks(value: number): Snapshot;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): Snapshot;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): Snapshot;
  hasMetadata(): boolean;
  clearMetadata(): Snapshot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Snapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
  static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Snapshot;
  static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
  export type AsObject = {
    height: number,
    format: number,
    chunks: number,
    hash: Uint8Array | string,
    metadata?: Metadata.AsObject,
  }
}

export class Metadata extends jspb.Message {
  getChunkHashesList(): Array<Uint8Array | string>;
  setChunkHashesList(value: Array<Uint8Array | string>): Metadata;
  clearChunkHashesList(): Metadata;
  addChunkHashes(value: Uint8Array | string, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    chunkHashesList: Array<Uint8Array | string>,
  }
}

export class SnapshotItem extends jspb.Message {
  getStore(): SnapshotStoreItem | undefined;
  setStore(value?: SnapshotStoreItem): SnapshotItem;
  hasStore(): boolean;
  clearStore(): SnapshotItem;

  getIavl(): SnapshotIAVLItem | undefined;
  setIavl(value?: SnapshotIAVLItem): SnapshotItem;
  hasIavl(): boolean;
  clearIavl(): SnapshotItem;

  getExtension(): SnapshotExtensionMeta | undefined;
  setExtension(value?: SnapshotExtensionMeta): SnapshotItem;
  hasExtension(): boolean;
  clearExtension(): SnapshotItem;

  getExtensionPayload(): SnapshotExtensionPayload | undefined;
  setExtensionPayload(value?: SnapshotExtensionPayload): SnapshotItem;
  hasExtensionPayload(): boolean;
  clearExtensionPayload(): SnapshotItem;

  getItemCase(): SnapshotItem.ItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotItem.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotItem): SnapshotItem.AsObject;
  static serializeBinaryToWriter(message: SnapshotItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotItem;
  static deserializeBinaryFromReader(message: SnapshotItem, reader: jspb.BinaryReader): SnapshotItem;
}

export namespace SnapshotItem {
  export type AsObject = {
    store?: SnapshotStoreItem.AsObject,
    iavl?: SnapshotIAVLItem.AsObject,
    extension?: SnapshotExtensionMeta.AsObject,
    extensionPayload?: SnapshotExtensionPayload.AsObject,
  }

  export enum ItemCase { 
    ITEM_NOT_SET = 0,
    STORE = 1,
    IAVL = 2,
    EXTENSION = 3,
    EXTENSION_PAYLOAD = 4,
  }
}

export class SnapshotStoreItem extends jspb.Message {
  getName(): string;
  setName(value: string): SnapshotStoreItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotStoreItem.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotStoreItem): SnapshotStoreItem.AsObject;
  static serializeBinaryToWriter(message: SnapshotStoreItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotStoreItem;
  static deserializeBinaryFromReader(message: SnapshotStoreItem, reader: jspb.BinaryReader): SnapshotStoreItem;
}

export namespace SnapshotStoreItem {
  export type AsObject = {
    name: string,
  }
}

export class SnapshotIAVLItem extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): SnapshotIAVLItem;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): SnapshotIAVLItem;

  getVersion(): number;
  setVersion(value: number): SnapshotIAVLItem;

  getHeight(): number;
  setHeight(value: number): SnapshotIAVLItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotIAVLItem.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotIAVLItem): SnapshotIAVLItem.AsObject;
  static serializeBinaryToWriter(message: SnapshotIAVLItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotIAVLItem;
  static deserializeBinaryFromReader(message: SnapshotIAVLItem, reader: jspb.BinaryReader): SnapshotIAVLItem;
}

export namespace SnapshotIAVLItem {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
    version: number,
    height: number,
  }
}

export class SnapshotExtensionMeta extends jspb.Message {
  getName(): string;
  setName(value: string): SnapshotExtensionMeta;

  getFormat(): number;
  setFormat(value: number): SnapshotExtensionMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotExtensionMeta.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotExtensionMeta): SnapshotExtensionMeta.AsObject;
  static serializeBinaryToWriter(message: SnapshotExtensionMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotExtensionMeta;
  static deserializeBinaryFromReader(message: SnapshotExtensionMeta, reader: jspb.BinaryReader): SnapshotExtensionMeta;
}

export namespace SnapshotExtensionMeta {
  export type AsObject = {
    name: string,
    format: number,
  }
}

export class SnapshotExtensionPayload extends jspb.Message {
  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): SnapshotExtensionPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotExtensionPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotExtensionPayload): SnapshotExtensionPayload.AsObject;
  static serializeBinaryToWriter(message: SnapshotExtensionPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotExtensionPayload;
  static deserializeBinaryFromReader(message: SnapshotExtensionPayload, reader: jspb.BinaryReader): SnapshotExtensionPayload;
}

export namespace SnapshotExtensionPayload {
  export type AsObject = {
    payload: Uint8Array | string,
  }
}

