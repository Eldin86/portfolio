import React from 'react'

import ControlBar from './ControlBar/ControlBar'
import SlideMenu from './SlideMenu/SlideMenu'

import './Aside.css'

const Aside = (props) => {
    

    return(
        <div className="Aside">
            <SlideMenu />
        </div>
    )
}

export default  Aside