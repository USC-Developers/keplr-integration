import * as jspb from 'google-protobuf'

import * as ibc_core_client_v1_client_pb from '../../../../ibc/core/client/v1/client_pb';
import * as cosmos_base_query_v1beta1_pagination_pb from '../../../../cosmos/base/query/v1beta1/pagination_pb';
import * as ibc_core_channel_v1_channel_pb from '../../../../ibc/core/channel/v1/channel_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class QueryChannelRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryChannelRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChannelRequest): QueryChannelRequest.AsObject;
  static serializeBinaryToWriter(message: QueryChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelRequest;
  static deserializeBinaryFromReader(message: QueryChannelRequest, reader: jspb.BinaryReader): QueryChannelRequest;
}

export namespace QueryChannelRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
  }
}

export class QueryChannelResponse extends jspb.Message {
  getChannel(): ibc_core_channel_v1_channel_pb.Channel | undefined;
  setChannel(value?: ibc_core_channel_v1_channel_pb.Channel): QueryChannelResponse;
  hasChannel(): boolean;
  clearChannel(): QueryChannelResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryChannelResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryChannelResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryChannelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChannelResponse): QueryChannelResponse.AsObject;
  static serializeBinaryToWriter(message: QueryChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelResponse;
  static deserializeBinaryFromReader(message: QueryChannelResponse, reader: jspb.BinaryReader): QueryChannelResponse;
}

export namespace QueryChannelResponse {
  export type AsObject = {
    channel?: ibc_core_channel_v1_channel_pb.Channel.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryChannelsRequest extends jspb.Message {
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryChannelsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryChannelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChannelsRequest): QueryChannelsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryChannelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelsRequest;
  static deserializeBinaryFromReader(message: QueryChannelsRequest, reader: jspb.BinaryReader): QueryChannelsRequest;
}

export namespace QueryChannelsRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryChannelsResponse extends jspb.Message {
  getChannelsList(): Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>;
  setChannelsList(value: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>): QueryChannelsResponse;
  clearChannelsList(): QueryChannelsResponse;
  addChannels(value?: ibc_core_channel_v1_channel_pb.IdentifiedChannel, index?: number): ibc_core_channel_v1_channel_pb.IdentifiedChannel;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryChannelsResponse;
  hasPagination(): boolean;
  clearPagination(): QueryChannelsResponse;

  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): QueryChannelsResponse;
  hasHeight(): boolean;
  clearHeight(): QueryChannelsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChannelsResponse): QueryChannelsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryChannelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelsResponse;
  static deserializeBinaryFromReader(message: QueryChannelsResponse, reader: jspb.BinaryReader): QueryChannelsResponse;
}

export namespace QueryChannelsResponse {
  export type AsObject = {
    channelsList: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    height?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryConnectionChannelsRequest extends jspb.Message {
  getConnection(): string;
  setConnection(value: string): QueryConnectionChannelsRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryConnectionChannelsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryConnectionChannelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionChannelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionChannelsRequest): QueryConnectionChannelsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryConnectionChannelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionChannelsRequest;
  static deserializeBinaryFromReader(message: QueryConnectionChannelsRequest, reader: jspb.BinaryReader): QueryConnectionChannelsRequest;
}

export namespace QueryConnectionChannelsRequest {
  export type AsObject = {
    connection: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryConnectionChannelsResponse extends jspb.Message {
  getChannelsList(): Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>;
  setChannelsList(value: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>): QueryConnectionChannelsResponse;
  clearChannelsList(): QueryConnectionChannelsResponse;
  addChannels(value?: ibc_core_channel_v1_channel_pb.IdentifiedChannel, index?: number): ibc_core_channel_v1_channel_pb.IdentifiedChannel;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryConnectionChannelsResponse;
  hasPagination(): boolean;
  clearPagination(): QueryConnectionChannelsResponse;

  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): QueryConnectionChannelsResponse;
  hasHeight(): boolean;
  clearHeight(): QueryConnectionChannelsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConnectionChannelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConnectionChannelsResponse): QueryConnectionChannelsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryConnectionChannelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConnectionChannelsResponse;
  static deserializeBinaryFromReader(message: QueryConnectionChannelsResponse, reader: jspb.BinaryReader): QueryConnectionChannelsResponse;
}

export namespace QueryConnectionChannelsResponse {
  export type AsObject = {
    channelsList: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    height?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryChannelClientStateRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryChannelClientStateRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryChannelClientStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelClientStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChannelClientStateRequest): QueryChannelClientStateRequest.AsObject;
  static serializeBinaryToWriter(message: QueryChannelClientStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelClientStateRequest;
  static deserializeBinaryFromReader(message: QueryChannelClientStateRequest, reader: jspb.BinaryReader): QueryChannelClientStateRequest;
}

export namespace QueryChannelClientStateRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
  }
}

