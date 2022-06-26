import React from "react";
import { Background } from "../elements/BG";
import { Navbar } from "../elements/navbar";
import Pannel from "../elements/Pannel";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Global, setForceConnect, setForceExchangeModal } from "../../state";
import { Status } from "../popups/Status";

const USC = () => <button className="coin uscCoin">USC</button>;

const DD = () => <button className="coin swapCoin">USDC ( axelar )</button>;

export const MintPage = () => {
  const loc = useLocation();

  const { txStatus } = useSelector(({ global }: { global: Global }) => ({
    txStatus: global.txStatus,
  }));

  return (
    <div className="pageWrapper mintPage">
      {txStatus && <Status status={txStatus} />}
      <Background>
        <>
          <Navbar />
          <Pannel type={loc.pathname.includes("mint") ? "mint" : "redeem"}>
            {loc.pathname.includes("mint") ? <DD /> : <USC />}
            {loc.pathname.includes("redeem") ? <DD /> : <USC />}
          </Pannel>
        </>
      </Background>
    </div>
  );
};
