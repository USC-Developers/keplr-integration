import React, { useEffect, useState } from "react";

import keplrClient from "../services/keplrClient";

import Header from "../components/Header";
import Main from "../components/Main";
import { Status } from "./popups/Status";
import ConnectWallet from "./modals/connectWallet";
import { ServiceProvider } from "./hocs/ServcieProvder";
import { ServiceContainer } from "../global";
import { useSelector } from "react-redux";
import { Global } from "../state";
import { Provider } from "react-redux";
import store from "../store";
import "../assets/reset.scss";
import "../assets/main.scss";
import "../assets/misc.css";

export default function App() {
  const [container, setContainer] = useState<ServiceContainer>({});

  useEffect(() => {
    container.cosmos &&
      false && setTimeout(async () => {
        await container.cosmos?.IBCtransfer({
          from: "osmo1sfdhe0yx7vhlx00hvws3pxwct8snzw6d0q743l",
          to: "cosmos1sfdhe0yx7vhlx00hvws3pxwct8snzw6d8md98d",
          amount: "100000",
          denom:
            "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
        });
      }, 200);
  }, [container]);

  return (
    <ServiceProvider value={{ container, setContainer }}>
      <Provider store={store}>
        <div className="app">
          <Header />
          <Main />
        </div>
      </Provider>
    </ServiceProvider>
  );
}

/*false && await client.sendWithCosmo(
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
      );*/
