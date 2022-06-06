import * as jspb from 'google-protobuf'

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';


export class TableDescriptor extends jspb.Message {
  getPrimaryKey(): PrimaryKeyDescriptor | undefined;
  setPrimaryKey(value?: PrimaryKeyDescriptor): TableDescriptor;
  hasPrimaryKey(): boolean;
  clearPrimaryKey(): TableDescriptor;

  getIndexList(): Array<SecondaryIndexDescriptor>;
  setIndexList(value: Array<SecondaryIndexDescriptor>): TableDescriptor;
  clearIndexList(): TableDescriptor;
  addIndex(value?: SecondaryIndexDescriptor, index?: number): SecondaryIndexDescriptor;

  getId(): number;
  setId(value: number): TableDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: TableDescriptor): TableDescriptor.AsObject;
  static serializeBinaryToWriter(message: TableDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableDescriptor;
  static deserializeBinaryFromReader(message: TableDescriptor, reader: jspb.BinaryReader): TableDescriptor;
}

export namespace TableDescriptor {
  export type AsObject = {
    primaryKey?: PrimaryKeyDescriptor.AsObject,
    indexList: Array<SecondaryIndexDescriptor.AsObject>,
    id: number,
  }
}

export class PrimaryKeyDescriptor extends jspb.Message {
  getFields(): string;
  setFields(value: string): PrimaryKeyDescriptor;

  getAutoIncrement(): boolean;
  setAutoIncrement(value: boolean): PrimaryKeyDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrimaryKeyDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: PrimaryKeyDescriptor): PrimaryKeyDescriptor.AsObject;
  static serializeBinaryToWriter(message: PrimaryKeyDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrimaryKeyDescriptor;
  static deserializeBinaryFromReader(message: PrimaryKeyDescriptor, reader: jspb.BinaryReader): PrimaryKeyDescriptor;
}

export namespace PrimaryKeyDescriptor {
  export type AsObject = {
    fields: string,
    autoIncrement: boolean,
  }
}

export class SecondaryIndexDescriptor extends jspb.Message {
  getFields(): string;
  setFields(value: string): SecondaryIndexDescriptor;

  getId(): number;
  setId(value: number): SecondaryIndexDescriptor;

  getUnique(): boolean;
  setUnique(value: boolean): SecondaryIndexDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecondaryIndexDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: SecondaryIndexDescriptor): SecondaryIndexDescriptor.AsObject;
  static serializeBinaryToWriter(message: SecondaryIndexDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecondaryIndexDescriptor;
  static deserializeBinaryFromReader(message: SecondaryIndexDescriptor, reader: jspb.BinaryReader): SecondaryIndexDescriptor;
}

export namespace SecondaryIndexDescriptor {
  export type AsObject = {
    fields: string,
    id: number,
    unique: boolean,
  }
}

export class SingletonDescriptor extends jspb.Message {
  getId(): number;
  setId(value: number): SingletonDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingletonDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: SingletonDescriptor): SingletonDescriptor.AsObject;
  static serializeBinaryToWriter(message: SingletonDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingletonDescriptor;
  static deserializeBinaryFromReader(message: SingletonDescriptor, reader: jspb.BinaryReader): SingletonDescriptor;
}

export namespace SingletonDescriptor {
  export type AsObject = {
    id: number,
  }
}

