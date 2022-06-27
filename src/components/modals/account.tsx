import React, { PureComponent, useState } from "react";

import keplr from "../../assets/img/kpl.png";
import { useDispatch } from "react-redux";
import { withServices } from "../hocs/withServices";
import keplrClient, { KeplrClient } from "../../services/keplrClient";
import {
  ServiceContainer,
  withServiceContainer,
  Coin,
  RedeemOperation,
} from "../../global";
import { compose } from "redux";
import { withModal } from "../hocs/withModal";
import { CONFIG } from "../../config";
import { Global, toggleAccount } from "../../state";
import { useSelector } from "react-redux";
import { truncate } from "../../helpers";

import { RedeemTimer } from "../elements/redeemTimer";

import bignumber from "bignumber.js";
import moment from "moment";

interface AccountModalProps {
  balancesList: Coin[];
  redeemsList: RedeemOperation[];
}

const tabs = ["Balances", "Redeems"];

export const AccountModal = ({
  balancesList,
  redeemsList,
}: AccountModalProps) => {
  const [selectedTab, setTab] = useState(tabs[0]);

  const usdc = CONFIG.gaiaTokens.find((t) => t.name === "USDC");
  const usdcAmount = balancesList.find((b) => b.denom === usdc?.denom)?.amount;

  const uscBalance =
    usdc && balancesList.length && usdcAmount
      ? new bignumber(String(usdcAmount))
          .shiftedBy(0 - usdc?.decimals)
          .toString()
      : "0";

  return (
    <div className="AccountModal">
      <p>{uscBalance} USDC</p>
      <div className="separator"></div>
      <div className="timerWrapper">
        {!redeemsList.length ? (
          <p>No redeeming tokens currently</p>
        ) : (
          <p>
            The redeeming period ends in:{" "}
            {
              <RedeemTimer
                time={moment(
                  (redeemsList[0]?.completionTime?.seconds + 15) * 1000
                )}
              />
            }
          </p>
        )}
      </div>
    </div>
  );
};

const Account = ({ address }: { address: string }) => {
  const dispatch = useDispatch();
  const { showAccaount, balancesList, redeemsList } = useSelector(
    ({ global }: { global: Global }) => ({
      showAccaount: global.showAccaount,
      balancesList: global.balancesList,
      redeemsList: global.redeemsList,
    })
  );

  return (
    <div
      className="AccountWrap"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(toggleAccount(true));
      }}
    >
      {showAccaount && (
        <AccountModal balancesList={balancesList} redeemsList={redeemsList} />
      )}
      <button className="pannelBtn">{truncate(address, 15)}</button>
    </div>
  );
};

export default Account;
