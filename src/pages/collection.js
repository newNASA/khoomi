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
                        <div className='col-left'>
                              <div className='left-top'>
                                    <div className='card'>
                                          <div className='sneaker one'>
                                                <div className='cardBody'>
                                                      <img src={Sneaker1}></img>
                                                </div>
                                                <div className='cardFooter'>
                                                      <p>NikeCourt Air</p>
                                                      <span>$99</span>
                                                </div>
                                          </div>
                                    </div> 
                                    <div className='card'>
                                          <div className='sneaker two'>
                                                <div className='cardBody'>
                                                      <img src={Sneaker2}></img>
                                                </div>
                                                <div className='cardFooter'>
                                                      <p>NIKE AIR FORCE</p>
                                                      <span>$99</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className='left-bottom'>
                                    <div className='card'>
                                          <div className='sneaker three'>
                                                <div className='cardBody'>
                                                      <img src={Sneaker1}></img>
                                                </div>
                                                <div className='cardFooter'>
                                                      <p>NikeCourt Air</p>
                                                      <span>$99</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='card'>
                                          <div className='sneaker four'>
                                                <div className='cardBody'>
                                                      <img src={Sneaker2}></img>
                                                </div>
                                                <div className='cardFooter'>
                                                      <p>NIKE AIR FORCE</p>
                                                      <span>$99</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className='col-right'>
                              <div className='right-card'>
                                    <div className='right-top'>
                                          <p>SALE -50%</p>
                                          <span>$99</span>
                                    </div>
                                    <div className='right-center'>
                                          <img src={Sneaker3} />
                                    </div>
                                    <div className='right-bottom'>
                                          <p>Nike Air Force 1 Shadow</p>
                                          <h6>Brand Nike</h6>
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
