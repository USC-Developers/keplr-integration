import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../../cosmos/base/v1beta1/coin_pb';
import * as cosmos_base_query_v1beta1_pagination_pb from '../../../../cosmos/base/query/v1beta1/pagination_pb';
import * as ibc_applications_fee_v1_fee_pb from '../../../../ibc/applications/fee/v1/fee_pb';
import * as ibc_applications_fee_v1_genesis_pb from '../../../../ibc/applications/fee/v1/genesis_pb';
import * as ibc_core_channel_v1_channel_pb from '../../../../ibc/core/channel/v1/channel_pb';


export class QueryIncentivizedPacketsRequest extends jspb.Message {
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryIncentivizedPacketsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryIncentivizedPacketsRequest;

  getQueryHeight(): number;
  setQueryHeight(value: number): QueryIncentivizedPacketsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryIncentivizedPacketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketsRequest;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketsRequest, reader: jspb.BinaryReader): QueryIncentivizedPacketsRequest;
}

export namespace QueryIncentivizedPacketsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    queryHeight: number,
  }
}

export class QueryIncentivizedPacketsResponse extends jspb.Message {
  getIncentivizedPacketsList(): Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>;
  setIncentivizedPacketsList(value: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>): QueryIncentivizedPacketsResponse;
  clearIncentivizedPacketsList(): QueryIncentivizedPacketsResponse;
  addIncentivizedPackets(value?: ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees, index?: number): ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryIncentivizedPacketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketsResponse;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketsResponse, reader: jspb.BinaryReader): QueryIncentivizedPacketsResponse;
}

export namespace QueryIncentivizedPacketsResponse {
  export type AsObject = {
    incentivizedPacketsList: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees.AsObject>,
  }
}

export class QueryIncentivizedPacketRequest extends jspb.Message {
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): QueryIncentivizedPacketRequest;
  hasPacketId(): boolean;
  clearPacketId(): QueryIncentivizedPacketRequest;

  getQueryHeight(): number;
  setQueryHeight(value: number): QueryIncentivizedPacketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequest.AsObject;
  static serializeBinaryToWriter(message: QueryIncentivizedPacketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketRequest;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketRequest, reader: jspb.BinaryReader): QueryIncentivizedPacketRequest;
}

export namespace QueryIncentivizedPacketRequest {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
    queryHeight: number,
  }
}

export class QueryIncentivizedPacketResponse extends jspb.Message {
  getIncentivizedPacket(): ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees | undefined;
  setIncentivizedPacket(value?: ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees): QueryIncentivizedPacketResponse;
  hasIncentivizedPacket(): boolean;
  clearIncentivizedPacket(): QueryIncentivizedPacketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponse.AsObject;
  static serializeBinaryToWriter(message: QueryIncentivizedPacketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketResponse;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketResponse, reader: jspb.BinaryReader): QueryIncentivizedPacketResponse;
}

export namespace QueryIncentivizedPacketResponse {
  export type AsObject = {
    incentivizedPacket?: ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees.AsObject,
  }
}

export class QueryIncentivizedPacketsForChannelRequest extends jspb.Message {
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryIncentivizedPacketsForChannelRequest;
  hasPagination(): boolean;
  clearPagination(): QueryIncentivizedPacketsForChannelRequest;

  getPortId(): string;
  setPortId(value: string): QueryIncentivizedPacketsForChannelRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryIncentivizedPacketsForChannelRequest;

  getQueryHeight(): number;
  setQueryHeight(value: number): QueryIncentivizedPacketsForChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketsForChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequest.AsObject;
  static serializeBinaryToWriter(message: QueryIncentivizedPacketsForChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketsForChannelRequest;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketsForChannelRequest, reader: jspb.BinaryReader): QueryIncentivizedPacketsForChannelRequest;
}

export namespace QueryIncentivizedPacketsForChannelRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    portId: string,
    channelId: string,
    queryHeight: number,
  }
}

