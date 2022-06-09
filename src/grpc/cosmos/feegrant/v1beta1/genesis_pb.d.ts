import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_feegrant_v1beta1_feegrant_pb from '../../../cosmos/feegrant/v1beta1/feegrant_pb';


export class GenesisState extends jspb.Message {
  getAllowancesList(): Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant>;
  setAllowancesList(value: Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant>): GenesisState;
  clearAllowancesList(): GenesisState;
  addAllowances(value?: cosmos_feegrant_v1beta1_feegrant_pb.Grant, index?: number): cosmos_feegrant_v1beta1_feegrant_pb.Grant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    allowancesList: Array<cosmos_feegrant_v1beta1_feegrant_pb.Grant.AsObject>,
  }
}

