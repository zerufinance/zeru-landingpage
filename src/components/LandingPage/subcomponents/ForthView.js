import React, { Component } from 'react'
import { Fade } from 'react-awesome-reveal'
import community from '../../../images/community.png'
import DiscordButton from './reusable/DiscordButton'


export default class ForthView extends Component {
  render() {
    return (
      <div id='community' className='commonview' style={{ color: '#150333', background: 'white' }}>
        <div className='top' >
          <Fade duration={500} direction='down' triggerOnce='true' >
            <div className='communitydiv'>
              Will be Governed by community ❤️
              <p style={{ color: '#20054c' }}>
                Zeru will be fully Decentralized, Community governed protocol.
              </p>
            </div>
          </Fade>
          <Fade duration={500} triggerOnce='true' fraction={0.3}>
            <img src={community} alt="Logo" style={{width: '50%'}}/>
          </Fade>

        </div>
      </div>
    )
  }
}
