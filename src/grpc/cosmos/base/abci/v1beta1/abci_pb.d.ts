import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as tendermint_abci_types_pb from '../../../../tendermint/abci/types_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class TxResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): TxResponse;

  getTxhash(): string;
  setTxhash(value: string): TxResponse;

  getCodespace(): string;
  setCodespace(value: string): TxResponse;

  getCode(): number;
  setCode(value: number): TxResponse;

  getData(): string;
  setData(value: string): TxResponse;

  getRawLog(): string;
  setRawLog(value: string): TxResponse;

  getLogsList(): Array<ABCIMessageLog>;
  setLogsList(value: Array<ABCIMessageLog>): TxResponse;
  clearLogsList(): TxResponse;
  addLogs(value?: ABCIMessageLog, index?: number): ABCIMessageLog;

  getInfo(): string;
  setInfo(value: string): TxResponse;

  getGasWanted(): number;
  setGasWanted(value: number): TxResponse;

  getGasUsed(): number;
  setGasUsed(value: number): TxResponse;

  getTx(): google_protobuf_any_pb.Any | undefined;
  setTx(value?: google_protobuf_any_pb.Any): TxResponse;
  hasTx(): boolean;
  clearTx(): TxResponse;

  getTimestamp(): string;
  setTimestamp(value: string): TxResponse;

  getEventsList(): Array<tendermint_abci_types_pb.Event>;
  setEventsList(value: Array<tendermint_abci_types_pb.Event>): TxResponse;
  clearEventsList(): TxResponse;
  addEvents(value?: tendermint_abci_types_pb.Event, index?: number): tendermint_abci_types_pb.Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TxResponse): TxResponse.AsObject;
  static serializeBinaryToWriter(message: TxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxResponse;
  static deserializeBinaryFromReader(message: TxResponse, reader: jspb.BinaryReader): TxResponse;
}

export namespace TxResponse {
  export type AsObject = {
    height: number,
    txhash: string,
    codespace: string,
    code: number,
    data: string,
    rawLog: string,
    logsList: Array<ABCIMessageLog.AsObject>,
    info: string,
    gasWanted: number,
    gasUsed: number,
    tx?: google_protobuf_any_pb.Any.AsObject,
    timestamp: string,
    eventsList: Array<tendermint_abci_types_pb.Event.AsObject>,
  }
}

export class ABCIMessageLog extends jspb.Message {
  getMsgIndex(): number;
  setMsgIndex(value: number): ABCIMessageLog;

  getLog(): string;
  setLog(value: string): ABCIMessageLog;

  getEventsList(): Array<StringEvent>;
  setEventsList(value: Array<StringEvent>): ABCIMessageLog;
  clearEventsList(): ABCIMessageLog;
  addEvents(value?: StringEvent, index?: number): StringEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ABCIMessageLog.AsObject;
  static toObject(includeInstance: boolean, msg: ABCIMessageLog): ABCIMessageLog.AsObject;
  static serializeBinaryToWriter(message: ABCIMessageLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ABCIMessageLog;
  static deserializeBinaryFromReader(message: ABCIMessageLog, reader: jspb.BinaryReader): ABCIMessageLog;
}

export namespace ABCIMessageLog {
  export type AsObject = {
    msgIndex: number,
    log: string,
    eventsList: Array<StringEvent.AsObject>,
  }
}

export class StringEvent extends jspb.Message {
  getType(): string;
  setType(value: string): StringEvent;

  getAttributesList(): Array<Attribute>;
  setAttributesList(value: Array<Attribute>): StringEvent;
  clearAttributesList(): StringEvent;
  addAttributes(value?: Attribute, index?: number): Attribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringEvent.AsObject;
  static toObject(includeInstance: boolean, msg: StringEvent): StringEvent.AsObject;
  static serializeBinaryToWriter(message: StringEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringEvent;
  static deserializeBinaryFromReader(message: StringEvent, reader: jspb.BinaryReader): StringEvent;
}

export namespace StringEvent {
  export type AsObject = {
    type: string,
    attributesList: Array<Attribute.AsObject>,
  }
}

export class Attribute extends jspb.Message {
  getKey(): string;
  setKey(value: string): Attribute;

