import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';


export class ParameterChangeProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ParameterChangeProposal;

  getDescription(): string;
  setDescription(value: string): ParameterChangeProposal;

  getChangesList(): Array<ParamChange>;
  setChangesList(value: Array<ParamChange>): ParameterChangeProposal;
  clearChangesList(): ParameterChangeProposal;
  addChanges(value?: ParamChange, index?: number): ParamChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParameterChangeProposal.AsObject;
  static toObject(includeInstance: boolean, msg: ParameterChangeProposal): ParameterChangeProposal.AsObject;
  static serializeBinaryToWriter(message: ParameterChangeProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParameterChangeProposal;
  static deserializeBinaryFromReader(message: ParameterChangeProposal, reader: jspb.BinaryReader): ParameterChangeProposal;
}

export namespace ParameterChangeProposal {
  export type AsObject = {
    title: string,
    description: string,
    changesList: Array<ParamChange.AsObject>,
  }
}

export class ParamChange extends jspb.Message {
  getSubspace(): string;
  setSubspace(value: string): ParamChange;

  getKey(): string;
  setKey(value: string): ParamChange;

  getValue(): string;
  setValue(value: string): ParamChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParamChange.AsObject;
  static toObject(includeInstance: boolean, msg: ParamChange): ParamChange.AsObject;
  static serializeBinaryToWriter(message: ParamChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParamChange;
  static deserializeBinaryFromReader(message: ParamChange, reader: jspb.BinaryReader): ParamChange;
}

export namespace ParamChange {
  export type AsObject = {
    subspace: string,
    key: string,
    value: string,
  }
}

