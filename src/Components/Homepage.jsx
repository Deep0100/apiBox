import React from 'react'
import herovideo from '../assets/video/herovideo.mp4'

export default function Homepage() {
  return (
    <div>
      <section>
        <div className='hero-slider'>
          <video src={herovideo} autoPlay loop muted />
            <div className='hero-inner'>
              <div className='hero-inner-text'>
                  <h1>Create Your Own<br/>
                  AI Stock with ApiBOX</h1>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
