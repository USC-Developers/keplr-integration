import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as tendermint_p2p_types_pb from '../../../../tendermint/p2p/types_pb';
import * as tendermint_types_block_pb from '../../../../tendermint/types/block_pb';
import * as tendermint_types_types_pb from '../../../../tendermint/types/types_pb';
import * as cosmos_base_query_v1beta1_pagination_pb from '../../../../cosmos/base/query/v1beta1/pagination_pb';


export class GetValidatorSetByHeightRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): GetValidatorSetByHeightRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): GetValidatorSetByHeightRequest;
  hasPagination(): boolean;
  clearPagination(): GetValidatorSetByHeightRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValidatorSetByHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequest.AsObject;
  static serializeBinaryToWriter(message: GetValidatorSetByHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValidatorSetByHeightRequest;
  static deserializeBinaryFromReader(message: GetValidatorSetByHeightRequest, reader: jspb.BinaryReader): GetValidatorSetByHeightRequest;
}

export namespace GetValidatorSetByHeightRequest {
  export type AsObject = {
    height: number,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class GetValidatorSetByHeightResponse extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): GetValidatorSetByHeightResponse;

  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): GetValidatorSetByHeightResponse;
  clearValidatorsList(): GetValidatorSetByHeightResponse;
  addValidators(value?: Validator, index?: number): Validator;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): GetValidatorSetByHeightResponse;
  hasPagination(): boolean;
  clearPagination(): GetValidatorSetByHeightResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValidatorSetByHeightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponse.AsObject;
  static serializeBinaryToWriter(message: GetValidatorSetByHeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValidatorSetByHeightResponse;
  static deserializeBinaryFromReader(message: GetValidatorSetByHeightResponse, reader: jspb.BinaryReader): GetValidatorSetByHeightResponse;
}

export namespace GetValidatorSetByHeightResponse {
  export type AsObject = {
    blockHeight: number,
    validatorsList: Array<Validator.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class GetLatestValidatorSetRequest extends jspb.Message {
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): GetLatestValidatorSetRequest;
  hasPagination(): boolean;
  clearPagination(): GetLatestValidatorSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestValidatorSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestValidatorSetRequest): GetLatestValidatorSetRequest.AsObject;
  static serializeBinaryToWriter(message: GetLatestValidatorSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestValidatorSetRequest;
  static deserializeBinaryFromReader(message: GetLatestValidatorSetRequest, reader: jspb.BinaryReader): GetLatestValidatorSetRequest;
}

export namespace GetLatestValidatorSetRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class GetLatestValidatorSetResponse extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): GetLatestValidatorSetResponse;

  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): GetLatestValidatorSetResponse;
  clearValidatorsList(): GetLatestValidatorSetResponse;
  addValidators(value?: Validator, index?: number): Validator;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): GetLatestValidatorSetResponse;
  hasPagination(): boolean;
  clearPagination(): GetLatestValidatorSetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestValidatorSetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestValidatorSetResponse): GetLatestValidatorSetResponse.AsObject;
  static serializeBinaryToWriter(message: GetLatestValidatorSetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestValidatorSetResponse;
  static deserializeBinaryFromReader(message: GetLatestValidatorSetResponse, reader: jspb.BinaryReader): GetLatestValidatorSetResponse;
}

export namespace GetLatestValidatorSetResponse {
  export type AsObject = {
    blockHeight: number,
    validatorsList: Array<Validator.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class Validator extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): Validator;

  getPubKey(): google_protobuf_any_pb.Any | undefined;
  setPubKey(value?: google_protobuf_any_pb.Any): Validator;
  hasPubKey(): boolean;
  clearPubKey(): Validator;

  getVotingPower(): number;
  setVotingPower(value: number): Validator;

  getProposerPriority(): number;
  setProposerPriority(value: number): Validator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Validator.AsObject;
  static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
  static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Validator;
  static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
}

export namespace Validator {
  export type AsObject = {
    address: string,
    pubKey?: google_protobuf_any_pb.Any.AsObject,
    votingPower: number,
    proposerPriority: number,
  }
}

export class GetBlockByHeightRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): GetBlockByHeightRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockByHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockByHeightRequest): GetBlockByHeightRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockByHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockByHeightRequest;
  static deserializeBinaryFromReader(message: GetBlockByHeightRequest, reader: jspb.BinaryReader): GetBlockByHeightRequest;
}

export namespace GetBlockByHeightRequest {
  export type AsObject = {
    height: number,
  }
}

export class GetBlockByHeightResponse extends jspb.Message {
  getBlockId(): tendermint_types_types_pb.BlockID | undefined;
  setBlockId(value?: tendermint_types_types_pb.BlockID): GetBlockByHeightResponse;
  hasBlockId(): boolean;
  clearBlockId(): GetBlockByHeightResponse;

  getBlock(): tendermint_types_block_pb.Block | undefined;
  setBlock(value?: tendermint_types_block_pb.Block): GetBlockByHeightResponse;
  hasBlock(): boolean;
  clearBlock(): GetBlockByHeightResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockByHeightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockByHeightResponse): GetBlockByHeightResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlockByHeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockByHeightResponse;
  static deserializeBinaryFromReader(message: GetBlockByHeightResponse, reader: jspb.BinaryReader): GetBlockByHeightResponse;
}

export namespace GetBlockByHeightResponse {
  export type AsObject = {
    blockId?: tendermint_types_types_pb.BlockID.AsObject,
    block?: tendermint_types_block_pb.Block.AsObject,
  }
}

