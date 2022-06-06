import * as jspb from 'google-protobuf'

import * as cosmos_msg_v1_msg_pb from '../../../cosmos/msg/v1/msg_pb';


export class MsgSend extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): MsgSend;

  getId(): string;
  setId(value: string): MsgSend;

  getSender(): string;
  setSender(value: string): MsgSend;

  getReceiver(): string;
  setReceiver(value: string): MsgSend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSend.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSend): MsgSend.AsObject;
  static serializeBinaryToWriter(message: MsgSend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSend;
  static deserializeBinaryFromReader(message: MsgSend, reader: jspb.BinaryReader): MsgSend;
}

export namespace MsgSend {
  export type AsObject = {
    classId: string,
    id: string,
    sender: string,
    receiver: string,
  }
}

export class MsgSendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSendResponse): MsgSendResponse.AsObject;
  static serializeBinaryToWriter(message: MsgSendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSendResponse;
  static deserializeBinaryFromReader(message: MsgSendResponse, reader: jspb.BinaryReader): MsgSendResponse;
}

export namespace MsgSendResponse {
  export type AsObject = {
  }
}

