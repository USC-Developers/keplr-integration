import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class BIP44Params extends jspb.Message {
  getPurpose(): number;
  setPurpose(value: number): BIP44Params;

  getCoinType(): number;
  setCoinType(value: number): BIP44Params;

  getAccount(): number;
  setAccount(value: number): BIP44Params;

  getChange(): boolean;
  setChange(value: boolean): BIP44Params;

  getAddressIndex(): number;
  setAddressIndex(value: number): BIP44Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BIP44Params.AsObject;
  static toObject(includeInstance: boolean, msg: BIP44Params): BIP44Params.AsObject;
  static serializeBinaryToWriter(message: BIP44Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BIP44Params;
  static deserializeBinaryFromReader(message: BIP44Params, reader: jspb.BinaryReader): BIP44Params;
}

export namespace BIP44Params {
  export type AsObject = {
    purpose: number,
    coinType: number,
    account: number,
    change: boolean,
    addressIndex: number,
  }
}

