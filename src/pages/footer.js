import React from 'react'
import logo from '../images/logo.png';

function Footer() {
      return (
            <div className='footer'>
                  <div className='footer-left'>
                        <img src={logo} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis veniam fuga pariatur magni! Recusandae placeat omnis dolorem incidunt in!</p>
                  </div>
                  <div className='footer-right'>
                        <div className='card one'>
                              <h4>Products</h4>
                              <p>Trending</p>
                              <p>My Account</p>
                              <p>Vendors</p>
                              <p>Brands</p>
                              <p>Storefront</p>
                        </div>
                        <div className='card two'>
                              <h4>Legals</h4>
                              <p>Licence</p>
                              <p>Refund</p>
                              <p>Policy</p>
                              <p>About Us</p>
                              <p>Contacts</p>
                        </div>
                        <div className='card three'>
                              <h4>Contacts</h4>
                              <p>Fell free get in touch with us via phone or send us a message</p>
                              <p className='num'>+1 234 567 89 10</p>
                              <p>support@khoomi.com</p>
                        </div>
                  </div>
            </div>
      )
}

export default Footer