export class QueryChannelClientStateResponse extends jspb.Message {
  getIdentifiedClientState(): ibc_core_client_v1_client_pb.IdentifiedClientState | undefined;
  setIdentifiedClientState(value?: ibc_core_client_v1_client_pb.IdentifiedClientState): QueryChannelClientStateResponse;
  hasIdentifiedClientState(): boolean;
  clearIdentifiedClientState(): QueryChannelClientStateResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryChannelClientStateResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryChannelClientStateResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryChannelClientStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelClientStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChannelClientStateResponse): QueryChannelClientStateResponse.AsObject;
  static serializeBinaryToWriter(message: QueryChannelClientStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelClientStateResponse;
  static deserializeBinaryFromReader(message: QueryChannelClientStateResponse, reader: jspb.BinaryReader): QueryChannelClientStateResponse;
}

export namespace QueryChannelClientStateResponse {
  export type AsObject = {
    identifiedClientState?: ibc_core_client_v1_client_pb.IdentifiedClientState.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryChannelConsensusStateRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryChannelConsensusStateRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryChannelConsensusStateRequest;

  getRevisionNumber(): number;
  setRevisionNumber(value: number): QueryChannelConsensusStateRequest;

  getRevisionHeight(): number;
  setRevisionHeight(value: number): QueryChannelConsensusStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelConsensusStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequest.AsObject;
  static serializeBinaryToWriter(message: QueryChannelConsensusStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelConsensusStateRequest;
  static deserializeBinaryFromReader(message: QueryChannelConsensusStateRequest, reader: jspb.BinaryReader): QueryChannelConsensusStateRequest;
}

export namespace QueryChannelConsensusStateRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
    revisionNumber: number,
    revisionHeight: number,
  }
}

export class QueryChannelConsensusStateResponse extends jspb.Message {
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): QueryChannelConsensusStateResponse;
  hasConsensusState(): boolean;
  clearConsensusState(): QueryChannelConsensusStateResponse;

  getClientId(): string;
  setClientId(value: string): QueryChannelConsensusStateResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryChannelConsensusStateResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryChannelConsensusStateResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryChannelConsensusStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryChannelConsensusStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponse.AsObject;
  static serializeBinaryToWriter(message: QueryChannelConsensusStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryChannelConsensusStateResponse;
  static deserializeBinaryFromReader(message: QueryChannelConsensusStateResponse, reader: jspb.BinaryReader): QueryChannelConsensusStateResponse;
}

export namespace QueryChannelConsensusStateResponse {
  export type AsObject = {
    consensusState?: google_protobuf_any_pb.Any.AsObject,
    clientId: string,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryPacketCommitmentRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryPacketCommitmentRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryPacketCommitmentRequest;

  getSequence(): number;
  setSequence(value: number): QueryPacketCommitmentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketCommitmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketCommitmentRequest): QueryPacketCommitmentRequest.AsObject;
  static serializeBinaryToWriter(message: QueryPacketCommitmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentRequest;
  static deserializeBinaryFromReader(message: QueryPacketCommitmentRequest, reader: jspb.BinaryReader): QueryPacketCommitmentRequest;
}

export namespace QueryPacketCommitmentRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
    sequence: number,
  }
}

