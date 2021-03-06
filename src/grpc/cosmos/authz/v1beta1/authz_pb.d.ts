import * as jspb from 'google-protobuf'

import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class GenericAuthorization extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): GenericAuthorization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenericAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: GenericAuthorization): GenericAuthorization.AsObject;
  static serializeBinaryToWriter(message: GenericAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenericAuthorization;
  static deserializeBinaryFromReader(message: GenericAuthorization, reader: jspb.BinaryReader): GenericAuthorization;
}

export namespace GenericAuthorization {
  export type AsObject = {
    msg: string,
  }
}

export class Grant extends jspb.Message {
  getAuthorization(): google_protobuf_any_pb.Any | undefined;
  setAuthorization(value?: google_protobuf_any_pb.Any): Grant;
  hasAuthorization(): boolean;
  clearAuthorization(): Grant;

  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): Grant;
  hasExpiration(): boolean;
  clearExpiration(): Grant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Grant.AsObject;
  static toObject(includeInstance: boolean, msg: Grant): Grant.AsObject;
  static serializeBinaryToWriter(message: Grant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Grant;
  static deserializeBinaryFromReader(message: Grant, reader: jspb.BinaryReader): Grant;
}

export namespace Grant {
  export type AsObject = {
    authorization?: google_protobuf_any_pb.Any.AsObject,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GrantAuthorization extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): GrantAuthorization;

  getGrantee(): string;
  setGrantee(value: string): GrantAuthorization;

  getAuthorization(): google_protobuf_any_pb.Any | undefined;
  setAuthorization(value?: google_protobuf_any_pb.Any): GrantAuthorization;
  hasAuthorization(): boolean;
  clearAuthorization(): GrantAuthorization;

  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): GrantAuthorization;
  hasExpiration(): boolean;
  clearExpiration(): GrantAuthorization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: GrantAuthorization): GrantAuthorization.AsObject;
  static serializeBinaryToWriter(message: GrantAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantAuthorization;
  static deserializeBinaryFromReader(message: GrantAuthorization, reader: jspb.BinaryReader): GrantAuthorization;
}

export namespace GrantAuthorization {
  export type AsObject = {
    granter: string,
    grantee: string,
    authorization?: google_protobuf_any_pb.Any.AsObject,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