export class GetLatestBlockRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestBlockRequest): GetLatestBlockRequest.AsObject;
  static serializeBinaryToWriter(message: GetLatestBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestBlockRequest;
  static deserializeBinaryFromReader(message: GetLatestBlockRequest, reader: jspb.BinaryReader): GetLatestBlockRequest;
}

export namespace GetLatestBlockRequest {
  export type AsObject = {
  }
}

export class GetLatestBlockResponse extends jspb.Message {
  getBlockId(): tendermint_types_types_pb.BlockID | undefined;
  setBlockId(value?: tendermint_types_types_pb.BlockID): GetLatestBlockResponse;
  hasBlockId(): boolean;
  clearBlockId(): GetLatestBlockResponse;

  getBlock(): tendermint_types_block_pb.Block | undefined;
  setBlock(value?: tendermint_types_block_pb.Block): GetLatestBlockResponse;
  hasBlock(): boolean;
  clearBlock(): GetLatestBlockResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestBlockResponse): GetLatestBlockResponse.AsObject;
  static serializeBinaryToWriter(message: GetLatestBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestBlockResponse;
  static deserializeBinaryFromReader(message: GetLatestBlockResponse, reader: jspb.BinaryReader): GetLatestBlockResponse;
}

export namespace GetLatestBlockResponse {
  export type AsObject = {
    blockId?: tendermint_types_types_pb.BlockID.AsObject,
    block?: tendermint_types_block_pb.Block.AsObject,
  }
}

export class GetSyncingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSyncingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSyncingRequest): GetSyncingRequest.AsObject;
  static serializeBinaryToWriter(message: GetSyncingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSyncingRequest;
  static deserializeBinaryFromReader(message: GetSyncingRequest, reader: jspb.BinaryReader): GetSyncingRequest;
}

export namespace GetSyncingRequest {
  export type AsObject = {
  }
}

export class GetSyncingResponse extends jspb.Message {
  getSyncing(): boolean;
  setSyncing(value: boolean): GetSyncingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSyncingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSyncingResponse): GetSyncingResponse.AsObject;
  static serializeBinaryToWriter(message: GetSyncingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSyncingResponse;
  static deserializeBinaryFromReader(message: GetSyncingResponse, reader: jspb.BinaryReader): GetSyncingResponse;
}

export namespace GetSyncingResponse {
  export type AsObject = {
    syncing: boolean,
  }
}

export class GetNodeInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeInfoRequest): GetNodeInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetNodeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeInfoRequest;
  static deserializeBinaryFromReader(message: GetNodeInfoRequest, reader: jspb.BinaryReader): GetNodeInfoRequest;
}

export namespace GetNodeInfoRequest {
  export type AsObject = {
  }
}

export class GetNodeInfoResponse extends jspb.Message {
  getDefaultNodeInfo(): tendermint_p2p_types_pb.DefaultNodeInfo | undefined;
  setDefaultNodeInfo(value?: tendermint_p2p_types_pb.DefaultNodeInfo): GetNodeInfoResponse;
  hasDefaultNodeInfo(): boolean;
  clearDefaultNodeInfo(): GetNodeInfoResponse;

  getApplicationVersion(): VersionInfo | undefined;
  setApplicationVersion(value?: VersionInfo): GetNodeInfoResponse;
  hasApplicationVersion(): boolean;
  clearApplicationVersion(): GetNodeInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeInfoResponse): GetNodeInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetNodeInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeInfoResponse;
  static deserializeBinaryFromReader(message: GetNodeInfoResponse, reader: jspb.BinaryReader): GetNodeInfoResponse;
}

export namespace GetNodeInfoResponse {
  export type AsObject = {
    defaultNodeInfo?: tendermint_p2p_types_pb.DefaultNodeInfo.AsObject,
    applicationVersion?: VersionInfo.AsObject,
  }
}

export class VersionInfo extends jspb.Message {
  getName(): string;
  setName(value: string): VersionInfo;

  getAppName(): string;
  setAppName(value: string): VersionInfo;

  getVersion(): string;
  setVersion(value: string): VersionInfo;

  getGitCommit(): string;
  setGitCommit(value: string): VersionInfo;

  getBuildTags(): string;
  setBuildTags(value: string): VersionInfo;

  getGoVersion(): string;
  setGoVersion(value: string): VersionInfo;

  getBuildDepsList(): Array<Module>;
  setBuildDepsList(value: Array<Module>): VersionInfo;
  clearBuildDepsList(): VersionInfo;
  addBuildDeps(value?: Module, index?: number): Module;

  getCosmosSdkVersion(): string;
  setCosmosSdkVersion(value: string): VersionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VersionInfo): VersionInfo.AsObject;
  static serializeBinaryToWriter(message: VersionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionInfo;
  static deserializeBinaryFromReader(message: VersionInfo, reader: jspb.BinaryReader): VersionInfo;
}

export namespace VersionInfo {
  export type AsObject = {
    name: string,
    appName: string,
    version: string,
    gitCommit: string,
    buildTags: string,
    goVersion: string,
    buildDepsList: Array<Module.AsObject>,
    cosmosSdkVersion: string,
  }
}

export class Module extends jspb.Message {
  getPath(): string;
  setPath(value: string): Module;

  getVersion(): string;
  setVersion(value: string): Module;

  getSum(): string;
  setSum(value: string): Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    path: string,
    version: string,
    sum: string,
  }
}