export class QueryPacketCommitmentResponse extends jspb.Message {
  getCommitment(): Uint8Array | string;
  getCommitment_asU8(): Uint8Array;
  getCommitment_asB64(): string;
  setCommitment(value: Uint8Array | string): QueryPacketCommitmentResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryPacketCommitmentResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryPacketCommitmentResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryPacketCommitmentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketCommitmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketCommitmentResponse): QueryPacketCommitmentResponse.AsObject;
  static serializeBinaryToWriter(message: QueryPacketCommitmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentResponse;
  static deserializeBinaryFromReader(message: QueryPacketCommitmentResponse, reader: jspb.BinaryReader): QueryPacketCommitmentResponse;
}

export namespace QueryPacketCommitmentResponse {
  export type AsObject = {
    commitment: Uint8Array | string,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryPacketCommitmentsRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryPacketCommitmentsRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryPacketCommitmentsRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryPacketCommitmentsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryPacketCommitmentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketCommitmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryPacketCommitmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentsRequest;
  static deserializeBinaryFromReader(message: QueryPacketCommitmentsRequest, reader: jspb.BinaryReader): QueryPacketCommitmentsRequest;
}

export namespace QueryPacketCommitmentsRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryPacketCommitmentsResponse extends jspb.Message {
  getCommitmentsList(): Array<ibc_core_channel_v1_channel_pb.PacketState>;
  setCommitmentsList(value: Array<ibc_core_channel_v1_channel_pb.PacketState>): QueryPacketCommitmentsResponse;
  clearCommitmentsList(): QueryPacketCommitmentsResponse;
  addCommitments(value?: ibc_core_channel_v1_channel_pb.PacketState, index?: number): ibc_core_channel_v1_channel_pb.PacketState;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryPacketCommitmentsResponse;
  hasPagination(): boolean;
  clearPagination(): QueryPacketCommitmentsResponse;

  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): QueryPacketCommitmentsResponse;
  hasHeight(): boolean;
  clearHeight(): QueryPacketCommitmentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketCommitmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryPacketCommitmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketCommitmentsResponse;
  static deserializeBinaryFromReader(message: QueryPacketCommitmentsResponse, reader: jspb.BinaryReader): QueryPacketCommitmentsResponse;
}

export namespace QueryPacketCommitmentsResponse {
  export type AsObject = {
    commitmentsList: Array<ibc_core_channel_v1_channel_pb.PacketState.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    height?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryPacketReceiptRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryPacketReceiptRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryPacketReceiptRequest;

  getSequence(): number;
  setSequence(value: number): QueryPacketReceiptRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketReceiptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketReceiptRequest): QueryPacketReceiptRequest.AsObject;
  static serializeBinaryToWriter(message: QueryPacketReceiptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketReceiptRequest;
  static deserializeBinaryFromReader(message: QueryPacketReceiptRequest, reader: jspb.BinaryReader): QueryPacketReceiptRequest;
}

export namespace QueryPacketReceiptRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
    sequence: number,
  }
}

export class QueryPacketReceiptResponse extends jspb.Message {
  getReceived(): boolean;
  setReceived(value: boolean): QueryPacketReceiptResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryPacketReceiptResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryPacketReceiptResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryPacketReceiptResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketReceiptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketReceiptResponse): QueryPacketReceiptResponse.AsObject;
  static serializeBinaryToWriter(message: QueryPacketReceiptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketReceiptResponse;
  static deserializeBinaryFromReader(message: QueryPacketReceiptResponse, reader: jspb.BinaryReader): QueryPacketReceiptResponse;
}

export namespace QueryPacketReceiptResponse {
  export type AsObject = {
    received: boolean,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryPacketAcknowledgementRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryPacketAcknowledgementRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryPacketAcknowledgementRequest;

  getSequence(): number;
  setSequence(value: number): QueryPacketAcknowledgementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketAcknowledgementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequest.AsObject;
  static serializeBinaryToWriter(message: QueryPacketAcknowledgementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketAcknowledgementRequest;
  static deserializeBinaryFromReader(message: QueryPacketAcknowledgementRequest, reader: jspb.BinaryReader): QueryPacketAcknowledgementRequest;
}

export namespace QueryPacketAcknowledgementRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
    sequence: number,
  }
}

