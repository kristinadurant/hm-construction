import React from 'react';
import { Link } from 'react-router-dom'
import MainMenu from './MainMenu';

const MobileMenu = ({ open, setOpenMobile }) => {
    return (
        <div className={`menu__mobile show-md ${open}` }>
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
                    <MainMenu />
                </nav>
            </div>
        </div>
    )
}

export default MobileMenu;
