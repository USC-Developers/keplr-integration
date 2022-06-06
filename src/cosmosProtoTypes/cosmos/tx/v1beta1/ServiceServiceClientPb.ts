/**
 * @fileoverview gRPC-Web generated client stub for cosmos.tx.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_tx_v1beta1_service_pb from '../../../cosmos/tx/v1beta1/service_pb';


export class ServiceClient {
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

  methodDescriptorSimulate = new grpcWeb.MethodDescriptor(
    '/cosmos.tx.v1beta1.Service/Simulate',
    grpcWeb.MethodType.UNARY,
    cosmos_tx_v1beta1_service_pb.SimulateRequest,
    cosmos_tx_v1beta1_service_pb.SimulateResponse,
    (request: cosmos_tx_v1beta1_service_pb.SimulateRequest) => {
      return request.serializeBinary();
    },
    cosmos_tx_v1beta1_service_pb.SimulateResponse.deserializeBinary
  );

  simulate(
    request: cosmos_tx_v1beta1_service_pb.SimulateRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_tx_v1beta1_service_pb.SimulateResponse>;

  simulate(
    request: cosmos_tx_v1beta1_service_pb.SimulateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_tx_v1beta1_service_pb.SimulateResponse) => void): grpcWeb.ClientReadableStream<cosmos_tx_v1beta1_service_pb.SimulateResponse>;

  simulate(
    request: cosmos_tx_v1beta1_service_pb.SimulateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_tx_v1beta1_service_pb.SimulateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.tx.v1beta1.Service/Simulate',
        request,
        metadata || {},
        this.methodDescriptorSimulate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.tx.v1beta1.Service/Simulate',
    request,
    metadata || {},
    this.methodDescriptorSimulate);
  }

  methodDescriptorGetTx = new grpcWeb.MethodDescriptor(
    '/cosmos.tx.v1beta1.Service/GetTx',
    grpcWeb.MethodType.UNARY,
    cosmos_tx_v1beta1_service_pb.GetTxRequest,
    cosmos_tx_v1beta1_service_pb.GetTxResponse,
    (request: cosmos_tx_v1beta1_service_pb.GetTxRequest) => {
      return request.serializeBinary();
    },
    cosmos_tx_v1beta1_service_pb.GetTxResponse.deserializeBinary
  );

  getTx(
    request: cosmos_tx_v1beta1_service_pb.GetTxRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_tx_v1beta1_service_pb.GetTxResponse>;

  getTx(
    request: cosmos_tx_v1beta1_service_pb.GetTxRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_tx_v1beta1_service_pb.GetTxResponse) => void): grpcWeb.ClientReadableStream<cosmos_tx_v1beta1_service_pb.GetTxResponse>;

  getTx(
    request: cosmos_tx_v1beta1_service_pb.GetTxRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_tx_v1beta1_service_pb.GetTxResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.tx.v1beta1.Service/GetTx',
        request,
        metadata || {},
        this.methodDescriptorGetTx,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.tx.v1beta1.Service/GetTx',
    request,
    metadata || {},
    this.methodDescriptorGetTx);
  }

  methodDescriptorBroadcastTx = new grpcWeb.MethodDescriptor(
    '/cosmos.tx.v1beta1.Service/BroadcastTx',
    grpcWeb.MethodType.UNARY,
    cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    cosmos_tx_v1beta1_service_pb.BroadcastTxResponse,
    (request: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest) => {
      return request.serializeBinary();
    },
    cosmos_tx_v1beta1_service_pb.BroadcastTxResponse.deserializeBinary
  );

  broadcastTx(
    request: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_tx_v1beta1_service_pb.BroadcastTxResponse>;

  broadcastTx(
    request: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse) => void): grpcWeb.ClientReadableStream<cosmos_tx_v1beta1_service_pb.BroadcastTxResponse>;

  broadcastTx(
    request: cosmos_tx_v1beta1_service_pb.BroadcastTxRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_tx_v1beta1_service_pb.BroadcastTxResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.tx.v1beta1.Service/BroadcastTx',
        request,
        metadata || {},
        this.methodDescriptorBroadcastTx,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.tx.v1beta1.Service/BroadcastTx',
    request,
    metadata || {},
    this.methodDescriptorBroadcastTx);
  }

  methodDescriptorGetTxsEvent = new grpcWeb.MethodDescriptor(
    '/cosmos.tx.v1beta1.Service/GetTxsEvent',
    grpcWeb.MethodType.UNARY,
    cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    cosmos_tx_v1beta1_service_pb.GetTxsEventResponse,
    (request: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest) => {
      return request.serializeBinary();
    },
    cosmos_tx_v1beta1_service_pb.GetTxsEventResponse.deserializeBinary
  );

  getTxsEvent(
    request: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_tx_v1beta1_service_pb.GetTxsEventResponse>;

  getTxsEvent(
    request: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse) => void): grpcWeb.ClientReadableStream<cosmos_tx_v1beta1_service_pb.GetTxsEventResponse>;

  getTxsEvent(
    request: cosmos_tx_v1beta1_service_pb.GetTxsEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_tx_v1beta1_service_pb.GetTxsEventResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.tx.v1beta1.Service/GetTxsEvent',
        request,
        metadata || {},
        this.methodDescriptorGetTxsEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.tx.v1beta1.Service/GetTxsEvent',
    request,
    metadata || {},
    this.methodDescriptorGetTxsEvent);
  }

  methodDescriptorGetBlockWithTxs = new grpcWeb.MethodDescriptor(
    '/cosmos.tx.v1beta1.Service/GetBlockWithTxs',
    grpcWeb.MethodType.UNARY,
    cosmos_tx_v1beta1_service_pb.GetBlockWithTxsRequest,
    cosmos_tx_v1beta1_service_pb.GetBlockWithTxsResponse,
    (request: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsRequest) => {
      return request.serializeBinary();
    },
    cosmos_tx_v1beta1_service_pb.GetBlockWithTxsResponse.deserializeBinary
  );

  getBlockWithTxs(
    request: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_tx_v1beta1_service_pb.GetBlockWithTxsResponse>;

  getBlockWithTxs(
    request: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsResponse) => void): grpcWeb.ClientReadableStream<cosmos_tx_v1beta1_service_pb.GetBlockWithTxsResponse>;

  getBlockWithTxs(
    request: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_tx_v1beta1_service_pb.GetBlockWithTxsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.tx.v1beta1.Service/GetBlockWithTxs',
        request,
        metadata || {},
        this.methodDescriptorGetBlockWithTxs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.tx.v1beta1.Service/GetBlockWithTxs',
    request,
    metadata || {},
    this.methodDescriptorGetBlockWithTxs);
  }

}

