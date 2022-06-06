import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_crypto_multisig_v1beta1_multisig_pb from '../../../cosmos/crypto/multisig/v1beta1/multisig_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';
import * as cosmos_tx_signing_v1beta1_signing_pb from '../../../cosmos/tx/signing/v1beta1/signing_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';


export class Tx extends jspb.Message {
  getBody(): TxBody | undefined;
  setBody(value?: TxBody): Tx;
  hasBody(): boolean;
  clearBody(): Tx;

  getAuthInfo(): AuthInfo | undefined;
  setAuthInfo(value?: AuthInfo): Tx;
  hasAuthInfo(): boolean;
  clearAuthInfo(): Tx;

  getSignaturesList(): Array<Uint8Array | string>;
  setSignaturesList(value: Array<Uint8Array | string>): Tx;
  clearSignaturesList(): Tx;
  addSignatures(value: Uint8Array | string, index?: number): Tx;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tx.AsObject;
  static toObject(includeInstance: boolean, msg: Tx): Tx.AsObject;
  static serializeBinaryToWriter(message: Tx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tx;
  static deserializeBinaryFromReader(message: Tx, reader: jspb.BinaryReader): Tx;
}

export namespace Tx {
  export type AsObject = {
    body?: TxBody.AsObject,
    authInfo?: AuthInfo.AsObject,
    signaturesList: Array<Uint8Array | string>,
  }
}

export class TxRaw extends jspb.Message {
  getBodyBytes(): Uint8Array | string;
  getBodyBytes_asU8(): Uint8Array;
  getBodyBytes_asB64(): string;
  setBodyBytes(value: Uint8Array | string): TxRaw;

  getAuthInfoBytes(): Uint8Array | string;
  getAuthInfoBytes_asU8(): Uint8Array;
  getAuthInfoBytes_asB64(): string;
  setAuthInfoBytes(value: Uint8Array | string): TxRaw;

  getSignaturesList(): Array<Uint8Array | string>;
  setSignaturesList(value: Array<Uint8Array | string>): TxRaw;
  clearSignaturesList(): TxRaw;
  addSignatures(value: Uint8Array | string, index?: number): TxRaw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxRaw.AsObject;
  static toObject(includeInstance: boolean, msg: TxRaw): TxRaw.AsObject;
  static serializeBinaryToWriter(message: TxRaw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxRaw;
  static deserializeBinaryFromReader(message: TxRaw, reader: jspb.BinaryReader): TxRaw;
}

export namespace TxRaw {
  export type AsObject = {
    bodyBytes: Uint8Array | string,
    authInfoBytes: Uint8Array | string,
    signaturesList: Array<Uint8Array | string>,
  }
}

export class SignDoc extends jspb.Message {
  getBodyBytes(): Uint8Array | string;
  getBodyBytes_asU8(): Uint8Array;
  getBodyBytes_asB64(): string;
  setBodyBytes(value: Uint8Array | string): SignDoc;

  getAuthInfoBytes(): Uint8Array | string;
  getAuthInfoBytes_asU8(): Uint8Array;
  getAuthInfoBytes_asB64(): string;
  setAuthInfoBytes(value: Uint8Array | string): SignDoc;

  getChainId(): string;
  setChainId(value: string): SignDoc;

  getAccountNumber(): number;
  setAccountNumber(value: number): SignDoc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignDoc.AsObject;
  static toObject(includeInstance: boolean, msg: SignDoc): SignDoc.AsObject;
  static serializeBinaryToWriter(message: SignDoc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignDoc;
  static deserializeBinaryFromReader(message: SignDoc, reader: jspb.BinaryReader): SignDoc;
}

export namespace SignDoc {
  export type AsObject = {
    bodyBytes: Uint8Array | string,
    authInfoBytes: Uint8Array | string,
    chainId: string,
    accountNumber: number,
  }
}

export class SignDocDirectAux extends jspb.Message {
  getBodyBytes(): Uint8Array | string;
  getBodyBytes_asU8(): Uint8Array;
  getBodyBytes_asB64(): string;
  setBodyBytes(value: Uint8Array | string): SignDocDirectAux;

  getPublicKey(): google_protobuf_any_pb.Any | undefined;
  setPublicKey(value?: google_protobuf_any_pb.Any): SignDocDirectAux;
  hasPublicKey(): boolean;
  clearPublicKey(): SignDocDirectAux;

  getChainId(): string;
  setChainId(value: string): SignDocDirectAux;

  getAccountNumber(): number;
  setAccountNumber(value: number): SignDocDirectAux;

