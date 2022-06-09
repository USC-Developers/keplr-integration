/**
 * @fileoverview gRPC-Web generated client stub for ibc.applications.fee.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as ibc_applications_fee_v1_query_pb from '../../../../ibc/applications/fee/v1/query_pb';


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

  methodDescriptorIncentivizedPackets = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Query/IncentivizedPackets',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsRequest,
    ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsResponse,
    (request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsResponse.deserializeBinary
  );

  incentivizedPackets(
    request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsResponse>;

  incentivizedPackets(
    request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsResponse>;

  incentivizedPackets(
    request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Query/IncentivizedPackets',
        request,
        metadata || {},
        this.methodDescriptorIncentivizedPackets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Query/IncentivizedPackets',
    request,
    metadata || {},
    this.methodDescriptorIncentivizedPackets);
  }

  methodDescriptorIncentivizedPacket = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Query/IncentivizedPacket',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketRequest,
    ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketResponse,
    (request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketResponse.deserializeBinary
  );

  incentivizedPacket(
    request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketResponse>;

  incentivizedPacket(
    request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketResponse>;

  incentivizedPacket(
    request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Query/IncentivizedPacket',
        request,
        metadata || {},
        this.methodDescriptorIncentivizedPacket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Query/IncentivizedPacket',
    request,
    metadata || {},
    this.methodDescriptorIncentivizedPacket);
  }

  methodDescriptorIncentivizedPacketsForChannel = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Query/IncentivizedPacketsForChannel',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelRequest,
    ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelResponse,
    (request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelResponse.deserializeBinary
  );

  incentivizedPacketsForChannel(
    request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelResponse>;

  incentivizedPacketsForChannel(
    request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelResponse>;

  incentivizedPacketsForChannel(
    request: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryIncentivizedPacketsForChannelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Query/IncentivizedPacketsForChannel',
        request,
        metadata || {},
        this.methodDescriptorIncentivizedPacketsForChannel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Query/IncentivizedPacketsForChannel',
    request,
    metadata || {},
    this.methodDescriptorIncentivizedPacketsForChannel);
  }

  methodDescriptorTotalRecvFees = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Query/TotalRecvFees',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesRequest,
    ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesResponse,
    (request: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesResponse.deserializeBinary
  );

  totalRecvFees(
    request: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesResponse>;

  totalRecvFees(
    request: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesResponse>;

  totalRecvFees(
    request: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryTotalRecvFeesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Query/TotalRecvFees',
        request,
        metadata || {},
        this.methodDescriptorTotalRecvFees,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Query/TotalRecvFees',
    request,
    metadata || {},
    this.methodDescriptorTotalRecvFees);
  }

  methodDescriptorTotalAckFees = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Query/TotalAckFees',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_query_pb.QueryTotalAckFeesRequest,
    ibc_applications_fee_v1_query_pb.QueryTotalAckFeesResponse,
    (request: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_query_pb.QueryTotalAckFeesResponse.deserializeBinary
  );

  totalAckFees(
    request: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_query_pb.QueryTotalAckFeesResponse>;

  totalAckFees(
    request: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_query_pb.QueryTotalAckFeesResponse>;

  totalAckFees(
    request: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryTotalAckFeesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Query/TotalAckFees',
        request,
        metadata || {},
        this.methodDescriptorTotalAckFees,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Query/TotalAckFees',
    request,
    metadata || {},
    this.methodDescriptorTotalAckFees);
  }

  methodDescriptorTotalTimeoutFees = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Query/TotalTimeoutFees',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesRequest,
    ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesResponse,
    (request: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesResponse.deserializeBinary
  );

  totalTimeoutFees(
    request: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesResponse>;

  totalTimeoutFees(
    request: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesResponse>;

  totalTimeoutFees(
    request: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryTotalTimeoutFeesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Query/TotalTimeoutFees',
        request,
        metadata || {},
        this.methodDescriptorTotalTimeoutFees,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Query/TotalTimeoutFees',
    request,
    metadata || {},
    this.methodDescriptorTotalTimeoutFees);
  }

  methodDescriptorCounterpartyAddress = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Query/CounterpartyAddress',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_query_pb.QueryCounterpartyAddressRequest,
    ibc_applications_fee_v1_query_pb.QueryCounterpartyAddressResponse,
    (request: ibc_applications_fee_v1_query_pb.QueryCounterpartyAddressRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_query_pb.QueryCounterpartyAddressResponse.deserializeBinary
  );

  counterpartyAddress(
    request: ibc_applications_fee_v1_query_pb.QueryCounterpartyAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_query_pb.QueryCounterpartyAddressResponse>;

  counterpartyAddress(
    request: ibc_applications_fee_v1_query_pb.QueryCounterpartyAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryCounterpartyAddressResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_query_pb.QueryCounterpartyAddressResponse>;

  counterpartyAddress(
    request: ibc_applications_fee_v1_query_pb.QueryCounterpartyAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryCounterpartyAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Query/CounterpartyAddress',
        request,
        metadata || {},
        this.methodDescriptorCounterpartyAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Query/CounterpartyAddress',
    request,
    metadata || {},
    this.methodDescriptorCounterpartyAddress);
  }

  methodDescriptorFeeEnabledChannels = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Query/FeeEnabledChannels',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsRequest,
    ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsResponse,
    (request: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsResponse.deserializeBinary
  );

  feeEnabledChannels(
    request: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsResponse>;

  feeEnabledChannels(
    request: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsResponse>;

  feeEnabledChannels(
    request: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Query/FeeEnabledChannels',
        request,
        metadata || {},
        this.methodDescriptorFeeEnabledChannels,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Query/FeeEnabledChannels',
    request,
    metadata || {},
    this.methodDescriptorFeeEnabledChannels);
  }

  methodDescriptorFeeEnabledChannel = new grpcWeb.MethodDescriptor(
    '/ibc.applications.fee.v1.Query/FeeEnabledChannel',
    grpcWeb.MethodType.UNARY,
    ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelRequest,
    ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelResponse,
    (request: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelRequest) => {
      return request.serializeBinary();
    },
    ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelResponse.deserializeBinary
  );

  feeEnabledChannel(
    request: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelRequest,
    metadata: grpcWeb.Metadata | null): Promise<ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelResponse>;

  feeEnabledChannel(
    request: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelResponse) => void): grpcWeb.ClientReadableStream<ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelResponse>;

  feeEnabledChannel(
    request: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: ibc_applications_fee_v1_query_pb.QueryFeeEnabledChannelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ibc.applications.fee.v1.Query/FeeEnabledChannel',
        request,
        metadata || {},
        this.methodDescriptorFeeEnabledChannel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ibc.applications.fee.v1.Query/FeeEnabledChannel',
    request,
    metadata || {},
    this.methodDescriptorFeeEnabledChannel);
  }

}

