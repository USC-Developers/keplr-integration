import * as jspb from 'google-protobuf'



export class EventGrant extends jspb.Message {
  getMsgTypeUrl(): string;
  setMsgTypeUrl(value: string): EventGrant;

  getGranter(): string;
  setGranter(value: string): EventGrant;

  getGrantee(): string;
  setGrantee(value: string): EventGrant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventGrant.AsObject;
  static toObject(includeInstance: boolean, msg: EventGrant): EventGrant.AsObject;
  static serializeBinaryToWriter(message: EventGrant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventGrant;
  static deserializeBinaryFromReader(message: EventGrant, reader: jspb.BinaryReader): EventGrant;
}

export namespace EventGrant {
  export type AsObject = {
    msgTypeUrl: string,
    granter: string,
    grantee: string,
  }
}

export class EventRevoke extends jspb.Message {
  getMsgTypeUrl(): string;
  setMsgTypeUrl(value: string): EventRevoke;

  getGranter(): string;
  setGranter(value: string): EventRevoke;

  getGrantee(): string;
  setGrantee(value: string): EventRevoke;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventRevoke.AsObject;
  static toObject(includeInstance: boolean, msg: EventRevoke): EventRevoke.AsObject;
  static serializeBinaryToWriter(message: EventRevoke, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventRevoke;
  static deserializeBinaryFromReader(message: EventRevoke, reader: jspb.BinaryReader): EventRevoke;
}

export namespace EventRevoke {
  export type AsObject = {
    msgTypeUrl: string,
    granter: string,
    grantee: string,
  }
}

