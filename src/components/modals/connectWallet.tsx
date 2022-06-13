import React, { PureComponent, useState } from 'react';

import keplr from '../../assets/img/kpl.png'
import { useDispatch } from 'react-redux';
import { withServices } from '../hocs/withServices';
import keplrClient, {KeplrClient} from '../../services/keplrClient';
import {ServiceContainer, withServiceContainer} from '../../global'


import {CONFIG} from '../../config'

interface ConnectWalletProps extends withServiceContainer {
    onClose: () => void
}

 const ConnectWallet = ({container, setContainer, onClose}:ConnectWalletProps) => { //todo types

  

    const [connection, setConnection] = useState(false)

    
    const setKeplr = async () => {
        let client:KeplrClient | null;
        setConnection(true)
        try {
            client = await keplrClient(CONFIG.chain, `${CONFIG.chainIp}:${CONFIG.rpcPort}`, `${CONFIG.chainIp}:${CONFIG.restPort}`).connect()
        } catch (e) {
            client = null
            console.log(e)
        }
        setConnection(false)

        if (client) {

            onClose()
            setContainer({
                ...container,
                cosmos : client
            })



        }
    }
 


    return <div className="connectModal">
            <h2>Connect with:</h2>

            <ul>
                <li onClick={() => !connection && setKeplr()}>
                    <img src={keplr} alt="keplr" />
                    <span>Keplr Wallet</span>
                </li>
            </ul>
    </div>
}



export  default withServices(ConnectWallet)
