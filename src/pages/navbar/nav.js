import React from "react";
import logo from '../../images/logo.png';
import '../../Styles/style.css'
import '../../Styles/res.css';
import like from '../../images/navIcons/like.png'
import user from '../../images/navIcons/user.png'
import shopping from '../../images/navIcons/shopping.png'
import hamburger from '../../images/navIcons/hamburger-menu-4.svg'

function Nav(){
    return(
        <div className="navbar">
            <div className="top-navbar">
                <div className="left">
                    <img src={logo} className="logo"/>
                </div>
                <div className="center">
                    <form>
                        <input 
                        type="text" 
                        placeholder='Search for Products, Brands & Categories' 
                        className="searchInput"
                        />
                    </form>
                </div>
                <div className="right">
                    <img src={like} />
                    <img src={user} />
                    <img src={shopping} />
                </div>
            </div>    
            <div className="bottom-navbar">
                <div className="bn-left">
                    <select>
                        <option>All Categories</option>    
                        <option>Action</option>    
                        <option>Another Action</option>    
                    </select>    
                </div>
                <div className="bn-right">
                    <ul className="links">
                        <li className="link_item">
                            <a href="#" className="link active">Home</a>
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

                        <img src={hamburger} width="24" height="24"></img>
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default Nav;
