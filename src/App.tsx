import React, { useEffect } from "react";

import {

  coin,
} from "@cosmjs/launchpad";



import keplrClient from "./keplrClient";

export default function App() {
  const w: any = window;

  useEffect(() => {

  

    setTimeout(async () => {

      const client = await keplrClient("usc-gaia-2", "167.172.180.70:26657", "167.172.180.70:1317").connect()


      //await client.getAccount()

   
      false && await client.sendWithCosmo(
        [
          {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: {
              amount: [coin(1, "stake")],
              fromAddress: "cosmos1sfdhe0yx7vhlx00hvws3pxwct8snzw6d8md98d",
              toAddress: "cosmos15zwjg6q62lcejtz4fauq5ltm0zlrwam8003lyz",
            },
          },
        ],
        "test"
      );



    }, 200)
  
  }, []);

  return <div>1</div>;
}


/*

{
  "txBody": {
    "messages": [
      {
        "fromAddress": "cosmos1sfdhe0yx7vhlx00hvws3pxwct8snzw6d8md98d",
        "toAddress": "cosmos15zwjg6q62lcejtz4fauq5ltm0zlrwam8003lyz",
        "amount": [
          {
            "denom": "stake",
            "amount": "1"
          }
        ]
      }
    ],
    "memo": "test",
    "timeoutHeight": "0",
    "extensionOptions": [],
    "nonCriticalExtensionOptions": []
  },
  "authInfo": {
    "signerInfos": [
      {
        "publicKey": {
          "typeUrl": "/cosmos.crypto.secp256k1.PubKey",
          "value": "CiECVvop74OWRkre6G+Qus95ghMGII+n2+/8yFZzq7guTx8="
        },
        "modeInfo": {
          "single": {
            "mode": "SIGN_MODE_DIRECT"
          }
        },
        "sequence": "1"
      }
    ],
    "fee": {
      "amount": [
        {
          "denom": "stake",
          "amount": "1965"
        }
      ],
      "gasLimit": "78599",
      "payer": "",
      "granter": ""
    }
  },
  "chainId": "usc-gaia-2",
  "accountNumber": "8"


*/