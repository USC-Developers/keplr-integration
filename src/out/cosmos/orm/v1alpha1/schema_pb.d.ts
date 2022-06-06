import * as jspb from 'google-protobuf'

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';


export class ModuleSchemaDescriptor extends jspb.Message {
  getSchemaFileList(): Array<ModuleSchemaDescriptor.FileEntry>;
  setSchemaFileList(value: Array<ModuleSchemaDescriptor.FileEntry>): ModuleSchemaDescriptor;
  clearSchemaFileList(): ModuleSchemaDescriptor;
  addSchemaFile(value?: ModuleSchemaDescriptor.FileEntry, index?: number): ModuleSchemaDescriptor.FileEntry;

  getPrefix(): Uint8Array | string;
  getPrefix_asU8(): Uint8Array;
  getPrefix_asB64(): string;
  setPrefix(value: Uint8Array | string): ModuleSchemaDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleSchemaDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleSchemaDescriptor): ModuleSchemaDescriptor.AsObject;
  static serializeBinaryToWriter(message: ModuleSchemaDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleSchemaDescriptor;
  static deserializeBinaryFromReader(message: ModuleSchemaDescriptor, reader: jspb.BinaryReader): ModuleSchemaDescriptor;
}

export namespace ModuleSchemaDescriptor {
  export type AsObject = {
    schemaFileList: Array<ModuleSchemaDescriptor.FileEntry.AsObject>,
    prefix: Uint8Array | string,
  }

  export class FileEntry extends jspb.Message {
    getId(): number;
    setId(value: number): FileEntry;

    getProtoFileName(): string;
    setProtoFileName(value: string): FileEntry;

    getStorageType(): StorageType;
    setStorageType(value: StorageType): FileEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileEntry.AsObject;
    static toObject(includeInstance: boolean, msg: FileEntry): FileEntry.AsObject;
    static serializeBinaryToWriter(message: FileEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileEntry;
    static deserializeBinaryFromReader(message: FileEntry, reader: jspb.BinaryReader): FileEntry;
  }

  export namespace FileEntry {
    export type AsObject = {
      id: number,
      protoFileName: string,
      storageType: StorageType,
    }
  }

}

export enum StorageType { 
  STORAGE_TYPE_DEFAULT_UNSPECIFIED = 0,
  STORAGE_TYPE_MEMORY = 1,
  STORAGE_TYPE_TRANSIENT = 2,
  STORAGE_TYPE_INDEX = 3,
  STORAGE_TYPE_COMMITMENT = 4,
}
