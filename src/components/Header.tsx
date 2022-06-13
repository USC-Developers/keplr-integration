import React, {useEffect} from 'react'
import { withModal } from './hocs/withModal'
import ConnectWallet from './modals/connectWallet'
import { compose } from 'redux'


import { Global, setForceConnect,setForceExchangeModal  } from "../state";

import { useSelector, useDispatch } from "react-redux";


 const Header = ({onOpenModal}: {onOpenModal: () => void}) => {
    const dispatch = useDispatch()

    const forceConnectModal = useSelector(({global}:{global: Global}) => global.forceConnectModal)

    useEffect(() => {
        if (forceConnectModal) {
          onOpenModal()
          dispatch(setForceConnect(false))
          dispatch(setForceExchangeModal(true))
        } 
      }, [forceConnectModal])
    
 
    return <header>

        <div className="logoWrap"></div>

        <nav></nav>

        <a role="button" className="btn connectBtn"  onClick={onOpenModal}>Connect Wallet</a>

    </header>
}

export default compose<any>(withModal(ConnectWallet))(Header)