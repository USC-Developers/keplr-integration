import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class Class extends jspb.Message {
  getId(): string;
  setId(value: string): Class;

  getName(): string;
  setName(value: string): Class;

  getSymbol(): string;
  setSymbol(value: string): Class;

  getDescription(): string;
  setDescription(value: string): Class;

  getUri(): string;
  setUri(value: string): Class;

  getUriHash(): string;
  setUriHash(value: string): Class;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): Class;
  hasData(): boolean;
  clearData(): Class;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Class.AsObject;
  static toObject(includeInstance: boolean, msg: Class): Class.AsObject;
  static serializeBinaryToWriter(message: Class, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Class;
  static deserializeBinaryFromReader(message: Class, reader: jspb.BinaryReader): Class;
}

export namespace Class {
  export type AsObject = {
    id: string,
    name: string,
    symbol: string,
    description: string,
    uri: string,
    uriHash: string,
    data?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class NFT extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): NFT;

  getId(): string;
  setId(value: string): NFT;

  getUri(): string;
  setUri(value: string): NFT;

  getUriHash(): string;
  setUriHash(value: string): NFT;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): NFT;
  hasData(): boolean;
  clearData(): NFT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NFT.AsObject;
  static toObject(includeInstance: boolean, msg: NFT): NFT.AsObject;
  static serializeBinaryToWriter(message: NFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NFT;
  static deserializeBinaryFromReader(message: NFT, reader: jspb.BinaryReader): NFT;
}

export namespace NFT {
  export type AsObject = {
    classId: string,
    id: string,
    uri: string,
    uriHash: string,
    data?: google_protobuf_any_pb.Any.AsObject,
  }
}

