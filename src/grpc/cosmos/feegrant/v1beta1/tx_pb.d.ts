import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';


export class MsgGrantAllowance extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): MsgGrantAllowance;

  getGrantee(): string;
  setGrantee(value: string): MsgGrantAllowance;

  getAllowance(): google_protobuf_any_pb.Any | undefined;
  setAllowance(value?: google_protobuf_any_pb.Any): MsgGrantAllowance;
  hasAllowance(): boolean;
  clearAllowance(): MsgGrantAllowance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgGrantAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: MsgGrantAllowance): MsgGrantAllowance.AsObject;
  static serializeBinaryToWriter(message: MsgGrantAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgGrantAllowance;
  static deserializeBinaryFromReader(message: MsgGrantAllowance, reader: jspb.BinaryReader): MsgGrantAllowance;
}

export namespace MsgGrantAllowance {
  export type AsObject = {
    granter: string,
    grantee: string,
    allowance?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class MsgGrantAllowanceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgGrantAllowanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgGrantAllowanceResponse): MsgGrantAllowanceResponse.AsObject;
  static serializeBinaryToWriter(message: MsgGrantAllowanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgGrantAllowanceResponse;
  static deserializeBinaryFromReader(message: MsgGrantAllowanceResponse, reader: jspb.BinaryReader): MsgGrantAllowanceResponse;
}

export namespace MsgGrantAllowanceResponse {
  export type AsObject = {
  }
}

export class MsgRevokeAllowance extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): MsgRevokeAllowance;

  getGrantee(): string;
  setGrantee(value: string): MsgRevokeAllowance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRevokeAllowance.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRevokeAllowance): MsgRevokeAllowance.AsObject;
  static serializeBinaryToWriter(message: MsgRevokeAllowance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRevokeAllowance;
  static deserializeBinaryFromReader(message: MsgRevokeAllowance, reader: jspb.BinaryReader): MsgRevokeAllowance;
}

export namespace MsgRevokeAllowance {
  export type AsObject = {
    granter: string,
    grantee: string,
  }
}

export class MsgRevokeAllowanceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRevokeAllowanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponse.AsObject;
  static serializeBinaryToWriter(message: MsgRevokeAllowanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRevokeAllowanceResponse;
  static deserializeBinaryFromReader(message: MsgRevokeAllowanceResponse, reader: jspb.BinaryReader): MsgRevokeAllowanceResponse;
}

export namespace MsgRevokeAllowanceResponse {
  export type AsObject = {
  }
}

