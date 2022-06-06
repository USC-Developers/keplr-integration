import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../gogoproto/gogo_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ProtocolVersion extends jspb.Message {
  getP2p(): number;
  setP2p(value: number): ProtocolVersion;

  getBlock(): number;
  setBlock(value: number): ProtocolVersion;

  getApp(): number;
  setApp(value: number): ProtocolVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolVersion.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolVersion): ProtocolVersion.AsObject;
  static serializeBinaryToWriter(message: ProtocolVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolVersion;
  static deserializeBinaryFromReader(message: ProtocolVersion, reader: jspb.BinaryReader): ProtocolVersion;
}

export namespace ProtocolVersion {
  export type AsObject = {
    p2p: number,
    block: number,
    app: number,
  }
}

export class NodeInfo extends jspb.Message {
  getProtocolVersion(): ProtocolVersion | undefined;
  setProtocolVersion(value?: ProtocolVersion): NodeInfo;
  hasProtocolVersion(): boolean;
  clearProtocolVersion(): NodeInfo;

  getNodeId(): string;
  setNodeId(value: string): NodeInfo;

  getListenAddr(): string;
  setListenAddr(value: string): NodeInfo;

  getNetwork(): string;
  setNetwork(value: string): NodeInfo;

  getVersion(): string;
  setVersion(value: string): NodeInfo;

  getChannels(): Uint8Array | string;
  getChannels_asU8(): Uint8Array;
  getChannels_asB64(): string;
  setChannels(value: Uint8Array | string): NodeInfo;

  getMoniker(): string;
  setMoniker(value: string): NodeInfo;

  getOther(): NodeInfoOther | undefined;
  setOther(value?: NodeInfoOther): NodeInfo;
  hasOther(): boolean;
  clearOther(): NodeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
  static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfo;
  static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
}

export namespace NodeInfo {
  export type AsObject = {
    protocolVersion?: ProtocolVersion.AsObject,
    nodeId: string,
    listenAddr: string,
    network: string,
    version: string,
    channels: Uint8Array | string,
    moniker: string,
    other?: NodeInfoOther.AsObject,
  }
}

export class NodeInfoOther extends jspb.Message {
  getTxIndex(): string;
  setTxIndex(value: string): NodeInfoOther;

  getRpcAddress(): string;
  setRpcAddress(value: string): NodeInfoOther;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfoOther.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfoOther): NodeInfoOther.AsObject;
  static serializeBinaryToWriter(message: NodeInfoOther, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfoOther;
  static deserializeBinaryFromReader(message: NodeInfoOther, reader: jspb.BinaryReader): NodeInfoOther;
}

export namespace NodeInfoOther {
  export type AsObject = {
    txIndex: string,
    rpcAddress: string,
  }
}

export class PeerInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PeerInfo;

  getAddressInfoList(): Array<PeerAddressInfo>;
  setAddressInfoList(value: Array<PeerAddressInfo>): PeerInfo;
  clearAddressInfoList(): PeerInfo;
  addAddressInfo(value?: PeerAddressInfo, index?: number): PeerAddressInfo;

  getLastConnected(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastConnected(value?: google_protobuf_timestamp_pb.Timestamp): PeerInfo;
  hasLastConnected(): boolean;
  clearLastConnected(): PeerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PeerInfo): PeerInfo.AsObject;
  static serializeBinaryToWriter(message: PeerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerInfo;
  static deserializeBinaryFromReader(message: PeerInfo, reader: jspb.BinaryReader): PeerInfo;
}

export namespace PeerInfo {
  export type AsObject = {
    id: string,
    addressInfoList: Array<PeerAddressInfo.AsObject>,
    lastConnected?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PeerAddressInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): PeerAddressInfo;

  getLastDialSuccess(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastDialSuccess(value?: google_protobuf_timestamp_pb.Timestamp): PeerAddressInfo;
  hasLastDialSuccess(): boolean;
  clearLastDialSuccess(): PeerAddressInfo;

  getLastDialFailure(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastDialFailure(value?: google_protobuf_timestamp_pb.Timestamp): PeerAddressInfo;
  hasLastDialFailure(): boolean;
  clearLastDialFailure(): PeerAddressInfo;

  getDialFailures(): number;
  setDialFailures(value: number): PeerAddressInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerAddressInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PeerAddressInfo): PeerAddressInfo.AsObject;
  static serializeBinaryToWriter(message: PeerAddressInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerAddressInfo;
  static deserializeBinaryFromReader(message: PeerAddressInfo, reader: jspb.BinaryReader): PeerAddressInfo;
}

export namespace PeerAddressInfo {
  export type AsObject = {
    address: string,
    lastDialSuccess?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastDialFailure?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dialFailures: number,
  }
}

