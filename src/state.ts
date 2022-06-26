import { Window as KeplrWindow } from "@keplr-wallet/types";
import { KeplrClient } from "./services/keplrClient";

import { createSlice } from "@reduxjs/toolkit";
import { TokenInfo, Coin, RedeemOperation } from "./global";
import { CONFIG } from "./config";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

export interface Global {
  keplr: KeplrClient | undefined;
  selectedTab: "Mint" | "Redeem";
  showAccaount: boolean;
  forceConnectModal: boolean;
  forceExchangeModal: boolean;
  selectedGaiaToken: TokenInfo;
  selectedOsmosisToken: TokenInfo;
  balancesList: Coin[];
  redeemsList: RedeemOperation[];
  txStatus:
    | {
        type: "success" | "failed" | "pending";
        code?: number;
        log?: string;
      }
    | undefined;
}

export const initialState: Global = {
  keplr: undefined,
  selectedTab: "Mint",
  showAccaount: false,
  forceConnectModal: false,
  forceExchangeModal: false,
  selectedGaiaToken: CONFIG.gaiaTokens.find((t) => t.name === "USDC")!,
  selectedOsmosisToken: CONFIG.gaiaTokens.find((t) => t.name === "USDC")!,
  balancesList: [],
  redeemsList: [],
  txStatus: undefined, // {
  //type: "pending",
  //code: 4,
  //log: "signature verification failed; please verify account number (9) and chain-id (usc-gaia-4): unauthorized"
  //},
};

interface booleanPayload {
  type: string;
  payload: boolean;
}

interface TokenPayload {
  type: string;
  payload: TokenInfo;
}

interface CoinPayload {
  type: string;
  payload: Coin[];
}

export const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    setRedeemsList: (state, action: any) => {
      state.redeemsList = action.payload;
    },
    setBalances: (state, action: CoinPayload) => {
      state.balancesList = action.payload;
    },
    toggleAccount: (state, action: booleanPayload) => {
      state.showAccaount = action.payload;
    },
    selectOsmosisToken: (state, action: TokenPayload) => {
      state.selectedOsmosisToken = action.payload;
    },
    selectGaiaToken: (state, action: TokenPayload) => {
      state.selectedGaiaToken = action.payload;
    },
    setForceConnect: (state, action: booleanPayload) => {
      state.forceConnectModal = action.payload;
    },
    setTab: (state, action: any) => {
      state.selectedTab = action.payload;
    },
    setForceExchangeModal: (state, action: booleanPayload) => {
      state.forceExchangeModal = action.payload;
    },
    setTxStatus: (
      state,
      action: {
        type: string;
        payload: Global["txStatus"];
      }
    ) => {
      state.txStatus = action.payload;
    },
  },
});

export const {
  setForceConnect,
  setForceExchangeModal,
  setTxStatus,
  setTab,
  selectGaiaToken,
  selectOsmosisToken,
  toggleAccount,
  setBalances,
  setRedeemsList,
} = global.actions;
