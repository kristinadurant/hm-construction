import React from 'react';
import MenuItems from './MenuItems';

const MobileMenu = () => {

    return (
        <div className='menu__mobile'>
            <div className='inner'>
                <nav>
                    <MenuItems />
                </nav>
            </div>
        </div>
    )
}

export default MobileMenu;
