import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as cosmos_base_abci_v1beta1_abci_pb from '../../../cosmos/base/abci/v1beta1/abci_pb';
import * as cosmos_tx_v1beta1_tx_pb from '../../../cosmos/tx/v1beta1/tx_pb';
import * as cosmos_base_query_v1beta1_pagination_pb from '../../../cosmos/base/query/v1beta1/pagination_pb';
import * as tendermint_types_block_pb from '../../../tendermint/types/block_pb';
import * as tendermint_types_types_pb from '../../../tendermint/types/types_pb';


export class GetTxsEventRequest extends jspb.Message {
  getEventsList(): Array<string>;
  setEventsList(value: Array<string>): GetTxsEventRequest;
  clearEventsList(): GetTxsEventRequest;
  addEvents(value: string, index?: number): GetTxsEventRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): GetTxsEventRequest;
  hasPagination(): boolean;
  clearPagination(): GetTxsEventRequest;

  getOrderBy(): OrderBy;
  setOrderBy(value: OrderBy): GetTxsEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxsEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxsEventRequest): GetTxsEventRequest.AsObject;
  static serializeBinaryToWriter(message: GetTxsEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxsEventRequest;
  static deserializeBinaryFromReader(message: GetTxsEventRequest, reader: jspb.BinaryReader): GetTxsEventRequest;
}

export namespace GetTxsEventRequest {
  export type AsObject = {
    eventsList: Array<string>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    orderBy: OrderBy,
  }
}

export class GetTxsEventResponse extends jspb.Message {
  getTxsList(): Array<cosmos_tx_v1beta1_tx_pb.Tx>;
  setTxsList(value: Array<cosmos_tx_v1beta1_tx_pb.Tx>): GetTxsEventResponse;
  clearTxsList(): GetTxsEventResponse;
  addTxs(value?: cosmos_tx_v1beta1_tx_pb.Tx, index?: number): cosmos_tx_v1beta1_tx_pb.Tx;

  getTxResponsesList(): Array<cosmos_base_abci_v1beta1_abci_pb.TxResponse>;
  setTxResponsesList(value: Array<cosmos_base_abci_v1beta1_abci_pb.TxResponse>): GetTxsEventResponse;
  clearTxResponsesList(): GetTxsEventResponse;
  addTxResponses(value?: cosmos_base_abci_v1beta1_abci_pb.TxResponse, index?: number): cosmos_base_abci_v1beta1_abci_pb.TxResponse;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): GetTxsEventResponse;
  hasPagination(): boolean;
  clearPagination(): GetTxsEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxsEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxsEventResponse): GetTxsEventResponse.AsObject;
  static serializeBinaryToWriter(message: GetTxsEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxsEventResponse;
  static deserializeBinaryFromReader(message: GetTxsEventResponse, reader: jspb.BinaryReader): GetTxsEventResponse;
}

export namespace GetTxsEventResponse {
  export type AsObject = {
    txsList: Array<cosmos_tx_v1beta1_tx_pb.Tx.AsObject>,
    txResponsesList: Array<cosmos_base_abci_v1beta1_abci_pb.TxResponse.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class BroadcastTxRequest extends jspb.Message {
  getTxBytes(): Uint8Array | string;
  getTxBytes_asU8(): Uint8Array;
  getTxBytes_asB64(): string;
  setTxBytes(value: Uint8Array | string): BroadcastTxRequest;

  getMode(): BroadcastMode;
  setMode(value: BroadcastMode): BroadcastTxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTxRequest): BroadcastTxRequest.AsObject;
  static serializeBinaryToWriter(message: BroadcastTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTxRequest;
  static deserializeBinaryFromReader(message: BroadcastTxRequest, reader: jspb.BinaryReader): BroadcastTxRequest;
}

export namespace BroadcastTxRequest {
  export type AsObject = {
    txBytes: Uint8Array | string,
    mode: BroadcastMode,
  }
}

export class BroadcastTxResponse extends jspb.Message {
  getTxResponse(): cosmos_base_abci_v1beta1_abci_pb.TxResponse | undefined;
  setTxResponse(value?: cosmos_base_abci_v1beta1_abci_pb.TxResponse): BroadcastTxResponse;
  hasTxResponse(): boolean;
  clearTxResponse(): BroadcastTxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTxResponse): BroadcastTxResponse.AsObject;
  static serializeBinaryToWriter(message: BroadcastTxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTxResponse;
  static deserializeBinaryFromReader(message: BroadcastTxResponse, reader: jspb.BinaryReader): BroadcastTxResponse;
}

export namespace BroadcastTxResponse {
  export type AsObject = {
    txResponse?: cosmos_base_abci_v1beta1_abci_pb.TxResponse.AsObject,
  }
}

export class SimulateRequest extends jspb.Message {
  getTx(): cosmos_tx_v1beta1_tx_pb.Tx | undefined;
  setTx(value?: cosmos_tx_v1beta1_tx_pb.Tx): SimulateRequest;
  hasTx(): boolean;
  clearTx(): SimulateRequest;

  getTxBytes(): Uint8Array | string;
  getTxBytes_asU8(): Uint8Array;
  getTxBytes_asB64(): string;
  setTxBytes(value: Uint8Array | string): SimulateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SimulateRequest): SimulateRequest.AsObject;
  static serializeBinaryToWriter(message: SimulateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulateRequest;
  static deserializeBinaryFromReader(message: SimulateRequest, reader: jspb.BinaryReader): SimulateRequest;
}

export namespace SimulateRequest {
  export type AsObject = {
    tx?: cosmos_tx_v1beta1_tx_pb.Tx.AsObject,
    txBytes: Uint8Array | string,
  }
}

export class SimulateResponse extends jspb.Message {
  getGasInfo(): cosmos_base_abci_v1beta1_abci_pb.GasInfo | undefined;
  setGasInfo(value?: cosmos_base_abci_v1beta1_abci_pb.GasInfo): SimulateResponse;
  hasGasInfo(): boolean;
  clearGasInfo(): SimulateResponse;

  getResult(): cosmos_base_abci_v1beta1_abci_pb.Result | undefined;
  setResult(value?: cosmos_base_abci_v1beta1_abci_pb.Result): SimulateResponse;
  hasResult(): boolean;
  clearResult(): SimulateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SimulateResponse): SimulateResponse.AsObject;
  static serializeBinaryToWriter(message: SimulateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulateResponse;
  static deserializeBinaryFromReader(message: SimulateResponse, reader: jspb.BinaryReader): SimulateResponse;
}

export namespace SimulateResponse {
  export type AsObject = {
    gasInfo?: cosmos_base_abci_v1beta1_abci_pb.GasInfo.AsObject,
    result?: cosmos_base_abci_v1beta1_abci_pb.Result.AsObject,
  }
}

export class GetTxRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): GetTxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxRequest): GetTxRequest.AsObject;
  static serializeBinaryToWriter(message: GetTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxRequest;
  static deserializeBinaryFromReader(message: GetTxRequest, reader: jspb.BinaryReader): GetTxRequest;
}

