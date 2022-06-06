import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class ListAllInterfacesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllInterfacesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllInterfacesRequest): ListAllInterfacesRequest.AsObject;
  static serializeBinaryToWriter(message: ListAllInterfacesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllInterfacesRequest;
  static deserializeBinaryFromReader(message: ListAllInterfacesRequest, reader: jspb.BinaryReader): ListAllInterfacesRequest;
}

export namespace ListAllInterfacesRequest {
  export type AsObject = {
  }
}

export class ListAllInterfacesResponse extends jspb.Message {
  getInterfaceNamesList(): Array<string>;
  setInterfaceNamesList(value: Array<string>): ListAllInterfacesResponse;
  clearInterfaceNamesList(): ListAllInterfacesResponse;
  addInterfaceNames(value: string, index?: number): ListAllInterfacesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllInterfacesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllInterfacesResponse): ListAllInterfacesResponse.AsObject;
  static serializeBinaryToWriter(message: ListAllInterfacesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllInterfacesResponse;
  static deserializeBinaryFromReader(message: ListAllInterfacesResponse, reader: jspb.BinaryReader): ListAllInterfacesResponse;
}

export namespace ListAllInterfacesResponse {
  export type AsObject = {
    interfaceNamesList: Array<string>,
  }
}

export class ListImplementationsRequest extends jspb.Message {
  getInterfaceName(): string;
  setInterfaceName(value: string): ListImplementationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListImplementationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListImplementationsRequest): ListImplementationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListImplementationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListImplementationsRequest;
  static deserializeBinaryFromReader(message: ListImplementationsRequest, reader: jspb.BinaryReader): ListImplementationsRequest;
}

export namespace ListImplementationsRequest {
  export type AsObject = {
    interfaceName: string,
  }
}

export class ListImplementationsResponse extends jspb.Message {
  getImplementationMessageNamesList(): Array<string>;
  setImplementationMessageNamesList(value: Array<string>): ListImplementationsResponse;
  clearImplementationMessageNamesList(): ListImplementationsResponse;
  addImplementationMessageNames(value: string, index?: number): ListImplementationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListImplementationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListImplementationsResponse): ListImplementationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListImplementationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListImplementationsResponse;
  static deserializeBinaryFromReader(message: ListImplementationsResponse, reader: jspb.BinaryReader): ListImplementationsResponse;
}

export namespace ListImplementationsResponse {
  export type AsObject = {
    implementationMessageNamesList: Array<string>,
  }
}

