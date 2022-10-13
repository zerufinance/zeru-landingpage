import React, { Component } from 'react'
import { Fade } from 'react-awesome-reveal'
import FirstViewTextComp from './FirstViewTextComp'


export default class FirstView extends Component {

  render() {
    return (
      <div className='firstview' id='firstview' style={{background: 'transparent', height: 'auto'}}>
        <div className='center'>
          <Fade direction='up' duration="500" triggerOnce='true'>
            <FirstViewTextComp />
          </Fade>
          </div>
      </div>
    )
  }
}
