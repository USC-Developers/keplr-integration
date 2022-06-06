import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as cosmos_msg_v1_msg_pb from '../../../cosmos/msg/v1/msg_pb';


export class MsgVerifyInvariant extends jspb.Message {
  getSender(): string;
  setSender(value: string): MsgVerifyInvariant;

  getInvariantModuleName(): string;
  setInvariantModuleName(value: string): MsgVerifyInvariant;

  getInvariantRoute(): string;
  setInvariantRoute(value: string): MsgVerifyInvariant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVerifyInvariant.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVerifyInvariant): MsgVerifyInvariant.AsObject;
  static serializeBinaryToWriter(message: MsgVerifyInvariant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVerifyInvariant;
  static deserializeBinaryFromReader(message: MsgVerifyInvariant, reader: jspb.BinaryReader): MsgVerifyInvariant;
}

export namespace MsgVerifyInvariant {
  export type AsObject = {
    sender: string,
    invariantModuleName: string,
    invariantRoute: string,
  }
}

export class MsgVerifyInvariantResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgVerifyInvariantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgVerifyInvariantResponse): MsgVerifyInvariantResponse.AsObject;
  static serializeBinaryToWriter(message: MsgVerifyInvariantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgVerifyInvariantResponse;
  static deserializeBinaryFromReader(message: MsgVerifyInvariantResponse, reader: jspb.BinaryReader): MsgVerifyInvariantResponse;
}

export namespace MsgVerifyInvariantResponse {
  export type AsObject = {
  }
}

