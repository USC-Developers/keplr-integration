import * as jspb from 'google-protobuf'

import * as cosmos_base_query_v1beta1_pagination_pb from '../../../cosmos/base/query/v1beta1/pagination_pb';
import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';
import * as cosmos_distribution_v1beta1_distribution_pb from '../../../cosmos/distribution/v1beta1/distribution_pb';


export class QueryParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
  static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
  export type AsObject = {
  }
}

export class QueryParamsResponse extends jspb.Message {
  getParams(): cosmos_distribution_v1beta1_distribution_pb.Params | undefined;
  setParams(value?: cosmos_distribution_v1beta1_distribution_pb.Params): QueryParamsResponse;
  hasParams(): boolean;
  clearParams(): QueryParamsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
  static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
  export type AsObject = {
    params?: cosmos_distribution_v1beta1_distribution_pb.Params.AsObject,
  }
}

export class QueryValidatorOutstandingRewardsRequest extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): QueryValidatorOutstandingRewardsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidatorOutstandingRewardsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryValidatorOutstandingRewardsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidatorOutstandingRewardsRequest;
  static deserializeBinaryFromReader(message: QueryValidatorOutstandingRewardsRequest, reader: jspb.BinaryReader): QueryValidatorOutstandingRewardsRequest;
}

export namespace QueryValidatorOutstandingRewardsRequest {
  export type AsObject = {
    validatorAddress: string,
  }
}

export class QueryValidatorOutstandingRewardsResponse extends jspb.Message {
  getRewards(): cosmos_distribution_v1beta1_distribution_pb.ValidatorOutstandingRewards | undefined;
  setRewards(value?: cosmos_distribution_v1beta1_distribution_pb.ValidatorOutstandingRewards): QueryValidatorOutstandingRewardsResponse;
  hasRewards(): boolean;
  clearRewards(): QueryValidatorOutstandingRewardsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidatorOutstandingRewardsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryValidatorOutstandingRewardsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidatorOutstandingRewardsResponse;
  static deserializeBinaryFromReader(message: QueryValidatorOutstandingRewardsResponse, reader: jspb.BinaryReader): QueryValidatorOutstandingRewardsResponse;
}

export namespace QueryValidatorOutstandingRewardsResponse {
  export type AsObject = {
    rewards?: cosmos_distribution_v1beta1_distribution_pb.ValidatorOutstandingRewards.AsObject,
  }
}

export class QueryValidatorCommissionRequest extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): QueryValidatorCommissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidatorCommissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidatorCommissionRequest): QueryValidatorCommissionRequest.AsObject;
  static serializeBinaryToWriter(message: QueryValidatorCommissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidatorCommissionRequest;
  static deserializeBinaryFromReader(message: QueryValidatorCommissionRequest, reader: jspb.BinaryReader): QueryValidatorCommissionRequest;
}

export namespace QueryValidatorCommissionRequest {
  export type AsObject = {
    validatorAddress: string,
  }
}

export class QueryValidatorCommissionResponse extends jspb.Message {
  getCommission(): cosmos_distribution_v1beta1_distribution_pb.ValidatorAccumulatedCommission | undefined;
  setCommission(value?: cosmos_distribution_v1beta1_distribution_pb.ValidatorAccumulatedCommission): QueryValidatorCommissionResponse;
  hasCommission(): boolean;
  clearCommission(): QueryValidatorCommissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidatorCommissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidatorCommissionResponse): QueryValidatorCommissionResponse.AsObject;
  static serializeBinaryToWriter(message: QueryValidatorCommissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidatorCommissionResponse;
  static deserializeBinaryFromReader(message: QueryValidatorCommissionResponse, reader: jspb.BinaryReader): QueryValidatorCommissionResponse;
}

export namespace QueryValidatorCommissionResponse {
  export type AsObject = {
    commission?: cosmos_distribution_v1beta1_distribution_pb.ValidatorAccumulatedCommission.AsObject,
  }
}

export class QueryValidatorSlashesRequest extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): QueryValidatorSlashesRequest;

  getStartingHeight(): number;
  setStartingHeight(value: number): QueryValidatorSlashesRequest;

  getEndingHeight(): number;
  setEndingHeight(value: number): QueryValidatorSlashesRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryValidatorSlashesRequest;
  hasPagination(): boolean;
  clearPagination(): QueryValidatorSlashesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidatorSlashesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidatorSlashesRequest): QueryValidatorSlashesRequest.AsObject;
  static serializeBinaryToWriter(message: QueryValidatorSlashesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidatorSlashesRequest;
  static deserializeBinaryFromReader(message: QueryValidatorSlashesRequest, reader: jspb.BinaryReader): QueryValidatorSlashesRequest;
}

