import * as jspb from 'google-protobuf'

import * as cosmos_base_v1beta1_coin_pb from '../../../../cosmos/base/v1beta1/coin_pb';
import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as ibc_core_channel_v1_channel_pb from '../../../../ibc/core/channel/v1/channel_pb';


export class Fee extends jspb.Message {
  getRecvFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setRecvFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): Fee;
  clearRecvFeeList(): Fee;
  addRecvFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getAckFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAckFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): Fee;
  clearAckFeeList(): Fee;
  addAckFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getTimeoutFeeList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTimeoutFeeList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): Fee;
  clearTimeoutFeeList(): Fee;
  addTimeoutFee(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fee.AsObject;
  static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
  static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fee;
  static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
  export type AsObject = {
    recvFeeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    ackFeeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    timeoutFeeList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class PacketFee extends jspb.Message {
  getFee(): Fee | undefined;
  setFee(value?: Fee): PacketFee;
  hasFee(): boolean;
  clearFee(): PacketFee;

  getRefundAddress(): string;
  setRefundAddress(value: string): PacketFee;

  getRelayersList(): Array<string>;
  setRelayersList(value: Array<string>): PacketFee;
  clearRelayersList(): PacketFee;
  addRelayers(value: string, index?: number): PacketFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketFee.AsObject;
  static toObject(includeInstance: boolean, msg: PacketFee): PacketFee.AsObject;
  static serializeBinaryToWriter(message: PacketFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketFee;
  static deserializeBinaryFromReader(message: PacketFee, reader: jspb.BinaryReader): PacketFee;
}

export namespace PacketFee {
  export type AsObject = {
    fee?: Fee.AsObject,
    refundAddress: string,
    relayersList: Array<string>,
  }
}

export class PacketFees extends jspb.Message {
  getPacketFeesList(): Array<PacketFee>;
  setPacketFeesList(value: Array<PacketFee>): PacketFees;
  clearPacketFeesList(): PacketFees;
  addPacketFees(value?: PacketFee, index?: number): PacketFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketFees.AsObject;
  static toObject(includeInstance: boolean, msg: PacketFees): PacketFees.AsObject;
  static serializeBinaryToWriter(message: PacketFees, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketFees;
  static deserializeBinaryFromReader(message: PacketFees, reader: jspb.BinaryReader): PacketFees;
}

export namespace PacketFees {
  export type AsObject = {
    packetFeesList: Array<PacketFee.AsObject>,
  }
}

export class IdentifiedPacketFees extends jspb.Message {
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): IdentifiedPacketFees;
  hasPacketId(): boolean;
  clearPacketId(): IdentifiedPacketFees;

  getPacketFeesList(): Array<PacketFee>;
  setPacketFeesList(value: Array<PacketFee>): IdentifiedPacketFees;
  clearPacketFeesList(): IdentifiedPacketFees;
  addPacketFees(value?: PacketFee, index?: number): PacketFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedPacketFees.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedPacketFees): IdentifiedPacketFees.AsObject;
  static serializeBinaryToWriter(message: IdentifiedPacketFees, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedPacketFees;
  static deserializeBinaryFromReader(message: IdentifiedPacketFees, reader: jspb.BinaryReader): IdentifiedPacketFees;
}

export namespace IdentifiedPacketFees {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
    packetFeesList: Array<PacketFee.AsObject>,
  }
}

