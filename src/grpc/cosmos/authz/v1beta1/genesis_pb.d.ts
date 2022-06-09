import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_authz_v1beta1_authz_pb from '../../../cosmos/authz/v1beta1/authz_pb';


export class GenesisState extends jspb.Message {
  getAuthorizationList(): Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization>;
  setAuthorizationList(value: Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization>): GenesisState;
  clearAuthorizationList(): GenesisState;
  addAuthorization(value?: cosmos_authz_v1beta1_authz_pb.GrantAuthorization, index?: number): cosmos_authz_v1beta1_authz_pb.GrantAuthorization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    authorizationList: Array<cosmos_authz_v1beta1_authz_pb.GrantAuthorization.AsObject>,
  }
}

