import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';
import * as cosmos_distribution_v1beta1_distribution_pb from '../../../cosmos/distribution/v1beta1/distribution_pb';


export class DelegatorWithdrawInfo extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): DelegatorWithdrawInfo;

  getWithdrawAddress(): string;
  setWithdrawAddress(value: string): DelegatorWithdrawInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatorWithdrawInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DelegatorWithdrawInfo): DelegatorWithdrawInfo.AsObject;
  static serializeBinaryToWriter(message: DelegatorWithdrawInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegatorWithdrawInfo;
  static deserializeBinaryFromReader(message: DelegatorWithdrawInfo, reader: jspb.BinaryReader): DelegatorWithdrawInfo;
}

export namespace DelegatorWithdrawInfo {
  export type AsObject = {
    delegatorAddress: string,
    withdrawAddress: string,
  }
}

export class ValidatorOutstandingRewardsRecord extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): ValidatorOutstandingRewardsRecord;

  getOutstandingRewardsList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setOutstandingRewardsList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): ValidatorOutstandingRewardsRecord;
  clearOutstandingRewardsList(): ValidatorOutstandingRewardsRecord;
  addOutstandingRewards(value?: cosmos_base_v1beta1_coin_pb.DecCoin, index?: number): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorOutstandingRewardsRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecord.AsObject;
  static serializeBinaryToWriter(message: ValidatorOutstandingRewardsRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorOutstandingRewardsRecord;
  static deserializeBinaryFromReader(message: ValidatorOutstandingRewardsRecord, reader: jspb.BinaryReader): ValidatorOutstandingRewardsRecord;
}

export namespace ValidatorOutstandingRewardsRecord {
  export type AsObject = {
    validatorAddress: string,
    outstandingRewardsList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>,
  }
}

export class ValidatorAccumulatedCommissionRecord extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): ValidatorAccumulatedCommissionRecord;

  getAccumulated(): cosmos_distribution_v1beta1_distribution_pb.ValidatorAccumulatedCommission | undefined;
  setAccumulated(value?: cosmos_distribution_v1beta1_distribution_pb.ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionRecord;
  hasAccumulated(): boolean;
  clearAccumulated(): ValidatorAccumulatedCommissionRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorAccumulatedCommissionRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecord.AsObject;
  static serializeBinaryToWriter(message: ValidatorAccumulatedCommissionRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorAccumulatedCommissionRecord;
  static deserializeBinaryFromReader(message: ValidatorAccumulatedCommissionRecord, reader: jspb.BinaryReader): ValidatorAccumulatedCommissionRecord;
}

export namespace ValidatorAccumulatedCommissionRecord {
  export type AsObject = {
    validatorAddress: string,
    accumulated?: cosmos_distribution_v1beta1_distribution_pb.ValidatorAccumulatedCommission.AsObject,
  }
}

export class ValidatorHistoricalRewardsRecord extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): ValidatorHistoricalRewardsRecord;

  getPeriod(): number;
  setPeriod(value: number): ValidatorHistoricalRewardsRecord;

  getRewards(): cosmos_distribution_v1beta1_distribution_pb.ValidatorHistoricalRewards | undefined;
  setRewards(value?: cosmos_distribution_v1beta1_distribution_pb.ValidatorHistoricalRewards): ValidatorHistoricalRewardsRecord;
  hasRewards(): boolean;
  clearRewards(): ValidatorHistoricalRewardsRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorHistoricalRewardsRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecord.AsObject;
  static serializeBinaryToWriter(message: ValidatorHistoricalRewardsRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorHistoricalRewardsRecord;
  static deserializeBinaryFromReader(message: ValidatorHistoricalRewardsRecord, reader: jspb.BinaryReader): ValidatorHistoricalRewardsRecord;
}

export namespace ValidatorHistoricalRewardsRecord {
  export type AsObject = {
    validatorAddress: string,
    period: number,
    rewards?: cosmos_distribution_v1beta1_distribution_pb.ValidatorHistoricalRewards.AsObject,
  }
}

