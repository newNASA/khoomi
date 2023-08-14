import React from 'react'
import SmartWatch from "../Json/smartwatch.json"

function Recomended() {
      return (
            <div className='rec'>
                  <div className='rec-top'>
                        <p>EXPLORE AWESOME PRODUCTS</p>
                        <h1>RECOMENDED FOR YOU</h1>
                  </div>
                  <div className='rec-center'>
                        <div className='cards'>
                              {SmartWatch.map((post) => {
                                    return( 
                                          <div className="productCard">
                                                <img src={post.img} />
                                                <p>{post.name}</p>
                                                <div className="price">
                                                      {post.price}
                                                </div>
                                          </div>
                                    )
                              })}   
                        </div>
                  </div>
                  <span className="rec-bottom">
                        <a href="#" className="exploreBtn">Explore Other Products</a>
                  </span>
            </div>
      )
}

export default Recomended;