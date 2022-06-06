import * as jspb from 'google-protobuf'

import * as cosmos_app_v1alpha1_config_pb from '../../../cosmos/app/v1alpha1/config_pb';


export class QueryConfigRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConfigRequest): QueryConfigRequest.AsObject;
  static serializeBinaryToWriter(message: QueryConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConfigRequest;
  static deserializeBinaryFromReader(message: QueryConfigRequest, reader: jspb.BinaryReader): QueryConfigRequest;
}

export namespace QueryConfigRequest {
  export type AsObject = {
  }
}

export class QueryConfigResponse extends jspb.Message {
  getConfig(): cosmos_app_v1alpha1_config_pb.Config | undefined;
  setConfig(value?: cosmos_app_v1alpha1_config_pb.Config): QueryConfigResponse;
  hasConfig(): boolean;
  clearConfig(): QueryConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryConfigResponse): QueryConfigResponse.AsObject;
  static serializeBinaryToWriter(message: QueryConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryConfigResponse;
  static deserializeBinaryFromReader(message: QueryConfigResponse, reader: jspb.BinaryReader): QueryConfigResponse;
}

export namespace QueryConfigResponse {
  export type AsObject = {
    config?: cosmos_app_v1alpha1_config_pb.Config.AsObject,
  }
}

