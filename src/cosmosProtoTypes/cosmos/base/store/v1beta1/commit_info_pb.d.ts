import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class CommitInfo extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): CommitInfo;

  getStoreInfosList(): Array<StoreInfo>;
  setStoreInfosList(value: Array<StoreInfo>): CommitInfo;
  clearStoreInfosList(): CommitInfo;
  addStoreInfos(value?: StoreInfo, index?: number): StoreInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CommitInfo): CommitInfo.AsObject;
  static serializeBinaryToWriter(message: CommitInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitInfo;
  static deserializeBinaryFromReader(message: CommitInfo, reader: jspb.BinaryReader): CommitInfo;
}

export namespace CommitInfo {
  export type AsObject = {
    version: number,
    storeInfosList: Array<StoreInfo.AsObject>,
  }
}

export class StoreInfo extends jspb.Message {
  getName(): string;
  setName(value: string): StoreInfo;

  getCommitId(): CommitID | undefined;
  setCommitId(value?: CommitID): StoreInfo;
  hasCommitId(): boolean;
  clearCommitId(): StoreInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StoreInfo): StoreInfo.AsObject;
  static serializeBinaryToWriter(message: StoreInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreInfo;
  static deserializeBinaryFromReader(message: StoreInfo, reader: jspb.BinaryReader): StoreInfo;
}

export namespace StoreInfo {
  export type AsObject = {
    name: string,
    commitId?: CommitID.AsObject,
  }
}

export class CommitID extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): CommitID;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): CommitID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitID.AsObject;
  static toObject(includeInstance: boolean, msg: CommitID): CommitID.AsObject;
  static serializeBinaryToWriter(message: CommitID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitID;
  static deserializeBinaryFromReader(message: CommitID, reader: jspb.BinaryReader): CommitID;
}

export namespace CommitID {
  export type AsObject = {
    version: number,
    hash: Uint8Array | string,
  }
}

