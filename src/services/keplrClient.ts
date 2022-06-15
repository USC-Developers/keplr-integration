import {
  SigningStargateClient,
  QueryClient,
  GasPrice,
  StdFee,
} from "@cosmjs/stargate";

import { coin as coinInstance, BroadcastMode as BM } from "@cosmjs/launchpad";

import {
  BaseAccount,
  ModuleAccount,
} from "../grpc/cosmos/auth/v1beta1/auth_pb";

import { QueryClient as BaknQuery } from "../grpc/cosmos/bank/v1beta1/QueryServiceClientPb";

import { QueryAllBalancesRequest } from "../grpc/cosmos/bank/v1beta1/query_pb";

import { MsgSend } from "../grpc/cosmos/bank/v1beta1/tx_pb";
import {
  MsgMintUSC,
  MsgRedeemCollateral,
} from "../grpc/gaia/usc/v1beta1/tx_pb";
import { MsgTransfer } from "../grpc/ibc/applications/transfer/v1/tx_pb";
import {
  QueryPoolRequest,
  QueryParamsRequest,
  QueryRedeemEntryRequest,
} from "../grpc/gaia/usc/v1beta1/query_pb";
import { QueryClient as UscQueryClient } from "../grpc/gaia/usc/v1beta1/QueryServiceClientPb";

import { ServiceClient } from "../grpc/cosmos/tx/v1beta1/ServiceServiceClientPb";
import { GetLatestBlockRequest } from "../grpc/cosmos/base/tendermint/v1beta1/query_pb";
import { TxRaw, SignDoc } from "../grpc/cosmos/tx/v1beta1/tx_pb";

import {
  SimulateRequest,
  BroadcastTxRequest,
  BroadcastMode,
} from "../grpc/cosmos/tx/v1beta1/service_pb";
import {
  QueryAccountRequest,
  QueryAccountsRequest,
} from "../grpc/cosmos/auth/v1beta1/query_pb";

import { QueryClient as AuthClient } from "../grpc/cosmos/auth/v1beta1/QueryServiceClientPb";

import { ServiceClient as TendermintService } from "../grpc/cosmos/base/tendermint/v1beta1/QueryServiceClientPb";

import { getCoinList } from "../helpers";
import { CosmosAcc, IBCTransfer } from "../global";

import { Window as KeplrWindow } from "@keplr-wallet/types";
import TxBuilder, { TxBuilder as TxBuilderType } from "./txBuilder";

import { setChain } from "../helpers";
import { CONFIG } from "../config";
import { deprecate } from "util";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

interface OfflineSigner {
  chainId?: string;
  getAccounts(): string[];
}

//onst w: any = window;

class KeplrClient {
  signer: any;
  account: CosmosAcc = {
    address: "",
    pubKey: Uint8Array.from([]),
    sequence: 0,
    accountNumber: 0,
  };
  stargate: SigningStargateClient | undefined;
  chain: string = "";
  rpc: string = "";
  rest: string = "";

  proxy = CONFIG.proxyUrl;
  txService: ServiceClient;
  txBuilder: TxBuilderType;

  constructor(chain: string, rpc: string, rest: string) {
    this.chain = chain;
    this.rpc = rpc;
    this.rest = rest;
    this.txService = new ServiceClient(this.proxy);
    this.txBuilder = TxBuilder(chain, CONFIG.feesDenom);
    return this;
  }

  public async connect(
    chain?: string,
    rpc?: string,
    rest?: string,
    prefix?: string,
    name?: string,
    denom?: string
  ) {
    if (!window.keplr) {
      alert("Please install Keplr Browser Wallet");
      throw new Error("no browser ext");
    }
    try {
      try {
        await window.keplr?.enable(chain || this.chain);
      } catch (e) {
        await window.keplr?.experimentalSuggestChain(
          setChain(
            chain || this.chain,
            rpc || this.rpc,
            rest || this.rest,
            prefix,
            name,
            denom
          )
        );
        await window.keplr?.enable(chain || this.chain);
      }

      if (chain) return null;

      this.signer = window.keplr?.getOfflineSigner(this.chain);

      this.account.address = (await this.signer?.getAccounts())[0].address;

      this.stargate = await this.getStargate(
        CONFIG.osmosisUrl,
        CONFIG.osmosisChain
      );

      /*this.stargate = await SigningStargateClient.connectWithSigner(
        this.rpc,
        this.signer!
      )*/

      await this.getAccount();

      return this;
    } catch (e) {
      throw e;
    }
  }

  private async getStargate(rpc: string, chain: string) {
    const signer = window.keplr?.getOfflineSigner(chain);

    return await SigningStargateClient.connectWithSigner(rpc, signer!);
  }

  public async getBlock(block?: number) {
    if (!block) {
      const client = new TendermintService(this.proxy);
      const req = new GetLatestBlockRequest();
      const res = await client.getLatestBlock(req, null);

      console.log(res.toObject());

      return res.toObject();
    }
  }

  public async getBalance() {
    const client = new BaknQuery(this.proxy);

    const req = new QueryAllBalancesRequest().setAddress(this.account.address);

    return (await client.allBalances(req, null)).toObject();
  }

  /**
   * @deprecated The method should not be used
   */
  public async sendWithCosmo(msg: any[], memo: string) {
    if (this.stargate) {
      const gas = await this.stargate.simulate(this.account.address, msg, memo);

      console.log(gas);

      const res = await this.stargate.signAndBroadcast(
        this.account.address,
        msg,
        {
          gas: (gas * 1.4).toFixed(0),
          amount: [coinInstance(1, "stake")],
        },
        memo
      );

      console.log(res);
    }
  }

  /**
   * @deprecated The method should not be used
   */
  public async getTrx(hash: string) {
    return await this.stargate?.getTx(hash);
  }

