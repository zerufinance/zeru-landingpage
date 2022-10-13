import React, { Component } from "react";

import partnerships from '../../../images/partnerships.png'

export default class Partnerships extends Component {
  render() {
    return <div className="multichainview" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src={partnerships} style={{width: '90%'}}/>
        <a class="cta" style={{width: '150px'}} href="#">Get in touch</a>
        
    </div>;
  }
}
