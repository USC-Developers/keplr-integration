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

  console.log(redeemsList, "redeemsList");

  const renderTabs = tabs.map((tab, i) => (
    <li
      key={i + "tab"}
      onClick={() => setTab(tab)}
      className={`${tab === selectedTab ? "selected" : ""}`}
    >
      {tab}
    </li>
  ));

  const TabElement = {
    Balances: (
      <ul>
        {balancesList.map((balance, i) => (
          <li key={i + "bal"}>
            <span className="balanceDenom">
              {balance.denom.length > 15
                ? truncate(balance.denom, 15)
                : balance.denom}
              :
            </span>

            {/**need to change it for real decimals for given coin */}
            <span>
              {new bignumber(balance.amount).shiftedBy(-6).toString()}
            </span>
          </li>
        ))}
      </ul>
    ),
    Redeems: !redeemsList.length ? (
      <p>No redeems currently</p>
    ) : (
      <ul>
        {redeemsList.map((redeem, i) => {
          const denom = redeem.collateralAmountList[0].denom;

          return (
            <li key={i + "redeem"}>
              <span className="balanceDenom">
                {denom.length > 15 ? truncate(denom, 15) : denom}
              </span>

              <span className="balanceDenom">
                <RedeemTimer
                  time={moment(redeem?.completionTime?.seconds * 1000)}
                />
                {/*moment(redeem?.completionTime?.seconds * 1000)
                  .format("YYYY/MM/DD H:mm")
                .toString()*/}
              </span>
            </li>
          );
        })}
      </ul>
    ),
  };

  return (
    <div className="AccountModal">
      <h2>Account</h2>

      <div className="crumbsWrapper accountCrumbs">
        <ul>{renderTabs}</ul>
        <div className="accountSectionWrap">
          {
            //@ts-ignore
            TabElement[selectedTab]
          }
        </div>
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
      <span>{address}</span>
    </div>
  );
};

export default Account;