  getSequence(): number;
  setSequence(value: number): SignDocDirectAux;

  getTip(): Tip | undefined;
  setTip(value?: Tip): SignDocDirectAux;
  hasTip(): boolean;
  clearTip(): SignDocDirectAux;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignDocDirectAux.AsObject;
  static toObject(includeInstance: boolean, msg: SignDocDirectAux): SignDocDirectAux.AsObject;
  static serializeBinaryToWriter(message: SignDocDirectAux, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignDocDirectAux;
  static deserializeBinaryFromReader(message: SignDocDirectAux, reader: jspb.BinaryReader): SignDocDirectAux;
}

export namespace SignDocDirectAux {
  export type AsObject = {
    bodyBytes: Uint8Array | string,
    publicKey?: google_protobuf_any_pb.Any.AsObject,
    chainId: string,
    accountNumber: number,
    sequence: number,
    tip?: Tip.AsObject,
  }
}

export class TxBody extends jspb.Message {
  getMessagesList(): Array<google_protobuf_any_pb.Any>;
  setMessagesList(value: Array<google_protobuf_any_pb.Any>): TxBody;
  clearMessagesList(): TxBody;
  addMessages(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  getMemo(): string;
  setMemo(value: string): TxBody;

  getTimeoutHeight(): number;
  setTimeoutHeight(value: number): TxBody;

  getExtensionOptionsList(): Array<google_protobuf_any_pb.Any>;
  setExtensionOptionsList(value: Array<google_protobuf_any_pb.Any>): TxBody;
  clearExtensionOptionsList(): TxBody;
  addExtensionOptions(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  getNonCriticalExtensionOptionsList(): Array<google_protobuf_any_pb.Any>;
  setNonCriticalExtensionOptionsList(value: Array<google_protobuf_any_pb.Any>): TxBody;
  clearNonCriticalExtensionOptionsList(): TxBody;
  addNonCriticalExtensionOptions(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxBody.AsObject;
  static toObject(includeInstance: boolean, msg: TxBody): TxBody.AsObject;
  static serializeBinaryToWriter(message: TxBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxBody;
  static deserializeBinaryFromReader(message: TxBody, reader: jspb.BinaryReader): TxBody;
}

export namespace TxBody {
  export type AsObject = {
    messagesList: Array<google_protobuf_any_pb.Any.AsObject>,
    memo: string,
    timeoutHeight: number,
    extensionOptionsList: Array<google_protobuf_any_pb.Any.AsObject>,
    nonCriticalExtensionOptionsList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class AuthInfo extends jspb.Message {
  getSignerInfosList(): Array<SignerInfo>;
  setSignerInfosList(value: Array<SignerInfo>): AuthInfo;
  clearSignerInfosList(): AuthInfo;
  addSignerInfos(value?: SignerInfo, index?: number): SignerInfo;

  getFee(): Fee | undefined;
  setFee(value?: Fee): AuthInfo;
  hasFee(): boolean;
  clearFee(): AuthInfo;

  getTip(): Tip | undefined;
  setTip(value?: Tip): AuthInfo;
  hasTip(): boolean;
  clearTip(): AuthInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AuthInfo): AuthInfo.AsObject;
  static serializeBinaryToWriter(message: AuthInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthInfo;
  static deserializeBinaryFromReader(message: AuthInfo, reader: jspb.BinaryReader): AuthInfo;
}

export namespace AuthInfo {
  export type AsObject = {
    signerInfosList: Array<SignerInfo.AsObject>,
    fee?: Fee.AsObject,
    tip?: Tip.AsObject,
  }
}

export class SignerInfo extends jspb.Message {
  getPublicKey(): google_protobuf_any_pb.Any | undefined;
  setPublicKey(value?: google_protobuf_any_pb.Any): SignerInfo;
  hasPublicKey(): boolean;
  clearPublicKey(): SignerInfo;

  getModeInfo(): ModeInfo | undefined;
  setModeInfo(value?: ModeInfo): SignerInfo;
  hasModeInfo(): boolean;
  clearModeInfo(): SignerInfo;

  getSequence(): number;
  setSequence(value: number): SignerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SignerInfo): SignerInfo.AsObject;
  static serializeBinaryToWriter(message: SignerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignerInfo;
  static deserializeBinaryFromReader(message: SignerInfo, reader: jspb.BinaryReader): SignerInfo;
}

export namespace SignerInfo {
  export type AsObject = {
    publicKey?: google_protobuf_any_pb.Any.AsObject,
    modeInfo?: ModeInfo.AsObject,
    sequence: number,
  }
}

export class ModeInfo extends jspb.Message {
  getSingle(): ModeInfo.Single | undefined;
  setSingle(value?: ModeInfo.Single): ModeInfo;
  hasSingle(): boolean;
  clearSingle(): ModeInfo;

  getMulti(): ModeInfo.Multi | undefined;
  setMulti(value?: ModeInfo.Multi): ModeInfo;
  hasMulti(): boolean;
  clearMulti(): ModeInfo;

  getSumCase(): ModeInfo.SumCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ModeInfo): ModeInfo.AsObject;
  static serializeBinaryToWriter(message: ModeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModeInfo;
  static deserializeBinaryFromReader(message: ModeInfo, reader: jspb.BinaryReader): ModeInfo;
}

export namespace ModeInfo {
  export type AsObject = {
    single?: ModeInfo.Single.AsObject,
    multi?: ModeInfo.Multi.AsObject,
  }

  export class Single extends jspb.Message {
    getMode(): cosmos_tx_signing_v1beta1_signing_pb.SignMode;
    setMode(value: cosmos_tx_signing_v1beta1_signing_pb.SignMode): Single;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Single.AsObject;
    static toObject(includeInstance: boolean, msg: Single): Single.AsObject;
    static serializeBinaryToWriter(message: Single, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Single;
    static deserializeBinaryFromReader(message: Single, reader: jspb.BinaryReader): Single;
  }

  export namespace Single {
    export type AsObject = {
      mode: cosmos_tx_signing_v1beta1_signing_pb.SignMode,
    }
  }


  export class Multi extends jspb.Message {
    getBitarray(): cosmos_crypto_multisig_v1beta1_multisig_pb.CompactBitArray | undefined;
    setBitarray(value?: cosmos_crypto_multisig_v1beta1_multisig_pb.CompactBitArray): Multi;
    hasBitarray(): boolean;
    clearBitarray(): Multi;

    getModeInfosList(): Array<ModeInfo>;
    setModeInfosList(value: Array<ModeInfo>): Multi;
    clearModeInfosList(): Multi;
    addModeInfos(value?: ModeInfo, index?: number): ModeInfo;

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
      modeInfosList: Array<ModeInfo.AsObject>,
    }
  }


  export enum SumCase { 
    SUM_NOT_SET = 0,
    SINGLE = 1,
    MULTI = 2,
  }
}

export class Fee extends jspb.Message {
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): Fee;
  clearAmountList(): Fee;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getGasLimit(): number;
  setGasLimit(value: number): Fee;

  getPayer(): string;
  setPayer(value: string): Fee;

  getGranter(): string;
  setGranter(value: string): Fee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fee.AsObject;
  static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
  static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fee;
  static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
  export type AsObject = {
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    gasLimit: number,
    payer: string,
    granter: string,
  }
}

export class Tip extends jspb.Message {
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): Tip;
  clearAmountList(): Tip;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getTipper(): string;
  setTipper(value: string): Tip;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tip.AsObject;
  static toObject(includeInstance: boolean, msg: Tip): Tip.AsObject;
  static serializeBinaryToWriter(message: Tip, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tip;
  static deserializeBinaryFromReader(message: Tip, reader: jspb.BinaryReader): Tip;
}

export namespace Tip {
  export type AsObject = {
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    tipper: string,
  }
}

export class AuxSignerData extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): AuxSignerData;

  getSignDoc(): SignDocDirectAux | undefined;
  setSignDoc(value?: SignDocDirectAux): AuxSignerData;
  hasSignDoc(): boolean;
  clearSignDoc(): AuxSignerData;

  getMode(): cosmos_tx_signing_v1beta1_signing_pb.SignMode;
  setMode(value: cosmos_tx_signing_v1beta1_signing_pb.SignMode): AuxSignerData;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): AuxSignerData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuxSignerData.AsObject;
  static toObject(includeInstance: boolean, msg: AuxSignerData): AuxSignerData.AsObject;
  static serializeBinaryToWriter(message: AuxSignerData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuxSignerData;
  static deserializeBinaryFromReader(message: AuxSignerData, reader: jspb.BinaryReader): AuxSignerData;
}

export namespace AuxSignerData {
  export type AsObject = {
    address: string,
    signDoc?: SignDocDirectAux.AsObject,
    mode: cosmos_tx_signing_v1beta1_signing_pb.SignMode,
    sig: Uint8Array | string,
  }
}

