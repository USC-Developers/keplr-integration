import React, {useEffect} from 'react'
import usc from '../assets/img/usc.jpeg'
import Exchange from './modals/exchange'
import { withModal } from './hocs/withModal'
import { compose } from 'redux'
import { withServices } from './hocs/withServices'
import {withServiceContainer} from '../global'
import {useDispatch, useSelector} from 'react-redux'
import {Global, setForceConnect ,setForceExchangeModal} from '../state'


interface MainProps extends withServiceContainer {
    onOpenModal:  () => void
}


const Main = ({container, onOpenModal}: MainProps) => {

    const {cosmos} = container

    const dispatch = useDispatch()

    const forceExchangeModal = useSelector(({global}:{global: Global}) => global.forceExchangeModal)

    const onClickMint = () => {
       if (!cosmos) {
            return dispatch(setForceConnect(true))
       }
       onOpenModal()
    }

    useEffect(() => {

        if (forceExchangeModal && cosmos) {
            onOpenModal()
            dispatch(setForceExchangeModal(false))
        }

    }, [cosmos])

    return <main>
        <div className="introContainer">
            <h2>Lorem Lorem</h2>
            <p>Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem</p>
            <button className="btn mintBtn" onClick={onClickMint}>
                <img src={usc} alt="mint" width="30"/>
                <span>Get USC</span>
            </button>
        </div>
       
    </main>
}

export default compose<any>(withModal(Exchange), withServices)(Main)