export class QueryIncentivizedPacketsForChannelResponse extends jspb.Message {
  getIncentivizedPacketsList(): Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>;
  setIncentivizedPacketsList(value: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees>): QueryIncentivizedPacketsForChannelResponse;
  clearIncentivizedPacketsList(): QueryIncentivizedPacketsForChannelResponse;
  addIncentivizedPackets(value?: ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees, index?: number): ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryIncentivizedPacketsForChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponse.AsObject;
  static serializeBinaryToWriter(message: QueryIncentivizedPacketsForChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryIncentivizedPacketsForChannelResponse;
  static deserializeBinaryFromReader(message: QueryIncentivizedPacketsForChannelResponse, reader: jspb.BinaryReader): QueryIncentivizedPacketsForChannelResponse;
}

export namespace QueryIncentivizedPacketsForChannelResponse {
  export type AsObject = {
    incentivizedPacketsList: Array<ibc_applications_fee_v1_fee_pb.IdentifiedPacketFees.AsObject>,
  }
}

export class QueryTotalRecvFeesRequest extends jspb.Message {
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): QueryTotalRecvFeesRequest;
  hasPacketId(): boolean;
  clearPacketId(): QueryTotalRecvFeesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalRecvFeesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequest.AsObject;
  static serializeBinaryToWriter(message: QueryTotalRecvFeesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalRecvFeesRequest;
  static deserializeBinaryFromReader(message: QueryTotalRecvFeesRequest, reader: jspb.BinaryReader): QueryTotalRecvFeesRequest;
}

export namespace QueryTotalRecvFeesRequest {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
  }
}

