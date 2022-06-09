import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as ibc_applications_fee_v1_fee_pb from '../../../../ibc/applications/fee/v1/fee_pb';
import * as ibc_core_channel_v1_channel_pb from '../../../../ibc/core/channel/v1/channel_pb';


export class GenesisState extends jspb.Message {
  getIdentifiedFeesList(): Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>;
  setIdentifiedFeesList(value: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>): GenesisState;
  clearIdentifiedFeesList(): GenesisState;
  addIdentifiedFees(value?: ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees, index?: number): ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees;

  getFeeEnabledChannelsList(): Array<FeeEnabledChannel>;
  setFeeEnabledChannelsList(value: Array<FeeEnabledChannel>): GenesisState;
  clearFeeEnabledChannelsList(): GenesisState;
  addFeeEnabledChannels(value?: FeeEnabledChannel, index?: number): FeeEnabledChannel;

  getRegisteredRelayersList(): Array<RegisteredRelayerAddress>;
  setRegisteredRelayersList(value: Array<RegisteredRelayerAddress>): GenesisState;
  clearRegisteredRelayersList(): GenesisState;
  addRegisteredRelayers(value?: RegisteredRelayerAddress, index?: number): RegisteredRelayerAddress;

  getForwardRelayersList(): Array<ForwardRelayerAddress>;
  setForwardRelayersList(value: Array<ForwardRelayerAddress>): GenesisState;
  clearForwardRelayersList(): GenesisState;
  addForwardRelayers(value?: ForwardRelayerAddress, index?: number): ForwardRelayerAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    identifiedFeesList: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees.AsObject>,
    feeEnabledChannelsList: Array<FeeEnabledChannel.AsObject>,
    registeredRelayersList: Array<RegisteredRelayerAddress.AsObject>,
    forwardRelayersList: Array<ForwardRelayerAddress.AsObject>,
  }
}

export class FeeEnabledChannel extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): FeeEnabledChannel;

  getChannelId(): string;
  setChannelId(value: string): FeeEnabledChannel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeEnabledChannel.AsObject;
  static toObject(includeInstance: boolean, msg: FeeEnabledChannel): FeeEnabledChannel.AsObject;
  static serializeBinaryToWriter(message: FeeEnabledChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeEnabledChannel;
  static deserializeBinaryFromReader(message: FeeEnabledChannel, reader: jspb.BinaryReader): FeeEnabledChannel;
}

export namespace FeeEnabledChannel {
  export type AsObject = {
    portId: string,
    channelId: string,
  }
}

export class RegisteredRelayerAddress extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): RegisteredRelayerAddress;

  getCounterpartyAddress(): string;
  setCounterpartyAddress(value: string): RegisteredRelayerAddress;

  getChannelId(): string;
  setChannelId(value: string): RegisteredRelayerAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisteredRelayerAddress.AsObject;
  static toObject(includeInstance: boolean, msg: RegisteredRelayerAddress): RegisteredRelayerAddress.AsObject;
  static serializeBinaryToWriter(message: RegisteredRelayerAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisteredRelayerAddress;
  static deserializeBinaryFromReader(message: RegisteredRelayerAddress, reader: jspb.BinaryReader): RegisteredRelayerAddress;
}

export namespace RegisteredRelayerAddress {
  export type AsObject = {
    address: string,
    counterpartyAddress: string,
    channelId: string,
  }
}

export class ForwardRelayerAddress extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): ForwardRelayerAddress;

  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): ForwardRelayerAddress;
  hasPacketId(): boolean;
  clearPacketId(): ForwardRelayerAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForwardRelayerAddress.AsObject;
  static toObject(includeInstance: boolean, msg: ForwardRelayerAddress): ForwardRelayerAddress.AsObject;
  static serializeBinaryToWriter(message: ForwardRelayerAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForwardRelayerAddress;
  static deserializeBinaryFromReader(message: ForwardRelayerAddress, reader: jspb.BinaryReader): ForwardRelayerAddress;
}

export namespace ForwardRelayerAddress {
  export type AsObject = {
    address: string,
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
  }
}

