import React from "react";
import { Background } from "../elements/BG";
import { Navbar } from "../elements/navbar";

export const MintPage = () => {
  return (
    <div className="pageWrapper mintPage">
      <Background>
        <Navbar />
      </Background>
    </div>
  );
};
