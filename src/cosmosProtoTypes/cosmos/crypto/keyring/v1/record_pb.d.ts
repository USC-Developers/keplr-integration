import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as cosmos_crypto_hd_v1_hd_pb from '../../../../cosmos/crypto/hd/v1/hd_pb';


export class Record extends jspb.Message {
  getName(): string;
  setName(value: string): Record;

  getPubKey(): google_protobuf_any_pb.Any | undefined;
  setPubKey(value?: google_protobuf_any_pb.Any): Record;
  hasPubKey(): boolean;
  clearPubKey(): Record;

  getLocal(): Record.Local | undefined;
  setLocal(value?: Record.Local): Record;
  hasLocal(): boolean;
  clearLocal(): Record;

  getLedger(): Record.Ledger | undefined;
  setLedger(value?: Record.Ledger): Record;
  hasLedger(): boolean;
  clearLedger(): Record;

  getMulti(): Record.Multi | undefined;
  setMulti(value?: Record.Multi): Record;
  hasMulti(): boolean;
  clearMulti(): Record;

  getOffline(): Record.Offline | undefined;
  setOffline(value?: Record.Offline): Record;
  hasOffline(): boolean;
  clearOffline(): Record;

  getItemCase(): Record.ItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Record.AsObject;
  static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
  static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Record;
  static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
}

export namespace Record {
  export type AsObject = {
    name: string,
    pubKey?: google_protobuf_any_pb.Any.AsObject,
    local?: Record.Local.AsObject,
    ledger?: Record.Ledger.AsObject,
    multi?: Record.Multi.AsObject,
    offline?: Record.Offline.AsObject,
  }

  export class Local extends jspb.Message {
    getPrivKey(): google_protobuf_any_pb.Any | undefined;
    setPrivKey(value?: google_protobuf_any_pb.Any): Local;
    hasPrivKey(): boolean;
    clearPrivKey(): Local;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Local.AsObject;
    static toObject(includeInstance: boolean, msg: Local): Local.AsObject;
    static serializeBinaryToWriter(message: Local, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Local;
    static deserializeBinaryFromReader(message: Local, reader: jspb.BinaryReader): Local;
  }

  export namespace Local {
    export type AsObject = {
      privKey?: google_protobuf_any_pb.Any.AsObject,
    }
  }


  export class Ledger extends jspb.Message {
    getPath(): cosmos_crypto_hd_v1_hd_pb.BIP44Params | undefined;
    setPath(value?: cosmos_crypto_hd_v1_hd_pb.BIP44Params): Ledger;
    hasPath(): boolean;
    clearPath(): Ledger;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ledger.AsObject;
    static toObject(includeInstance: boolean, msg: Ledger): Ledger.AsObject;
    static serializeBinaryToWriter(message: Ledger, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ledger;
    static deserializeBinaryFromReader(message: Ledger, reader: jspb.BinaryReader): Ledger;
  }

  export namespace Ledger {
    export type AsObject = {
      path?: cosmos_crypto_hd_v1_hd_pb.BIP44Params.AsObject,
    }
  }


  export class Multi extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Multi.AsObject;
    static toObject(includeInstance: boolean, msg: Multi): Multi.AsObject;
    static serializeBinaryToWriter(message: Multi, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Multi;
    static deserializeBinaryFromReader(message: Multi, reader: jspb.BinaryReader): Multi;
  }

  export namespace Multi {
    export type AsObject = {
    }
  }


  export class Offline extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Offline.AsObject;
    static toObject(includeInstance: boolean, msg: Offline): Offline.AsObject;
    static serializeBinaryToWriter(message: Offline, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Offline;
    static deserializeBinaryFromReader(message: Offline, reader: jspb.BinaryReader): Offline;
  }

  export namespace Offline {
    export type AsObject = {
    }
  }


  export enum ItemCase { 
    ITEM_NOT_SET = 0,
    LOCAL = 3,
    LEDGER = 4,
    MULTI = 5,
    OFFLINE = 6,
  }
}

