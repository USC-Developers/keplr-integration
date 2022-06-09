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


      await client.simulateCustomMsg()

   
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


