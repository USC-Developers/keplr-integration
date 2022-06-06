import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_staking_v1beta1_staking_pb from '../../../cosmos/staking/v1beta1/staking_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';


export class GenesisState extends jspb.Message {
  getParams(): cosmos_staking_v1beta1_staking_pb.Params | undefined;
  setParams(value?: cosmos_staking_v1beta1_staking_pb.Params): GenesisState;
  hasParams(): boolean;
  clearParams(): GenesisState;

  getLastTotalPower(): Uint8Array | string;
  getLastTotalPower_asU8(): Uint8Array;
  getLastTotalPower_asB64(): string;
  setLastTotalPower(value: Uint8Array | string): GenesisState;

  getLastValidatorPowersList(): Array<LastValidatorPower>;
  setLastValidatorPowersList(value: Array<LastValidatorPower>): GenesisState;
  clearLastValidatorPowersList(): GenesisState;
  addLastValidatorPowers(value?: LastValidatorPower, index?: number): LastValidatorPower;

  getValidatorsList(): Array<cosmos_staking_v1beta1_staking_pb.Validator>;
  setValidatorsList(value: Array<cosmos_staking_v1beta1_staking_pb.Validator>): GenesisState;
  clearValidatorsList(): GenesisState;
  addValidators(value?: cosmos_staking_v1beta1_staking_pb.Validator, index?: number): cosmos_staking_v1beta1_staking_pb.Validator;

  getDelegationsList(): Array<cosmos_staking_v1beta1_staking_pb.Delegation>;
  setDelegationsList(value: Array<cosmos_staking_v1beta1_staking_pb.Delegation>): GenesisState;
  clearDelegationsList(): GenesisState;
  addDelegations(value?: cosmos_staking_v1beta1_staking_pb.Delegation, index?: number): cosmos_staking_v1beta1_staking_pb.Delegation;

  getUnbondingDelegationsList(): Array<cosmos_staking_v1beta1_staking_pb.UnbondingDelegation>;
  setUnbondingDelegationsList(value: Array<cosmos_staking_v1beta1_staking_pb.UnbondingDelegation>): GenesisState;
  clearUnbondingDelegationsList(): GenesisState;
  addUnbondingDelegations(value?: cosmos_staking_v1beta1_staking_pb.UnbondingDelegation, index?: number): cosmos_staking_v1beta1_staking_pb.UnbondingDelegation;

  getRedelegationsList(): Array<cosmos_staking_v1beta1_staking_pb.Redelegation>;
  setRedelegationsList(value: Array<cosmos_staking_v1beta1_staking_pb.Redelegation>): GenesisState;
  clearRedelegationsList(): GenesisState;
  addRedelegations(value?: cosmos_staking_v1beta1_staking_pb.Redelegation, index?: number): cosmos_staking_v1beta1_staking_pb.Redelegation;

  getExported(): boolean;
  setExported(value: boolean): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: cosmos_staking_v1beta1_staking_pb.Params.AsObject,
    lastTotalPower: Uint8Array | string,
    lastValidatorPowersList: Array<LastValidatorPower.AsObject>,
    validatorsList: Array<cosmos_staking_v1beta1_staking_pb.Validator.AsObject>,
    delegationsList: Array<cosmos_staking_v1beta1_staking_pb.Delegation.AsObject>,
    unbondingDelegationsList: Array<cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.AsObject>,
    redelegationsList: Array<cosmos_staking_v1beta1_staking_pb.Redelegation.AsObject>,
    exported: boolean,
  }
}

export class LastValidatorPower extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): LastValidatorPower;

  getPower(): number;
  setPower(value: number): LastValidatorPower;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastValidatorPower.AsObject;
  static toObject(includeInstance: boolean, msg: LastValidatorPower): LastValidatorPower.AsObject;
  static serializeBinaryToWriter(message: LastValidatorPower, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastValidatorPower;
  static deserializeBinaryFromReader(message: LastValidatorPower, reader: jspb.BinaryReader): LastValidatorPower;
}

export namespace LastValidatorPower {
  export type AsObject = {
    address: string,
    power: number,
  }
}

