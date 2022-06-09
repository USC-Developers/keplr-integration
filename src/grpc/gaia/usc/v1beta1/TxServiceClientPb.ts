/**
 * @fileoverview gRPC-Web generated client stub for gaia.usc.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as gaia_usc_v1beta1_tx_pb from '../../../gaia/usc/v1beta1/tx_pb';


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

  methodDescriptorMintUSC = new grpcWeb.MethodDescriptor(
    '/gaia.usc.v1beta1.Msg/MintUSC',
    grpcWeb.MethodType.UNARY,
    gaia_usc_v1beta1_tx_pb.MsgMintUSC,
    gaia_usc_v1beta1_tx_pb.MsgMintUSCResponse,
    (request: gaia_usc_v1beta1_tx_pb.MsgMintUSC) => {
      return request.serializeBinary();
    },
    gaia_usc_v1beta1_tx_pb.MsgMintUSCResponse.deserializeBinary
  );

  mintUSC(
    request: gaia_usc_v1beta1_tx_pb.MsgMintUSC,
    metadata: grpcWeb.Metadata | null): Promise<gaia_usc_v1beta1_tx_pb.MsgMintUSCResponse>;

  mintUSC(
    request: gaia_usc_v1beta1_tx_pb.MsgMintUSC,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gaia_usc_v1beta1_tx_pb.MsgMintUSCResponse) => void): grpcWeb.ClientReadableStream<gaia_usc_v1beta1_tx_pb.MsgMintUSCResponse>;

  mintUSC(
    request: gaia_usc_v1beta1_tx_pb.MsgMintUSC,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gaia_usc_v1beta1_tx_pb.MsgMintUSCResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaia.usc.v1beta1.Msg/MintUSC',
        request,
        metadata || {},
        this.methodDescriptorMintUSC,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaia.usc.v1beta1.Msg/MintUSC',
    request,
    metadata || {},
    this.methodDescriptorMintUSC);
  }

  methodDescriptorRedeemCollateral = new grpcWeb.MethodDescriptor(
    '/gaia.usc.v1beta1.Msg/RedeemCollateral',
    grpcWeb.MethodType.UNARY,
    gaia_usc_v1beta1_tx_pb.MsgRedeemCollateral,
    gaia_usc_v1beta1_tx_pb.MsgRedeemCollateralResponse,
    (request: gaia_usc_v1beta1_tx_pb.MsgRedeemCollateral) => {
      return request.serializeBinary();
    },
    gaia_usc_v1beta1_tx_pb.MsgRedeemCollateralResponse.deserializeBinary
  );

  redeemCollateral(
    request: gaia_usc_v1beta1_tx_pb.MsgRedeemCollateral,
    metadata: grpcWeb.Metadata | null): Promise<gaia_usc_v1beta1_tx_pb.MsgRedeemCollateralResponse>;

  redeemCollateral(
    request: gaia_usc_v1beta1_tx_pb.MsgRedeemCollateral,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gaia_usc_v1beta1_tx_pb.MsgRedeemCollateralResponse) => void): grpcWeb.ClientReadableStream<gaia_usc_v1beta1_tx_pb.MsgRedeemCollateralResponse>;

  redeemCollateral(
    request: gaia_usc_v1beta1_tx_pb.MsgRedeemCollateral,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gaia_usc_v1beta1_tx_pb.MsgRedeemCollateralResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaia.usc.v1beta1.Msg/RedeemCollateral',
        request,
        metadata || {},
        this.methodDescriptorRedeemCollateral,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaia.usc.v1beta1.Msg/RedeemCollateral',
    request,
    metadata || {},
    this.methodDescriptorRedeemCollateral);
  }

}

