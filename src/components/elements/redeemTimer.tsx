import React, { useState, useEffect } from "react";
import moment, { Moment } from "moment";

import { withServices } from "../hocs/withServices";

import { withServiceContainer } from "../../global";

import { useDispatch } from "react-redux";

import { setBalances } from "../../state";

interface TimerProps extends withServiceContainer {
  time: Moment;
}

export const RedeemTimer = withServices(({ time, container }: TimerProps) => {
  const [tick, setTick] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const int = setInterval(async () => {
      var timeDiff = time.toDate().getTime() - moment().toDate().getTime();

      if (timeDiff <= 0) {
        clearInterval(int);
        const res = await container?.cosmos?.getBalance();
        res?.balancesList && dispatch(setBalances(res?.balancesList));
        return setTick("Completed");
      }

      const d = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = String(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)));
      const s = String(Math.floor((timeDiff % (1000 * 60)) / 1000));

      setTick(`${d} days ${h} hours ${m} mins ${s} secs`);
    }, 1000);

    return () => clearInterval(int);
  }, []);

  return (
    <span className={`timer ${tick === "Completed" ? "completed" : ""}`}>
      {tick}
    </span>
  );
});
