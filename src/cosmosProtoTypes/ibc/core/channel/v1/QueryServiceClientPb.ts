/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.channel.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ibc_core_channel_v1_query_pb from '../../../../ibc/core/channel/v1/query_pb';


export class QueryClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorChannel = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/Channel',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryChannelRequest,
    ibc_core_channel_v1_query_pb.QueryChannelResponse,
    (request: ibc_core_channel_v1_query_pb.QueryChannelRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryChannelResponse.deserializeBinary
  );

  channel(
    request: ibc_core_channel_v1_query_pb.QueryChannelRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryChannelResponse>;

  channel(
    request: ibc_core_channel_v1_query_pb.QueryChannelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryChannelResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryChannelResponse>;

  channel(
    request: ibc_core_channel_v1_query_pb.QueryChannelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryChannelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/Channel',
        request,
        metadata || {},
        this.methodDescriptorChannel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/Channel',
    request,
    metadata || {},
    this.methodDescriptorChannel);
  }

  methodDescriptorChannels = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/Channels',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    ibc_core_channel_v1_query_pb.QueryChannelsResponse,
    (request: ibc_core_channel_v1_query_pb.QueryChannelsRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryChannelsResponse.deserializeBinary
  );

  channels(
    request: ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryChannelsResponse>;

  channels(
    request: ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryChannelsResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryChannelsResponse>;

  channels(
    request: ibc_core_channel_v1_query_pb.QueryChannelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryChannelsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/Channels',
        request,
        metadata || {},
        this.methodDescriptorChannels,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/Channels',
    request,
    metadata || {},
    this.methodDescriptorChannels);
  }

  methodDescriptorConnectionChannels = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/ConnectionChannels',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse,
    (request: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse.deserializeBinary
  );

  connectionChannels(
    request: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse>;

  connectionChannels(
    request: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse>;

  connectionChannels(
    request: ibc_core_channel_v1_query_pb.QueryConnectionChannelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryConnectionChannelsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/ConnectionChannels',
        request,
        metadata || {},
        this.methodDescriptorConnectionChannels,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/ConnectionChannels',
    request,
    metadata || {},
    this.methodDescriptorConnectionChannels);
  }

  methodDescriptorChannelClientState = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/ChannelClientState',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse,
    (request: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse.deserializeBinary
  );

  channelClientState(
    request: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse>;

  channelClientState(
    request: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse>;

  channelClientState(
    request: ibc_core_channel_v1_query_pb.QueryChannelClientStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryChannelClientStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/ChannelClientState',
        request,
        metadata || {},
        this.methodDescriptorChannelClientState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/ChannelClientState',
    request,
    metadata || {},
    this.methodDescriptorChannelClientState);
  }

  methodDescriptorChannelConsensusState = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/ChannelConsensusState',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse,
    (request: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse.deserializeBinary
  );

  channelConsensusState(
    request: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse>;

  channelConsensusState(
    request: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse>;

  channelConsensusState(
    request: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryChannelConsensusStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/ChannelConsensusState',
        request,
        metadata || {},
        this.methodDescriptorChannelConsensusState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/ChannelConsensusState',
    request,
    metadata || {},
    this.methodDescriptorChannelConsensusState);
  }

  methodDescriptorPacketCommitment = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/PacketCommitment',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse,
    (request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse.deserializeBinary
  );

  packetCommitment(
    request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse>;

  packetCommitment(
    request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse>;

  packetCommitment(
    request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/PacketCommitment',
        request,
        metadata || {},
        this.methodDescriptorPacketCommitment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketCommitment',
    request,
    metadata || {},
    this.methodDescriptorPacketCommitment);
  }

  methodDescriptorPacketCommitments = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/PacketCommitments',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse,
    (request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse.deserializeBinary
  );

  packetCommitments(
    request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse>;

  packetCommitments(
    request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse>;

  packetCommitments(
    request: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryPacketCommitmentsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/PacketCommitments',
        request,
        metadata || {},
        this.methodDescriptorPacketCommitments,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketCommitments',
    request,
    metadata || {},
    this.methodDescriptorPacketCommitments);
  }

  methodDescriptorPacketReceipt = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/PacketReceipt',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse,
    (request: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse.deserializeBinary
  );

  packetReceipt(
    request: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse>;

  packetReceipt(
    request: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse>;

  packetReceipt(
    request: ibc_core_channel_v1_query_pb.QueryPacketReceiptRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryPacketReceiptResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/PacketReceipt',
        request,
        metadata || {},
        this.methodDescriptorPacketReceipt,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketReceipt',
    request,
    metadata || {},
    this.methodDescriptorPacketReceipt);
  }

  methodDescriptorPacketAcknowledgement = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/PacketAcknowledgement',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse,
    (request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse.deserializeBinary
  );

  packetAcknowledgement(
    request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse>;

  packetAcknowledgement(
    request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse>;

  packetAcknowledgement(
    request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/PacketAcknowledgement',
        request,
        metadata || {},
        this.methodDescriptorPacketAcknowledgement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketAcknowledgement',
    request,
    metadata || {},
    this.methodDescriptorPacketAcknowledgement);
  }

  methodDescriptorPacketAcknowledgements = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/PacketAcknowledgements',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse,
    (request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse.deserializeBinary
  );

  packetAcknowledgements(
    request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse>;

  packetAcknowledgements(
    request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse>;

  packetAcknowledgements(
    request: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryPacketAcknowledgementsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/PacketAcknowledgements',
        request,
        metadata || {},
        this.methodDescriptorPacketAcknowledgements,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketAcknowledgements',
    request,
    metadata || {},
    this.methodDescriptorPacketAcknowledgements);
  }

  methodDescriptorUnreceivedPackets = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/UnreceivedPackets',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse,
    (request: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse.deserializeBinary
  );

  unreceivedPackets(
    request: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse>;

  unreceivedPackets(
    request: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse>;

  unreceivedPackets(
    request: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryUnreceivedPacketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/UnreceivedPackets',
        request,
        metadata || {},
        this.methodDescriptorUnreceivedPackets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/UnreceivedPackets',
    request,
    metadata || {},
    this.methodDescriptorUnreceivedPackets);
  }

  methodDescriptorUnreceivedAcks = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/UnreceivedAcks',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse,
    (request: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse.deserializeBinary
  );

  unreceivedAcks(
    request: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse>;

  unreceivedAcks(
    request: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse>;

  unreceivedAcks(
    request: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryUnreceivedAcksResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/UnreceivedAcks',
        request,
        metadata || {},
        this.methodDescriptorUnreceivedAcks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/UnreceivedAcks',
    request,
    metadata || {},
    this.methodDescriptorUnreceivedAcks);
  }

  methodDescriptorNextSequenceReceive = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Query/NextSequenceReceive',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse,
    (request: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse.deserializeBinary
  );

  nextSequenceReceive(
    request: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse>;

  nextSequenceReceive(
    request: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse>;

  nextSequenceReceive(
    request: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_query_pb.QueryNextSequenceReceiveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Query/NextSequenceReceive',
        request,
        metadata || {},
        this.methodDescriptorNextSequenceReceive,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Query/NextSequenceReceive',
    request,
    metadata || {},
    this.methodDescriptorNextSequenceReceive);
  }

}

