import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to='www.google.com'>Cats</NavLink></li>
                <li><NavLink to='www.yahoo.com'>Dogs</NavLink></li>
                <li><NavLink to='www.treehouse.com'>Computers</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;