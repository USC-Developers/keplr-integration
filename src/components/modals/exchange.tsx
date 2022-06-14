import React, { PureComponent, useState } from "react";


import { withServices } from "../hocs/withServices";

import { ServiceContainer, withServiceContainer , IBCTransfer} from "../../global";
import bignumber from "bignumber.js";
import usdt from "../../assets/img/usdt.svg";
import usc from "../../assets/img/usc.jpeg";

import { Status } from "../popups/Status";
import { useDispatch, useSelector,  } from "react-redux";
import { setTxStatus, Global, setTab } from "../../state";
import { CONFIG } from "../../config";

import {compose} from 'redux'


import {Next as Previous} from '../exchange/withTabs'

interface ExchangeProps extends withServiceContainer {}

const Exchange = ({ container}: ExchangeProps) => {
  //todo types

  const dispatch = useDispatch();

  const { txStatus, selectedTab } = useSelector(
    ({ global }: { global: Global }) => ({
      txStatus: global.txStatus,
      selectedTab: global.selectedTab,
    })
  );

  const { cosmos } = container;

  const [mint, setMint] = useState("");
  const [burn, setBurn] = useState("");
  const [transfer, setTransfer] = useState({
      from: '',
      to: '',
      amount: '',
  })

  const setTransferVal = (val:string, field:string) => {
        return setTransfer({
            ...transfer,
            [field]: val
        })
  }

  const onMint = async (denom: string = 'uusdt') => {
    if (!mint) return;

    cosmos?.connect()

    const converted = new bignumber(mint).shiftedBy(6);

    try {
      dispatch(
        setTxStatus({
          type: "pending",
        })
      );

      const balance = await cosmos?.getBalance()

      const amount = balance?.balancesList.find(token => token.denom === denom)?.amount

      console.log(amount, 'amount');

      if (amount && new bignumber(amount) < converted) {
          return dispatch(
            setTxStatus({
              type: "failed",
              log: `Not enough usdt. You have ${new  bignumber(amount).shiftedBy(-6).toString()} usdt`
            })
          );
      }

      const res = (await cosmos?.mintUSC(String(converted), denom))?.toObject().txResponse;

      if (res && res.code === 0) {
       

        return dispatch(
          setTxStatus({
            type: "success",
          })
        );
      }

      dispatch(
        setTxStatus({
          type: "failed",
          code: res?.code,
          log: res?.rawLog,
        })
      );
    } catch (e: any) {
      if (e.message.includes("Request rejected")) {
        return dispatch(setTxStatus(undefined));
      }

      dispatch(
        setTxStatus({
          type: "failed",
          log: e?.message,
        })
      );
    }
  };

  const onBurn = async () => {
    if (!burn) return;
    cosmos?.connect()
    const converted = new bignumber(burn).shiftedBy(18);

    dispatch(
      setTxStatus({
        type: "pending",
      })
    );

    try {

        const balance = await cosmos?.getBalance()

        const amount = balance?.balancesList.find(token => token.denom === "ausc")?.amount
  
        if (amount && new bignumber(amount) < converted) {
            return dispatch(
              setTxStatus({
                type: "failed",
                log: `Not enough tokens. You have ${new bignumber(amount).shiftedBy(-18).toString()} asuc`
              })
            );
        }



      const res = (await cosmos?.burnUSC(String(converted)))?.toObject().txResponse;

      if (res && res.code === 0) {
    
        return dispatch(
          setTxStatus({
            type: "success",
          })
        );
      }


      dispatch(
        setTxStatus({
          type: "failed",
          code: res?.code,
          log: res?.rawLog,
        })
      );
    } catch (e: any) {
      if (e.message.includes("Request rejected")) {
        return dispatch(setTxStatus(undefined));
      }

      dispatch(
        setTxStatus({
          type: "failed",
          log: e?.message,
        })
      );
    }
  };

  const onTransfer = async () => {

    const {amount, from, to} = transfer

    if (!amount || !from || !to) return


    const converted = new bignumber(amount).shiftedBy(6);


        dispatch(
          setTxStatus({
            type: "pending",
          })
        );
  

    try {

        const res = await cosmos?.IBCtransfer({
            from,
            to,
            amount: String(converted),
            denom: CONFIG.osmosisUstDemon
         })

         if (res && res.code === 0) {
            //cosmos?.connect()
    
            return dispatch(
              setTxStatus({
                type: "success",
              })
            );
          }
    
          dispatch(
            setTxStatus({
              type: "failed",
              code: res?.code,
              log: res?.rawLog,
            })
          );

    } catch (e:any) {

        if (e.message.includes("Request rejected")) {
            return dispatch(setTxStatus(undefined));
          }
    
          dispatch(
            setTxStatus({
              type: "failed",
              log: e?.message,
            })
          );

    }

 

    

  }

  const renderTabs = ["Transfer from  Osmosis", "Mint", "Redeem"].map((tab, i) => (
    <li
        key={i + 'tab'}
      onClick={() => dispatch(setTab(tab))}
      className={`${tab === selectedTab ? "selected" : ""}`}
    >
      {tab}
    </li>
  ));

  const tabs = {
    "Transfer from  Osmosis": (
        <>
        <li>
            <div className="transferRow">
            <div className="inputWrap">
                <span>From:</span>
                <input type="text"  className="convertInput" value={transfer.from} onChange={(e) => setTransferVal(e.target.value, 'from')}/>
                </div>
                <div className="inputWrap">
                <span>To:</span>
                <input type="text"  className="convertInput" value={transfer.to} onChange={(e) => setTransferVal(e.target.value, 'to')}/>
                </div>
            </div>
            
        </li>
        <li>
        <div className="transferRow">
            <div className="inputWrap">
                <span>Amount</span>
                <input type="text"  className="convertInput" value={transfer.amount} onChange={(e) => setTransferVal(e.target.value, 'amount')}/>
                <span>ust</span>
                </div>
                <button className="btn" onClick={onTransfer}>
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
            value={mint}
            onChange={(e) => setMint(e.target.value)}
          />
          <span>usdt</span>
        </div>
        <button className="btn" onClick={() => onMint(CONFIG.ustDenom)}>
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
            value={burn}
            onChange={(e) => setBurn(e.target.value)}
          />
          <span>usc</span>
        </div>
        <button className="btn" onClick={onBurn}>
          Redeem
        </button>
      </li>
    ),
  };

  return (
    <div className="exchangeModal">
      <div className="exchangeWrapper">
        {txStatus ? (
          <Status status={txStatus} />
        ) : (
          <>
            <h2>Token Convertor</h2>

            
            <div className="crumbsWrapper">
              <ul>{renderTabs}</ul>
            </div>

            <div className="convertorWrap">
              <ul>{tabs[selectedTab]}</ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default withServices(Exchange);
