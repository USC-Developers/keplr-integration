import React from "react";
import { withServices } from "../hocs/withServices";
import { withServiceContainer } from "../../global";
import Account from "../modals/account";
import { Link, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { Global, setForceConnect } from "../../state";

import ConnectWallet from "../modals/connectWallet";

import mobLogo from "../../assets/img/new/mobLogo.svg";

interface ConnectWalletProps extends withServiceContainer {}

const ConnectButton = ({ container }: ConnectWalletProps) => {
  const dispatch = useDispatch();

  const [showWalletMenu, setShow] = React.useState(false);

  const connectedUser = container.cosmos?.account.address;
  const [force, setForce] = React.useState(false);
  const { forceConnectModal } = useSelector(
    ({ global }: { global: Global }) => ({
      forceConnectModal: global.forceConnectModal,
    })
  );

  React.useEffect(() => {
    if (forceConnectModal) {
      setShow(true);
      setForce(true);
      dispatch(setForceConnect(false));
    }
  }, [forceConnectModal]);

  return (
    <>
      {showWalletMenu && (
        <ConnectWallet
          onClose={() => {
            setShow(false);
            setForce(false);
          }}
          force={force}
        />
      )}

      {!connectedUser ? (
        <button className="connectBtn" onClick={() => setShow(true)}>
          Connect Wallet
        </button>
      ) : (
        container.cosmos?.account?.address && (
          <Account address={connectedUser} />
        )
      )}
    </>
  );
};

export default withServices(ConnectButton);
