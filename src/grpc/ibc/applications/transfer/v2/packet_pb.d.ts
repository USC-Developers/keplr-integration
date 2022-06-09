import * as jspb from 'google-protobuf'



export class FungibleTokenPacketData extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): FungibleTokenPacketData;

  getAmount(): string;
  setAmount(value: string): FungibleTokenPacketData;

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
    amount: string,
    sender: string,
    receiver: string,
  }
}

