import * as jspb from 'google-protobuf'



export class BitArray extends jspb.Message {
  getBits(): number;
  setBits(value: number): BitArray;

  getElemsList(): Array<number>;
  setElemsList(value: Array<number>): BitArray;
  clearElemsList(): BitArray;
  addElems(value: number, index?: number): BitArray;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BitArray.AsObject;
  static toObject(includeInstance: boolean, msg: BitArray): BitArray.AsObject;
  static serializeBinaryToWriter(message: BitArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BitArray;
  static deserializeBinaryFromReader(message: BitArray, reader: jspb.BinaryReader): BitArray;
}

export namespace BitArray {
  export type AsObject = {
    bits: number,
    elemsList: Array<number>,
  }
}

