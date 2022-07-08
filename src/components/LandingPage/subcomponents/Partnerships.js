import { Button } from 'antd'
import React from 'react'
import eth from '../../../images/eth.png'
import bitcoin from '../../../images/bitcoin.png'
import DiscordButton from './reusable/DiscordButton'

export default function Partnerships() {
  return (
    <div className='partnerships'>
        <p className='font-size-3rem-bolder color-white'>Partnerships</p>
        <p className='font-size-1_5rem color-dull'>Partner with us! Let's grow together.</p>
        <br/>
        <DiscordButton  value="Get in Touch"/>
        <img src={eth}/>
        <img src={bitcoin}/>
    </div>
  )
}
