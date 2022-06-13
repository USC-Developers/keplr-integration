
import { Window as KeplrWindow } from "@keplr-wallet/types";
import {KeplrClient} from "./services/keplrClient";



import { createSlice } from "@reduxjs/toolkit";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Window extends KeplrWindow {}
  }



export interface Global {
   keplr: KeplrClient | undefined
   selectedTab: 'Mint' | 'Redeem'
   forceConnectModal: boolean
   forceExchangeModal: boolean
   txStatus: {
     type: "success" | "failed" | "pending";
     code?: number,
     log?: string 
   } | undefined
  }

export const initialState: Global = {
    keplr: undefined,
    selectedTab: 'Mint',
    forceConnectModal: false,
    forceExchangeModal: false,
    txStatus: undefined/*{
      type: "pending",
      //code: 4, 
      //log: "signature verification failed; please verify account number (9) and chain-id (usc-gaia-3): unauthorized"
    }*/
};

interface booleanPayload {
  type: string,
  payload: boolean
}



export const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    setForceConnect: (state, action: booleanPayload) => {
      state.forceConnectModal = action.payload;
    },
    setTab: (state, action: any) => {
      state.selectedTab = action.payload;
    },
    setForceExchangeModal: (state, action: booleanPayload) => {
      state.forceExchangeModal = action.payload;
    },
    setTxStatus: (state, action: {
      type: string,
      payload: Global['txStatus']
    }) => {
      state.txStatus = action.payload
    },
   
  },
});

export const { setForceConnect, setForceExchangeModal, setTxStatus, setTab } = global.actions;