export namespace QueryValidatorSlashesRequest {
  export type AsObject = {
    validatorAddress: string,
    startingHeight: number,
    endingHeight: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryValidatorSlashesResponse extends jspb.Message {
  getSlashesList(): Array<cosmos_distribution_v1beta1_distribution_pb.ValidatorSlashEvent>;
  setSlashesList(value: Array<cosmos_distribution_v1beta1_distribution_pb.ValidatorSlashEvent>): QueryValidatorSlashesResponse;
  clearSlashesList(): QueryValidatorSlashesResponse;
  addSlashes(value?: cosmos_distribution_v1beta1_distribution_pb.ValidatorSlashEvent, index?: number): cosmos_distribution_v1beta1_distribution_pb.ValidatorSlashEvent;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryValidatorSlashesResponse;
  hasPagination(): boolean;
  clearPagination(): QueryValidatorSlashesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValidatorSlashesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValidatorSlashesResponse): QueryValidatorSlashesResponse.AsObject;
  static serializeBinaryToWriter(message: QueryValidatorSlashesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValidatorSlashesResponse;
  static deserializeBinaryFromReader(message: QueryValidatorSlashesResponse, reader: jspb.BinaryReader): QueryValidatorSlashesResponse;
}

export namespace QueryValidatorSlashesResponse {
  export type AsObject = {
    slashesList: Array<cosmos_distribution_v1beta1_distribution_pb.ValidatorSlashEvent.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryDelegationRewardsRequest extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): QueryDelegationRewardsRequest;

  getValidatorAddress(): string;
  setValidatorAddress(value: string): QueryDelegationRewardsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegationRewardsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegationRewardsRequest): QueryDelegationRewardsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryDelegationRewardsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegationRewardsRequest;
  static deserializeBinaryFromReader(message: QueryDelegationRewardsRequest, reader: jspb.BinaryReader): QueryDelegationRewardsRequest;
}

export namespace QueryDelegationRewardsRequest {
  export type AsObject = {
    delegatorAddress: string,
    validatorAddress: string,
  }
}

export class QueryDelegationRewardsResponse extends jspb.Message {
  getRewardsList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setRewardsList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): QueryDelegationRewardsResponse;
  clearRewardsList(): QueryDelegationRewardsResponse;
  addRewards(value?: cosmos_base_v1beta1_coin_pb.DecCoin, index?: number): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegationRewardsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegationRewardsResponse): QueryDelegationRewardsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryDelegationRewardsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegationRewardsResponse;
  static deserializeBinaryFromReader(message: QueryDelegationRewardsResponse, reader: jspb.BinaryReader): QueryDelegationRewardsResponse;
}

export namespace QueryDelegationRewardsResponse {
  export type AsObject = {
    rewardsList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>,
  }
}

export class QueryDelegationTotalRewardsRequest extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): QueryDelegationTotalRewardsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegationTotalRewardsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryDelegationTotalRewardsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegationTotalRewardsRequest;
  static deserializeBinaryFromReader(message: QueryDelegationTotalRewardsRequest, reader: jspb.BinaryReader): QueryDelegationTotalRewardsRequest;
}

export namespace QueryDelegationTotalRewardsRequest {
  export type AsObject = {
    delegatorAddress: string,
  }
}

export class QueryDelegationTotalRewardsResponse extends jspb.Message {
  getRewardsList(): Array<cosmos_distribution_v1beta1_distribution_pb.DelegationDelegatorReward>;
  setRewardsList(value: Array<cosmos_distribution_v1beta1_distribution_pb.DelegationDelegatorReward>): QueryDelegationTotalRewardsResponse;
  clearRewardsList(): QueryDelegationTotalRewardsResponse;
  addRewards(value?: cosmos_distribution_v1beta1_distribution_pb.DelegationDelegatorReward, index?: number): cosmos_distribution_v1beta1_distribution_pb.DelegationDelegatorReward;

