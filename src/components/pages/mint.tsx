import React from "react";
import { Background } from "../elements/BG";
import { Navbar } from "../elements/navbar";
import { Pannel } from "../elements/Pannel";
import { useLocation } from "react-router-dom";

const USC = () => <button className="coin uscCoin">USC</button>;

const DD = () => <button className="coin swapCoin">USDC ( axelar )</button>;

export const MintPage = () => {
  const loc = useLocation();

  return (
    <div className="pageWrapper mintPage">
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
