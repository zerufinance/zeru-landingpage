import React, { Component } from 'react'
import { Fade } from 'react-awesome-reveal'
import roadmap from '../../../images/roadmap.png'

export default class Roadmap extends Component {
  render() {
    return (
      <div className='roadmapview' id='roadmap'>
        <Fade direction='up' duration="500" triggerOnce='true'>
          <h1 style={{ color: 'white', marginBottom: '0px' }}>Roadmap</h1>
          <div className='underline'>
          </div>
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <img src={roadmap} width={600} />
          </div>
        </Fade>

      </div>
    )
  }
}
