import * as jspb from 'google-protobuf'

import * as cosmos_proto_cosmos_pb from '../../../../cosmos_proto/cosmos_pb';
import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as cosmos_auth_v1beta1_auth_pb from '../../../../cosmos/auth/v1beta1/auth_pb';


export class InterchainAccount extends jspb.Message {
  getBaseAccount(): cosmos_auth_v1beta1_auth_pb.BaseAccount | undefined;
  setBaseAccount(value?: cosmos_auth_v1beta1_auth_pb.BaseAccount): InterchainAccount;
  hasBaseAccount(): boolean;
  clearBaseAccount(): InterchainAccount;

  getAccountOwner(): string;
  setAccountOwner(value: string): InterchainAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterchainAccount.AsObject;
  static toObject(includeInstance: boolean, msg: InterchainAccount): InterchainAccount.AsObject;
  static serializeBinaryToWriter(message: InterchainAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterchainAccount;
  static deserializeBinaryFromReader(message: InterchainAccount, reader: jspb.BinaryReader): InterchainAccount;
}

export namespace InterchainAccount {
  export type AsObject = {
    baseAccount?: cosmos_auth_v1beta1_auth_pb.BaseAccount.AsObject,
    accountOwner: string,
  }
}

