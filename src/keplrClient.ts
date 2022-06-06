import React, { useEffect } from "react";
import { tendermint, InstallError } from "@cosmostation/extension-client";

import {
  Secp256k1HdWallet,
  SigningCosmosClient,
  coins,
  MsgDelegate,
  coin,
} from "@cosmjs/launchpad";

import {
  SigningStargateClient,
  StargateClient,
  GasPrice,
  MsgSendEncodeObject,
  StdFee,
} from "@cosmjs/stargate";

import { QueryClient } from "./cosmosProtoTypes/cosmos/bank/v1beta1/QueryServiceClientPb";
import { MsgSend } from "./cosmosProtoTypes/cosmos/bank/v1beta1/tx_pb";
import { SimulateRequest } from "./cosmosProtoTypes/cosmos/tx/v1beta1/service_pb";

interface OfflineSigner {
  chainId?: string;
  getAccounts(): string[];
}

const w: any = window;

class KeplrClient {
  signer: any;
  account: string = "";
  client: SigningStargateClient | undefined;

  chain:string = ''
  network: string = ''

  constructor(chain: string, network: string) {

    this.chain = chain
    this.network = network

    return this
 
    
  }

  public async connect() {
    try {

      await w.keplr.enable(this.chain)

      this.signer = w.getOfflineSigner(this.chain);

      this.account = (await this.signer?.getAccounts())[0].address;

      this.client = await SigningStargateClient.connectWithSigner(
        this.network,
        this.signer!
       // {
          // gasPrice: GasPrice.fromString(`0.1uosmo`),
        //}
      );
      return this
    } catch (e) {
      throw e;
    }
  }

  public async getBalance(
    denom: string = "uosmo",
    address: string = this.account
  ) {
    this.client &&
      this.client
        .getBalance(address, denom)
        .then((res) => {
          console.log(res, "balance");
        })
        .catch((e) => {
          throw e;
        });
  }

  public async sendMsg(
    msg: MsgSendEncodeObject[],
    memo: string
  ) {
   
    if (this.client) {

     const gas = await this.client.simulate(this.account, msg, memo)

     const res = await this.client.signAndBroadcast(this.account, msg, {
      gas: (gas * 1.4).toFixed(0),
      amount: [coin(1, "uosmo")],
    } , memo) 
     console.log(res);

    }
  }


  public async getTrx(hash:string) {
    return await this.client?.getTx(hash);
  }
}

export default (chain: string, network: string): KeplrClient => new KeplrClient(chain, network)
  
