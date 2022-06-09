import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class MultiSignature extends jspb.Message {
  getSignaturesList(): Array<Uint8Array | string>;
  setSignaturesList(value: Array<Uint8Array | string>): MultiSignature;
  clearSignaturesList(): MultiSignature;
  addSignatures(value: Uint8Array | string, index?: number): MultiSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiSignature.AsObject;
  static toObject(includeInstance: boolean, msg: MultiSignature): MultiSignature.AsObject;
  static serializeBinaryToWriter(message: MultiSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiSignature;
  static deserializeBinaryFromReader(message: MultiSignature, reader: jspb.BinaryReader): MultiSignature;
}

export namespace MultiSignature {
  export type AsObject = {
    signaturesList: Array<Uint8Array | string>,
  }
}

export class CompactBitArray extends jspb.Message {
  getExtraBitsStored(): number;
  setExtraBitsStored(value: number): CompactBitArray;

  getElems(): Uint8Array | string;
  getElems_asU8(): Uint8Array;
  getElems_asB64(): string;
  setElems(value: Uint8Array | string): CompactBitArray;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompactBitArray.AsObject;
  static toObject(includeInstance: boolean, msg: CompactBitArray): CompactBitArray.AsObject;
  static serializeBinaryToWriter(message: CompactBitArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompactBitArray;
  static deserializeBinaryFromReader(message: CompactBitArray, reader: jspb.BinaryReader): CompactBitArray;
}

export namespace CompactBitArray {
  export type AsObject = {
    extraBitsStored: number,
    elems: Uint8Array | string,
  }
}