export class QueryPacketAcknowledgementResponse extends jspb.Message {
  getAcknowledgement(): Uint8Array | string;
  getAcknowledgement_asU8(): Uint8Array;
  getAcknowledgement_asB64(): string;
  setAcknowledgement(value: Uint8Array | string): QueryPacketAcknowledgementResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryPacketAcknowledgementResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryPacketAcknowledgementResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryPacketAcknowledgementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketAcknowledgementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponse.AsObject;
  static serializeBinaryToWriter(message: QueryPacketAcknowledgementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketAcknowledgementResponse;
  static deserializeBinaryFromReader(message: QueryPacketAcknowledgementResponse, reader: jspb.BinaryReader): QueryPacketAcknowledgementResponse;
}

export namespace QueryPacketAcknowledgementResponse {
  export type AsObject = {
    acknowledgement: Uint8Array | string,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryPacketAcknowledgementsRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryPacketAcknowledgementsRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryPacketAcknowledgementsRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryPacketAcknowledgementsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryPacketAcknowledgementsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketAcknowledgementsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryPacketAcknowledgementsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketAcknowledgementsRequest;
  static deserializeBinaryFromReader(message: QueryPacketAcknowledgementsRequest, reader: jspb.BinaryReader): QueryPacketAcknowledgementsRequest;
}

export namespace QueryPacketAcknowledgementsRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryPacketAcknowledgementsResponse extends jspb.Message {
  getAcknowledgementsList(): Array<ibc_core_channel_v1_channel_pb.PacketState>;
  setAcknowledgementsList(value: Array<ibc_core_channel_v1_channel_pb.PacketState>): QueryPacketAcknowledgementsResponse;
  clearAcknowledgementsList(): QueryPacketAcknowledgementsResponse;
  addAcknowledgements(value?: ibc_core_channel_v1_channel_pb.PacketState, index?: number): ibc_core_channel_v1_channel_pb.PacketState;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryPacketAcknowledgementsResponse;
  hasPagination(): boolean;
  clearPagination(): QueryPacketAcknowledgementsResponse;

  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): QueryPacketAcknowledgementsResponse;
  hasHeight(): boolean;
  clearHeight(): QueryPacketAcknowledgementsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPacketAcknowledgementsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryPacketAcknowledgementsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPacketAcknowledgementsResponse;
  static deserializeBinaryFromReader(message: QueryPacketAcknowledgementsResponse, reader: jspb.BinaryReader): QueryPacketAcknowledgementsResponse;
}

export namespace QueryPacketAcknowledgementsResponse {
  export type AsObject = {
    acknowledgementsList: Array<ibc_core_channel_v1_channel_pb.PacketState.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    height?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryUnreceivedPacketsRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryUnreceivedPacketsRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryUnreceivedPacketsRequest;

  getPacketCommitmentSequencesList(): Array<number>;
  setPacketCommitmentSequencesList(value: Array<number>): QueryUnreceivedPacketsRequest;
  clearPacketCommitmentSequencesList(): QueryUnreceivedPacketsRequest;
  addPacketCommitmentSequences(value: number, index?: number): QueryUnreceivedPacketsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUnreceivedPacketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryUnreceivedPacketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUnreceivedPacketsRequest;
  static deserializeBinaryFromReader(message: QueryUnreceivedPacketsRequest, reader: jspb.BinaryReader): QueryUnreceivedPacketsRequest;
}

export namespace QueryUnreceivedPacketsRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
    packetCommitmentSequencesList: Array<number>,
  }
}

