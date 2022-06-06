import * as jspb from 'google-protobuf'

import * as cosmos_app_v1alpha1_module_pb from '../../../../cosmos/app/v1alpha1/module_pb';


export class Module extends jspb.Message {
  getAppName(): string;
  setAppName(value: string): Module;

  getBeginBlockersList(): Array<string>;
  setBeginBlockersList(value: Array<string>): Module;
  clearBeginBlockersList(): Module;
  addBeginBlockers(value: string, index?: number): Module;

  getEndBlockersList(): Array<string>;
  setEndBlockersList(value: Array<string>): Module;
  clearEndBlockersList(): Module;
  addEndBlockers(value: string, index?: number): Module;

  getInitGenesisList(): Array<string>;
  setInitGenesisList(value: Array<string>): Module;
  clearInitGenesisList(): Module;
  addInitGenesis(value: string, index?: number): Module;

  getExportGenesisList(): Array<string>;
  setExportGenesisList(value: Array<string>): Module;
  clearExportGenesisList(): Module;
  addExportGenesis(value: string, index?: number): Module;

  getOverrideStoreKeysList(): Array<StoreKeyConfig>;
  setOverrideStoreKeysList(value: Array<StoreKeyConfig>): Module;
  clearOverrideStoreKeysList(): Module;
  addOverrideStoreKeys(value?: StoreKeyConfig, index?: number): StoreKeyConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    appName: string,
    beginBlockersList: Array<string>,
    endBlockersList: Array<string>,
    initGenesisList: Array<string>,
    exportGenesisList: Array<string>,
    overrideStoreKeysList: Array<StoreKeyConfig.AsObject>,
  }
}

export class StoreKeyConfig extends jspb.Message {
  getModuleName(): string;
  setModuleName(value: string): StoreKeyConfig;

  getKvStoreKey(): string;
  setKvStoreKey(value: string): StoreKeyConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreKeyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StoreKeyConfig): StoreKeyConfig.AsObject;
  static serializeBinaryToWriter(message: StoreKeyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreKeyConfig;
  static deserializeBinaryFromReader(message: StoreKeyConfig, reader: jspb.BinaryReader): StoreKeyConfig;
}

export namespace StoreKeyConfig {
  export type AsObject = {
    moduleName: string,
    kvStoreKey: string,
  }
}

