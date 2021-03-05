import './Header.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {    
    const [headerClass, setHeaderClass]=useState('transparent');

    window.onscroll = function() {
        if(window.pageYOffset > 0) {
            setHeaderClass('colored')
        } else {
            setHeaderClass('transparent')
        }
    };

    return (
        <header className={headerClass}>
            <div className="inner">
                <Link to='/' className="logo">
                    HM
                </Link>
                <nav className='menu__desktop hide-md'>
                    <ul>
                        <li><Link to='/carronade-park-floor-plans'>HOME</Link></li>
                        <li><Link to='/carronade-park-amenities'>SERVICES</Link></li>
                        <li><Link to='/carronade-park-gallery'>PROJECTS</Link></li>
                        <li><Link to='/carronade-park-neighborhood'>ABOUT US</Link></li>                       
                        <li><Link to='/carronade-park-schedule-tour'>CONTACT US</Link></li>             
                    </ul>
                </nav>
                <button className='menu__open show-md' title='Menu'>
                    <span className='hide'>Open Main Menu</span>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </header>
    )
}

export default Header;