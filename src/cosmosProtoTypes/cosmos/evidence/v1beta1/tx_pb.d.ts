import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';
import * as cosmos_msg_v1_msg_pb from '../../../cosmos/msg/v1/msg_pb';


export class MsgSubmitEvidence extends jspb.Message {
  getSubmitter(): string;
  setSubmitter(value: string): MsgSubmitEvidence;

  getEvidence(): google_protobuf_any_pb.Any | undefined;
  setEvidence(value?: google_protobuf_any_pb.Any): MsgSubmitEvidence;
  hasEvidence(): boolean;
  clearEvidence(): MsgSubmitEvidence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitEvidence.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitEvidence): MsgSubmitEvidence.AsObject;
  static serializeBinaryToWriter(message: MsgSubmitEvidence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitEvidence;
  static deserializeBinaryFromReader(message: MsgSubmitEvidence, reader: jspb.BinaryReader): MsgSubmitEvidence;
}

export namespace MsgSubmitEvidence {
  export type AsObject = {
    submitter: string,
    evidence?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class MsgSubmitEvidenceResponse extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): MsgSubmitEvidenceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitEvidenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponse.AsObject;
  static serializeBinaryToWriter(message: MsgSubmitEvidenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitEvidenceResponse;
  static deserializeBinaryFromReader(message: MsgSubmitEvidenceResponse, reader: jspb.BinaryReader): MsgSubmitEvidenceResponse;
}

export namespace MsgSubmitEvidenceResponse {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

