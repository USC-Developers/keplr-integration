import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as cosmos_mint_v1beta1_mint_pb from '../../../cosmos/mint/v1beta1/mint_pb';


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
  getParams(): cosmos_mint_v1beta1_mint_pb.Params | undefined;
  setParams(value?: cosmos_mint_v1beta1_mint_pb.Params): QueryParamsResponse;
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
    params?: cosmos_mint_v1beta1_mint_pb.Params.AsObject,
  }
}

export class QueryInflationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInflationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInflationRequest): QueryInflationRequest.AsObject;
  static serializeBinaryToWriter(message: QueryInflationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInflationRequest;
  static deserializeBinaryFromReader(message: QueryInflationRequest, reader: jspb.BinaryReader): QueryInflationRequest;
}

export namespace QueryInflationRequest {
  export type AsObject = {
  }
}

export class QueryInflationResponse extends jspb.Message {
  getInflation(): Uint8Array | string;
  getInflation_asU8(): Uint8Array;
  getInflation_asB64(): string;
  setInflation(value: Uint8Array | string): QueryInflationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInflationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInflationResponse): QueryInflationResponse.AsObject;
  static serializeBinaryToWriter(message: QueryInflationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInflationResponse;
  static deserializeBinaryFromReader(message: QueryInflationResponse, reader: jspb.BinaryReader): QueryInflationResponse;
}

export namespace QueryInflationResponse {
  export type AsObject = {
    inflation: Uint8Array | string,
  }
}

export class QueryAnnualProvisionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAnnualProvisionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryAnnualProvisionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAnnualProvisionsRequest;
  static deserializeBinaryFromReader(message: QueryAnnualProvisionsRequest, reader: jspb.BinaryReader): QueryAnnualProvisionsRequest;
}

export namespace QueryAnnualProvisionsRequest {
  export type AsObject = {
  }
}

export class QueryAnnualProvisionsResponse extends jspb.Message {
  getAnnualProvisions(): Uint8Array | string;
  getAnnualProvisions_asU8(): Uint8Array;
  getAnnualProvisions_asB64(): string;
  setAnnualProvisions(value: Uint8Array | string): QueryAnnualProvisionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAnnualProvisionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryAnnualProvisionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAnnualProvisionsResponse;
  static deserializeBinaryFromReader(message: QueryAnnualProvisionsResponse, reader: jspb.BinaryReader): QueryAnnualProvisionsResponse;
}

export namespace QueryAnnualProvisionsResponse {
  export type AsObject = {
    annualProvisions: Uint8Array | string,
  }
}

