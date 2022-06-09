/**
 * @fileoverview gRPC-Web generated client stub for cosmos.evidence.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_evidence_v1beta1_tx_pb from '../../../cosmos/evidence/v1beta1/tx_pb';


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

  methodDescriptorSubmitEvidence = new grpcWeb.MethodDescriptor(
    '/cosmos.evidence.v1beta1.Msg/SubmitEvidence',
    grpcWeb.MethodType.UNARY,
    cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence,
    cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse,
    (request: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence) => {
      return request.serializeBinary();
    },
    cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse.deserializeBinary
  );

  submitEvidence(
    request: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse>;

  submitEvidence(
    request: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse) => void): grpcWeb.ClientReadableStream<cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse>;

  submitEvidence(
    request: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.evidence.v1beta1.Msg/SubmitEvidence',
        request,
        metadata || {},
        this.methodDescriptorSubmitEvidence,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.evidence.v1beta1.Msg/SubmitEvidence',
    request,
    metadata || {},
    this.methodDescriptorSubmitEvidence);
  }

}

