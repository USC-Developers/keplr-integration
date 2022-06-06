import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_slashing_v1beta1_slashing_pb from '../../../cosmos/slashing/v1beta1/slashing_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';


export class GenesisState extends jspb.Message {
  getParams(): cosmos_slashing_v1beta1_slashing_pb.Params | undefined;
  setParams(value?: cosmos_slashing_v1beta1_slashing_pb.Params): GenesisState;
  hasParams(): boolean;
  clearParams(): GenesisState;

  getSigningInfosList(): Array<SigningInfo>;
  setSigningInfosList(value: Array<SigningInfo>): GenesisState;
  clearSigningInfosList(): GenesisState;
  addSigningInfos(value?: SigningInfo, index?: number): SigningInfo;

  getMissedBlocksList(): Array<ValidatorMissedBlocks>;
  setMissedBlocksList(value: Array<ValidatorMissedBlocks>): GenesisState;
  clearMissedBlocksList(): GenesisState;
  addMissedBlocks(value?: ValidatorMissedBlocks, index?: number): ValidatorMissedBlocks;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: cosmos_slashing_v1beta1_slashing_pb.Params.AsObject,
    signingInfosList: Array<SigningInfo.AsObject>,
    missedBlocksList: Array<ValidatorMissedBlocks.AsObject>,
  }
}

export class SigningInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): SigningInfo;

  getValidatorSigningInfo(): cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo | undefined;
  setValidatorSigningInfo(value?: cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo): SigningInfo;
  hasValidatorSigningInfo(): boolean;
  clearValidatorSigningInfo(): SigningInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigningInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SigningInfo): SigningInfo.AsObject;
  static serializeBinaryToWriter(message: SigningInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigningInfo;
  static deserializeBinaryFromReader(message: SigningInfo, reader: jspb.BinaryReader): SigningInfo;
}

export namespace SigningInfo {
  export type AsObject = {
    address: string,
    validatorSigningInfo?: cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.AsObject,
  }
}

export class ValidatorMissedBlocks extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): ValidatorMissedBlocks;

  getMissedBlocksList(): Array<MissedBlock>;
  setMissedBlocksList(value: Array<MissedBlock>): ValidatorMissedBlocks;
  clearMissedBlocksList(): ValidatorMissedBlocks;
  addMissedBlocks(value?: MissedBlock, index?: number): MissedBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorMissedBlocks.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorMissedBlocks): ValidatorMissedBlocks.AsObject;
  static serializeBinaryToWriter(message: ValidatorMissedBlocks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorMissedBlocks;
  static deserializeBinaryFromReader(message: ValidatorMissedBlocks, reader: jspb.BinaryReader): ValidatorMissedBlocks;
}

export namespace ValidatorMissedBlocks {
  export type AsObject = {
    address: string,
    missedBlocksList: Array<MissedBlock.AsObject>,
  }
}

export class MissedBlock extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): MissedBlock;

  getMissed(): boolean;
  setMissed(value: boolean): MissedBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MissedBlock.AsObject;
  static toObject(includeInstance: boolean, msg: MissedBlock): MissedBlock.AsObject;
  static serializeBinaryToWriter(message: MissedBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MissedBlock;
  static deserializeBinaryFromReader(message: MissedBlock, reader: jspb.BinaryReader): MissedBlock;
}

export namespace MissedBlock {
  export type AsObject = {
    index: number,
    missed: boolean,
  }
}

