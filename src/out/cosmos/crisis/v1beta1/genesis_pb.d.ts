import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';


export class GenesisState extends jspb.Message {
  getConstantFee(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setConstantFee(value?: cosmos_base_v1beta1_coin_pb.Coin): GenesisState;
  hasConstantFee(): boolean;
  clearConstantFee(): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    constantFee?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

