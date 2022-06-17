import React, { Component } from 'react'
import { Fade } from 'react-awesome-reveal'
import FirstViewAnimatedComp from './minicomps/FirstViewAnimatedComp'
import FirstViewTextComp from './minicomps/FirstViewTextComp'


export default class FirstView extends Component {

  render() {
    return (
      <div className='firstview' id='firstview'>
        <div className='center'>
          <Fade direction='up' duration="500" triggerOnce='true'>
            <FirstViewTextComp />
          </Fade>

          <Fade direction='up' duration="500" triggerOnce='true'>
            <FirstViewAnimatedComp />
          </Fade>
          </div>
      </div>
    )
  }
}
