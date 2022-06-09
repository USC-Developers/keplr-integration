import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../gogoproto/gogo_pb';
import * as tendermint_crypto_keys_pb from '../../tendermint/crypto/keys_pb';


export class ValidatorSet extends jspb.Message {
  getValidatorsList(): Array<Validator>;
  setValidatorsList(value: Array<Validator>): ValidatorSet;
  clearValidatorsList(): ValidatorSet;
  addValidators(value?: Validator, index?: number): Validator;

  getProposer(): Validator | undefined;
  setProposer(value?: Validator): ValidatorSet;
  hasProposer(): boolean;
  clearProposer(): ValidatorSet;

  getTotalVotingPower(): number;
  setTotalVotingPower(value: number): ValidatorSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorSet.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorSet): ValidatorSet.AsObject;
  static serializeBinaryToWriter(message: ValidatorSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorSet;
  static deserializeBinaryFromReader(message: ValidatorSet, reader: jspb.BinaryReader): ValidatorSet;
}

export namespace ValidatorSet {
  export type AsObject = {
    validatorsList: Array<Validator.AsObject>,
    proposer?: Validator.AsObject,
    totalVotingPower: number,
  }
}

export class Validator extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): Validator;

  getPubKey(): tendermint_crypto_keys_pb.PublicKey | undefined;
  setPubKey(value?: tendermint_crypto_keys_pb.PublicKey): Validator;
  hasPubKey(): boolean;
  clearPubKey(): Validator;

  getVotingPower(): number;
  setVotingPower(value: number): Validator;

  getProposerPriority(): number;
  setProposerPriority(value: number): Validator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Validator.AsObject;
  static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
  static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Validator;
  static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
}

export namespace Validator {
  export type AsObject = {
    address: Uint8Array | string,
    pubKey?: tendermint_crypto_keys_pb.PublicKey.AsObject,
    votingPower: number,
    proposerPriority: number,
  }
}

export class SimpleValidator extends jspb.Message {
  getPubKey(): tendermint_crypto_keys_pb.PublicKey | undefined;
  setPubKey(value?: tendermint_crypto_keys_pb.PublicKey): SimpleValidator;
  hasPubKey(): boolean;
  clearPubKey(): SimpleValidator;

  getVotingPower(): number;
  setVotingPower(value: number): SimpleValidator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleValidator.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleValidator): SimpleValidator.AsObject;
  static serializeBinaryToWriter(message: SimpleValidator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleValidator;
  static deserializeBinaryFromReader(message: SimpleValidator, reader: jspb.BinaryReader): SimpleValidator;
}

export namespace SimpleValidator {
  export type AsObject = {
    pubKey?: tendermint_crypto_keys_pb.PublicKey.AsObject,
    votingPower: number,
  }
}

