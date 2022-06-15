import React, { FC } from "react";

import usdt from "../../assets/img/usdt.svg";
import usc from "../../assets/img/usc.jpeg";
import ust from "../../assets/img/ust.png";

import { useDispatch, useSelector } from "react-redux";
import {
  setTab,
  Global,
  selectGaiaToken,
  selectOsmosisToken,
} from "../../state";
import { CONFIG } from "../../config";

import { Next as Previous } from "./withMethods";

import { Dropdown } from "../elements/dropdown";

export interface Next extends Previous {
  TabElements: {
    "Transfer from  Osmosis": JSX.Element;
    Mint: JSX.Element;
    Redeem: JSX.Element;
  };
  renderTabs: JSX.Element[];
  selectedTab: string;
}

const tabs = ["Transfer from  Osmosis", "Mint", "Redeem"];

export const withTabs = (Wrapped: FC<Next>) => (props: Previous) => {
  const dispatch = useDispatch();

  const {
    state: { mintInput, burnInput, transferFrom, transferTo, transferAmount },
    setStateVal,
    methods,
  } = props;

  const { selectedTab, selectedGaiaToken, selectedOsmosisToken } = useSelector(
    ({ global }: { global: Global }) => ({
      selectedTab: global.selectedTab,
      selectedGaiaToken: global.selectedGaiaToken,
      selectedOsmosisToken: global.selectedOsmosisToken,
    })
  );

  const renderTabs = tabs.map((tab, i) => (
    <li
      key={i + "tab"}
      onClick={() => dispatch(setTab(tab))}
      className={`${tab === selectedTab ? "selected" : ""}`}
    >
      {tab}
    </li>
  ));

  const TabElements = {
    "Transfer from  Osmosis": (
      <>
        <li className="trasferWrap">
          <div className="transferRow">
            <Dropdown
              items={CONFIG.osmosisTokens}
              selectEntity={selectOsmosisToken}
            />

            <span className="to">To</span>
            <div className="coinWrap">
              <img src={usc} alt="" className="coinIcon" />
              <span>USC</span>
            </div>
            <div className="inputWrap">
              <span>Amount</span>
              <input
                type="text"
                className="convertInput"
                value={transferAmount}
                onChange={(e) => setStateVal(e.target.value, "transferAmount")}
              />
              <span>{selectedGaiaToken.name.toLowerCase()}</span>
            </div>
            <button
              className="btn"
              onClick={() => methods.onTransfer(selectedOsmosisToken.denom)}
            >
              Transfer
            </button>
          </div>

          <div className="transferRow" style={{ justifyContent: "flex-start" }}>
            <div className="inputWrap">
              <span>From:</span>
              <input
                type="text"
                className="convertInput"
                value={transferFrom}
                onChange={(e) => setStateVal(e.target.value, "transferFrom")}
              />
            </div>
            <div className="inputWrap">
              <span>To:</span>
              <input
                type="text"
                className="convertInput"
                value={transferTo}
                onChange={(e) => setStateVal(e.target.value, "transferTo")}
              />
            </div>
          </div>
        </li>
      </>
    ),
    Mint: (
      <li>
        <Dropdown items={CONFIG.gaiaTokens} selectEntity={selectGaiaToken} />

        <span className="to">To</span>
        <div className="coinWrap">
          <img src={usc} alt="" className="coinIcon" />
          <span>USC</span>
        </div>
        <div className="inputWrap">
          <span>Amount</span>
          <input
            type="text"
            className="convertInput"
            value={mintInput}
            onChange={(e) => setStateVal(e.target.value, "mintInput")}
          />
          <span>{selectedGaiaToken.name.toLowerCase()}</span>
        </div>
        <button
          className="btn"
          onClick={() => methods.onMint(selectedGaiaToken.denom)}
        >
          Mint
        </button>
      </li>
    ),
    Redeem: (
      <li className="lefty">
        <div className="coinWrap">
          <img src={usc} alt="" className="coinIcon" />
          <span>USC</span>
        </div>
        <div className="inputWrap">
          <span>Amount</span>
          <input
            type="text"
            className="convertInput"
            value={burnInput}
            onChange={(e) => setStateVal(e.target.value, "burnInput")}
          />
          <span>usc</span>
        </div>
        <button className="btn" onClick={methods.onBurn}>
          Redeem
        </button>
      </li>
    ),
  };

  return (
    <Wrapped
      selectedTab={selectedTab}
      TabElements={TabElements}
      renderTabs={renderTabs}
      {...props}
    />
  );
};
