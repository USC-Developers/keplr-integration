import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class FungibleTokenPacketData extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): FungibleTokenPacketData;

  getAmount(): number;
  setAmount(value: number): FungibleTokenPacketData;

  getSender(): string;
  setSender(value: string): FungibleTokenPacketData;

  getReceiver(): string;
  setReceiver(value: string): FungibleTokenPacketData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FungibleTokenPacketData.AsObject;
  static toObject(includeInstance: boolean, msg: FungibleTokenPacketData): FungibleTokenPacketData.AsObject;
  static serializeBinaryToWriter(message: FungibleTokenPacketData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FungibleTokenPacketData;
  static deserializeBinaryFromReader(message: FungibleTokenPacketData, reader: jspb.BinaryReader): FungibleTokenPacketData;
}

export namespace FungibleTokenPacketData {
  export type AsObject = {
    denom: string,
    amount: number,
    sender: string,
    receiver: string,
  }
}

export class DenomTrace extends jspb.Message {
  getPath(): string;
  setPath(value: string): DenomTrace;

  getBaseDenom(): string;
  setBaseDenom(value: string): DenomTrace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenomTrace.AsObject;
  static toObject(includeInstance: boolean, msg: DenomTrace): DenomTrace.AsObject;
  static serializeBinaryToWriter(message: DenomTrace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenomTrace;
  static deserializeBinaryFromReader(message: DenomTrace, reader: jspb.BinaryReader): DenomTrace;
}

export namespace DenomTrace {
  export type AsObject = {
    path: string,
    baseDenom: string,
  }
}

export class Params extends jspb.Message {
  getSendEnabled(): boolean;
  setSendEnabled(value: boolean): Params;

  getReceiveEnabled(): boolean;
  setReceiveEnabled(value: boolean): Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    sendEnabled: boolean,
    receiveEnabled: boolean,
  }
}

