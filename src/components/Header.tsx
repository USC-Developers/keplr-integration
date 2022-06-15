import React, { useEffect } from "react";
import { withModal } from "./hocs/withModal";
import ConnectWallet from "./modals/connectWallet";
import { compose } from "redux";

import { withServices } from "./hocs/withServices";
import { Global, setForceConnect, setForceExchangeModal } from "../state";
import { withServiceContainer } from "../global";

import Account from "./modals/account";

import { useSelector, useDispatch } from "react-redux";
import { truncate } from "../helpers";

import usc from "../assets/img/usc.jpeg";

interface HeaderProps extends withServiceContainer {
  onOpenModal: () => void;
}

const Header = ({ onOpenModal, container }: HeaderProps) => {
  const dispatch = useDispatch();

  const { forceConnectModal, showAccaount } = useSelector(
    ({ global }: { global: Global }) => ({
      forceConnectModal: global.forceConnectModal,
      showAccaount: global.showAccaount,
    })
  );

  useEffect(() => {
    if (forceConnectModal) {
      onOpenModal();
      dispatch(setForceConnect(false));
      dispatch(setForceExchangeModal(true));
    }
  }, [forceConnectModal]);

  return (
    <header>
      <div className="logoWrap">
        <img src={usc} alt="" width={50} />
      </div>

      {container.cosmos?.account ? (
        <Account address={truncate(container.cosmos?.account.address, 20)!} />
      ) : (
        <a role="button" className="btn connectBtn" onClick={onOpenModal}>
          Connect Wallet
        </a>
      )}

      {/*showAccaount && <Account/>*/}
    </header>
  );
};

export default compose<any>(withModal(ConnectWallet), withServices)(Header);
