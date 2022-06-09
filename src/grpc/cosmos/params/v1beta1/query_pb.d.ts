import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as cosmos_params_v1beta1_params_pb from '../../../cosmos/params/v1beta1/params_pb';


export class QueryParamsRequest extends jspb.Message {
  getSubspace(): string;
  setSubspace(value: string): QueryParamsRequest;

  getKey(): string;
  setKey(value: string): QueryParamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
  static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
  export type AsObject = {
    subspace: string,
    key: string,
  }
}

export class QueryParamsResponse extends jspb.Message {
  getParam(): cosmos_params_v1beta1_params_pb.ParamChange | undefined;
  setParam(value?: cosmos_params_v1beta1_params_pb.ParamChange): QueryParamsResponse;
  hasParam(): boolean;
  clearParam(): QueryParamsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
  static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
  export type AsObject = {
    param?: cosmos_params_v1beta1_params_pb.ParamChange.AsObject,
  }
}

