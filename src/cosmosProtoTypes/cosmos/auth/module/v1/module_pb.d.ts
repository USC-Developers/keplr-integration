import * as jspb from 'google-protobuf'

import * as cosmos_app_v1alpha1_module_pb from '../../../../cosmos/app/v1alpha1/module_pb';


export class Module extends jspb.Message {
  getBech32Prefix(): string;
  setBech32Prefix(value: string): Module;

  getModuleAccountPermissionsList(): Array<ModuleAccountPermission>;
  setModuleAccountPermissionsList(value: Array<ModuleAccountPermission>): Module;
  clearModuleAccountPermissionsList(): Module;
  addModuleAccountPermissions(value?: ModuleAccountPermission, index?: number): ModuleAccountPermission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    bech32Prefix: string,
    moduleAccountPermissionsList: Array<ModuleAccountPermission.AsObject>,
  }
}

export class ModuleAccountPermission extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): ModuleAccountPermission;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): ModuleAccountPermission;
  clearPermissionsList(): ModuleAccountPermission;
  addPermissions(value: string, index?: number): ModuleAccountPermission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleAccountPermission.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleAccountPermission): ModuleAccountPermission.AsObject;
  static serializeBinaryToWriter(message: ModuleAccountPermission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleAccountPermission;
  static deserializeBinaryFromReader(message: ModuleAccountPermission, reader: jspb.BinaryReader): ModuleAccountPermission;
}

export namespace ModuleAccountPermission {
  export type AsObject = {
    account: string,
    permissionsList: Array<string>,
  }
}

