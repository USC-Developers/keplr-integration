/**
 * @fileoverview gRPC-Web generated client stub for cosmos.evidence.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as cosmos_evidence_v1beta1_query_pb from '../../../cosmos/evidence/v1beta1/query_pb';


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

  methodDescriptorEvidence = new grpcWeb.MethodDescriptor(
    '/cosmos.evidence.v1beta1.Query/Evidence',
    grpcWeb.MethodType.UNARY,
    cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse,
    (request: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest) => {
      return request.serializeBinary();
    },
    cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse.deserializeBinary
  );

  evidence(
    request: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse>;

  evidence(
    request: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse) => void): grpcWeb.ClientReadableStream<cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse>;

  evidence(
    request: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.evidence.v1beta1.Query/Evidence',
        request,
        metadata || {},
        this.methodDescriptorEvidence,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.evidence.v1beta1.Query/Evidence',
    request,
    metadata || {},
    this.methodDescriptorEvidence);
  }

  methodDescriptorAllEvidence = new grpcWeb.MethodDescriptor(
    '/cosmos.evidence.v1beta1.Query/AllEvidence',
    grpcWeb.MethodType.UNARY,
    cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse,
    (request: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest) => {
      return request.serializeBinary();
    },
    cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse.deserializeBinary
  );

  allEvidence(
    request: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse>;

  allEvidence(
    request: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse) => void): grpcWeb.ClientReadableStream<cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse>;

  allEvidence(
    request: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cosmos.evidence.v1beta1.Query/AllEvidence',
        request,
        metadata || {},
        this.methodDescriptorAllEvidence,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cosmos.evidence.v1beta1.Query/AllEvidence',
    request,
    metadata || {},
    this.methodDescriptorAllEvidence);
  }

}

