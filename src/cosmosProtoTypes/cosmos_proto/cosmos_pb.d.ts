import * as jspb from 'google-protobuf'

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';


export class InterfaceDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): InterfaceDescriptor;

  getDescription(): string;
  setDescription(value: string): InterfaceDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceDescriptor): InterfaceDescriptor.AsObject;
  static serializeBinaryToWriter(message: InterfaceDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceDescriptor;
  static deserializeBinaryFromReader(message: InterfaceDescriptor, reader: jspb.BinaryReader): InterfaceDescriptor;
}

export namespace InterfaceDescriptor {
  export type AsObject = {
    name: string,
    description: string,
  }
}

export class ScalarDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): ScalarDescriptor;

  getDescription(): string;
  setDescription(value: string): ScalarDescriptor;

  getFieldTypeList(): Array<ScalarType>;
  setFieldTypeList(value: Array<ScalarType>): ScalarDescriptor;
  clearFieldTypeList(): ScalarDescriptor;
  addFieldType(value: ScalarType, index?: number): ScalarDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScalarDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: ScalarDescriptor): ScalarDescriptor.AsObject;
  static serializeBinaryToWriter(message: ScalarDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScalarDescriptor;
  static deserializeBinaryFromReader(message: ScalarDescriptor, reader: jspb.BinaryReader): ScalarDescriptor;
}

export namespace ScalarDescriptor {
  export type AsObject = {
    name: string,
    description: string,
    fieldTypeList: Array<ScalarType>,
  }
}

export enum ScalarType { 
  SCALAR_TYPE_UNSPECIFIED = 0,
  SCALAR_TYPE_STRING = 1,
  SCALAR_TYPE_BYTES = 2,
}
