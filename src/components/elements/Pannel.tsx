import React from "react";

import { withMethods, Next as Previous } from "../exchange/withMethods";
import swap from "../../assets/img/new/Exchange icon.svg";
import { compose } from "redux";
import { useSelector } from "react-redux";
import { Global } from "../../state";
import { useEffect } from "hoist-non-react-statics/node_modules/@types/react";
import { useLocation } from "react-router-dom";

interface PannelProps extends Previous {
  children: React.ReactChild[];
  type: string;
}

const Pannel = (props: PannelProps) => {
  const { children, type, methods, state, setStateVal } = props;

  const loc = useLocation();

  const { selectedTab, selectedGaiaToken, selectedOsmosisToken } = useSelector(
    ({ global }: { global: Global }) => ({
      selectedTab: global.selectedTab,
      selectedGaiaToken: global.selectedGaiaToken,
      selectedOsmosisToken: global.selectedOsmosisToken,
    })
  );

  React.useEffect(() => {
    switch (type) {
      case "mint":
        setStateVal("", "burnInput");
        break;
      case "redeem":
        setStateVal("", "mintInput");
        break;
    }
  }, [loc]);

  let inputValue: string;
  let inputChange: (val: string) => void;
  let btnHandler: () => void;

  switch (type) {
    case "mint": {
      inputValue = state.mintInput;
      inputChange = (val: string) => setStateVal(val, "mintInput");
      btnHandler = () => methods.onMint(selectedGaiaToken.denom);
      break;
    }

    case "redeem": {
      inputValue = state.burnInput;
      inputChange = (val: string) => setStateVal(val, "burnInput");
      btnHandler = () => methods.onBurn();
      break;
    }

    default: {
      inputValue = "";
      inputChange = (val: string) => {};
      btnHandler = () => {};
    }
  }

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
              <input
                type="text"
                value={inputValue}
                onChange={(e) => inputChange(e.target.value)}
              />
              <div className="coinWrap">{children[0]}</div>
            </div>
          </div>
          <img src={swap} alt="swapImg" className="swapImg" />
          <div className="swapUnit">
            <p>You Will Receive</p>
            <div className="inputWrapper">
              <input type="text" value={inputValue} />
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

        <button className="pannelBtn" onClick={btnHandler}>
          {type.toUpperCase() + " NOW"}
        </button>
      </div>
    </div>
  );
};

export default compose<any>(withMethods)(Pannel);
