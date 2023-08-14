import React from "react";
import logo from '../../images/logo.png';
import '../../Styles/style.css'
import like from '../../images/navIcons/like.png'
import user from '../../images/navIcons/user.png'
import shopping from '../../images/navIcons/shopping.png'

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
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default Nav;
