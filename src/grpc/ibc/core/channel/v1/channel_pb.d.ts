import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as ibc_core_client_v1_client_pb from '../../../../ibc/core/client/v1/client_pb';


export class Channel extends jspb.Message {
  getState(): State;
  setState(value: State): Channel;

  getOrdering(): Order;
  setOrdering(value: Order): Channel;

  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): Channel;
  hasCounterparty(): boolean;
  clearCounterparty(): Channel;

  getConnectionHopsList(): Array<string>;
  setConnectionHopsList(value: Array<string>): Channel;
  clearConnectionHopsList(): Channel;
  addConnectionHops(value: string, index?: number): Channel;

  getVersion(): string;
  setVersion(value: string): Channel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Channel.AsObject;
  static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
  static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Channel;
  static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
  export type AsObject = {
    state: State,
    ordering: Order,
    counterparty?: Counterparty.AsObject,
    connectionHopsList: Array<string>,
    version: string,
  }
}

export class IdentifiedChannel extends jspb.Message {
  getState(): State;
  setState(value: State): IdentifiedChannel;

  getOrdering(): Order;
  setOrdering(value: Order): IdentifiedChannel;

  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): IdentifiedChannel;
  hasCounterparty(): boolean;
  clearCounterparty(): IdentifiedChannel;

  getConnectionHopsList(): Array<string>;
  setConnectionHopsList(value: Array<string>): IdentifiedChannel;
  clearConnectionHopsList(): IdentifiedChannel;
  addConnectionHops(value: string, index?: number): IdentifiedChannel;

  getVersion(): string;
  setVersion(value: string): IdentifiedChannel;

  getPortId(): string;
  setPortId(value: string): IdentifiedChannel;

  getChannelId(): string;
  setChannelId(value: string): IdentifiedChannel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedChannel.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedChannel): IdentifiedChannel.AsObject;
  static serializeBinaryToWriter(message: IdentifiedChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedChannel;
  static deserializeBinaryFromReader(message: IdentifiedChannel, reader: jspb.BinaryReader): IdentifiedChannel;
}

export namespace IdentifiedChannel {
  export type AsObject = {
    state: State,
    ordering: Order,
    counterparty?: Counterparty.AsObject,
    connectionHopsList: Array<string>,
    version: string,
    portId: string,
    channelId: string,
  }
}

export class Counterparty extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): Counterparty;

  getChannelId(): string;
  setChannelId(value: string): Counterparty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Counterparty.AsObject;
  static toObject(includeInstance: boolean, msg: Counterparty): Counterparty.AsObject;
  static serializeBinaryToWriter(message: Counterparty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Counterparty;
  static deserializeBinaryFromReader(message: Counterparty, reader: jspb.BinaryReader): Counterparty;
}

export namespace Counterparty {
  export type AsObject = {
    portId: string,
    channelId: string,
  }
}

export class Packet extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): Packet;

  getSourcePort(): string;
  setSourcePort(value: string): Packet;

  getSourceChannel(): string;
  setSourceChannel(value: string): Packet;

  getDestinationPort(): string;
  setDestinationPort(value: string): Packet;

  getDestinationChannel(): string;
  setDestinationChannel(value: string): Packet;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Packet;

  getTimeoutHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setTimeoutHeight(value?: ibc_core_client_v1_client_pb.Height): Packet;
  hasTimeoutHeight(): boolean;
  clearTimeoutHeight(): Packet;

  getTimeoutTimestamp(): number;
  setTimeoutTimestamp(value: number): Packet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packet.AsObject;
  static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
  static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packet;
  static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
  export type AsObject = {
    sequence: number,
    sourcePort: string,
    sourceChannel: string,
    destinationPort: string,
    destinationChannel: string,
    data: Uint8Array | string,
    timeoutHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    timeoutTimestamp: number,
  }
}

export class PacketState extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): PacketState;

  getChannelId(): string;
  setChannelId(value: string): PacketState;

  getSequence(): number;
  setSequence(value: number): PacketState;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): PacketState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketState.AsObject;
  static toObject(includeInstance: boolean, msg: PacketState): PacketState.AsObject;
  static serializeBinaryToWriter(message: PacketState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketState;
  static deserializeBinaryFromReader(message: PacketState, reader: jspb.BinaryReader): PacketState;
}

export namespace PacketState {
  export type AsObject = {
    portId: string,
    channelId: string,
    sequence: number,
    data: Uint8Array | string,
  }
}

export class PacketId extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): PacketId;

  getChannelId(): string;
  setChannelId(value: string): PacketId;

  getSequence(): number;
  setSequence(value: number): PacketId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketId.AsObject;
  static toObject(includeInstance: boolean, msg: PacketId): PacketId.AsObject;
  static serializeBinaryToWriter(message: PacketId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketId;
  static deserializeBinaryFromReader(message: PacketId, reader: jspb.BinaryReader): PacketId;
}

export namespace PacketId {
  export type AsObject = {
    portId: string,
    channelId: string,
    sequence: number,
  }
}

export class Acknowledgement extends jspb.Message {
  getResult(): Uint8Array | string;
  getResult_asU8(): Uint8Array;
  getResult_asB64(): string;
  setResult(value: Uint8Array | string): Acknowledgement;

  getError(): string;
  setError(value: string): Acknowledgement;

  getResponseCase(): Acknowledgement.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Acknowledgement.AsObject;
  static toObject(includeInstance: boolean, msg: Acknowledgement): Acknowledgement.AsObject;
  static serializeBinaryToWriter(message: Acknowledgement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Acknowledgement;
  static deserializeBinaryFromReader(message: Acknowledgement, reader: jspb.BinaryReader): Acknowledgement;
}

export namespace Acknowledgement {
  export type AsObject = {
    result: Uint8Array | string,
    error: string,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    RESULT = 21,
    ERROR = 22,
  }
}

export enum State { 
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  STATE_INIT = 1,
  STATE_TRYOPEN = 2,
  STATE_OPEN = 3,
  STATE_CLOSED = 4,
}
export enum Order { 
  ORDER_NONE_UNSPECIFIED = 0,
  ORDER_UNORDERED = 1,
  ORDER_ORDERED = 2,
}
