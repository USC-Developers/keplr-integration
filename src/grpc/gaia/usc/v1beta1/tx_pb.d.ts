import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';


export class MsgMintUSC extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): MsgMintUSC;

  getCollateralAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setCollateralAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgMintUSC;
  clearCollateralAmountList(): MsgMintUSC;
  addCollateralAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMintUSC.AsObject;
  static toObject(includeInstance: boolean, msg: MsgMintUSC): MsgMintUSC.AsObject;
  static serializeBinaryToWriter(message: MsgMintUSC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMintUSC;
  static deserializeBinaryFromReader(message: MsgMintUSC, reader: jspb.BinaryReader): MsgMintUSC;
}

export namespace MsgMintUSC {
  export type AsObject = {
    address: string,
    collateralAmountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class MsgMintUSCResponse extends jspb.Message {
  getMintedAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setMintedAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgMintUSCResponse;
  hasMintedAmount(): boolean;
  clearMintedAmount(): MsgMintUSCResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMintUSCResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgMintUSCResponse): MsgMintUSCResponse.AsObject;
  static serializeBinaryToWriter(message: MsgMintUSCResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMintUSCResponse;
  static deserializeBinaryFromReader(message: MsgMintUSCResponse, reader: jspb.BinaryReader): MsgMintUSCResponse;
}

export namespace MsgMintUSCResponse {
  export type AsObject = {
    mintedAmount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgRedeemCollateral extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): MsgRedeemCollateral;

  getUscAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setUscAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgRedeemCollateral;
  hasUscAmount(): boolean;
  clearUscAmount(): MsgRedeemCollateral;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRedeemCollateral.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRedeemCollateral): MsgRedeemCollateral.AsObject;
  static serializeBinaryToWriter(message: MsgRedeemCollateral, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRedeemCollateral;
  static deserializeBinaryFromReader(message: MsgRedeemCollateral, reader: jspb.BinaryReader): MsgRedeemCollateral;
}

export namespace MsgRedeemCollateral {
  export type AsObject = {
    address: string,
    uscAmount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgRedeemCollateralResponse extends jspb.Message {
  getBurnedAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setBurnedAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgRedeemCollateralResponse;
  hasBurnedAmount(): boolean;
  clearBurnedAmount(): MsgRedeemCollateralResponse;

  getRedeemedAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setRedeemedAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgRedeemCollateralResponse;
  clearRedeemedAmountList(): MsgRedeemCollateralResponse;
  addRedeemedAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getCompletionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletionTime(value?: google_protobuf_timestamp_pb.Timestamp): MsgRedeemCollateralResponse;
  hasCompletionTime(): boolean;
  clearCompletionTime(): MsgRedeemCollateralResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRedeemCollateralResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRedeemCollateralResponse): MsgRedeemCollateralResponse.AsObject;
  static serializeBinaryToWriter(message: MsgRedeemCollateralResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRedeemCollateralResponse;
  static deserializeBinaryFromReader(message: MsgRedeemCollateralResponse, reader: jspb.BinaryReader): MsgRedeemCollateralResponse;
}

export namespace MsgRedeemCollateralResponse {
  export type AsObject = {
    burnedAmount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    redeemedAmountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    completionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

