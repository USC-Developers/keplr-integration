import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../gogoproto/gogo_pb';
import * as tendermint_types_types_pb from '../../tendermint/types/types_pb';
import * as tendermint_types_evidence_pb from '../../tendermint/types/evidence_pb';


export class Block extends jspb.Message {
  getHeader(): tendermint_types_types_pb.Header | undefined;
  setHeader(value?: tendermint_types_types_pb.Header): Block;
  hasHeader(): boolean;
  clearHeader(): Block;

  getData(): tendermint_types_types_pb.Data | undefined;
  setData(value?: tendermint_types_types_pb.Data): Block;
  hasData(): boolean;
  clearData(): Block;

  getEvidence(): tendermint_types_evidence_pb.EvidenceList | undefined;
  setEvidence(value?: tendermint_types_evidence_pb.EvidenceList): Block;
  hasEvidence(): boolean;
  clearEvidence(): Block;

  getLastCommit(): tendermint_types_types_pb.Commit | undefined;
  setLastCommit(value?: tendermint_types_types_pb.Commit): Block;
  hasLastCommit(): boolean;
  clearLastCommit(): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    header?: tendermint_types_types_pb.Header.AsObject,
    data?: tendermint_types_types_pb.Data.AsObject,
    evidence?: tendermint_types_evidence_pb.EvidenceList.AsObject,
    lastCommit?: tendermint_types_types_pb.Commit.AsObject,
  }
}

