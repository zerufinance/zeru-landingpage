import React from 'react'
import gauge from '../../../images/gauge.png'

export default function ZScore() {
  return (
    <div className='zscore'>
        <p className='font-size-1_5rem color-white'>Introducing</p>
        <p className='font-size-3rem-bolder color-white'>Web3.0 Identity with <span className='gradientext8'>zScore</span></p>
        <p className='font-size-1_5rem color-dull'>By increasing your zScore, You can receive high LTV.</p>
        <img src={gauge}/>
    </div>
  )
}
