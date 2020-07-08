import React from 'react';
import './navigation.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';
const Navigation = props => {

    return (
        <div>
            <header className={'toolbar_blue'} >
                <nav className='toolbar_navigation'>
                    <DrawerToggleButton clik={props.clicks} />
                    <a className='toolbar_logo' href='/'><h3 >CIS</h3></a>
                    <div className='spacer' />
                    <div className='toolbar_navigation_items'>
                        <ul>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/covidUpdates'>COVID UPDATES</Link></li>
                        </ul>
                    </div>
                </nav>
            </header></div>

    );
}


export default Navigation
