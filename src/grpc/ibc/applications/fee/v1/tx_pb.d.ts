import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as ibc_applications_fee_v1_fee_pb from '../../../../ibc/applications/fee/v1/fee_pb';
import * as ibc_core_channel_v1_channel_pb from '../../../../ibc/core/channel/v1/channel_pb';


export class MsgRegisterCounterpartyAddress extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): MsgRegisterCounterpartyAddress;

  getCounterpartyAddress(): string;
  setCounterpartyAddress(value: string): MsgRegisterCounterpartyAddress;

  getChannelId(): string;
  setChannelId(value: string): MsgRegisterCounterpartyAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRegisterCounterpartyAddress.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRegisterCounterpartyAddress): MsgRegisterCounterpartyAddress.AsObject;
  static serializeBinaryToWriter(message: MsgRegisterCounterpartyAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRegisterCounterpartyAddress;
  static deserializeBinaryFromReader(message: MsgRegisterCounterpartyAddress, reader: jspb.BinaryReader): MsgRegisterCounterpartyAddress;
}

export namespace MsgRegisterCounterpartyAddress {
  export type AsObject = {
    address: string,
    counterpartyAddress: string,
    channelId: string,
  }
}

export class MsgRegisterCounterpartyAddressResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRegisterCounterpartyAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRegisterCounterpartyAddressResponse): MsgRegisterCounterpartyAddressResponse.AsObject;
  static serializeBinaryToWriter(message: MsgRegisterCounterpartyAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRegisterCounterpartyAddressResponse;
  static deserializeBinaryFromReader(message: MsgRegisterCounterpartyAddressResponse, reader: jspb.BinaryReader): MsgRegisterCounterpartyAddressResponse;
}

export namespace MsgRegisterCounterpartyAddressResponse {
  export type AsObject = {
  }
}

export class MsgPayPacketFee extends jspb.Message {
  getFee(): ibc_applications_fee_v1_fee_pb.Fee | undefined;
  setFee(value?: ibc_applications_fee_v1_fee_pb.Fee): MsgPayPacketFee;
  hasFee(): boolean;
  clearFee(): MsgPayPacketFee;

  getSourcePortId(): string;
  setSourcePortId(value: string): MsgPayPacketFee;

  getSourceChannelId(): string;
  setSourceChannelId(value: string): MsgPayPacketFee;

  getSigner(): string;
  setSigner(value: string): MsgPayPacketFee;

  getRelayersList(): Array<string>;
  setRelayersList(value: Array<string>): MsgPayPacketFee;
  clearRelayersList(): MsgPayPacketFee;
  addRelayers(value: string, index?: number): MsgPayPacketFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPayPacketFee.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPayPacketFee): MsgPayPacketFee.AsObject;
  static serializeBinaryToWriter(message: MsgPayPacketFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPayPacketFee;
  static deserializeBinaryFromReader(message: MsgPayPacketFee, reader: jspb.BinaryReader): MsgPayPacketFee;
}

export namespace MsgPayPacketFee {
  export type AsObject = {
    fee?: ibc_applications_fee_v1_fee_pb.Fee.AsObject,
    sourcePortId: string,
    sourceChannelId: string,
    signer: string,
    relayersList: Array<string>,
  }
}

export class MsgPayPacketFeeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPayPacketFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPayPacketFeeResponse): MsgPayPacketFeeResponse.AsObject;
  static serializeBinaryToWriter(message: MsgPayPacketFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPayPacketFeeResponse;
  static deserializeBinaryFromReader(message: MsgPayPacketFeeResponse, reader: jspb.BinaryReader): MsgPayPacketFeeResponse;
}

export namespace MsgPayPacketFeeResponse {
  export type AsObject = {
  }
}

export class MsgPayPacketFeeAsync extends jspb.Message {
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): MsgPayPacketFeeAsync;
  hasPacketId(): boolean;
  clearPacketId(): MsgPayPacketFeeAsync;

  getPacketFee(): ibc_applications_fee_v1_fee_pb.PacketFee | undefined;
  setPacketFee(value?: ibc_applications_fee_v1_fee_pb.PacketFee): MsgPayPacketFeeAsync;
  hasPacketFee(): boolean;
  clearPacketFee(): MsgPayPacketFeeAsync;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPayPacketFeeAsync.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPayPacketFeeAsync): MsgPayPacketFeeAsync.AsObject;
  static serializeBinaryToWriter(message: MsgPayPacketFeeAsync, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPayPacketFeeAsync;
  static deserializeBinaryFromReader(message: MsgPayPacketFeeAsync, reader: jspb.BinaryReader): MsgPayPacketFeeAsync;
}

export namespace MsgPayPacketFeeAsync {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
    packetFee?: ibc_applications_fee_v1_fee_pb.PacketFee.AsObject,
  }
}

export class MsgPayPacketFeeAsyncResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgPayPacketFeeAsyncResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponse.AsObject;
  static serializeBinaryToWriter(message: MsgPayPacketFeeAsyncResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgPayPacketFeeAsyncResponse;
  static deserializeBinaryFromReader(message: MsgPayPacketFeeAsyncResponse, reader: jspb.BinaryReader): MsgPayPacketFeeAsyncResponse;
}

export namespace MsgPayPacketFeeAsyncResponse {
  export type AsObject = {
  }
}

