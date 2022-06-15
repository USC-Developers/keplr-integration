import React, { useState, useEffect } from "react";
import moment, { Moment } from "moment";

export const RedeemTimer = ({ time }: { time: Moment }) => {
  const [tick, setTick] = useState("");

  console.log(tick);

  var timeDiff = time.unix() - moment().unix();

  useEffect(() => {
    let minutesN, secondsN, minutes, seconds;

    minutesN = parseInt((timeDiff / 60).toFixed(0), 10);
    secondsN = parseInt((timeDiff % 60).toFixed(0), 10);

    minutes = minutesN < 10 ? "0" + minutesN : minutesN;
    seconds = secondsN < 10 ? "0" + secondsN : secondsN;

    setTick(minutes + ":" + seconds);

    const int = setInterval(function () {
      minutesN = parseInt((timeDiff / 60).toFixed(0), 10);
      secondsN = timeDiff % 60;

      minutes = minutesN < 10 ? "0" + minutesN : minutesN;
      seconds = secondsN < 10 ? "0" + secondsN : secondsN;

      setTick(minutes + ":" + seconds);

      if (moment().unix() >= time.unix()) {
        console.log(moment().unix());
        console.log(time.unix());
        clearInterval(int);
        return;
      }
    }, 1000);

    //return () => clearInterval(int);
  }, []);

  return <span>{tick}</span>;
};
