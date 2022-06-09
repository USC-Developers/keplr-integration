import * as jspb from 'google-protobuf'

import * as cosmos_crypto_multisig_v1beta1_multisig_pb from '../../../../cosmos/crypto/multisig/v1beta1/multisig_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class SignatureDescriptors extends jspb.Message {
  getSignaturesList(): Array<SignatureDescriptor>;
  setSignaturesList(value: Array<SignatureDescriptor>): SignatureDescriptors;
  clearSignaturesList(): SignatureDescriptors;
  addSignatures(value?: SignatureDescriptor, index?: number): SignatureDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureDescriptors.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureDescriptors): SignatureDescriptors.AsObject;
  static serializeBinaryToWriter(message: SignatureDescriptors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureDescriptors;
  static deserializeBinaryFromReader(message: SignatureDescriptors, reader: jspb.BinaryReader): SignatureDescriptors;
}

export namespace SignatureDescriptors {
  export type AsObject = {
    signaturesList: Array<SignatureDescriptor.AsObject>,
  }
}

export class SignatureDescriptor extends jspb.Message {
  getPublicKey(): google_protobuf_any_pb.Any | undefined;
  setPublicKey(value?: google_protobuf_any_pb.Any): SignatureDescriptor;
  hasPublicKey(): boolean;
  clearPublicKey(): SignatureDescriptor;

  getData(): SignatureDescriptor.Data | undefined;
  setData(value?: SignatureDescriptor.Data): SignatureDescriptor;
  hasData(): boolean;
  clearData(): SignatureDescriptor;

  getSequence(): number;
  setSequence(value: number): SignatureDescriptor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureDescriptor): SignatureDescriptor.AsObject;
  static serializeBinaryToWriter(message: SignatureDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureDescriptor;
  static deserializeBinaryFromReader(message: SignatureDescriptor, reader: jspb.BinaryReader): SignatureDescriptor;
}

export namespace SignatureDescriptor {
  export type AsObject = {
    publicKey?: google_protobuf_any_pb.Any.AsObject,
    data?: SignatureDescriptor.Data.AsObject,
    sequence: number,
  }

  export class Data extends jspb.Message {
    getSingle(): SignatureDescriptor.Data.Single | undefined;
    setSingle(value?: SignatureDescriptor.Data.Single): Data;
    hasSingle(): boolean;
    clearSingle(): Data;

    getMulti(): SignatureDescriptor.Data.Multi | undefined;
    setMulti(value?: SignatureDescriptor.Data.Multi): Data;
    hasMulti(): boolean;
    clearMulti(): Data;

    getSumCase(): Data.SumCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      single?: SignatureDescriptor.Data.Single.AsObject,
      multi?: SignatureDescriptor.Data.Multi.AsObject,
    }

    export class Single extends jspb.Message {
      getMode(): SignMode;
      setMode(value: SignMode): Single;

      getSignature(): Uint8Array | string;
      getSignature_asU8(): Uint8Array;
      getSignature_asB64(): string;
      setSignature(value: Uint8Array | string): Single;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Single.AsObject;
      static toObject(includeInstance: boolean, msg: Single): Single.AsObject;
      static serializeBinaryToWriter(message: Single, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Single;
      static deserializeBinaryFromReader(message: Single, reader: jspb.BinaryReader): Single;
    }

    export namespace Single {
      export type AsObject = {
        mode: SignMode,
        signature: Uint8Array | string,
      }
    }


    export class Multi extends jspb.Message {
      getBitarray(): cosmos_crypto_multisig_v1beta1_multisig_pb.CompactBitArray | undefined;
      setBitarray(value?: cosmos_crypto_multisig_v1beta1_multisig_pb.CompactBitArray): Multi;
      hasBitarray(): boolean;
      clearBitarray(): Multi;

      getSignaturesList(): Array<SignatureDescriptor.Data>;
      setSignaturesList(value: Array<SignatureDescriptor.Data>): Multi;
      clearSignaturesList(): Multi;
      addSignatures(value?: SignatureDescriptor.Data, index?: number): SignatureDescriptor.Data;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Multi.AsObject;
      static toObject(includeInstance: boolean, msg: Multi): Multi.AsObject;
      static serializeBinaryToWriter(message: Multi, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Multi;
      static deserializeBinaryFromReader(message: Multi, reader: jspb.BinaryReader): Multi;
    }

    export namespace Multi {
      export type AsObject = {
        bitarray?: cosmos_crypto_multisig_v1beta1_multisig_pb.CompactBitArray.AsObject,
        signaturesList: Array<SignatureDescriptor.Data.AsObject>,
      }
    }


    export enum SumCase { 
      SUM_NOT_SET = 0,
      SINGLE = 1,
      MULTI = 2,
    }
  }

}

export enum SignMode { 
  SIGN_MODE_UNSPECIFIED = 0,
  SIGN_MODE_DIRECT = 1,
  SIGN_MODE_TEXTUAL = 2,
  SIGN_MODE_LEGACY_AMINO_JSON = 127,
  SIGN_MODE_EIP_191 = 191,
}
