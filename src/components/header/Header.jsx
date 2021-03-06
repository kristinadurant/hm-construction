import './Header.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';
const logo = require('../../assets/images/hires_moore_construction.png').default;

const Header = () => {    
    const [headerClass, setHeaderClass] = useState('transparent');
    const [openMobile, setOpenMobile] = useState(false);

    window.onscroll = function() {
        if(window.pageYOffset > 0) {
            setHeaderClass('colored')
        } else {
            setHeaderClass('transparent')
        }
    };

    return (
        <header className={openMobile?  'open ' + headerClass: headerClass}>

            <div className="inner">
                <Link to='/' className="logo">
                    <span className='hide'>Hires Moore Construction</span>
                    <img src={logo} alt='Hires Moore Construction' width='200px' height='auto' />
                </Link>
                <nav className='menu__desktop hide-md'>
                    <MenuItems />
                </nav>

                <button 
                    onClick={() => setOpenMobile(!openMobile)} 
                    className='menu__open show-md' title='Menu'
                >
                    <span className='hide'>Toggle Main Menu</span>
                        { !openMobile
                        ? <i className="fas fa-bars"></i>
                        : <i className="fas fa-times"></i>
                        }
                </button>
            </div>

            {openMobile && <MobileMenu />}

        </header>
    )
}

export default Header;
