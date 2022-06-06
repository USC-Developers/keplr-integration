import * as jspb from 'google-protobuf'

import * as cosmos_base_query_v1beta1_pagination_pb from '../../../cosmos/base/query/v1beta1/pagination_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as cosmos_nft_v1beta1_nft_pb from '../../../cosmos/nft/v1beta1/nft_pb';


export class QueryBalanceRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): QueryBalanceRequest;

  getOwner(): string;
  setOwner(value: string): QueryBalanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBalanceRequest): QueryBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: QueryBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBalanceRequest;
  static deserializeBinaryFromReader(message: QueryBalanceRequest, reader: jspb.BinaryReader): QueryBalanceRequest;
}

export namespace QueryBalanceRequest {
  export type AsObject = {
    classId: string,
    owner: string,
  }
}

export class QueryBalanceResponse extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): QueryBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBalanceResponse): QueryBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: QueryBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBalanceResponse;
  static deserializeBinaryFromReader(message: QueryBalanceResponse, reader: jspb.BinaryReader): QueryBalanceResponse;
}

export namespace QueryBalanceResponse {
  export type AsObject = {
    amount: number,
  }
}

export class QueryOwnerRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): QueryOwnerRequest;

  getId(): string;
  setId(value: string): QueryOwnerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOwnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOwnerRequest): QueryOwnerRequest.AsObject;
  static serializeBinaryToWriter(message: QueryOwnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOwnerRequest;
  static deserializeBinaryFromReader(message: QueryOwnerRequest, reader: jspb.BinaryReader): QueryOwnerRequest;
}

export namespace QueryOwnerRequest {
  export type AsObject = {
    classId: string,
    id: string,
  }
}

export class QueryOwnerResponse extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): QueryOwnerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOwnerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOwnerResponse): QueryOwnerResponse.AsObject;
  static serializeBinaryToWriter(message: QueryOwnerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOwnerResponse;
  static deserializeBinaryFromReader(message: QueryOwnerResponse, reader: jspb.BinaryReader): QueryOwnerResponse;
}

export namespace QueryOwnerResponse {
  export type AsObject = {
    owner: string,
  }
}

export class QuerySupplyRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): QuerySupplyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySupplyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySupplyRequest): QuerySupplyRequest.AsObject;
  static serializeBinaryToWriter(message: QuerySupplyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySupplyRequest;
  static deserializeBinaryFromReader(message: QuerySupplyRequest, reader: jspb.BinaryReader): QuerySupplyRequest;
}

export namespace QuerySupplyRequest {
  export type AsObject = {
    classId: string,
  }
}

export class QuerySupplyResponse extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): QuerySupplyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySupplyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySupplyResponse): QuerySupplyResponse.AsObject;
  static serializeBinaryToWriter(message: QuerySupplyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySupplyResponse;
  static deserializeBinaryFromReader(message: QuerySupplyResponse, reader: jspb.BinaryReader): QuerySupplyResponse;
}

export namespace QuerySupplyResponse {
  export type AsObject = {
    amount: number,
  }
}

export class QueryNFTsRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): QueryNFTsRequest;

  getOwner(): string;
  setOwner(value: string): QueryNFTsRequest;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryNFTsRequest;
  hasPagination(): boolean;
  clearPagination(): QueryNFTsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryNFTsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryNFTsRequest): QueryNFTsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryNFTsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryNFTsRequest;
  static deserializeBinaryFromReader(message: QueryNFTsRequest, reader: jspb.BinaryReader): QueryNFTsRequest;
}

export namespace QueryNFTsRequest {
  export type AsObject = {
    classId: string,
    owner: string,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryNFTsResponse extends jspb.Message {
  getNftsList(): Array<cosmos_nft_v1beta1_nft_pb.NFT>;
  setNftsList(value: Array<cosmos_nft_v1beta1_nft_pb.NFT>): QueryNFTsResponse;
  clearNftsList(): QueryNFTsResponse;
  addNfts(value?: cosmos_nft_v1beta1_nft_pb.NFT, index?: number): cosmos_nft_v1beta1_nft_pb.NFT;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryNFTsResponse;
  hasPagination(): boolean;
  clearPagination(): QueryNFTsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryNFTsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryNFTsResponse): QueryNFTsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryNFTsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryNFTsResponse;
  static deserializeBinaryFromReader(message: QueryNFTsResponse, reader: jspb.BinaryReader): QueryNFTsResponse;
}

export namespace QueryNFTsResponse {
  export type AsObject = {
    nftsList: Array<cosmos_nft_v1beta1_nft_pb.NFT.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

export class QueryNFTRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): QueryNFTRequest;

