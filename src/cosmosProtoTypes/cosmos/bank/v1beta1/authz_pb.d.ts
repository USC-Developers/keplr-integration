import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';


export class SendAuthorization extends jspb.Message {
  getSpendLimitList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setSpendLimitList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): SendAuthorization;
  clearSpendLimitList(): SendAuthorization;
  addSpendLimit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: SendAuthorization): SendAuthorization.AsObject;
  static serializeBinaryToWriter(message: SendAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendAuthorization;
  static deserializeBinaryFromReader(message: SendAuthorization, reader: jspb.BinaryReader): SendAuthorization;
}

export namespace SendAuthorization {
  export type AsObject = {
    spendLimitList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