export namespace GetTxRequest {
  export type AsObject = {
    hash: string,
  }
}

export class GetTxResponse extends jspb.Message {
  getTx(): cosmos_tx_v1beta1_tx_pb.Tx | undefined;
  setTx(value?: cosmos_tx_v1beta1_tx_pb.Tx): GetTxResponse;
  hasTx(): boolean;
  clearTx(): GetTxResponse;

  getTxResponse(): cosmos_base_abci_v1beta1_abci_pb.TxResponse | undefined;
  setTxResponse(value?: cosmos_base_abci_v1beta1_abci_pb.TxResponse): GetTxResponse;
  hasTxResponse(): boolean;
  clearTxResponse(): GetTxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxResponse): GetTxResponse.AsObject;
  static serializeBinaryToWriter(message: GetTxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxResponse;
  static deserializeBinaryFromReader(message: GetTxResponse, reader: jspb.BinaryReader): GetTxResponse;
}

export namespace GetTxResponse {
  export type AsObject = {
    tx?: cosmos_tx_v1beta1_tx_pb.Tx.AsObject,
    txResponse?: cosmos_base_abci_v1beta1_abci_pb.TxResponse.AsObject,
  }
}

export class GetBlockWithTxsRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): GetBlockWithTxsRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): GetBlockWithTxsRequest;
  hasPagination(): boolean;
  clearPagination(): GetBlockWithTxsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockWithTxsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockWithTxsRequest): GetBlockWithTxsRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockWithTxsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockWithTxsRequest;
  static deserializeBinaryFromReader(message: GetBlockWithTxsRequest, reader: jspb.BinaryReader): GetBlockWithTxsRequest;
}

export namespace GetBlockWithTxsRequest {
  export type AsObject = {
    height: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class GetBlockWithTxsResponse extends jspb.Message {
  getTxsList(): Array<cosmos_tx_v1beta1_tx_pb.Tx>;
  setTxsList(value: Array<cosmos_tx_v1beta1_tx_pb.Tx>): GetBlockWithTxsResponse;
  clearTxsList(): GetBlockWithTxsResponse;
  addTxs(value?: cosmos_tx_v1beta1_tx_pb.Tx, index?: number): cosmos_tx_v1beta1_tx_pb.Tx;

  getBlockId(): tendermint_types_types_pb.BlockID | undefined;
  setBlockId(value?: tendermint_types_types_pb.BlockID): GetBlockWithTxsResponse;
  hasBlockId(): boolean;
  clearBlockId(): GetBlockWithTxsResponse;

  getBlock(): tendermint_types_block_pb.Block | undefined;
  setBlock(value?: tendermint_types_block_pb.Block): GetBlockWithTxsResponse;
  hasBlock(): boolean;
  clearBlock(): GetBlockWithTxsResponse;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): GetBlockWithTxsResponse;
  hasPagination(): boolean;
  clearPagination(): GetBlockWithTxsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockWithTxsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockWithTxsResponse): GetBlockWithTxsResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlockWithTxsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockWithTxsResponse;
  static deserializeBinaryFromReader(message: GetBlockWithTxsResponse, reader: jspb.BinaryReader): GetBlockWithTxsResponse;
}

export namespace GetBlockWithTxsResponse {
  export type AsObject = {
    txsList: Array<cosmos_tx_v1beta1_tx_pb.Tx.AsObject>,
    blockId?: tendermint_types_types_pb.BlockID.AsObject,
    block?: tendermint_types_block_pb.Block.AsObject,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export enum OrderBy { 
  ORDER_BY_UNSPECIFIED = 0,
  ORDER_BY_ASC = 1,
  ORDER_BY_DESC = 2,
}
export enum BroadcastMode { 
  BROADCAST_MODE_UNSPECIFIED = 0,
  BROADCAST_MODE_BLOCK = 1,
  BROADCAST_MODE_SYNC = 2,
  BROADCAST_MODE_ASYNC = 3,
}
