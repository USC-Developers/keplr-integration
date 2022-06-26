import React, { FC, useState } from "react";

import { withServices } from "../hocs/withServices";

import { withServiceContainer, ExchangeState } from "../../global";
import bignumber from "bignumber.js";

import { useDispatch } from "react-redux";
import { setTxStatus, setBalances, setRedeemsList } from "../../state";
import { CONFIG } from "../../config";

import { KeplrClient } from "../../services/keplrClient";

interface withMethodProps extends withServiceContainer {
  children: React.ReactChild[];
  type: string;
}

export interface Next {
  state: ExchangeState;
  setStateVal: (val: string, field: string) => void;
  methods: {
    onMint: (denom: string) => void;
    onBurn: () => void;
    onTransfer: (denom: string) => void;
  };
  children: React.ReactChild[];
  type: string;
  cosmos: KeplrClient | undefined;
}

export const withMethods = (Wrapped: FC<Next>) =>
  withServices(({ container, children, type }: withMethodProps) => {
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

    const { mintInput, burnInput, transferFrom, transferTo, transferAmount } =
      state;

    const setStateVal = (val: string, field: string) => {
      if (!/^(\s*|[+-]?((\d+\.?\d*)|(\.\d+)))$/.test(val)) return;
      return setState({
        ...state,
        [field]: val,
      });
    };

    const onMint = async (denom: string = "uusdt") => {
      if (!mintInput) return;

      await cosmos?.connect();

      const converted = new bignumber(mintInput).shiftedBy(6);

      setStateVal("", "mintInput");

      try {
        dispatch(
          setTxStatus({
            type: "pending",
          })
        );

        const balance = await cosmos?.getBalance();

        balance?.balancesList && dispatch(setBalances(balance?.balancesList));

        /*const amount = balance?.balancesList.find(
          (token) => token.denom === denom
        )?.amount;

         if (amount && new bignumber(amount) < converted) {
          return dispatch(
            setTxStatus({
              type: "failed",
              log: `Not enough usdt. You have ${new bignumber(amount)
                .shiftedBy(-6)
                .toString()} usdt`,
            })
          );
        }*/

        const res = (
          await cosmos?.mintUSC(String(converted), denom)
        )?.toObject().txResponse;

        if (res && res.code === 0) {
          const res = await cosmos?.getBalance();

          res?.balancesList && dispatch(setBalances(res?.balancesList));

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
      await cosmos?.connect();
      const converted = new bignumber(burnInput).shiftedBy(
        CONFIG.uscToken.decimals
      );

      setStateVal("", "burnInput");

      dispatch(
        setTxStatus({
          type: "pending",
        })
      );

      try {
        const balance = await cosmos?.getBalance();

        balance?.balancesList && dispatch(setBalances(balance?.balancesList));

        /*const amount = balance?.balancesList.find(
          (token) => token.denom === CONFIG.uscToken.denom
        )?.amount;

        if (amount && new bignumber(amount) < converted) {
          return dispatch(
            setTxStatus({
              type: "failed",
              log: `Not enough tokens. You have ${new bignumber(amount)
                .shiftedBy(0 - CONFIG.uscToken.decimals)
                .toString()} asuc`,
            })
          );
        }*/

        const res = (await cosmos?.burnUSC(String(converted)))?.toObject()
          .txResponse;

        if (res && res.code === 0) {
          const [balances, redeems] = await Promise.allSettled([
            (async () => {
              return await cosmos?.getBalance();
            })(),
            (async () => {
              return await cosmos?.getRedeems(cosmos.account.address);
            })(),
          ]);

          balances.status === "fulfilled" &&
            balances.value?.balancesList &&
            dispatch(setBalances(balances.value.balancesList));

          //@ts-ignore
          redeems.status === "fulfilled" &&
            //@ts-ignore //Wrong interface was generated
            dispatch(setRedeemsList(redeems.value?.entry.operationsList));

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

    const onTransfer = async (denom: string) => {
      if (!transferAmount || !transferFrom || !transferTo) return;
      await cosmos?.connect();

      const converted = new bignumber(transferAmount).shiftedBy(6);

      dispatch(
        setTxStatus({
          type: "pending",
        })
      );

      try {
        const res = await cosmos?.IBCtransfer({
          from: transferFrom,
          to: transferTo,
          amount: String(converted),
          denom,
        });

        if (res && res.code === 0) {
          const res = await cosmos?.getBalance();
          res?.balancesList && dispatch(setBalances(res?.balancesList));

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

    return (
      <Wrapped
        state={state}
        setStateVal={setStateVal}
        methods={{ onMint, onBurn, onTransfer }}
        children={children}
        type={type}
        cosmos={cosmos}
      />
    );
  });
