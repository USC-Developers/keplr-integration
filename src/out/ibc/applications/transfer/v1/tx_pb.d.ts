import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../../cosmos/base/v1beta1/coin_pb';
import * as ibc_core_client_v1_client_pb from '../../../../ibc/core/client/v1/client_pb';


export class MsgTransfer extends jspb.Message {
  getSourcePort(): string;
  setSourcePort(value: string): MsgTransfer;

  getSourceChannel(): string;
  setSourceChannel(value: string): MsgTransfer;

  getToken(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setToken(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgTransfer;
  hasToken(): boolean;
  clearToken(): MsgTransfer;

  getSender(): string;
  setSender(value: string): MsgTransfer;

  getReceiver(): string;
  setReceiver(value: string): MsgTransfer;

  getTimeoutHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setTimeoutHeight(value?: ibc_core_client_v1_client_pb.Height): MsgTransfer;
  hasTimeoutHeight(): boolean;
  clearTimeoutHeight(): MsgTransfer;

  getTimeoutTimestamp(): number;
  setTimeoutTimestamp(value: number): MsgTransfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTransfer): MsgTransfer.AsObject;
  static serializeBinaryToWriter(message: MsgTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTransfer;
  static deserializeBinaryFromReader(message: MsgTransfer, reader: jspb.BinaryReader): MsgTransfer;
}

export namespace MsgTransfer {
  export type AsObject = {
    sourcePort: string,
    sourceChannel: string,
    token?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    sender: string,
    receiver: string,
    timeoutHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    timeoutTimestamp: number,
  }
}

export class MsgTransferResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTransferResponse): MsgTransferResponse.AsObject;
  static serializeBinaryToWriter(message: MsgTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTransferResponse;
  static deserializeBinaryFromReader(message: MsgTransferResponse, reader: jspb.BinaryReader): MsgTransferResponse;
}

export namespace MsgTransferResponse {
  export type AsObject = {
  }
}