  getId(): string;
  setId(value: string): QueryNFTRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryNFTRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryNFTRequest): QueryNFTRequest.AsObject;
  static serializeBinaryToWriter(message: QueryNFTRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryNFTRequest;
  static deserializeBinaryFromReader(message: QueryNFTRequest, reader: jspb.BinaryReader): QueryNFTRequest;
}

export namespace QueryNFTRequest {
  export type AsObject = {
    classId: string,
    id: string,
  }
}

export class QueryNFTResponse extends jspb.Message {
  getNft(): cosmos_nft_v1beta1_nft_pb.NFT | undefined;
  setNft(value?: cosmos_nft_v1beta1_nft_pb.NFT): QueryNFTResponse;
  hasNft(): boolean;
  clearNft(): QueryNFTResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryNFTResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryNFTResponse): QueryNFTResponse.AsObject;
  static serializeBinaryToWriter(message: QueryNFTResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryNFTResponse;
  static deserializeBinaryFromReader(message: QueryNFTResponse, reader: jspb.BinaryReader): QueryNFTResponse;
}

export namespace QueryNFTResponse {
  export type AsObject = {
    nft?: cosmos_nft_v1beta1_nft_pb.NFT.AsObject,
  }
}

export class QueryClassRequest extends jspb.Message {
  getClassId(): string;
  setClassId(value: string): QueryClassRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClassRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClassRequest): QueryClassRequest.AsObject;
  static serializeBinaryToWriter(message: QueryClassRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClassRequest;
  static deserializeBinaryFromReader(message: QueryClassRequest, reader: jspb.BinaryReader): QueryClassRequest;
}

export namespace QueryClassRequest {
  export type AsObject = {
    classId: string,
  }
}

export class QueryClassResponse extends jspb.Message {
  getClass(): cosmos_nft_v1beta1_nft_pb.Class | undefined;
  setClass(value?: cosmos_nft_v1beta1_nft_pb.Class): QueryClassResponse;
  hasClass(): boolean;
  clearClass(): QueryClassResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClassResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClassResponse): QueryClassResponse.AsObject;
  static serializeBinaryToWriter(message: QueryClassResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClassResponse;
  static deserializeBinaryFromReader(message: QueryClassResponse, reader: jspb.BinaryReader): QueryClassResponse;
}

export namespace QueryClassResponse {
  export type AsObject = {
    pb_class?: cosmos_nft_v1beta1_nft_pb.Class.AsObject,
  }
}

export class QueryClassesRequest extends jspb.Message {
  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryClassesRequest;
  hasPagination(): boolean;
  clearPagination(): QueryClassesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClassesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClassesRequest): QueryClassesRequest.AsObject;
  static serializeBinaryToWriter(message: QueryClassesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClassesRequest;
  static deserializeBinaryFromReader(message: QueryClassesRequest, reader: jspb.BinaryReader): QueryClassesRequest;
}

export namespace QueryClassesRequest {
  export type AsObject = {
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
  }
}

export class QueryClassesResponse extends jspb.Message {
  getClassesList(): Array<cosmos_nft_v1beta1_nft_pb.Class>;
  setClassesList(value: Array<cosmos_nft_v1beta1_nft_pb.Class>): QueryClassesResponse;
  clearClassesList(): QueryClassesResponse;
  addClasses(value?: cosmos_nft_v1beta1_nft_pb.Class, index?: number): cosmos_nft_v1beta1_nft_pb.Class;

  getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
  setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryClassesResponse;
  hasPagination(): boolean;
  clearPagination(): QueryClassesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryClassesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryClassesResponse): QueryClassesResponse.AsObject;
  static serializeBinaryToWriter(message: QueryClassesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryClassesResponse;
  static deserializeBinaryFromReader(message: QueryClassesResponse, reader: jspb.BinaryReader): QueryClassesResponse;
}

export namespace QueryClassesResponse {
  export type AsObject = {
    classesList: Array<cosmos_nft_v1beta1_nft_pb.Class.AsObject>,
    pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
  }
}

