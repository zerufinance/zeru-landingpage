import { Button } from 'antd'
import React from 'react'
import eth from '../../../images/eth.png'
import bitcoin from '../../../images/bitcoin.png'

export default function Partnerships() {
  return (
    <div className='partnerships'>
        <p className='font-size-3rem-bolder color-white'>Partnerships</p>
        <p className='font-size-1_5rem color-dull'>Partner with us! and let us grow together.</p>
        <img src={eth}/>
        <img src={bitcoin}/>
    </div>
  )
}
