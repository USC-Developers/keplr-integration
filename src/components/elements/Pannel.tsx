import React from "react";

import swap from "../../assets/img/new/Exchange icon.svg";

export const Pannel = ({
  children,
  type,
}: {
  children: React.ReactChild[];
  type: string;
}) => {
  return (
    <div className="pannelWrapper">
      <div className="pannelContainer">
        <h2>
          {type[0].toUpperCase() + type.substr(1)} <span>USC</span>
        </h2>

        <div className="swapWrapper">
          <div className="swapUnit">
            <p>Choose Your Currency</p>
            <div className="inputWrapper">
              <input type="text" />
              <div className="coinWrap">{children[0]}</div>
            </div>
          </div>
          <img src={swap} alt="swapImg" className="swapImg" />
          <div className="swapUnit">
            <p>You Will Receive</p>
            <div className="inputWrapper">
              <input type="text" />
              <div className="coinWrap">{children[1]}</div>
            </div>
          </div>
          <div className="rateWrapper">
            <div className="rate">
              <span>Rate</span>
              <span>1 USDC = 1 USC</span>
            </div>
            <div className="fee">
              <span>Swap Fee</span>
              <span>0.01 SCRT</span>
            </div>
          </div>
        </div>

        <button className="pannelBtn">{type.toUpperCase() + " NOW"}</button>
      </div>
    </div>
  );
};
