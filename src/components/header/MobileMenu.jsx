import React from 'react';
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems';

const MobileMenu = ({ setOpenMobile }) => {

    return (
        <div className='menu__mobile'>
            <div className='inner'>
                <div>
                    <Link to='/'>HM</Link>
                    <button
                        onClick={() => setOpenMobile(false)}
                        title='Close'
                    >
                        <span className='hide'>Close Main Menu</span>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <nav>
                    <MenuItems />
                </nav>
            </div>
        </div>
    )
}

export default MobileMenu;
