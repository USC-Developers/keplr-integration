import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ValidatorSigningInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): ValidatorSigningInfo;

  getStartHeight(): number;
  setStartHeight(value: number): ValidatorSigningInfo;

  getIndexOffset(): number;
  setIndexOffset(value: number): ValidatorSigningInfo;

  getJailedUntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setJailedUntil(value?: google_protobuf_timestamp_pb.Timestamp): ValidatorSigningInfo;
  hasJailedUntil(): boolean;
  clearJailedUntil(): ValidatorSigningInfo;

  getTombstoned(): boolean;
  setTombstoned(value: boolean): ValidatorSigningInfo;

  getMissedBlocksCounter(): number;
  setMissedBlocksCounter(value: number): ValidatorSigningInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorSigningInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorSigningInfo): ValidatorSigningInfo.AsObject;
  static serializeBinaryToWriter(message: ValidatorSigningInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorSigningInfo;
  static deserializeBinaryFromReader(message: ValidatorSigningInfo, reader: jspb.BinaryReader): ValidatorSigningInfo;
}

export namespace ValidatorSigningInfo {
  export type AsObject = {
    address: string,
    startHeight: number,
    indexOffset: number,
    jailedUntil?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tombstoned: boolean,
    missedBlocksCounter: number,
  }
}

export class Params extends jspb.Message {
  getSignedBlocksWindow(): number;
  setSignedBlocksWindow(value: number): Params;

  getMinSignedPerWindow(): Uint8Array | string;
  getMinSignedPerWindow_asU8(): Uint8Array;
  getMinSignedPerWindow_asB64(): string;
  setMinSignedPerWindow(value: Uint8Array | string): Params;

  getDowntimeJailDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDowntimeJailDuration(value?: google_protobuf_duration_pb.Duration): Params;
  hasDowntimeJailDuration(): boolean;
  clearDowntimeJailDuration(): Params;

  getSlashFractionDoubleSign(): Uint8Array | string;
  getSlashFractionDoubleSign_asU8(): Uint8Array;
  getSlashFractionDoubleSign_asB64(): string;
  setSlashFractionDoubleSign(value: Uint8Array | string): Params;

  getSlashFractionDowntime(): Uint8Array | string;
  getSlashFractionDowntime_asU8(): Uint8Array;
  getSlashFractionDowntime_asB64(): string;
  setSlashFractionDowntime(value: Uint8Array | string): Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    signedBlocksWindow: number,
    minSignedPerWindow: Uint8Array | string,
    downtimeJailDuration?: google_protobuf_duration_pb.Duration.AsObject,
    slashFractionDoubleSign: Uint8Array | string,
    slashFractionDowntime: Uint8Array | string,
  }
}

