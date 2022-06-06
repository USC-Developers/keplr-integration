import React, { useEffect } from "react";
import { tendermint, InstallError } from "@cosmostation/extension-client";
import { Window as KeplrWindow } from "@keplr-wallet/types";
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
import keplrClient from "./keplrClient";

export default function App() {
  const w: any = window;

  useEffect(() => {
    //@ts-ignore
  

    setTimeout(async () => {
      const client = await keplrClient("osmo-test-4", "rpc-test.osmosis.zone").connect()

      false &&  await client.getTrx("717ACD489F5866B654B8E97505D6933B09027EE9B64C56E8929B86D0289CE76D")

      false && await client.getBalance();

      false && await client.sendMsg(
        [
          {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: {
              amount: [coin(1, "uosmo")],
              fromAddress: "osmo1sfdhe0yx7vhlx00hvws3pxwct8snzw6d0q743l",
              toAddress: "osmo1rlq5ys78thcrdjr4q7d0h66as60z7eu2jr6ta6",
            },
          },
        ],
        "test"
      );
    }, 200)


  
  }, []);

  return <div>1</div>;
}

/**
 *
 *
 *
 * together illness rail cake correct foam trick script budget animal assist jazz
 */

/**
 *
 *
 * sniff brick coconut turkey tree tool tray dragon island olympic token alone
 */
