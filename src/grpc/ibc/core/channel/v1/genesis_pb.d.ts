import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as ibc_core_channel_v1_channel_pb from '../../../../ibc/core/channel/v1/channel_pb';


export class GenesisState extends jspb.Message {
  getChannelsList(): Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>;
  setChannelsList(value: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel>): GenesisState;
  clearChannelsList(): GenesisState;
  addChannels(value?: ibc_core_channel_v1_channel_pb.IdentifiedChannel, index?: number): ibc_core_channel_v1_channel_pb.IdentifiedChannel;

  getAcknowledgementsList(): Array<ibc_core_channel_v1_channel_pb.PacketState>;
  setAcknowledgementsList(value: Array<ibc_core_channel_v1_channel_pb.PacketState>): GenesisState;
  clearAcknowledgementsList(): GenesisState;
  addAcknowledgements(value?: ibc_core_channel_v1_channel_pb.PacketState, index?: number): ibc_core_channel_v1_channel_pb.PacketState;

  getCommitmentsList(): Array<ibc_core_channel_v1_channel_pb.PacketState>;
  setCommitmentsList(value: Array<ibc_core_channel_v1_channel_pb.PacketState>): GenesisState;
  clearCommitmentsList(): GenesisState;
  addCommitments(value?: ibc_core_channel_v1_channel_pb.PacketState, index?: number): ibc_core_channel_v1_channel_pb.PacketState;

  getReceiptsList(): Array<ibc_core_channel_v1_channel_pb.PacketState>;
  setReceiptsList(value: Array<ibc_core_channel_v1_channel_pb.PacketState>): GenesisState;
  clearReceiptsList(): GenesisState;
  addReceipts(value?: ibc_core_channel_v1_channel_pb.PacketState, index?: number): ibc_core_channel_v1_channel_pb.PacketState;

  getSendSequencesList(): Array<PacketSequence>;
  setSendSequencesList(value: Array<PacketSequence>): GenesisState;
  clearSendSequencesList(): GenesisState;
  addSendSequences(value?: PacketSequence, index?: number): PacketSequence;

  getRecvSequencesList(): Array<PacketSequence>;
  setRecvSequencesList(value: Array<PacketSequence>): GenesisState;
  clearRecvSequencesList(): GenesisState;
  addRecvSequences(value?: PacketSequence, index?: number): PacketSequence;

  getAckSequencesList(): Array<PacketSequence>;
  setAckSequencesList(value: Array<PacketSequence>): GenesisState;
  clearAckSequencesList(): GenesisState;
  addAckSequences(value?: PacketSequence, index?: number): PacketSequence;

  getNextChannelSequence(): number;
  setNextChannelSequence(value: number): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    channelsList: Array<ibc_core_channel_v1_channel_pb.IdentifiedChannel.AsObject>,
    acknowledgementsList: Array<ibc_core_channel_v1_channel_pb.PacketState.AsObject>,
    commitmentsList: Array<ibc_core_channel_v1_channel_pb.PacketState.AsObject>,
    receiptsList: Array<ibc_core_channel_v1_channel_pb.PacketState.AsObject>,
    sendSequencesList: Array<PacketSequence.AsObject>,
    recvSequencesList: Array<PacketSequence.AsObject>,
    ackSequencesList: Array<PacketSequence.AsObject>,
    nextChannelSequence: number,
  }
}

export class PacketSequence extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): PacketSequence;

  getChannelId(): string;
  setChannelId(value: string): PacketSequence;

  getSequence(): number;
  setSequence(value: number): PacketSequence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketSequence.AsObject;
  static toObject(includeInstance: boolean, msg: PacketSequence): PacketSequence.AsObject;
  static serializeBinaryToWriter(message: PacketSequence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketSequence;
  static deserializeBinaryFromReader(message: PacketSequence, reader: jspb.BinaryReader): PacketSequence;
}

export namespace PacketSequence {
  export type AsObject = {
    portId: string,
    channelId: string,
    sequence: number,
  }
}

