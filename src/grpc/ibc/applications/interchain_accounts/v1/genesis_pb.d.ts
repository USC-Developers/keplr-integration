import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as ibc_applications_interchain_accounts_controller_v1_controller_pb from '../../../../ibc/applications/interchain_accounts/controller/v1/controller_pb';
import * as ibc_applications_interchain_accounts_host_v1_host_pb from '../../../../ibc/applications/interchain_accounts/host/v1/host_pb';


export class GenesisState extends jspb.Message {
  getControllerGenesisState(): ControllerGenesisState | undefined;
  setControllerGenesisState(value?: ControllerGenesisState): GenesisState;
  hasControllerGenesisState(): boolean;
  clearControllerGenesisState(): GenesisState;

  getHostGenesisState(): HostGenesisState | undefined;
  setHostGenesisState(value?: HostGenesisState): GenesisState;
  hasHostGenesisState(): boolean;
  clearHostGenesisState(): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    controllerGenesisState?: ControllerGenesisState.AsObject,
    hostGenesisState?: HostGenesisState.AsObject,
  }
}

export class ControllerGenesisState extends jspb.Message {
  getActiveChannelsList(): Array<ActiveChannel>;
  setActiveChannelsList(value: Array<ActiveChannel>): ControllerGenesisState;
  clearActiveChannelsList(): ControllerGenesisState;
  addActiveChannels(value?: ActiveChannel, index?: number): ActiveChannel;

  getInterchainAccountsList(): Array<RegisteredInterchainAccount>;
  setInterchainAccountsList(value: Array<RegisteredInterchainAccount>): ControllerGenesisState;
  clearInterchainAccountsList(): ControllerGenesisState;
  addInterchainAccounts(value?: RegisteredInterchainAccount, index?: number): RegisteredInterchainAccount;

  getPortsList(): Array<string>;
  setPortsList(value: Array<string>): ControllerGenesisState;
  clearPortsList(): ControllerGenesisState;
  addPorts(value: string, index?: number): ControllerGenesisState;

  getParams(): ibc_applications_interchain_accounts_controller_v1_controller_pb.Params | undefined;
  setParams(value?: ibc_applications_interchain_accounts_controller_v1_controller_pb.Params): ControllerGenesisState;
  hasParams(): boolean;
  clearParams(): ControllerGenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControllerGenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: ControllerGenesisState): ControllerGenesisState.AsObject;
  static serializeBinaryToWriter(message: ControllerGenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControllerGenesisState;
  static deserializeBinaryFromReader(message: ControllerGenesisState, reader: jspb.BinaryReader): ControllerGenesisState;
}

export namespace ControllerGenesisState {
  export type AsObject = {
    activeChannelsList: Array<ActiveChannel.AsObject>,
    interchainAccountsList: Array<RegisteredInterchainAccount.AsObject>,
    portsList: Array<string>,
    params?: ibc_applications_interchain_accounts_controller_v1_controller_pb.Params.AsObject,
  }
}

export class HostGenesisState extends jspb.Message {
  getActiveChannelsList(): Array<ActiveChannel>;
  setActiveChannelsList(value: Array<ActiveChannel>): HostGenesisState;
  clearActiveChannelsList(): HostGenesisState;
  addActiveChannels(value?: ActiveChannel, index?: number): ActiveChannel;

  getInterchainAccountsList(): Array<RegisteredInterchainAccount>;
  setInterchainAccountsList(value: Array<RegisteredInterchainAccount>): HostGenesisState;
  clearInterchainAccountsList(): HostGenesisState;
  addInterchainAccounts(value?: RegisteredInterchainAccount, index?: number): RegisteredInterchainAccount;

  getPort(): string;
  setPort(value: string): HostGenesisState;

  getParams(): ibc_applications_interchain_accounts_host_v1_host_pb.Params | undefined;
  setParams(value?: ibc_applications_interchain_accounts_host_v1_host_pb.Params): HostGenesisState;
  hasParams(): boolean;
  clearParams(): HostGenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostGenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: HostGenesisState): HostGenesisState.AsObject;
  static serializeBinaryToWriter(message: HostGenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostGenesisState;
  static deserializeBinaryFromReader(message: HostGenesisState, reader: jspb.BinaryReader): HostGenesisState;
}

export namespace HostGenesisState {
  export type AsObject = {
    activeChannelsList: Array<ActiveChannel.AsObject>,
    interchainAccountsList: Array<RegisteredInterchainAccount.AsObject>,
    port: string,
    params?: ibc_applications_interchain_accounts_host_v1_host_pb.Params.AsObject,
  }
}

export class ActiveChannel extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): ActiveChannel;

  getPortId(): string;
  setPortId(value: string): ActiveChannel;

  getChannelId(): string;
  setChannelId(value: string): ActiveChannel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveChannel.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveChannel): ActiveChannel.AsObject;
  static serializeBinaryToWriter(message: ActiveChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveChannel;
  static deserializeBinaryFromReader(message: ActiveChannel, reader: jspb.BinaryReader): ActiveChannel;
}

export namespace ActiveChannel {
  export type AsObject = {
    connectionId: string,
    portId: string,
    channelId: string,
  }
}

export class RegisteredInterchainAccount extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): RegisteredInterchainAccount;

  getPortId(): string;
  setPortId(value: string): RegisteredInterchainAccount;

  getAccountAddress(): string;
  setAccountAddress(value: string): RegisteredInterchainAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisteredInterchainAccount.AsObject;
  static toObject(includeInstance: boolean, msg: RegisteredInterchainAccount): RegisteredInterchainAccount.AsObject;
  static serializeBinaryToWriter(message: RegisteredInterchainAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisteredInterchainAccount;
  static deserializeBinaryFromReader(message: RegisteredInterchainAccount, reader: jspb.BinaryReader): RegisteredInterchainAccount;
}

export namespace RegisteredInterchainAccount {
  export type AsObject = {
    connectionId: string,
    portId: string,
    accountAddress: string,
  }
}

