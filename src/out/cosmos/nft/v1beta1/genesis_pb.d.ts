import * as jspb from 'google-protobuf'

import * as cosmos_nft_v1beta1_nft_pb from '../../../cosmos/nft/v1beta1/nft_pb';


export class GenesisState extends jspb.Message {
  getClassesList(): Array<cosmos_nft_v1beta1_nft_pb.Class>;
  setClassesList(value: Array<cosmos_nft_v1beta1_nft_pb.Class>): GenesisState;
  clearClassesList(): GenesisState;
  addClasses(value?: cosmos_nft_v1beta1_nft_pb.Class, index?: number): cosmos_nft_v1beta1_nft_pb.Class;

  getEntriesList(): Array<Entry>;
  setEntriesList(value: Array<Entry>): GenesisState;
  clearEntriesList(): GenesisState;
  addEntries(value?: Entry, index?: number): Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    classesList: Array<cosmos_nft_v1beta1_nft_pb.Class.AsObject>,
    entriesList: Array<Entry.AsObject>,
  }
}

export class Entry extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): Entry;

  getNftsList(): Array<cosmos_nft_v1beta1_nft_pb.NFT>;
  setNftsList(value: Array<cosmos_nft_v1beta1_nft_pb.NFT>): Entry;
  clearNftsList(): Entry;
  addNfts(value?: cosmos_nft_v1beta1_nft_pb.NFT, index?: number): cosmos_nft_v1beta1_nft_pb.NFT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entry.AsObject;
  static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
  static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entry;
  static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
}

export namespace Entry {
  export type AsObject = {
    owner: string,
    nftsList: Array<cosmos_nft_v1beta1_nft_pb.NFT.AsObject>,
  }
}

