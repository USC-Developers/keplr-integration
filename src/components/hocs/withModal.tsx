import React, { useState } from "react";
import {Modal} from "../modals/modal";

const withModal = (modal: React.FC) => (Wrapped: () => JSX.Element) => (props:any) => {
  const [state, setState] = useState({
    opened: false,
    
  });

  const openModal = () => {
    setState({ ...state, opened: true});
  };

  const closeModal = () => {
    setState({ ...state, opened: false });
  };

  return (
    <>
      {state.opened && (
        <Modal
          opened={state.opened}
          onClose={() => setState({ ...state, opened: false })}
        >
          {modal}
        </Modal>
      )}
      <Wrapped {...props} onOpenModal={openModal} onCloseModal={closeModal} />
    </>
  );
};

export  {withModal};

