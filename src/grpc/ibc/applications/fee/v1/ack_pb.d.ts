import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class IncentivizedAcknowledgement extends jspb.Message {
  getAppAcknowledgement(): Uint8Array | string;
  getAppAcknowledgement_asU8(): Uint8Array;
  getAppAcknowledgement_asB64(): string;
  setAppAcknowledgement(value: Uint8Array | string): IncentivizedAcknowledgement;

  getForwardRelayerAddress(): string;
  setForwardRelayerAddress(value: string): IncentivizedAcknowledgement;

  getUnderlyingAppSuccess(): boolean;
  setUnderlyingAppSuccess(value: boolean): IncentivizedAcknowledgement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncentivizedAcknowledgement.AsObject;
  static toObject(includeInstance: boolean, msg: IncentivizedAcknowledgement): IncentivizedAcknowledgement.AsObject;
  static serializeBinaryToWriter(message: IncentivizedAcknowledgement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncentivizedAcknowledgement;
  static deserializeBinaryFromReader(message: IncentivizedAcknowledgement, reader: jspb.BinaryReader): IncentivizedAcknowledgement;
}

export namespace IncentivizedAcknowledgement {
  export type AsObject = {
    appAcknowledgement: Uint8Array | string,
    forwardRelayerAddress: string,
    underlyingAppSuccess: boolean,
  }
}

