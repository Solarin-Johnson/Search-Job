import React, { useState, useEffect } from 'react';
import './styles/header.scss';
import MenuItems from './menuItems'

import logo from './logo.png'

function Header() {
    const [items, setItems] = useState(['Home', 'About Us']);
    const home = () => {
        window.location.reload()
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setItems(['Home', 'About Us', 'Job sellers', 'Patner with us'])
            } else {
                setItems(['Home', 'About Us'])

            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='header'>
            <img onClick={home} src={logo} alt='logo' className='logo'></img>
            <MenuItems items={items} />
            <div className='sign'>
                <div>Feedback</div>
            </div>

        </div>
    )
}

export default Header;