export class QueryUnreceivedPacketsResponse extends jspb.Message {
  getSequencesList(): Array<number>;
  setSequencesList(value: Array<number>): QueryUnreceivedPacketsResponse;
  clearSequencesList(): QueryUnreceivedPacketsResponse;
  addSequences(value: number, index?: number): QueryUnreceivedPacketsResponse;

  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): QueryUnreceivedPacketsResponse;
  hasHeight(): boolean;
  clearHeight(): QueryUnreceivedPacketsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUnreceivedPacketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryUnreceivedPacketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUnreceivedPacketsResponse;
  static deserializeBinaryFromReader(message: QueryUnreceivedPacketsResponse, reader: jspb.BinaryReader): QueryUnreceivedPacketsResponse;
}

export namespace QueryUnreceivedPacketsResponse {
  export type AsObject = {
    sequencesList: Array<number>,
    height?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryUnreceivedAcksRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryUnreceivedAcksRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryUnreceivedAcksRequest;

  getPacketAckSequencesList(): Array<number>;
  setPacketAckSequencesList(value: Array<number>): QueryUnreceivedAcksRequest;
  clearPacketAckSequencesList(): QueryUnreceivedAcksRequest;
  addPacketAckSequences(value: number, index?: number): QueryUnreceivedAcksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUnreceivedAcksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequest.AsObject;
  static serializeBinaryToWriter(message: QueryUnreceivedAcksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUnreceivedAcksRequest;
  static deserializeBinaryFromReader(message: QueryUnreceivedAcksRequest, reader: jspb.BinaryReader): QueryUnreceivedAcksRequest;
}

export namespace QueryUnreceivedAcksRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
    packetAckSequencesList: Array<number>,
  }
}

export class QueryUnreceivedAcksResponse extends jspb.Message {
  getSequencesList(): Array<number>;
  setSequencesList(value: Array<number>): QueryUnreceivedAcksResponse;
  clearSequencesList(): QueryUnreceivedAcksResponse;
  addSequences(value: number, index?: number): QueryUnreceivedAcksResponse;

  getHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setHeight(value?: ibc_core_client_v1_client_pb.Height): QueryUnreceivedAcksResponse;
  hasHeight(): boolean;
  clearHeight(): QueryUnreceivedAcksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUnreceivedAcksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponse.AsObject;
  static serializeBinaryToWriter(message: QueryUnreceivedAcksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUnreceivedAcksResponse;
  static deserializeBinaryFromReader(message: QueryUnreceivedAcksResponse, reader: jspb.BinaryReader): QueryUnreceivedAcksResponse;
}

export namespace QueryUnreceivedAcksResponse {
  export type AsObject = {
    sequencesList: Array<number>,
    height?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

export class QueryNextSequenceReceiveRequest extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): QueryNextSequenceReceiveRequest;

  getChannelId(): string;
  setChannelId(value: string): QueryNextSequenceReceiveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryNextSequenceReceiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequest.AsObject;
  static serializeBinaryToWriter(message: QueryNextSequenceReceiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryNextSequenceReceiveRequest;
  static deserializeBinaryFromReader(message: QueryNextSequenceReceiveRequest, reader: jspb.BinaryReader): QueryNextSequenceReceiveRequest;
}

export namespace QueryNextSequenceReceiveRequest {
  export type AsObject = {
    portId: string,
    channelId: string,
  }
}

export class QueryNextSequenceReceiveResponse extends jspb.Message {
  getNextSequenceReceive(): number;
  setNextSequenceReceive(value: number): QueryNextSequenceReceiveResponse;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): QueryNextSequenceReceiveResponse;

  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): QueryNextSequenceReceiveResponse;
  hasProofHeight(): boolean;
  clearProofHeight(): QueryNextSequenceReceiveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryNextSequenceReceiveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponse.AsObject;
  static serializeBinaryToWriter(message: QueryNextSequenceReceiveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryNextSequenceReceiveResponse;
  static deserializeBinaryFromReader(message: QueryNextSequenceReceiveResponse, reader: jspb.BinaryReader): QueryNextSequenceReceiveResponse;
}

export namespace QueryNextSequenceReceiveResponse {
  export type AsObject = {
    nextSequenceReceive: number,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
  }
}

