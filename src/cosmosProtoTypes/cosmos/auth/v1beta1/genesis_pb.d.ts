import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_auth_v1beta1_auth_pb from '../../../cosmos/auth/v1beta1/auth_pb';


export class GenesisState extends jspb.Message {
  getParams(): cosmos_auth_v1beta1_auth_pb.Params | undefined;
  setParams(value?: cosmos_auth_v1beta1_auth_pb.Params): GenesisState;
  hasParams(): boolean;
  clearParams(): GenesisState;

  getAccountsList(): Array<google_protobuf_any_pb.Any>;
  setAccountsList(value: Array<google_protobuf_any_pb.Any>): GenesisState;
  clearAccountsList(): GenesisState;
  addAccounts(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: cosmos_auth_v1beta1_auth_pb.Params.AsObject,
    accountsList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