  private async getAccount() {
    const client = new AuthClient(this.proxy);
    const req = new QueryAccountRequest().setAddress(this.account.address);

    // const h = await this.getBlock()

    try {
      const res = await client.account(req, null);

      const { accountNumber, sequence } = BaseAccount.deserializeBinary(
        res.toObject()?.account.value
      ).toObject();

      console.log(sequence, "dasdfdsf");

      this.account = {
        ...this.account,
        accountNumber,
        sequence,
      };
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  public async getPool() {
    const client = new UscQueryClient(this.proxy);

    const req = new QueryPoolRequest();

    const res = await client.pool(req, null);
    console.log(res.toObject());
  }

  public async getParams() {
    const client = new UscQueryClient(this.proxy);

    const req = new QueryParamsRequest();

    const res = await client.params(req, null);
    console.log(res.toObject());
  }

  public async getRedeems(address: string) {
    const client = new UscQueryClient(this.proxy);

    const req = new QueryRedeemEntryRequest().setAddress(address);

    const res = await client.redeemEntry(req, null);

    return res.toObject();
  }

  private async Simulate(tx: Uint8Array) {
    const req = new SimulateRequest().setTxBytes(tx);

    try {
      const { gasInfo } = (
        await this.txService.simulate(req, null)
      )?.toObject();
      return gasInfo?.gasUsed;
    } catch (e) {
      console.log(e, "in Simulate");
      return undefined;
    }
  }

  private async Broadcast(
    signDoc: SignDoc,
    gas: number | undefined,
    bodyBytes: Uint8Array
  ) {
    await this.getAccount();

    try {
      //@ts-ignore
      return (
        window.keplr
          //@ts-ignore
          ?.signDirect(this.chain, this.account.address, signDoc.toObject())
          .then(async (sig: any) => {
            console.log(sig);

            const authInfoBytes = await this.txBuilder.setTxAuthInfo(
              this.account
            );

            const tx = new TxRaw()
              .setBodyBytes(sig.signed.bodyBytes)
              .setAuthInfoBytes(authInfoBytes)
              .setSignaturesList([sig.signature.signature])
              .serializeBinary();

            const req = new BroadcastTxRequest()
              .setTxBytes(tx)
              .setMode(BroadcastMode.BROADCAST_MODE_BLOCK);

            return await this.txService.broadcastTx(req, null);
          })
      );
    } catch (e: any) {
      console.log(e);
      if (e.message.includes("Request rejected"))
        throw new Error("rejected by user");
      return undefined;
    }
  }

  public async mintUSC(amount: string, denom: string) {
    const msg = new MsgMintUSC()
      .setAddress(this.account.address)
      .setCollateralAmountList(getCoinList(amount, denom));

    const bodyBytes = this.txBuilder.buildTxBody(
      msg,
      "/gaia.usc.v1beta1.MsgMintUSC",
      "Mining USC tokens"
    );

    const [tx, signDocBytes] = await this.txBuilder.buildTx(
      bodyBytes,
      this.account
    );

    //const gas = await this.Simulate(tx)

    return await this.Broadcast(
      SignDoc.deserializeBinary(signDocBytes),
      undefined,
      bodyBytes
    );
  }

  public async burnUSC(amount: string) {
    const msg = new MsgRedeemCollateral()
      .setAddress(this.account.address)
      .setUscAmount(getCoinList(amount, CONFIG.uscToken.denom)[0]);

    const bodyBytes = this.txBuilder.buildTxBody(
      msg,
      "/gaia.usc.v1beta1.MsgRedeemCollateral",
      "Burn USC tokens"
    );

    const [tx, signDocBytes] = await this.txBuilder.buildTx(
      bodyBytes,
      this.account
    );

    //const gas = await this.Simulate(tx)

    return await this.Broadcast(
      SignDoc.deserializeBinary(signDocBytes),
      undefined,
      bodyBytes
    );
  }

  public async transferCoins(toAddress: string, amount: string) {
    const msg = new MsgSend()
      .setToAddress(toAddress)
      .setAmountList(getCoinList(amount, "stake"))
      .setFromAddress(this.account.address);

    const bodyBytes = this.txBuilder.buildTxBody(
      msg,
      "/cosmos.bank.v1beta1.MsgSend",
      `Send Coins to ${toAddress}`
    );

    const [tx, signDocBytes] = await this.txBuilder.buildTx(
      bodyBytes,
      this.account
    );

    const gas = await this.Simulate(tx);

    const res = await this.Broadcast(
      SignDoc.deserializeBinary(signDocBytes),
      2500,
      bodyBytes
    );

    console.log(res);
  }

  public async IBCtransfer({ from, to, amount, denom }: IBCTransfer) {
    await this.connect(
      CONFIG.osmosisChain,
      CONFIG.osmosisUrl,
      CONFIG.osmosisRest,
      "osmo",
      "Osmosis testnet",
      "uosmo"
    );

    const [stargate, timestamp] = await Promise.all([
      (async () => {
        const a = await this.getStargate(
          CONFIG.osmosisUrl,
          CONFIG.osmosisChain
        );

        return a;
      })(),
      (async () => {
        const block = await this.getBlock();
        return block?.block?.header?.time.seconds;
      })(),
    ]);

    const tx = await stargate.sendIbcTokens(
      from,
      to,
      coinInstance(amount, denom),
      "transfer",
      CONFIG.ibcChannel,
      undefined,
      timestamp + 20000,
      {
        amount: [coinInstance("1000", "usomo")],
        gas: "1000000",
      }
    );

    return tx;
  }
}

export default (chain: string, rpc: string, rest: string): KeplrClient =>
  new KeplrClient(chain, rpc, rest);

export type { KeplrClient };
