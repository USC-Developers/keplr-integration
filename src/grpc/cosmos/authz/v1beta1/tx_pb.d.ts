import * as jspb from 'google-protobuf'

import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as cosmos_base_abci_v1beta1_abci_pb from '../../../cosmos/base/abci/v1beta1/abci_pb';
import * as cosmos_authz_v1beta1_authz_pb from '../../../cosmos/authz/v1beta1/authz_pb';


export class MsgGrant extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): MsgGrant;

  getGrantee(): string;
  setGrantee(value: string): MsgGrant;

  getGrant(): cosmos_authz_v1beta1_authz_pb.Grant | undefined;
  setGrant(value?: cosmos_authz_v1beta1_authz_pb.Grant): MsgGrant;
  hasGrant(): boolean;
  clearGrant(): MsgGrant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgGrant.AsObject;
  static toObject(includeInstance: boolean, msg: MsgGrant): MsgGrant.AsObject;
  static serializeBinaryToWriter(message: MsgGrant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgGrant;
  static deserializeBinaryFromReader(message: MsgGrant, reader: jspb.BinaryReader): MsgGrant;
}

export namespace MsgGrant {
  export type AsObject = {
    granter: string,
    grantee: string,
    grant?: cosmos_authz_v1beta1_authz_pb.Grant.AsObject,
  }
}

export class MsgExecResponse extends jspb.Message {
  getResultsList(): Array<Uint8Array | string>;
  setResultsList(value: Array<Uint8Array | string>): MsgExecResponse;
  clearResultsList(): MsgExecResponse;
  addResults(value: Uint8Array | string, index?: number): MsgExecResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExecResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgExecResponse): MsgExecResponse.AsObject;
  static serializeBinaryToWriter(message: MsgExecResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExecResponse;
  static deserializeBinaryFromReader(message: MsgExecResponse, reader: jspb.BinaryReader): MsgExecResponse;
}

export namespace MsgExecResponse {
  export type AsObject = {
    resultsList: Array<Uint8Array | string>,
  }
}

export class MsgExec extends jspb.Message {
  getGrantee(): string;
  setGrantee(value: string): MsgExec;

  getMsgsList(): Array<google_protobuf_any_pb.Any>;
  setMsgsList(value: Array<google_protobuf_any_pb.Any>): MsgExec;
  clearMsgsList(): MsgExec;
  addMsgs(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExec.AsObject;
  static toObject(includeInstance: boolean, msg: MsgExec): MsgExec.AsObject;
  static serializeBinaryToWriter(message: MsgExec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExec;
  static deserializeBinaryFromReader(message: MsgExec, reader: jspb.BinaryReader): MsgExec;
}

export namespace MsgExec {
  export type AsObject = {
    grantee: string,
    msgsList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class MsgGrantResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgGrantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgGrantResponse): MsgGrantResponse.AsObject;
  static serializeBinaryToWriter(message: MsgGrantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgGrantResponse;
  static deserializeBinaryFromReader(message: MsgGrantResponse, reader: jspb.BinaryReader): MsgGrantResponse;
}

export namespace MsgGrantResponse {
  export type AsObject = {
  }
}

export class MsgRevoke extends jspb.Message {
  getGranter(): string;
  setGranter(value: string): MsgRevoke;

  getGrantee(): string;
  setGrantee(value: string): MsgRevoke;

  getMsgTypeUrl(): string;
  setMsgTypeUrl(value: string): MsgRevoke;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRevoke.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRevoke): MsgRevoke.AsObject;
  static serializeBinaryToWriter(message: MsgRevoke, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRevoke;
  static deserializeBinaryFromReader(message: MsgRevoke, reader: jspb.BinaryReader): MsgRevoke;
}

export namespace MsgRevoke {
  export type AsObject = {
    granter: string,
    grantee: string,
    msgTypeUrl: string,
  }
}

export class MsgRevokeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRevokeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRevokeResponse): MsgRevokeResponse.AsObject;
  static serializeBinaryToWriter(message: MsgRevokeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRevokeResponse;
  static deserializeBinaryFromReader(message: MsgRevokeResponse, reader: jspb.BinaryReader): MsgRevokeResponse;
}

export namespace MsgRevokeResponse {
  export type AsObject = {
  }
}

