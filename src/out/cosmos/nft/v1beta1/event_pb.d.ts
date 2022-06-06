import * as jspb from 'google-protobuf'



export class EventSend extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): EventSend;

  getId(): string;
  setId(value: string): EventSend;

  getSender(): string;
  setSender(value: string): EventSend;

  getReceiver(): string;
  setReceiver(value: string): EventSend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSend.AsObject;
  static toObject(includeInstance: boolean, msg: EventSend): EventSend.AsObject;
  static serializeBinaryToWriter(message: EventSend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSend;
  static deserializeBinaryFromReader(message: EventSend, reader: jspb.BinaryReader): EventSend;
}

export namespace EventSend {
  export type AsObject = {
    classId: string,
    id: string,
    sender: string,
    receiver: string,
  }
}

export class EventMint extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): EventMint;

  getId(): string;
  setId(value: string): EventMint;

  getOwner(): string;
  setOwner(value: string): EventMint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventMint.AsObject;
  static toObject(includeInstance: boolean, msg: EventMint): EventMint.AsObject;
  static serializeBinaryToWriter(message: EventMint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventMint;
  static deserializeBinaryFromReader(message: EventMint, reader: jspb.BinaryReader): EventMint;
}

export namespace EventMint {
  export type AsObject = {
    classId: string,
    id: string,
    owner: string,
  }
}

export class EventBurn extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): EventBurn;

  getId(): string;
  setId(value: string): EventBurn;

  getOwner(): string;
  setOwner(value: string): EventBurn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBurn.AsObject;
  static toObject(includeInstance: boolean, msg: EventBurn): EventBurn.AsObject;
  static serializeBinaryToWriter(message: EventBurn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBurn;
  static deserializeBinaryFromReader(message: EventBurn, reader: jspb.BinaryReader): EventBurn;
}

export namespace EventBurn {
  export type AsObject = {
    classId: string,
    id: string,
    owner: string,
  }
}

