import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import { Global, setTxStatus } from "../../state";
import close from "../../assets/img/close.svg";
import success from "../../assets/img/success.png";
import returnIcon from "../../assets/img/back.svg";

import { useDispatch, useSelector } from "react-redux";

interface StatusProps {
  status: Global["txStatus"];
}

export const Status = ({ status }: StatusProps) => {
  const dispatch = useDispatch();

  const render =
    status?.type === "pending" ? (
      <>
        <span>Executing gRPC request</span>{" "}
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    ) : (
      <>
        <h2>{status?.type === "success" ? "Success" : "Error"}</h2>

        {status?.type === "success" && (
          <img src={success} className="statusImg" alt="" />
        )}
        {status?.code && (
          <div className="statusCode">
            <span>Code: </span> <span>{status?.code}</span>
          </div>
        )}

        {status?.type === "failed" && status.log && (
          <div className="statusLogWrap">
            <span>Tx log: </span>
            <p>{status.log}</p>
          </div>
        )}
      </>
    );

  return (
    <div className={`statusModal ${status?.type}`}>
      <img
        className="backBtn"
        src={returnIcon}
        width={25}
        onClick={() => dispatch(setTxStatus(undefined))}
      />
      {render}
    </div>
  );
};

/**
 * 
 * 
 *  <div className={`modal statusModal ${status?.type}`}>
                <img src={close} className="closeIcon" alt="" onClick={() => dispatch(setTxStatus(undefined))}/>
 */
