import React, { Component } from 'react'
import { Fade } from 'react-awesome-reveal'
import community from '../../../images/community.jpg'
import DiscordButton from './reusable/DiscordButton'


export default class ForthView extends Component {
  render() {
    return (
      <div id='forthview' className='commonview' style={{color:'black',background:'white'}}>
        <div className='top' >
          <Fade duration={500} direction='down' triggerOnce='true' fraction={1}>
            <div className='communitydiv'>
              Will be Governed by community ❤️
              <p >
                Zeru will be fully Decentralized, Community governed protocol.
              </p>
              <DiscordButton value="Join Discord" />
            </div>
          </Fade>
          
            <img src={community} alt="Logo" width={500} />
          
          
        </div>
      </div>
    )
  }
}