  getTotalList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setTotalList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): QueryDelegationTotalRewardsResponse;
  clearTotalList(): QueryDelegationTotalRewardsResponse;
  addTotal(value?: cosmos_base_v1beta1_coin_pb.DecCoin, index?: number): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegationTotalRewardsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryDelegationTotalRewardsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegationTotalRewardsResponse;
  static deserializeBinaryFromReader(message: QueryDelegationTotalRewardsResponse, reader: jspb.BinaryReader): QueryDelegationTotalRewardsResponse;
}

export namespace QueryDelegationTotalRewardsResponse {
  export type AsObject = {
    rewardsList: Array<cosmos_distribution_v1beta1_distribution_pb.DelegationDelegatorReward.AsObject>,
    totalList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>,
  }
}

export class QueryDelegatorValidatorsRequest extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): QueryDelegatorValidatorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegatorValidatorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryDelegatorValidatorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegatorValidatorsRequest;
  static deserializeBinaryFromReader(message: QueryDelegatorValidatorsRequest, reader: jspb.BinaryReader): QueryDelegatorValidatorsRequest;
}

export namespace QueryDelegatorValidatorsRequest {
  export type AsObject = {
    delegatorAddress: string,
  }
}

export class QueryDelegatorValidatorsResponse extends jspb.Message {
  getValidatorsList(): Array<string>;
  setValidatorsList(value: Array<string>): QueryDelegatorValidatorsResponse;
  clearValidatorsList(): QueryDelegatorValidatorsResponse;
  addValidators(value: string, index?: number): QueryDelegatorValidatorsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegatorValidatorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryDelegatorValidatorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegatorValidatorsResponse;
  static deserializeBinaryFromReader(message: QueryDelegatorValidatorsResponse, reader: jspb.BinaryReader): QueryDelegatorValidatorsResponse;
}

export namespace QueryDelegatorValidatorsResponse {
  export type AsObject = {
    validatorsList: Array<string>,
  }
}

export class QueryDelegatorWithdrawAddressRequest extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): QueryDelegatorWithdrawAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegatorWithdrawAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequest.AsObject;
  static serializeBinaryToWriter(message: QueryDelegatorWithdrawAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegatorWithdrawAddressRequest;
  static deserializeBinaryFromReader(message: QueryDelegatorWithdrawAddressRequest, reader: jspb.BinaryReader): QueryDelegatorWithdrawAddressRequest;
}

export namespace QueryDelegatorWithdrawAddressRequest {
  export type AsObject = {
    delegatorAddress: string,
  }
}

export class QueryDelegatorWithdrawAddressResponse extends jspb.Message {
  getWithdrawAddress(): string;
  setWithdrawAddress(value: string): QueryDelegatorWithdrawAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegatorWithdrawAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponse.AsObject;
  static serializeBinaryToWriter(message: QueryDelegatorWithdrawAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegatorWithdrawAddressResponse;
  static deserializeBinaryFromReader(message: QueryDelegatorWithdrawAddressResponse, reader: jspb.BinaryReader): QueryDelegatorWithdrawAddressResponse;
}

export namespace QueryDelegatorWithdrawAddressResponse {
  export type AsObject = {
    withdrawAddress: string,
  }
}

export class QueryCommunityPoolRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCommunityPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCommunityPoolRequest): QueryCommunityPoolRequest.AsObject;
  static serializeBinaryToWriter(message: QueryCommunityPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCommunityPoolRequest;
  static deserializeBinaryFromReader(message: QueryCommunityPoolRequest, reader: jspb.BinaryReader): QueryCommunityPoolRequest;
}

export namespace QueryCommunityPoolRequest {
  export type AsObject = {
  }
}

export class QueryCommunityPoolResponse extends jspb.Message {
  getPoolList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setPoolList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): QueryCommunityPoolResponse;
  clearPoolList(): QueryCommunityPoolResponse;
  addPool(value?: cosmos_base_v1beta1_coin_pb.DecCoin, index?: number): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCommunityPoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCommunityPoolResponse): QueryCommunityPoolResponse.AsObject;
  static serializeBinaryToWriter(message: QueryCommunityPoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCommunityPoolResponse;
  static deserializeBinaryFromReader(message: QueryCommunityPoolResponse, reader: jspb.BinaryReader): QueryCommunityPoolResponse;
}

export namespace QueryCommunityPoolResponse {
  export type AsObject = {
    poolList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>,
  }
}