  getValue(): string;
  setValue(value: string): Attribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attribute.AsObject;
  static toObject(includeInstance: boolean, msg: Attribute): Attribute.AsObject;
  static serializeBinaryToWriter(message: Attribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attribute;
  static deserializeBinaryFromReader(message: Attribute, reader: jspb.BinaryReader): Attribute;
}

export namespace Attribute {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class GasInfo extends jspb.Message {
  getGasWanted(): number;
  setGasWanted(value: number): GasInfo;

  getGasUsed(): number;
  setGasUsed(value: number): GasInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GasInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GasInfo): GasInfo.AsObject;
  static serializeBinaryToWriter(message: GasInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GasInfo;
  static deserializeBinaryFromReader(message: GasInfo, reader: jspb.BinaryReader): GasInfo;
}

export namespace GasInfo {
  export type AsObject = {
    gasWanted: number,
    gasUsed: number,
  }
}

export class Result extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Result;

  getLog(): string;
  setLog(value: string): Result;

  getEventsList(): Array<tendermint_abci_types_pb.Event>;
  setEventsList(value: Array<tendermint_abci_types_pb.Event>): Result;
  clearEventsList(): Result;
  addEvents(value?: tendermint_abci_types_pb.Event, index?: number): tendermint_abci_types_pb.Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    data: Uint8Array | string,
    log: string,
    eventsList: Array<tendermint_abci_types_pb.Event.AsObject>,
  }
}

export class SimulationResponse extends jspb.Message {
  getGasInfo(): GasInfo | undefined;
  setGasInfo(value?: GasInfo): SimulationResponse;
  hasGasInfo(): boolean;
  clearGasInfo(): SimulationResponse;

  getResult(): Result | undefined;
  setResult(value?: Result): SimulationResponse;
  hasResult(): boolean;
  clearResult(): SimulationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SimulationResponse): SimulationResponse.AsObject;
  static serializeBinaryToWriter(message: SimulationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulationResponse;
  static deserializeBinaryFromReader(message: SimulationResponse, reader: jspb.BinaryReader): SimulationResponse;
}

export namespace SimulationResponse {
  export type AsObject = {
    gasInfo?: GasInfo.AsObject,
    result?: Result.AsObject,
  }
}

export class MsgData extends jspb.Message {
  getMsgType(): string;
  setMsgType(value: string): MsgData;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): MsgData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgData.AsObject;
  static toObject(includeInstance: boolean, msg: MsgData): MsgData.AsObject;
  static serializeBinaryToWriter(message: MsgData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgData;
  static deserializeBinaryFromReader(message: MsgData, reader: jspb.BinaryReader): MsgData;
}

export namespace MsgData {
  export type AsObject = {
    msgType: string,
    data: Uint8Array | string,
  }
}

export class TxMsgData extends jspb.Message {
  getDataList(): Array<MsgData>;
  setDataList(value: Array<MsgData>): TxMsgData;
  clearDataList(): TxMsgData;
  addData(value?: MsgData, index?: number): MsgData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxMsgData.AsObject;
  static toObject(includeInstance: boolean, msg: TxMsgData): TxMsgData.AsObject;
  static serializeBinaryToWriter(message: TxMsgData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxMsgData;
  static deserializeBinaryFromReader(message: TxMsgData, reader: jspb.BinaryReader): TxMsgData;
}

export namespace TxMsgData {
  export type AsObject = {
    dataList: Array<MsgData.AsObject>,
  }
}

export class SearchTxsResult extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): SearchTxsResult;

  getCount(): number;
  setCount(value: number): SearchTxsResult;

  getPageNumber(): number;
  setPageNumber(value: number): SearchTxsResult;

  getPageTotal(): number;
  setPageTotal(value: number): SearchTxsResult;

  getLimit(): number;
  setLimit(value: number): SearchTxsResult;

  getTxsList(): Array<TxResponse>;
  setTxsList(value: Array<TxResponse>): SearchTxsResult;
  clearTxsList(): SearchTxsResult;
  addTxs(value?: TxResponse, index?: number): TxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTxsResult.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTxsResult): SearchTxsResult.AsObject;
  static serializeBinaryToWriter(message: SearchTxsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTxsResult;
  static deserializeBinaryFromReader(message: SearchTxsResult, reader: jspb.BinaryReader): SearchTxsResult;
}

export namespace SearchTxsResult {
  export type AsObject = {
    totalCount: number,
    count: number,
    pageNumber: number,
    pageTotal: number,
    limit: number,
    txsList: Array<TxResponse.AsObject>,
  }
}

