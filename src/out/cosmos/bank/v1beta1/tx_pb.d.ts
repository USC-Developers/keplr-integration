import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';
import * as cosmos_bank_v1beta1_bank_pb from '../../../cosmos/bank/v1beta1/bank_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as cosmos_msg_v1_msg_pb from '../../../cosmos/msg/v1/msg_pb';


export class MsgSend extends jspb.Message {
  getFromAddress(): string;
  setFromAddress(value: string): MsgSend;

  getToAddress(): string;
  setToAddress(value: string): MsgSend;

  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgSend;
  clearAmountList(): MsgSend;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSend.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSend): MsgSend.AsObject;
  static serializeBinaryToWriter(message: MsgSend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSend;
  static deserializeBinaryFromReader(message: MsgSend, reader: jspb.BinaryReader): MsgSend;
}

export namespace MsgSend {
  export type AsObject = {
    fromAddress: string,
    toAddress: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class MsgSendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSendResponse): MsgSendResponse.AsObject;
  static serializeBinaryToWriter(message: MsgSendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSendResponse;
  static deserializeBinaryFromReader(message: MsgSendResponse, reader: jspb.BinaryReader): MsgSendResponse;
}

export namespace MsgSendResponse {
  export type AsObject = {
  }
}

export class MsgMultiSend extends jspb.Message {
  getInputsList(): Array<cosmos_bank_v1beta1_bank_pb.Input>;
  setInputsList(value: Array<cosmos_bank_v1beta1_bank_pb.Input>): MsgMultiSend;
  clearInputsList(): MsgMultiSend;
  addInputs(value?: cosmos_bank_v1beta1_bank_pb.Input, index?: number): cosmos_bank_v1beta1_bank_pb.Input;

  getOutputsList(): Array<cosmos_bank_v1beta1_bank_pb.Output>;
  setOutputsList(value: Array<cosmos_bank_v1beta1_bank_pb.Output>): MsgMultiSend;
  clearOutputsList(): MsgMultiSend;
  addOutputs(value?: cosmos_bank_v1beta1_bank_pb.Output, index?: number): cosmos_bank_v1beta1_bank_pb.Output;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMultiSend.AsObject;
  static toObject(includeInstance: boolean, msg: MsgMultiSend): MsgMultiSend.AsObject;
  static serializeBinaryToWriter(message: MsgMultiSend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMultiSend;
  static deserializeBinaryFromReader(message: MsgMultiSend, reader: jspb.BinaryReader): MsgMultiSend;
}

export namespace MsgMultiSend {
  export type AsObject = {
    inputsList: Array<cosmos_bank_v1beta1_bank_pb.Input.AsObject>,
    outputsList: Array<cosmos_bank_v1beta1_bank_pb.Output.AsObject>,
  }
}

export class MsgMultiSendResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgMultiSendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgMultiSendResponse): MsgMultiSendResponse.AsObject;
  static serializeBinaryToWriter(message: MsgMultiSendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgMultiSendResponse;
  static deserializeBinaryFromReader(message: MsgMultiSendResponse, reader: jspb.BinaryReader): MsgMultiSendResponse;
}

export namespace MsgMultiSendResponse {
  export type AsObject = {
  }
}