export class ValidatorCurrentRewardsRecord extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): ValidatorCurrentRewardsRecord;

  getRewards(): cosmos_distribution_v1beta1_distribution_pb.ValidatorCurrentRewards | undefined;
  setRewards(value?: cosmos_distribution_v1beta1_distribution_pb.ValidatorCurrentRewards): ValidatorCurrentRewardsRecord;
  hasRewards(): boolean;
  clearRewards(): ValidatorCurrentRewardsRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorCurrentRewardsRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecord.AsObject;
  static serializeBinaryToWriter(message: ValidatorCurrentRewardsRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorCurrentRewardsRecord;
  static deserializeBinaryFromReader(message: ValidatorCurrentRewardsRecord, reader: jspb.BinaryReader): ValidatorCurrentRewardsRecord;
}

export namespace ValidatorCurrentRewardsRecord {
  export type AsObject = {
    validatorAddress: string,
    rewards?: cosmos_distribution_v1beta1_distribution_pb.ValidatorCurrentRewards.AsObject,
  }
}

export class DelegatorStartingInfoRecord extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): DelegatorStartingInfoRecord;

  getValidatorAddress(): string;
  setValidatorAddress(value: string): DelegatorStartingInfoRecord;

  getStartingInfo(): cosmos_distribution_v1beta1_distribution_pb.DelegatorStartingInfo | undefined;
  setStartingInfo(value?: cosmos_distribution_v1beta1_distribution_pb.DelegatorStartingInfo): DelegatorStartingInfoRecord;
  hasStartingInfo(): boolean;
  clearStartingInfo(): DelegatorStartingInfoRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatorStartingInfoRecord.AsObject;
  static toObject(includeInstance: boolean, msg: DelegatorStartingInfoRecord): DelegatorStartingInfoRecord.AsObject;
  static serializeBinaryToWriter(message: DelegatorStartingInfoRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegatorStartingInfoRecord;
  static deserializeBinaryFromReader(message: DelegatorStartingInfoRecord, reader: jspb.BinaryReader): DelegatorStartingInfoRecord;
}

export namespace DelegatorStartingInfoRecord {
  export type AsObject = {
    delegatorAddress: string,
    validatorAddress: string,
    startingInfo?: cosmos_distribution_v1beta1_distribution_pb.DelegatorStartingInfo.AsObject,
  }
}

export class ValidatorSlashEventRecord extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): ValidatorSlashEventRecord;

  getHeight(): number;
  setHeight(value: number): ValidatorSlashEventRecord;

  getPeriod(): number;
  setPeriod(value: number): ValidatorSlashEventRecord;

  getValidatorSlashEvent(): cosmos_distribution_v1beta1_distribution_pb.ValidatorSlashEvent | undefined;
  setValidatorSlashEvent(value?: cosmos_distribution_v1beta1_distribution_pb.ValidatorSlashEvent): ValidatorSlashEventRecord;
  hasValidatorSlashEvent(): boolean;
  clearValidatorSlashEvent(): ValidatorSlashEventRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorSlashEventRecord.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorSlashEventRecord): ValidatorSlashEventRecord.AsObject;
  static serializeBinaryToWriter(message: ValidatorSlashEventRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorSlashEventRecord;
  static deserializeBinaryFromReader(message: ValidatorSlashEventRecord, reader: jspb.BinaryReader): ValidatorSlashEventRecord;
}

export namespace ValidatorSlashEventRecord {
  export type AsObject = {
    validatorAddress: string,
    height: number,
    period: number,
    validatorSlashEvent?: cosmos_distribution_v1beta1_distribution_pb.ValidatorSlashEvent.AsObject,
  }
}

export class GenesisState extends jspb.Message {
  getParams(): cosmos_distribution_v1beta1_distribution_pb.Params | undefined;
  setParams(value?: cosmos_distribution_v1beta1_distribution_pb.Params): GenesisState;
  hasParams(): boolean;
  clearParams(): GenesisState;

