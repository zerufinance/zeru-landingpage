import React, {Component} from "react";
import polygon from "../../../images/polygon.png"
import { Fade } from 'react-awesome-reveal';

export default class MultiChain extends Component {
    render() {
        return (
            <div className='multichainview' id='multichain'>
        <Fade direction='up' duration="500" triggerOnce='true'>
          <h1 style={{ color: 'white', marginBottom: '0px', fontWeight: 'bolder' }}>Multi-chain</h1>
          <div style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: '20px' }}>
            <img src={polygon} style={{width: '90%'}} />
          </div>
        </Fade>

      </div>
        )
    }
}