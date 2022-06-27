import React from "react";
import ReactDom from "react-dom";

import close from "../../assets/img/close.svg";

const Modal = ({
  children,
  opened,
  onClose,
}: {
  children: any;
  opened: boolean;
  onClose: () => void;
}) => {
  const portalDiv = document.getElementById("portal");

  return portalDiv && opened ? (
    ReactDom.createPortal(
      <>
        <div className="custom_overlay" />
        <div className="custom_modal">
          <img
            src={close}
            alt="close"
            className="closeIcon"
            onClick={onClose}
          />
          {children({
            onClose,
          })}
        </div>
      </>,
      portalDiv
    )
  ) : (
    <></>
  );
};

export { Modal };
