import React from "react";

import swap

export const Pannel = ({
  children,
  type,
}: {
  children: React.ReactChildren[];
  type: string;
}) => {
  return (
    <div className="pannelWrapper">
      <div className="pannelContainer">
        <h2>{type[0].toUpperCase() + type.substr(1)}</h2>

        <div className="swapWrapper">
          <div className="swapUnit">
            <p>Choose Your Currency</p>
            <div className="inputWrapper">
              <input type="text" />
              <div className="coinWrap">{children[0]}</div>
            </div>
          </div>
          <img src="" alt="swapImg" className="swapImg" />
        </div>

        <button className="pannelBtn">{type.toUpperCase() + " NOW"}</button>
      </div>
    </div>
  );
};