  getFeePool(): cosmos_distribution_v1beta1_distribution_pb.FeePool | undefined;
  setFeePool(value?: cosmos_distribution_v1beta1_distribution_pb.FeePool): GenesisState;
  hasFeePool(): boolean;
  clearFeePool(): GenesisState;

  getDelegatorWithdrawInfosList(): Array<DelegatorWithdrawInfo>;
  setDelegatorWithdrawInfosList(value: Array<DelegatorWithdrawInfo>): GenesisState;
  clearDelegatorWithdrawInfosList(): GenesisState;
  addDelegatorWithdrawInfos(value?: DelegatorWithdrawInfo, index?: number): DelegatorWithdrawInfo;

  getPreviousProposer(): string;
  setPreviousProposer(value: string): GenesisState;

  getOutstandingRewardsList(): Array<ValidatorOutstandingRewardsRecord>;
  setOutstandingRewardsList(value: Array<ValidatorOutstandingRewardsRecord>): GenesisState;
  clearOutstandingRewardsList(): GenesisState;
  addOutstandingRewards(value?: ValidatorOutstandingRewardsRecord, index?: number): ValidatorOutstandingRewardsRecord;

  getValidatorAccumulatedCommissionsList(): Array<ValidatorAccumulatedCommissionRecord>;
  setValidatorAccumulatedCommissionsList(value: Array<ValidatorAccumulatedCommissionRecord>): GenesisState;
  clearValidatorAccumulatedCommissionsList(): GenesisState;
  addValidatorAccumulatedCommissions(value?: ValidatorAccumulatedCommissionRecord, index?: number): ValidatorAccumulatedCommissionRecord;

  getValidatorHistoricalRewardsList(): Array<ValidatorHistoricalRewardsRecord>;
  setValidatorHistoricalRewardsList(value: Array<ValidatorHistoricalRewardsRecord>): GenesisState;
  clearValidatorHistoricalRewardsList(): GenesisState;
  addValidatorHistoricalRewards(value?: ValidatorHistoricalRewardsRecord, index?: number): ValidatorHistoricalRewardsRecord;

  getValidatorCurrentRewardsList(): Array<ValidatorCurrentRewardsRecord>;
  setValidatorCurrentRewardsList(value: Array<ValidatorCurrentRewardsRecord>): GenesisState;
  clearValidatorCurrentRewardsList(): GenesisState;
  addValidatorCurrentRewards(value?: ValidatorCurrentRewardsRecord, index?: number): ValidatorCurrentRewardsRecord;

  getDelegatorStartingInfosList(): Array<DelegatorStartingInfoRecord>;
  setDelegatorStartingInfosList(value: Array<DelegatorStartingInfoRecord>): GenesisState;
  clearDelegatorStartingInfosList(): GenesisState;
  addDelegatorStartingInfos(value?: DelegatorStartingInfoRecord, index?: number): DelegatorStartingInfoRecord;

  getValidatorSlashEventsList(): Array<ValidatorSlashEventRecord>;
  setValidatorSlashEventsList(value: Array<ValidatorSlashEventRecord>): GenesisState;
  clearValidatorSlashEventsList(): GenesisState;
  addValidatorSlashEvents(value?: ValidatorSlashEventRecord, index?: number): ValidatorSlashEventRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: cosmos_distribution_v1beta1_distribution_pb.Params.AsObject,
    feePool?: cosmos_distribution_v1beta1_distribution_pb.FeePool.AsObject,
    delegatorWithdrawInfosList: Array<DelegatorWithdrawInfo.AsObject>,
    previousProposer: string,
    outstandingRewardsList: Array<ValidatorOutstandingRewardsRecord.AsObject>,
    validatorAccumulatedCommissionsList: Array<ValidatorAccumulatedCommissionRecord.AsObject>,
    validatorHistoricalRewardsList: Array<ValidatorHistoricalRewardsRecord.AsObject>,
    validatorCurrentRewardsList: Array<ValidatorCurrentRewardsRecord.AsObject>,
    delegatorStartingInfosList: Array<DelegatorStartingInfoRecord.AsObject>,
    validatorSlashEventsList: Array<ValidatorSlashEventRecord.AsObject>,
  }
}

