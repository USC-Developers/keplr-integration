import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';


export class Minter extends jspb.Message {
  getInflation(): string;
  setInflation(value: string): Minter;

  getAnnualProvisions(): string;
  setAnnualProvisions(value: string): Minter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Minter.AsObject;
  static toObject(includeInstance: boolean, msg: Minter): Minter.AsObject;
  static serializeBinaryToWriter(message: Minter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Minter;
  static deserializeBinaryFromReader(message: Minter, reader: jspb.BinaryReader): Minter;
}

export namespace Minter {
  export type AsObject = {
    inflation: string,
    annualProvisions: string,
  }
}

export class Params extends jspb.Message {
  getMintDenom(): string;
  setMintDenom(value: string): Params;

  getInflationRateChange(): string;
  setInflationRateChange(value: string): Params;

  getInflationMax(): string;
  setInflationMax(value: string): Params;

  getInflationMin(): string;
  setInflationMin(value: string): Params;

  getGoalBonded(): string;
  setGoalBonded(value: string): Params;

  getBlocksPerYear(): number;
  setBlocksPerYear(value: number): Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    mintDenom: string,
    inflationRateChange: string,
    inflationMax: string,
    inflationMin: string,
    goalBonded: string,
    blocksPerYear: number,
  }
}

