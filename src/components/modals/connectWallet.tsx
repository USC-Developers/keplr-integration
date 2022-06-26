import React, { PureComponent, useState } from "react";

import keplr from "../../assets/img/kpl.png";
import { useDispatch } from "react-redux";
import { withServices } from "../hocs/withServices";
import keplrClient, { KeplrClient } from "../../services/keplrClient";
import { ServiceContainer, withServiceContainer } from "../../global";
import { setBalances } from "../../state";

import { CONFIG } from "../../config";
import { set } from "immer/dist/internal";

interface ConnectWalletProps extends withServiceContainer {
  onClose: () => void;
}

const ConnectWallet = ({
  container,
  setContainer,
  onClose,
}: ConnectWalletProps) => {
  //todo types

  const dispatch = useDispatch();

  const [connection, setConnection] = useState(false);

  const setKeplr = async () => {
    let client: KeplrClient | null;
    setConnection(true);
    try {
      client = await keplrClient(
        CONFIG.chain,
        `${CONFIG.chainIp}:${CONFIG.rpcPort}`,
        `${CONFIG.chainIp}:${CONFIG.restPort}`
      ).connect();

      if (client) {
        const res = await client.getBalance();
        console.log(res.balancesList);
        dispatch(setBalances(res.balancesList));

        setContainer({
          ...container,
          cosmos: client,
        });
        setConnection(false);

        onClose();
      }
    } catch (e) {
      client = null;
      console.log(e);
      setConnection(false);
    }
  };

  return (
    <div className="connectModal">
      <h2>Connect with:</h2>

      <ul>
        <li onClick={() => !connection && setKeplr()}>
          <img src={keplr} alt="keplr" />
          {connection ? (
            <div className="lds-ellipsis small">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <span>Keplr Wallet</span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default withServices(ConnectWallet);
