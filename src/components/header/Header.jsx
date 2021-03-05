import './Header.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';

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
        <header className={headerClass}>

            <div className="inner">
                <Link to='/' className="logo">
                    HM
                </Link>
                <nav className='menu__desktop hide-md'>
                    <MainMenu />
                </nav>

                <button 
                    onClick={() => setOpenMobile('open')} 
                    className='menu__open show-md' title='Menu'
                >
                    <span className='hide'>Open Main Menu</span>
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            {openMobile && <MobileMenu setOpenMobile={setOpenMobile} open={openMobile} />}

        </header>
    )
}

export default Header;
