/**
 * @fileoverview gRPC-Web generated client stub for cosmos.authz.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_authz_v1beta1_tx_pb from '../../../cosmos/authz/v1beta1/tx_pb';


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

  methodDescriptorGrant = new grpcWeb.MethodDescriptor(
    '/cosmos.authz.v1beta1.Msg/Grant',
    grpcWeb.MethodType.UNARY,
    cosmos_authz_v1beta1_tx_pb.MsgGrant,
    cosmos_authz_v1beta1_tx_pb.MsgGrantResponse,
    (request: cosmos_authz_v1beta1_tx_pb.MsgGrant) => {
      return request.serializeBinary();
    },
    cosmos_authz_v1beta1_tx_pb.MsgGrantResponse.deserializeBinary
  );

  grant(
    request: cosmos_authz_v1beta1_tx_pb.MsgGrant,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_authz_v1beta1_tx_pb.MsgGrantResponse>;

  grant(
    request: cosmos_authz_v1beta1_tx_pb.MsgGrant,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_tx_pb.MsgGrantResponse) => void): grpcWeb.ClientReadableStream<cosmos_authz_v1beta1_tx_pb.MsgGrantResponse>;

  grant(
    request: cosmos_authz_v1beta1_tx_pb.MsgGrant,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_tx_pb.MsgGrantResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.authz.v1beta1.Msg/Grant',
        request,
        metadata || {},
        this.methodDescriptorGrant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.authz.v1beta1.Msg/Grant',
    request,
    metadata || {},
    this.methodDescriptorGrant);
  }

  methodDescriptorExec = new grpcWeb.MethodDescriptor(
    '/cosmos.authz.v1beta1.Msg/Exec',
    grpcWeb.MethodType.UNARY,
    cosmos_authz_v1beta1_tx_pb.MsgExec,
    cosmos_authz_v1beta1_tx_pb.MsgExecResponse,
    (request: cosmos_authz_v1beta1_tx_pb.MsgExec) => {
      return request.serializeBinary();
    },
    cosmos_authz_v1beta1_tx_pb.MsgExecResponse.deserializeBinary
  );

  exec(
    request: cosmos_authz_v1beta1_tx_pb.MsgExec,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_authz_v1beta1_tx_pb.MsgExecResponse>;

  exec(
    request: cosmos_authz_v1beta1_tx_pb.MsgExec,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_tx_pb.MsgExecResponse) => void): grpcWeb.ClientReadableStream<cosmos_authz_v1beta1_tx_pb.MsgExecResponse>;

  exec(
    request: cosmos_authz_v1beta1_tx_pb.MsgExec,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_tx_pb.MsgExecResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.authz.v1beta1.Msg/Exec',
        request,
        metadata || {},
        this.methodDescriptorExec,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.authz.v1beta1.Msg/Exec',
    request,
    metadata || {},
    this.methodDescriptorExec);
  }

  methodDescriptorRevoke = new grpcWeb.MethodDescriptor(
    '/cosmos.authz.v1beta1.Msg/Revoke',
    grpcWeb.MethodType.UNARY,
    cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse,
    (request: cosmos_authz_v1beta1_tx_pb.MsgRevoke) => {
      return request.serializeBinary();
    },
    cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse.deserializeBinary
  );

  revoke(
    request: cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse>;

  revoke(
    request: cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse) => void): grpcWeb.ClientReadableStream<cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse>;

  revoke(
    request: cosmos_authz_v1beta1_tx_pb.MsgRevoke,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_authz_v1beta1_tx_pb.MsgRevokeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.authz.v1beta1.Msg/Revoke',
        request,
        metadata || {},
        this.methodDescriptorRevoke,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.authz.v1beta1.Msg/Revoke',
    request,
    metadata || {},
    this.methodDescriptorRevoke);
  }

}

