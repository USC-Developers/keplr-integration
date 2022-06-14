import React from "react";

import { Status } from "../popups/Status";
import {  useSelector,  } from "react-redux";
import { Global } from "../../state";


import { withMethods } from "../exchange/withMethods";
import { withTabs } from "../exchange/withTabs";

import {compose} from 'redux'


import {Next as Previous} from '../exchange/withTabs'

interface ExchangeProps extends Previous {}

const Exchange = ({renderTabs, TabElements, selectedTab}: ExchangeProps) => {
 
    const { txStatus } = useSelector(
        ({ global }: { global: Global }) => ({
       
            txStatus: global.txStatus,
        })
      );
    

  return (
    <div className="exchangeModal">
      <div className="exchangeWrapper">
        {txStatus ? (
          <Status status={txStatus} />
        ) : (
          <>
            <h2>Token Convertor</h2>

            
            <div className="crumbsWrapper">
              <ul>{renderTabs}</ul>
            </div>

            <div className="convertorWrap">
                
              <ul>{
            //@ts-ignore
              TabElements[selectedTab]
              }</ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default compose<any>(withMethods, withTabs)(Exchange)
