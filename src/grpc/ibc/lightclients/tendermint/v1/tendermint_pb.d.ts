import * as jspb from 'google-protobuf'

import * as tendermint_types_validator_pb from '../../../../tendermint/types/validator_pb';
import * as tendermint_types_types_pb from '../../../../tendermint/types/types_pb';
import * as proofs_pb from '../../../../proofs_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as ibc_core_client_v1_client_pb from '../../../../ibc/core/client/v1/client_pb';
import * as ibc_core_commitment_v1_commitment_pb from '../../../../ibc/core/commitment/v1/commitment_pb';
import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';


export class ClientState extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): ClientState;

  getTrustLevel(): Fraction | undefined;
  setTrustLevel(value?: Fraction): ClientState;
  hasTrustLevel(): boolean;
  clearTrustLevel(): ClientState;

  getTrustingPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setTrustingPeriod(value?: google_protobuf_duration_pb.Duration): ClientState;
  hasTrustingPeriod(): boolean;
  clearTrustingPeriod(): ClientState;

  getUnbondingPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setUnbondingPeriod(value?: google_protobuf_duration_pb.Duration): ClientState;
  hasUnbondingPeriod(): boolean;
  clearUnbondingPeriod(): ClientState;

  getMaxClockDrift(): google_protobuf_duration_pb.Duration | undefined;
  setMaxClockDrift(value?: google_protobuf_duration_pb.Duration): ClientState;
  hasMaxClockDrift(): boolean;
  clearMaxClockDrift(): ClientState;

  getFrozenHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setFrozenHeight(value?: ibc_core_client_v1_client_pb.Height): ClientState;
  hasFrozenHeight(): boolean;
  clearFrozenHeight(): ClientState;

  getLatestHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setLatestHeight(value?: ibc_core_client_v1_client_pb.Height): ClientState;
  hasLatestHeight(): boolean;
  clearLatestHeight(): ClientState;

  getProofSpecsList(): Array<proofs_pb.ProofSpec>;
  setProofSpecsList(value: Array<proofs_pb.ProofSpec>): ClientState;
  clearProofSpecsList(): ClientState;
  addProofSpecs(value?: proofs_pb.ProofSpec, index?: number): proofs_pb.ProofSpec;

  getUpgradePathList(): Array<string>;
  setUpgradePathList(value: Array<string>): ClientState;
  clearUpgradePathList(): ClientState;
  addUpgradePath(value: string, index?: number): ClientState;

  getAllowUpdateAfterExpiry(): boolean;
  setAllowUpdateAfterExpiry(value: boolean): ClientState;

  getAllowUpdateAfterMisbehaviour(): boolean;
  setAllowUpdateAfterMisbehaviour(value: boolean): ClientState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientState.AsObject;
  static toObject(includeInstance: boolean, msg: ClientState): ClientState.AsObject;
  static serializeBinaryToWriter(message: ClientState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientState;
  static deserializeBinaryFromReader(message: ClientState, reader: jspb.BinaryReader): ClientState;
}

export namespace ClientState {
  export type AsObject = {
    chainId: string,
    trustLevel?: Fraction.AsObject,
    trustingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    unbondingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    maxClockDrift?: google_protobuf_duration_pb.Duration.AsObject,
    frozenHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    latestHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    proofSpecsList: Array<proofs_pb.ProofSpec.AsObject>,
    upgradePathList: Array<string>,
    allowUpdateAfterExpiry: boolean,
    allowUpdateAfterMisbehaviour: boolean,
  }
}

export class ConsensusState extends jspb.Message {
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ConsensusState;
  hasTimestamp(): boolean;
  clearTimestamp(): ConsensusState;

  getRoot(): ibc_core_commitment_v1_commitment_pb.MerkleRoot | undefined;
  setRoot(value?: ibc_core_commitment_v1_commitment_pb.MerkleRoot): ConsensusState;
  hasRoot(): boolean;
  clearRoot(): ConsensusState;

  getNextValidatorsHash(): Uint8Array | string;
  getNextValidatorsHash_asU8(): Uint8Array;
  getNextValidatorsHash_asB64(): string;
  setNextValidatorsHash(value: Uint8Array | string): ConsensusState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusState.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusState): ConsensusState.AsObject;
  static serializeBinaryToWriter(message: ConsensusState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusState;
  static deserializeBinaryFromReader(message: ConsensusState, reader: jspb.BinaryReader): ConsensusState;
}

export namespace ConsensusState {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    root?: ibc_core_commitment_v1_commitment_pb.MerkleRoot.AsObject,
    nextValidatorsHash: Uint8Array | string,
  }
}

export class Misbehaviour extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): Misbehaviour;

  getHeader1(): Header | undefined;
  setHeader1(value?: Header): Misbehaviour;
  hasHeader1(): boolean;
  clearHeader1(): Misbehaviour;

  getHeader2(): Header | undefined;
  setHeader2(value?: Header): Misbehaviour;
  hasHeader2(): boolean;
  clearHeader2(): Misbehaviour;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Misbehaviour.AsObject;
  static toObject(includeInstance: boolean, msg: Misbehaviour): Misbehaviour.AsObject;
  static serializeBinaryToWriter(message: Misbehaviour, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Misbehaviour;
  static deserializeBinaryFromReader(message: Misbehaviour, reader: jspb.BinaryReader): Misbehaviour;
}

export namespace Misbehaviour {
  export type AsObject = {
    clientId: string,
    header1?: Header.AsObject,
    header2?: Header.AsObject,
  }
}

export class Header extends jspb.Message {
  getSignedHeader(): tendermint_types_types_pb.SignedHeader | undefined;
  setSignedHeader(value?: tendermint_types_types_pb.SignedHeader): Header;
  hasSignedHeader(): boolean;
  clearSignedHeader(): Header;

  getValidatorSet(): tendermint_types_validator_pb.ValidatorSet | undefined;
  setValidatorSet(value?: tendermint_types_validator_pb.ValidatorSet): Header;
  hasValidatorSet(): boolean;
  clearValidatorSet(): Header;

  getTrustedHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setTrustedHeight(value?: ibc_core_client_v1_client_pb.Height): Header;
  hasTrustedHeight(): boolean;
  clearTrustedHeight(): Header;

  getTrustedValidators(): tendermint_types_validator_pb.ValidatorSet | undefined;
  setTrustedValidators(value?: tendermint_types_validator_pb.ValidatorSet): Header;
  hasTrustedValidators(): boolean;
  clearTrustedValidators(): Header;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    signedHeader?: tendermint_types_types_pb.SignedHeader.AsObject,
    validatorSet?: tendermint_types_validator_pb.ValidatorSet.AsObject,
    trustedHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    trustedValidators?: tendermint_types_validator_pb.ValidatorSet.AsObject,
  }
}

export class Fraction extends jspb.Message {
  getNumerator(): number;
  setNumerator(value: number): Fraction;

  getDenominator(): number;
  setDenominator(value: number): Fraction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fraction.AsObject;
  static toObject(includeInstance: boolean, msg: Fraction): Fraction.AsObject;
  static serializeBinaryToWriter(message: Fraction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fraction;
  static deserializeBinaryFromReader(message: Fraction, reader: jspb.BinaryReader): Fraction;
}

export namespace Fraction {
  export type AsObject = {
    numerator: number,
    denominator: number,
  }
}

