import React from 'react'
import Sneaker1 from '../images/img1.png'
import Sneaker2 from '../images/img4.png'
import Sneaker3 from '../images/img3.png'

function Collection() {
      return (
            <div className='collection'>
                  <div className='col-top'>
                        <p>STRAIGHT FROM NIKE</p>
                        <h1>NEW COLLECTION</h1>
                  </div>
                  <div className='col-center'>
                        <div className='left'>
                              <div className='card'>
                                    <div className='top'>
                                          <img src={Sneaker3}></img>
                                    </div>
                                    <div className='bottom'>
                                          <div className='text'>
                                                <h3>Nike Air force</h3>
                                          </div>
                                          <div className='price'>
                                                <span>$99</span>
                                          </div>
                                    </div>
                              </div>
                              <div className='card'>
                                    <div className='top'>
                                          <img src={Sneaker1}></img>
                                    </div>
                                    <div className='bottom'>
                                          <div className='text'>
                                                <h3>Nike Court air</h3>
                                          </div>
                                          <div className='price'>
                                                <span>$99</span>
                                          </div>
                                    </div>
                              </div>
                              <div className='card'>
                                    <div className='top'>
                                          <img src={Sneaker2}></img>
                                    </div>
                                    <div className='bottom'>
                                          <div className='text'>
                                                <h3>Nike Air force</h3>
                                          </div>
                                          <div className='price'>
                                                <span>$99</span>
                                          </div>
                                    </div>
                              </div>
                              <div className='card'>
                                    <div className='top'>
                                          <img src={Sneaker3}></img>
                                    </div>
                                    <div className='bottom'>
                                          <div className='text'>
                                                <h3>Nike Air force</h3>
                                          </div>
                                          <div className='price'>
                                                <span>$99</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className='right'>
                              <div className='card'>
                                    <div className='top'>
                                          <p>Sale -50%</p>
                                          <span>$99</span>
                                    </div>
                                    <div className='center'>
                                          <img src={Sneaker3}></img>
                                    </div>
                                    <div className='bottom'>
                                          <h3>Nike Air force</h3>
                                          <p>Brand Nike</p>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <span className="rec-bottom">
                        <a href="#" className="exploreBtn">Explore Other Products</a>
                  </span>
            </div>
      )
}

export default Collection
