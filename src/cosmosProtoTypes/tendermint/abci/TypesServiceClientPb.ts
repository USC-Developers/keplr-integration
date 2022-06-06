/**
 * @fileoverview gRPC-Web generated client stub for tendermint.abci
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tendermint_abci_types_pb from '../../tendermint/abci/types_pb';


export class ABCIApplicationClient {
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

  methodDescriptorEcho = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/Echo',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestEcho,
    tendermint_abci_types_pb.ResponseEcho,
    (request: tendermint_abci_types_pb.RequestEcho) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseEcho.deserializeBinary
  );

  echo(
    request: tendermint_abci_types_pb.RequestEcho,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseEcho>;

  echo(
    request: tendermint_abci_types_pb.RequestEcho,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseEcho) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseEcho>;

  echo(
    request: tendermint_abci_types_pb.RequestEcho,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseEcho) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/Echo',
        request,
        metadata || {},
        this.methodDescriptorEcho,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/Echo',
    request,
    metadata || {},
    this.methodDescriptorEcho);
  }

  methodDescriptorFlush = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/Flush',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestFlush,
    tendermint_abci_types_pb.ResponseFlush,
    (request: tendermint_abci_types_pb.RequestFlush) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseFlush.deserializeBinary
  );

  flush(
    request: tendermint_abci_types_pb.RequestFlush,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseFlush>;

  flush(
    request: tendermint_abci_types_pb.RequestFlush,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseFlush) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseFlush>;

  flush(
    request: tendermint_abci_types_pb.RequestFlush,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseFlush) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/Flush',
        request,
        metadata || {},
        this.methodDescriptorFlush,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/Flush',
    request,
    metadata || {},
    this.methodDescriptorFlush);
  }

  methodDescriptorInfo = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/Info',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestInfo,
    tendermint_abci_types_pb.ResponseInfo,
    (request: tendermint_abci_types_pb.RequestInfo) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseInfo.deserializeBinary
  );

  info(
    request: tendermint_abci_types_pb.RequestInfo,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseInfo>;

  info(
    request: tendermint_abci_types_pb.RequestInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseInfo) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseInfo>;

  info(
    request: tendermint_abci_types_pb.RequestInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseInfo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/Info',
        request,
        metadata || {},
        this.methodDescriptorInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/Info',
    request,
    metadata || {},
    this.methodDescriptorInfo);
  }

  methodDescriptorSetOption = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/SetOption',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestSetOption,
    tendermint_abci_types_pb.ResponseSetOption,
    (request: tendermint_abci_types_pb.RequestSetOption) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseSetOption.deserializeBinary
  );

  setOption(
    request: tendermint_abci_types_pb.RequestSetOption,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseSetOption>;

  setOption(
    request: tendermint_abci_types_pb.RequestSetOption,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseSetOption) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseSetOption>;

  setOption(
    request: tendermint_abci_types_pb.RequestSetOption,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseSetOption) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/SetOption',
        request,
        metadata || {},
        this.methodDescriptorSetOption,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/SetOption',
    request,
    metadata || {},
    this.methodDescriptorSetOption);
  }

  methodDescriptorDeliverTx = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/DeliverTx',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestDeliverTx,
    tendermint_abci_types_pb.ResponseDeliverTx,
    (request: tendermint_abci_types_pb.RequestDeliverTx) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseDeliverTx.deserializeBinary
  );

  deliverTx(
    request: tendermint_abci_types_pb.RequestDeliverTx,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseDeliverTx>;

  deliverTx(
    request: tendermint_abci_types_pb.RequestDeliverTx,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseDeliverTx) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseDeliverTx>;

  deliverTx(
    request: tendermint_abci_types_pb.RequestDeliverTx,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseDeliverTx) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/DeliverTx',
        request,
        metadata || {},
        this.methodDescriptorDeliverTx,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/DeliverTx',
    request,
    metadata || {},
    this.methodDescriptorDeliverTx);
  }

  methodDescriptorCheckTx = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/CheckTx',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestCheckTx,
    tendermint_abci_types_pb.ResponseCheckTx,
    (request: tendermint_abci_types_pb.RequestCheckTx) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseCheckTx.deserializeBinary
  );

  checkTx(
    request: tendermint_abci_types_pb.RequestCheckTx,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseCheckTx>;

  checkTx(
    request: tendermint_abci_types_pb.RequestCheckTx,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseCheckTx) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseCheckTx>;

  checkTx(
    request: tendermint_abci_types_pb.RequestCheckTx,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseCheckTx) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/CheckTx',
        request,
        metadata || {},
        this.methodDescriptorCheckTx,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/CheckTx',
    request,
    metadata || {},
    this.methodDescriptorCheckTx);
  }

  methodDescriptorQuery = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/Query',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestQuery,
    tendermint_abci_types_pb.ResponseQuery,
    (request: tendermint_abci_types_pb.RequestQuery) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseQuery.deserializeBinary
  );

  query(
    request: tendermint_abci_types_pb.RequestQuery,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseQuery>;

  query(
    request: tendermint_abci_types_pb.RequestQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseQuery) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseQuery>;

  query(
    request: tendermint_abci_types_pb.RequestQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseQuery) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/Query',
        request,
        metadata || {},
        this.methodDescriptorQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/Query',
    request,
    metadata || {},
    this.methodDescriptorQuery);
  }

  methodDescriptorCommit = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/Commit',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestCommit,
    tendermint_abci_types_pb.ResponseCommit,
    (request: tendermint_abci_types_pb.RequestCommit) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseCommit.deserializeBinary
  );

  commit(
    request: tendermint_abci_types_pb.RequestCommit,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseCommit>;

  commit(
    request: tendermint_abci_types_pb.RequestCommit,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseCommit) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseCommit>;

  commit(
    request: tendermint_abci_types_pb.RequestCommit,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseCommit) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/Commit',
        request,
        metadata || {},
        this.methodDescriptorCommit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/Commit',
    request,
    metadata || {},
    this.methodDescriptorCommit);
  }

  methodDescriptorInitChain = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/InitChain',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestInitChain,
    tendermint_abci_types_pb.ResponseInitChain,
    (request: tendermint_abci_types_pb.RequestInitChain) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseInitChain.deserializeBinary
  );

  initChain(
    request: tendermint_abci_types_pb.RequestInitChain,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseInitChain>;

  initChain(
    request: tendermint_abci_types_pb.RequestInitChain,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseInitChain) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseInitChain>;

  initChain(
    request: tendermint_abci_types_pb.RequestInitChain,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseInitChain) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/InitChain',
        request,
        metadata || {},
        this.methodDescriptorInitChain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/InitChain',
    request,
    metadata || {},
    this.methodDescriptorInitChain);
  }

  methodDescriptorBeginBlock = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/BeginBlock',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestBeginBlock,
    tendermint_abci_types_pb.ResponseBeginBlock,
    (request: tendermint_abci_types_pb.RequestBeginBlock) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseBeginBlock.deserializeBinary
  );

  beginBlock(
    request: tendermint_abci_types_pb.RequestBeginBlock,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseBeginBlock>;

  beginBlock(
    request: tendermint_abci_types_pb.RequestBeginBlock,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseBeginBlock) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseBeginBlock>;

  beginBlock(
    request: tendermint_abci_types_pb.RequestBeginBlock,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseBeginBlock) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/BeginBlock',
        request,
        metadata || {},
        this.methodDescriptorBeginBlock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/BeginBlock',
    request,
    metadata || {},
    this.methodDescriptorBeginBlock);
  }

  methodDescriptorEndBlock = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/EndBlock',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestEndBlock,
    tendermint_abci_types_pb.ResponseEndBlock,
    (request: tendermint_abci_types_pb.RequestEndBlock) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseEndBlock.deserializeBinary
  );

  endBlock(
    request: tendermint_abci_types_pb.RequestEndBlock,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseEndBlock>;

  endBlock(
    request: tendermint_abci_types_pb.RequestEndBlock,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseEndBlock) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseEndBlock>;

  endBlock(
    request: tendermint_abci_types_pb.RequestEndBlock,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseEndBlock) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/EndBlock',
        request,
        metadata || {},
        this.methodDescriptorEndBlock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/EndBlock',
    request,
    metadata || {},
    this.methodDescriptorEndBlock);
  }

  methodDescriptorListSnapshots = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/ListSnapshots',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestListSnapshots,
    tendermint_abci_types_pb.ResponseListSnapshots,
    (request: tendermint_abci_types_pb.RequestListSnapshots) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseListSnapshots.deserializeBinary
  );

  listSnapshots(
    request: tendermint_abci_types_pb.RequestListSnapshots,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseListSnapshots>;

  listSnapshots(
    request: tendermint_abci_types_pb.RequestListSnapshots,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseListSnapshots) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseListSnapshots>;

  listSnapshots(
    request: tendermint_abci_types_pb.RequestListSnapshots,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseListSnapshots) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/ListSnapshots',
        request,
        metadata || {},
        this.methodDescriptorListSnapshots,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/ListSnapshots',
    request,
    metadata || {},
    this.methodDescriptorListSnapshots);
  }

  methodDescriptorOfferSnapshot = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/OfferSnapshot',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestOfferSnapshot,
    tendermint_abci_types_pb.ResponseOfferSnapshot,
    (request: tendermint_abci_types_pb.RequestOfferSnapshot) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseOfferSnapshot.deserializeBinary
  );

  offerSnapshot(
    request: tendermint_abci_types_pb.RequestOfferSnapshot,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseOfferSnapshot>;

  offerSnapshot(
    request: tendermint_abci_types_pb.RequestOfferSnapshot,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseOfferSnapshot) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseOfferSnapshot>;

  offerSnapshot(
    request: tendermint_abci_types_pb.RequestOfferSnapshot,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseOfferSnapshot) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/OfferSnapshot',
        request,
        metadata || {},
        this.methodDescriptorOfferSnapshot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/OfferSnapshot',
    request,
    metadata || {},
    this.methodDescriptorOfferSnapshot);
  }

  methodDescriptorLoadSnapshotChunk = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/LoadSnapshotChunk',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestLoadSnapshotChunk,
    tendermint_abci_types_pb.ResponseLoadSnapshotChunk,
    (request: tendermint_abci_types_pb.RequestLoadSnapshotChunk) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseLoadSnapshotChunk.deserializeBinary
  );

  loadSnapshotChunk(
    request: tendermint_abci_types_pb.RequestLoadSnapshotChunk,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseLoadSnapshotChunk>;

  loadSnapshotChunk(
    request: tendermint_abci_types_pb.RequestLoadSnapshotChunk,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseLoadSnapshotChunk) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseLoadSnapshotChunk>;

  loadSnapshotChunk(
    request: tendermint_abci_types_pb.RequestLoadSnapshotChunk,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseLoadSnapshotChunk) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/LoadSnapshotChunk',
        request,
        metadata || {},
        this.methodDescriptorLoadSnapshotChunk,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/LoadSnapshotChunk',
    request,
    metadata || {},
    this.methodDescriptorLoadSnapshotChunk);
  }

  methodDescriptorApplySnapshotChunk = new grpcWeb.MethodDescriptor(
    '/tendermint.abci.ABCIApplication/ApplySnapshotChunk',
    grpcWeb.MethodType.UNARY,
    tendermint_abci_types_pb.RequestApplySnapshotChunk,
    tendermint_abci_types_pb.ResponseApplySnapshotChunk,
    (request: tendermint_abci_types_pb.RequestApplySnapshotChunk) => {
      return request.serializeBinary();
    },
    tendermint_abci_types_pb.ResponseApplySnapshotChunk.deserializeBinary
  );

  applySnapshotChunk(
    request: tendermint_abci_types_pb.RequestApplySnapshotChunk,
    metadata: grpcWeb.Metadata | null): Promise<tendermint_abci_types_pb.ResponseApplySnapshotChunk>;

  applySnapshotChunk(
    request: tendermint_abci_types_pb.RequestApplySnapshotChunk,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseApplySnapshotChunk) => void): grpcWeb.ClientReadableStream<tendermint_abci_types_pb.ResponseApplySnapshotChunk>;

  applySnapshotChunk(
    request: tendermint_abci_types_pb.RequestApplySnapshotChunk,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tendermint_abci_types_pb.ResponseApplySnapshotChunk) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tendermint.abci.ABCIApplication/ApplySnapshotChunk',
        request,
        metadata || {},
        this.methodDescriptorApplySnapshotChunk,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tendermint.abci.ABCIApplication/ApplySnapshotChunk',
    request,
    metadata || {},
    this.methodDescriptorApplySnapshotChunk);
  }

}

