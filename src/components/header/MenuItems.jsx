import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = () => {
    return (
        <ul>
            <li><Link to='/residential'>Residential</Link></li>
            <li><Link to='/commercial'>Commercial</Link></li>
            <li><Link to='/about'>About</Link></li>                  
            <li><Link to='/contact'>Contact</Link></li>             
        </ul>
    )
}

export default MenuItems;
