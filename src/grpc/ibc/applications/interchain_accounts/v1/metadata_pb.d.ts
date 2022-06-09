import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class Metadata extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): Metadata;

  getControllerConnectionId(): string;
  setControllerConnectionId(value: string): Metadata;

  getHostConnectionId(): string;
  setHostConnectionId(value: string): Metadata;

  getAddress(): string;
  setAddress(value: string): Metadata;

  getEncoding(): string;
  setEncoding(value: string): Metadata;

  getTxType(): string;
  setTxType(value: string): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    version: string,
    controllerConnectionId: string,
    hostConnectionId: string,
    address: string,
    encoding: string,
    txType: string,
  }
}

