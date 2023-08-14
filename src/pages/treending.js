import React from 'react'
import TrendOne from '../Json/TrendOne.json'


function Treending() {
      return (
            <div className='trending'>
                  <div className='title'>
                        <p>Top products</p>
                        <h4>Trending this week</h4>
                  </div>
                  <div className='trend-footer'>
                        {TrendOne.map((post) => {
                              return(
                                    <div className='trend-card'>
                                          <div className='CardHeader'>
                                                <img src={post.img} alt="Product image" />
                                          </div>    
                                          <div className='CardBody'>
                                                <p>{post.name}</p>
                                                <span>{post.price}</span>
                                          </div>
                                    </div> 
                              )
                        })}
                  </div>
            </div>
      )
}

export default Treending;