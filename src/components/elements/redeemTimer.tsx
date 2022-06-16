import React, { useState, useEffect } from "react";
import moment, { Moment } from "moment";

export const RedeemTimer = ({ time }: { time: Moment }) => {
  const [tick, setTick] = useState("");

  useEffect(() => {
    const int = setInterval(() => {
      var timeDiff = time.toDate().getTime() - moment().toDate().getTime();

      if (timeDiff <= 0) {
        clearInterval(int);
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

  return <span className="timer">{tick}</span>;
};
