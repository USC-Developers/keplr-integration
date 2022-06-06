/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.channel.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ibc_core_channel_v1_tx_pb from '../../../../ibc/core/channel/v1/tx_pb';


export class MsgClient {
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

  methodDescriptorChannelOpenInit = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Msg/ChannelOpenInit',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse,
    (request: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse.deserializeBinary
  );

  channelOpenInit(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse>;

  channelOpenInit(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse>;

  channelOpenInit(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelOpenInitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Msg/ChannelOpenInit',
        request,
        metadata || {},
        this.methodDescriptorChannelOpenInit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenInit',
    request,
    metadata || {},
    this.methodDescriptorChannelOpenInit);
  }

  methodDescriptorChannelOpenTry = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Msg/ChannelOpenTry',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse,
    (request: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse.deserializeBinary
  );

  channelOpenTry(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse>;

  channelOpenTry(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse>;

  channelOpenTry(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelOpenTryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Msg/ChannelOpenTry',
        request,
        metadata || {},
        this.methodDescriptorChannelOpenTry,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenTry',
    request,
    metadata || {},
    this.methodDescriptorChannelOpenTry);
  }

  methodDescriptorChannelOpenAck = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Msg/ChannelOpenAck',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse,
    (request: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse.deserializeBinary
  );

  channelOpenAck(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse>;

  channelOpenAck(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse>;

  channelOpenAck(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelOpenAckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Msg/ChannelOpenAck',
        request,
        metadata || {},
        this.methodDescriptorChannelOpenAck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenAck',
    request,
    metadata || {},
    this.methodDescriptorChannelOpenAck);
  }

  methodDescriptorChannelOpenConfirm = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Msg/ChannelOpenConfirm',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse,
    (request: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse.deserializeBinary
  );

  channelOpenConfirm(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse>;

  channelOpenConfirm(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse>;

  channelOpenConfirm(
    request: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirmResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Msg/ChannelOpenConfirm',
        request,
        metadata || {},
        this.methodDescriptorChannelOpenConfirm,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenConfirm',
    request,
    metadata || {},
    this.methodDescriptorChannelOpenConfirm);
  }

  methodDescriptorChannelCloseInit = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Msg/ChannelCloseInit',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse,
    (request: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse.deserializeBinary
  );

  channelCloseInit(
    request: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse>;

  channelCloseInit(
    request: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse>;

  channelCloseInit(
    request: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelCloseInitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Msg/ChannelCloseInit',
        request,
        metadata || {},
        this.methodDescriptorChannelCloseInit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelCloseInit',
    request,
    metadata || {},
    this.methodDescriptorChannelCloseInit);
  }

  methodDescriptorChannelCloseConfirm = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Msg/ChannelCloseConfirm',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse,
    (request: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse.deserializeBinary
  );

  channelCloseConfirm(
    request: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse>;

  channelCloseConfirm(
    request: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse>;

  channelCloseConfirm(
    request: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirmResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Msg/ChannelCloseConfirm',
        request,
        metadata || {},
        this.methodDescriptorChannelCloseConfirm,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelCloseConfirm',
    request,
    metadata || {},
    this.methodDescriptorChannelCloseConfirm);
  }

  methodDescriptorRecvPacket = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Msg/RecvPacket',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse,
    (request: ibc_core_channel_v1_tx_pb.MsgRecvPacket) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse.deserializeBinary
  );

  recvPacket(
    request: ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse>;

  recvPacket(
    request: ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse>;

  recvPacket(
    request: ibc_core_channel_v1_tx_pb.MsgRecvPacket,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgRecvPacketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Msg/RecvPacket',
        request,
        metadata || {},
        this.methodDescriptorRecvPacket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Msg/RecvPacket',
    request,
    metadata || {},
    this.methodDescriptorRecvPacket);
  }

  methodDescriptorTimeout = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Msg/Timeout',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_tx_pb.MsgTimeout,
    ibc_core_channel_v1_tx_pb.MsgTimeoutResponse,
    (request: ibc_core_channel_v1_tx_pb.MsgTimeout) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_tx_pb.MsgTimeoutResponse.deserializeBinary
  );

  timeout(
    request: ibc_core_channel_v1_tx_pb.MsgTimeout,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_tx_pb.MsgTimeoutResponse>;

  timeout(
    request: ibc_core_channel_v1_tx_pb.MsgTimeout,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_tx_pb.MsgTimeoutResponse>;

  timeout(
    request: ibc_core_channel_v1_tx_pb.MsgTimeout,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgTimeoutResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Msg/Timeout',
        request,
        metadata || {},
        this.methodDescriptorTimeout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Msg/Timeout',
    request,
    metadata || {},
    this.methodDescriptorTimeout);
  }

  methodDescriptorTimeoutOnClose = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Msg/TimeoutOnClose',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse,
    (request: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse.deserializeBinary
  );

  timeoutOnClose(
    request: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse>;

  timeoutOnClose(
    request: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse>;

  timeoutOnClose(
    request: ibc_core_channel_v1_tx_pb.MsgTimeoutOnClose,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgTimeoutOnCloseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Msg/TimeoutOnClose',
        request,
        metadata || {},
        this.methodDescriptorTimeoutOnClose,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Msg/TimeoutOnClose',
    request,
    metadata || {},
    this.methodDescriptorTimeoutOnClose);
  }

  methodDescriptorAcknowledgement = new grpcWeb.MethodDescriptor(
    '/ibc.core.channel.v1.Msg/Acknowledgement',
    grpcWeb.MethodType.UNARY,
    ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse,
    (request: ibc_core_channel_v1_tx_pb.MsgAcknowledgement) => {
      return request.serializeBinary();
    },
    ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse.deserializeBinary
  );

  acknowledgement(
    request: ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    metadata: grpcWeb.Metadata | null): Promise<ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse>;

  acknowledgement(
    request: ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse) => void): grpcWeb.ClientReadableStream<ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse>;

  acknowledgement(
    request: ibc_core_channel_v1_tx_pb.MsgAcknowledgement,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_core_channel_v1_tx_pb.MsgAcknowledgementResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.core.channel.v1.Msg/Acknowledgement',
        request,
        metadata || {},
        this.methodDescriptorAcknowledgement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.core.channel.v1.Msg/Acknowledgement',
    request,
    metadata || {},
    this.methodDescriptorAcknowledgement);
  }

}

