

import { encodePubkey } from "@cosmjs/proto-signing";

import { encodeSecp256k1Pubkey } from "@cosmjs/amino";
import { SignMode } from "../grpc/cosmos/tx/signing/v1beta1/signing_pb";
import { Any } from "../grpc/google/protobuf/any_pb";

import {
  TxBody,
  TxRaw,
  Fee,
  AuthInfo,
  SignerInfo,
  ModeInfo,
  SignDoc,
} from "../grpc/cosmos/tx/v1beta1/tx_pb";
import { Coin } from "../grpc/cosmos/base/v1beta1/coin_pb";

import { MsgType, CosmosAcc } from "../global";

import { Window as KeplrWindow } from "@keplr-wallet/types";


declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}


class TxBuilder {

    chain: string
    feesDenom: string

    constructor(chain:string, feesDenom:string) {
        this.chain = chain
        this.feesDenom = feesDenom
    }


    public buildTxBody(msg: MsgType, typeUrl: string, memo: string) {
        const wrappedMsg = new Any()
          .setTypeUrl(typeUrl)
          .setValue(msg.serializeBinary());
        const txBody = new TxBody()
          .setMessagesList([wrappedMsg])
          .setTimeoutHeight(0)
          .setExtensionOptionsList([])
          .setMemo(memo);
    
        return txBody.serializeBinary();
      }


       public async setPubKey(account:CosmosAcc) {
        try {
          const key = await window!.keplr!.getKey(this.chain);
          console.log(key, 'key')
          const pubKey = encodePubkey(encodeSecp256k1Pubkey(key.pubKey));
    
          console.log(pubKey);
    
          account.pubKey = pubKey.value;
          return account.pubKey;
        } catch (e) {
          return Uint8Array.from([]);
        }
      }


      public setSignDoc(bodyBytes: Uint8Array, authInfoBytes: Uint8Array,  account:CosmosAcc) {
        const signDoc = new SignDoc();
        signDoc.setBodyBytes(bodyBytes);
        signDoc.setAuthInfoBytes(authInfoBytes);
        signDoc.setChainId(this.chain);
        signDoc.setAccountNumber(account.accountNumber);
    
        return signDoc.serializeBinary();
      }

      public async setTxAuthInfo(account:CosmosAcc, fees?: string) {

        const pubKey = account.pubKey.byteLength > 0 ? account.pubKey : (await this.setPubKey(account));
    
      
        const pubKeyAny = new Any();
    
        pubKeyAny.setTypeUrl("/cosmos.crypto.secp256k1.PubKey");
        pubKeyAny.setValue(pubKey);
    
        const authInfo = new AuthInfo();
    
        const signerInfo = new SignerInfo();
        const modeInfo = new ModeInfo();
        const singleModeInfo = new ModeInfo.Single();
        singleModeInfo.setMode(SignMode.SIGN_MODE_DIRECT);
        modeInfo.setSingle(singleModeInfo);
    
        signerInfo.setPublicKey(pubKeyAny);
        signerInfo.setModeInfo(modeInfo);
    
        signerInfo.setSequence(account.sequence);
    
        authInfo
          .setSignerInfosList([signerInfo])
          .setFee(
            new Fee()
              .setGasLimit(120000)
              .setAmountList([new Coin().setAmount(fees? String(fees) : '3000').setDenom(this.feesDenom)])
          );
    
          return authInfo.serializeBinary()
      }


      public  async buildTx  (bodyBytes:Uint8Array, account:CosmosAcc, fees?: string) {
        const authInfoBytes = await this.setTxAuthInfo(account, fees);
        const signDocBytes = this.setSignDoc(bodyBytes, authInfoBytes , account);
    
        const tx = new TxRaw()
        .setBodyBytes(bodyBytes)
        .setAuthInfoBytes(authInfoBytes)
        .setSignaturesList([signDocBytes])
        .serializeBinary();
    
        return  [tx, signDocBytes]
      }
    


}


export default (chain:string, feesDenom:string) => new TxBuilder(chain, feesDenom)
export type { TxBuilder }