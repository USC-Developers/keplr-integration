import * as jspb from 'google-protobuf'

import * as ibc_applications_transfer_v1_transfer_pb from '../../../../ibc/applications/transfer/v1/transfer_pb';
import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class GenesisState extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): GenesisState;

  getDenomTracesList(): Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace>;
  setDenomTracesList(value: Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace>): GenesisState;
  clearDenomTracesList(): GenesisState;
  addDenomTraces(value?: ibc_applications_transfer_v1_transfer_pb.DenomTrace, index?: number): ibc_applications_transfer_v1_transfer_pb.DenomTrace;

  getParams(): ibc_applications_transfer_v1_transfer_pb.Params | undefined;
  setParams(value?: ibc_applications_transfer_v1_transfer_pb.Params): GenesisState;
  hasParams(): boolean;
  clearParams(): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    portId: string,
    denomTracesList: Array<ibc_applications_transfer_v1_transfer_pb.DenomTrace.AsObject>,
    params?: ibc_applications_transfer_v1_transfer_pb.Params.AsObject,
  }
}

