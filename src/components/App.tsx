import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import keplrClient from "../services/keplrClient";

import Header from "../components/Header";
import Main from "../components/Main";
import { Status } from "./popups/Status";
import ConnectWallet from "./modals/connectWallet";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import Modal from "./cosmostation/index";
import { ServiceProvider } from "./hocs/ServcieProvder";
import { ServiceContainer } from "../global";

import { Global, toggleAccount } from "../state";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "../store";
import "../assets/reset.scss";
import "../assets/main.scss";
import "../assets/misc.css";
import MainHeader from "./mainPage/Header";
import MainPage from "./mainPage/Main";
import { MintPage } from "../components/pages/mint";
import MainFooter from "./mainPage/Footer";

export default function App() {
  const [container, setContainer] = useState<ServiceContainer>({});

  const { cosmos } = container;

  useEffect(() => {
    /*(async () => {
      const connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", // Required
        signingMethods: [
          "cosmostation_wc_accounts_v1",
          "cosmostation_wc_sign_tx_v1",
        ],

        qrcodeModal: Modal,
      });

      //connector.killSession();

      if (!connector.connected) {
        // create new session
        connector.createSession();
      }

      // Subscribe to connection events
      connector.on("connect", (error, payload) => {
        if (error) {
          throw error;
        }

        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
        console.log(accounts, chainId);
      });

      connector.on("session_update", (error, payload) => {
        if (error) {
          throw error;
        }

        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];

        console.log(accounts, "update");
      });
    })();*/
  }, []);

  const BodyWrapper = ({ children }: { children: React.ReactChild }) => {
    const dispatch = useDispatch();

    return (
      <div className="app" onClick={() => dispatch(toggleAccount(false))}>
        {children}
      </div>
    );
  };

  return (
    <ServiceProvider value={{ container, setContainer }}>
      <Provider store={store}>
        <BodyWrapper>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainHeader />
                  <MainPage />
                  <MainFooter />
                </>
              }
            />
            <Route path="/mint" element={<MintPage />} />
            <Route path="/redeem" element={<MintPage />} />
          </Routes>
        </BodyWrapper>
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