export class QueryTotalRecvFeesResponse extends jspb.Message {
  getRecvFeesList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setRecvFeesList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): QueryTotalRecvFeesResponse;
  clearRecvFeesList(): QueryTotalRecvFeesResponse;
  addRecvFees(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalRecvFeesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponse.AsObject;
  static serializeBinaryToWriter(message: QueryTotalRecvFeesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalRecvFeesResponse;
  static deserializeBinaryFromReader(message: QueryTotalRecvFeesResponse, reader: jspb.BinaryReader): QueryTotalRecvFeesResponse;
}

export namespace QueryTotalRecvFeesResponse {
  export type AsObject = {
    recvFeesList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class QueryTotalAckFeesRequest extends jspb.Message {
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): QueryTotalAckFeesRequest;
  hasPacketId(): boolean;
  clearPacketId(): QueryTotalAckFeesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalAckFeesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalAckFeesRequest): QueryTotalAckFeesRequest.AsObject;
  static serializeBinaryToWriter(message: QueryTotalAckFeesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalAckFeesRequest;
  static deserializeBinaryFromReader(message: QueryTotalAckFeesRequest, reader: jspb.BinaryReader): QueryTotalAckFeesRequest;
}

export namespace QueryTotalAckFeesRequest {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
  }
}

export class QueryTotalAckFeesResponse extends jspb.Message {
  getAckFeesList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAckFeesList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): QueryTotalAckFeesResponse;
  clearAckFeesList(): QueryTotalAckFeesResponse;
  addAckFees(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalAckFeesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalAckFeesResponse): QueryTotalAckFeesResponse.AsObject;
  static serializeBinaryToWriter(message: QueryTotalAckFeesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalAckFeesResponse;
  static deserializeBinaryFromReader(message: QueryTotalAckFeesResponse, reader: jspb.BinaryReader): QueryTotalAckFeesResponse;
}

export namespace QueryTotalAckFeesResponse {
  export type AsObject = {
    ackFeesList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class QueryTotalTimeoutFeesRequest extends jspb.Message {
  getPacketId(): ibc_core_channel_v1_channel_pb.PacketId | undefined;
  setPacketId(value?: ibc_core_channel_v1_channel_pb.PacketId): QueryTotalTimeoutFeesRequest;
  hasPacketId(): boolean;
  clearPacketId(): QueryTotalTimeoutFeesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalTimeoutFeesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequest.AsObject;
  static serializeBinaryToWriter(message: QueryTotalTimeoutFeesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalTimeoutFeesRequest;
  static deserializeBinaryFromReader(message: QueryTotalTimeoutFeesRequest, reader: jspb.BinaryReader): QueryTotalTimeoutFeesRequest;
}

export namespace QueryTotalTimeoutFeesRequest {
  export type AsObject = {
    packetId?: ibc_core_channel_v1_channel_pb.PacketId.AsObject,
  }
}

export class QueryTotalTimeoutFeesResponse extends jspb.Message {
  getTimeoutFeesList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setTimeoutFeesList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): QueryTotalTimeoutFeesResponse;
  clearTimeoutFeesList(): QueryTotalTimeoutFeesResponse;
  addTimeoutFees(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalTimeoutFeesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponse.AsObject;
  static serializeBinaryToWriter(message: QueryTotalTimeoutFeesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalTimeoutFeesResponse;
  static deserializeBinaryFromReader(message: QueryTotalTimeoutFeesResponse, reader: jspb.BinaryReader): QueryTotalTimeoutFeesResponse;
}

export namespace QueryTotalTimeoutFeesResponse {
  export type AsObject = {
    timeoutFeesList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class QueryCounterpartyAddressRequest extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): QueryCounterpartyAddressRequest;

  getRelayerAddress(): string;
  setRelayerAddress(value: string): QueryCounterpartyAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCounterpartyAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCounterpartyAddressRequest): QueryCounterpartyAddressRequest.AsObject;
  static serializeBinaryToWriter(message: QueryCounterpartyAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCounterpartyAddressRequest;
  static deserializeBinaryFromReader(message: QueryCounterpartyAddressRequest, reader: jspb.BinaryReader): QueryCounterpartyAddressRequest;
}

export namespace QueryCounterpartyAddressRequest {
  export type AsObject = {
    channelId: string,
    relayerAddress: string,
  }
}

export class QueryCounterpartyAddressResponse extends jspb.Message {
  getCounterpartyAddress(): string;
  setCounterpartyAddress(value: string): QueryCounterpartyAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCounterpartyAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCounterpartyAddressResponse): QueryCounterpartyAddressResponse.AsObject;
  static serializeBinaryToWriter(message: QueryCounterpartyAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCounterpartyAddressResponse;
  static deserializeBinaryFromReader(message: QueryCounterpartyAddressResponse, reader: jspb.BinaryReader): QueryCounterpartyAddressResponse;
}

export namespace QueryCounterpartyAddressResponse {
  export type AsObject = {
    counterpartyAddress: string,
  }
}

export class QueryFeeEnabledChannelsRequest extends jspb.Message {
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryFeeEnabledChannelsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryFeeEnabledChannelsRequest;

  getQueryHeight(): number;
  setQueryHeight(value: number): QueryFeeEnabledChannelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFeeEnabledChannelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryFeeEnabledChannelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFeeEnabledChannelsRequest;
  static deserializeBinaryFromReader(message: QueryFeeEnabledChannelsRequest, reader: jspb.BinaryReader): QueryFeeEnabledChannelsRequest;
}

export namespace QueryFeeEnabledChannelsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    queryHeight: number,
  }
}

export class QueryFeeEnabledChannelsResponse extends jspb.Message {
  getFeeEnabledChannelsList(): Array<ibc_applications_fee_v1_genesis_pb.FeeEnabledChannel>;
  setFeeEnabledChannelsList(value: Array<ibc_applications_fee_v1_genesis_pb.FeeEnabledChannel>): QueryFeeEnabledChannelsResponse;
  clearFeeEnabledChannelsList(): QueryFeeEnabledChannelsResponse;
  addFeeEnabledChannels(value?: ibc_applications_fee_v1_genesis_pb.FeeEnabledChannel, index?: number): ibc_applications_fee_v1_genesis_pb.FeeEnabledChannel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFeeEnabledChannelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryFeeEnabledChannelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFeeEnabledChannelsResponse;
  static deserializeBinaryFromReader(message: QueryFeeEnabledChannelsResponse, reader: jspb.BinaryReader): QueryFeeEnabledChannelsResponse;
}

export namespace QueryFeeEnabledChannelsResponse {
  export type AsObject = {
    feeEnabledChannelsList: Array<ibc_applications_fee_v1_genesis_pb.FeeEnabledChannel.AsObject>,
  }
}

export class QueryFeeEnabledChannelRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryFeeEnabledChannelRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryFeeEnabledChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFeeEnabledChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequest.AsObject;
  static serializeBinaryToWriter(message: QueryFeeEnabledChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFeeEnabledChannelRequest;
  static deserializeBinaryFromReader(message: QueryFeeEnabledChannelRequest, reader: jspb.BinaryReader): QueryFeeEnabledChannelRequest;
}

export namespace QueryFeeEnabledChannelRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
  }
}

export class QueryFeeEnabledChannelResponse extends jspb.Message {
  getFeeEnabled(): boolean;
  setFeeEnabled(value: boolean): QueryFeeEnabledChannelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFeeEnabledChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponse.AsObject;
  static serializeBinaryToWriter(message: QueryFeeEnabledChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFeeEnabledChannelResponse;
  static deserializeBinaryFromReader(message: QueryFeeEnabledChannelResponse, reader: jspb.BinaryReader): QueryFeeEnabledChannelResponse;
}

export namespace QueryFeeEnabledChannelResponse {
  export type AsObject = {
    feeEnabled: boolean,
  }
}

