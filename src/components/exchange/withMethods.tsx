import React, { FC, useState } from "react";

import { withServices } from "../hocs/withServices";

import {
  withServiceContainer, ExchangeState
} from "../../global";
import bignumber from "bignumber.js";

import { useDispatch } from "react-redux";
import { setTxStatus, } from "../../state";
import { CONFIG } from "../../config";

interface withMethodProps extends withServiceContainer {}

export interface Next {
    state: ExchangeState,
    setStateVal: (val: string, field: string) => void,
    methods: {
        onMint: (denom: string) => void,
        onBurn: () => void,
        onTransfer: () => void
    }
}

export const withMethods = (Wrapped: FC<Next>) =>
  withServices(({ container }: withMethodProps) => {
    const dispatch = useDispatch();

  
    const { cosmos } = container;

    const [state, setState] = useState<ExchangeState>({
      mintInput: "",
      minthUsingDenom: "",
      burnInput: "",
      transferFrom: "osmo1sfdhe0yx7vhlx00hvws3pxwct8snzw6d0q743l",
      transferTo: "cosmos1sfdhe0yx7vhlx00hvws3pxwct8snzw6d8md98d",
      transferAmount: "",
      transferDenom: "",
    });

    const {mintInput,burnInput, transferFrom, transferTo, transferAmount } = state

    const setStateVal = (val: string, field: string) => {
      return setState({
        ...state,
        [field]: val,
      });
    };

    const onMint = async (denom: string = 'uusdt') => {
        if (!mintInput) return;
    
        cosmos?.connect()
    
        const converted = new bignumber(mintInput).shiftedBy(6);
    
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
        if (!burnInput) return;
        cosmos?.connect()
        const converted = new bignumber(burnInput).shiftedBy(18);
    
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
    
       
    
        if (!transferAmount || !transferFrom || !transferTo) return
    
    
        const converted = new bignumber(transferAmount).shiftedBy(6);
    
    
            dispatch(
              setTxStatus({
                type: "pending",
              })
            );
      
    
        try {
    
            const res = await cosmos?.IBCtransfer({
                from : transferFrom,
                to: transferTo,
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

    return <Wrapped state = {state} setStateVal={setStateVal} methods = {{onMint, onBurn, onTransfer}}/>;
  });
