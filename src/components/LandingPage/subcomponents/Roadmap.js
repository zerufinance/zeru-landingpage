import React, { Component } from 'react'
// import roadmap from '../../../images/roadmap.png'
import roadmap from '../../../images/a.svg'

export default class Roadmap extends Component {
  render() {
    return (
      <div className='roadmapview' style={{fontSize:'2rem',color:'white'}}>
        <h1 style={{color:'white'}}>Roadmap</h1>
        <img src={roadmap}/>
      </div>
    )
  }
}
