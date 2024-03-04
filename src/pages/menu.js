import React, { useEffect, useState } from 'react';
import '../Styles/style.css';
import '../Styles/res.css';
import close from '../images/navIcons/close.svg';

function Menu() {

    const closeMenu = () => {
        document.querySelector('.menu').style.display = 'none';
    };

    return (
        <div className='menu'>
            <div className='container'>
                <div className='top'>
                    <img
                        src={close}
                        width={36}
                        height={36}
                        onClick={closeMenu}
                        alt="Close Menu"
                    />
                </div>
                <div className='bottom'>
                    <ul className="links">
                        <li className="link_item">
                            <a href="#" className="link">Home</a>
                        </li>
                        <li className="link_item">
                            <a href="#" className="link">New Arrivals</a>
                        </li>
                        <li className="link_item">
                            <a href="#" className="link">Trending</a>
                        </li>
                        <li className="link_item">
                            <a href="#" className="link">Deals For You</a>
                        </li>
                        <li className="link_item">
                            <a href="#" className="link">Discounts</a>
                        </li>
                        <li className="link_item">
                            <a href="#" className="link">Weekly Offers</a>
                        </li>
                        <li className="link_item">
                            <a href="#" className="link">Become A Vender</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu;