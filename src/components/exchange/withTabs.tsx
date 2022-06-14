import React, { FC, useState } from "react";

import { withServices } from "../hocs/withServices";

import {
  withServiceContainer, 
} from "../../global";
import bignumber from "bignumber.js";
import usdt from "../../assets/img/usdt.svg";
import usc from "../../assets/img/usc.jpeg";

import { useDispatch, useSelector } from "react-redux";
import { setTab ,Global } from "../../state";
import { CONFIG } from "../../config";

import {Next as Previous} from './withMethods'



export interface Next extends Previous {
    TabElements: {
        "Transfer from  Osmosis": JSX.Element;
        Mint: JSX.Element;
        Redeem: JSX.Element;
    },
    renderTabs: JSX.Element[],

}


const tabs = ["Transfer from  Osmosis", "Mint", "Redeem"]

export const withTabs = (Wrapped: FC<Next>) =>
  (props:Previous) => {
    const dispatch = useDispatch();

    const {state: {mintInput,burnInput, transferFrom, transferTo, transferAmount }, setStateVal, methods} = props

    const { selectedTab } = useSelector(
        ({ global }: { global: Global }) => ({
       
          selectedTab: global.selectedTab,
        })
      );
    

    const renderTabs = tabs.map((tab, i) => (
        <li
            key={i + 'tab'}
          onClick={() => dispatch(setTab(tab))}
          className={`${tab === selectedTab ? "selected" : ""}`}
        >
          {tab}
        </li>
      ));


      const TabElements = {
        "Transfer from  Osmosis": (
            <>
            <li>
                <div className="transferRow">
                <div className="inputWrap">
                    <span>From:</span>
                    <input type="text"  className="convertInput" value={transferFrom} onChange={(e) => setStateVal(e.target.value, 'transferFrom')}/>
                    </div>
                    <div className="inputWrap">
                    <span>To:</span>
                    <input type="text"  className="convertInput" value={transferTo} onChange={(e) => setStateVal(e.target.value, 'transferTo')}/>
                    </div>
                </div>
                
            </li>
            <li>
            <div className="transferRow">
                <div className="inputWrap">
                    <span>Amount</span>
                    <input type="text"  className="convertInput" value={transferAmount} onChange={(e) => setStateVal(e.target.value, 'transferAmount')}/>
                    <span>ust</span>
                    </div>
                    <button className="btn" onClick={methods.onTransfer}>
                        Transfer
                        </button>
                </div>
            </li>
            </>
        ), 
        Mint: (
          <li>
            <div className="coinWrap">
              <img src={usdt} alt="" width={30} />
              <span>USDT</span>
            </div>
            <span className="to">To</span>
            <div className="coinWrap">
              <img src={usc} alt="" width={30} />
              <span>USC</span>
            </div>
            <div className="inputWrap">
              <span>Amount</span>
              <input
                type="text"
                className="convertInput"
                value={mintInput}
                onChange={(e) => setStateVal(e.target.value, 'mintInput')}
              />
              <span>usdt</span>
            </div>
            <button className="btn" onClick={() => methods.onMint(CONFIG.ustDenom)}>
              Mint
            </button>
          </li>
        ),
        Redeem: (
          <li className="lefty">
            <div className="coinWrap">
              <img src={usc} alt="" width={30} />
              <span>USC</span>
            </div>
            <div className="inputWrap">
              <span>Amount</span>
              <input
                type="text"
                className="convertInput"
                value={burnInput}
                onChange={(e) => setStateVal(e.target.value, 'burnInput')}
              />
              <span>usc</span>
            </div>
            <button className="btn" onClick={methods.onBurn}>
              Redeem
            </button>
          </li>
        ),
      };
     


    return <Wrapped TabElements={TabElements} renderTabs={renderTabs} {...props}/>;
  }
