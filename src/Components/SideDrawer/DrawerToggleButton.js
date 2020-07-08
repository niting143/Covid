import React from 'react'
import './drawertogglebutton.css'

const DrawerToggleButton = props => {
    return (
        <button className='button_toggle' onClick={props.clik}>
            <div className='button_toggle_line'></div>
            <div className='button_toggle_line'></div>
            <div className='button_toggle_line' ></div>
        </button>
    )
}

export default DrawerToggleButton
