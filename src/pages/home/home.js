import React from 'react'
import iphone from '../../images/iphones.png'

function Get() {
      return (
            <div className='get'>
                  <div className='get-left'>
                        <h1>GET NEW IPHONE PRO 12 PRO</h1>
                        <p>A transformative triple-camera system that adds tons of capability without complexity</p>
                        <button className='buy'>Buy now</button>
                        <button className='trade'>With $599 with trade-in</button>
                  </div>
                  <div className='get-right'>
                        <img src={iphone} height='462.5'/>
                  </div>
            </div>
      )
}

export default Get;