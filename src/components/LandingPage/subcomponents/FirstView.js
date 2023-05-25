import React, { Component } from 'react'
import { Fade } from 'react-awesome-reveal'
import FirstViewTextComp from './FirstViewTextComp'
import { FaDiscord, FaGithub, FaTwitter, FaTelegram } from 'react-icons/fa';


const iconcss = {
  height: '30px',
  width: '30px',
  color: 'white'
}

export default class FirstView extends Component {

  render() {
    return (
      <div className='firstview' id='firstview' style={{ background: 'transparent', height: 'auto' }}>
        <div className='center'>
          <Fade direction='up' duration="500" triggerOnce='true'>
            <FirstViewTextComp />
          </Fade>
          {/* <Fade direction='right' duration="500" triggerOnce='true'>
            <div className='f-a-c'>
              <a href='https://discord.gg/yW2BU288Kw' target="_blank" rel="noreferrer">
                <FaDiscord style={iconcss} />
              </a>
              <a href='https://github.com/zerufinance' target="_blank" rel="noreferrer">
                <FaGithub style={iconcss} />
              </a>
              <a href='https://t.me/+UGjCMYBlvVtmZGFl' target="_blank" rel="noreferrer">
                <FaTelegram style={iconcss} />
              </a>
              <a href='https://twitter.com/zerufinance' target="_blank" rel="noreferrer">
                <FaTwitter style={iconcss} />
              </a>
            </div>
          </Fade> */}


        </div>
      </div>
    )
  }
}
