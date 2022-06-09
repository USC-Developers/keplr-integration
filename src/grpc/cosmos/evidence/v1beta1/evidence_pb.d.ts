import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Equivocation extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): Equivocation;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): Equivocation;
  hasTime(): boolean;
  clearTime(): Equivocation;

  getPower(): number;
  setPower(value: number): Equivocation;

  getConsensusAddress(): string;
  setConsensusAddress(value: string): Equivocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Equivocation.AsObject;
  static toObject(includeInstance: boolean, msg: Equivocation): Equivocation.AsObject;
  static serializeBinaryToWriter(message: Equivocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Equivocation;
  static deserializeBinaryFromReader(message: Equivocation, reader: jspb.BinaryReader): Equivocation;
}

export namespace Equivocation {
  export type AsObject = {
    height: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    power: number,
    consensusAddress: string,
  }
}

