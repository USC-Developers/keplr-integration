import * as jspb from 'google-protobuf'

import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class BaseAccount extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): BaseAccount;

  getPubKey(): google_protobuf_any_pb.Any | undefined;
  setPubKey(value?: google_protobuf_any_pb.Any): BaseAccount;
  hasPubKey(): boolean;
  clearPubKey(): BaseAccount;

  getAccountNumber(): number;
  setAccountNumber(value: number): BaseAccount;

  getSequence(): number;
  setSequence(value: number): BaseAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseAccount.AsObject;
  static toObject(includeInstance: boolean, msg: BaseAccount): BaseAccount.AsObject;
  static serializeBinaryToWriter(message: BaseAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseAccount;
  static deserializeBinaryFromReader(message: BaseAccount, reader: jspb.BinaryReader): BaseAccount;
}

export namespace BaseAccount {
  export type AsObject = {
    address: string,
    pubKey?: google_protobuf_any_pb.Any.AsObject,
    accountNumber: number,
    sequence: number,
  }
}

export class ModuleAccount extends jspb.Message {
  getBaseAccount(): BaseAccount | undefined;
  setBaseAccount(value?: BaseAccount): ModuleAccount;
  hasBaseAccount(): boolean;
  clearBaseAccount(): ModuleAccount;

  getName(): string;
  setName(value: string): ModuleAccount;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): ModuleAccount;
  clearPermissionsList(): ModuleAccount;
  addPermissions(value: string, index?: number): ModuleAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleAccount): ModuleAccount.AsObject;
  static serializeBinaryToWriter(message: ModuleAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleAccount;
  static deserializeBinaryFromReader(message: ModuleAccount, reader: jspb.BinaryReader): ModuleAccount;
}

export namespace ModuleAccount {
  export type AsObject = {
    baseAccount?: BaseAccount.AsObject,
    name: string,
    permissionsList: Array<string>,
  }
}

export class Params extends jspb.Message {
  getMaxMemoCharacters(): number;
  setMaxMemoCharacters(value: number): Params;

  getTxSigLimit(): number;
  setTxSigLimit(value: number): Params;

  getTxSizeCostPerByte(): number;
  setTxSizeCostPerByte(value: number): Params;

  getSigVerifyCostEd25519(): number;
  setSigVerifyCostEd25519(value: number): Params;

  getSigVerifyCostSecp256k1(): number;
  setSigVerifyCostSecp256k1(value: number): Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    maxMemoCharacters: number,
    txSigLimit: number,
    txSizeCostPerByte: number,
    sigVerifyCostEd25519: number,
    sigVerifyCostSecp256k1: number,
  }
}

