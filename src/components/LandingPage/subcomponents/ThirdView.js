import React, { Component } from 'react'
import { Row } from 'antd';
import { Card } from 'antd';
import { Fade } from 'react-awesome-reveal';
// import nftbg from '../../../images/nftcardbg.png'
import smartcardnft from '../../../images/smartcardnft.png'
import instantloans from '../../../images/instantloans.png'
import carddeligation from '../../../images/carddeligation.png'
import Feature from './minicomps/Feature';


import '../../../css/styles.css'

const cardstyle = {
  maxWidth: 150,
  minHeight: 150,
}

export default class ThirdView extends Component {
  render() {
    return (
      <div id='transferablenft' className='commonview' >
        <Fade direction='left' duration={500} triggerOnce='true' >
          <div className='textmargin'>
            Transferable <span className='gradientext4'>NFT's</span>
            <p style={{fontSize:'1.2rem',fontWeight:'500'}}>Transfer your credit to anyone as NFT.</p>
          </div>
        </Fade>
        
        <Row style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', textAlign: 'left',gap:'1rem' }}>
                    <Fade direction='left' duration={500} triggerOnce fraction={0.5}>
                        <Feature title="Zero Collateral Loans" img={instantloans} />
                    </Fade>
                    <Fade direction='up' duration={500} triggerOnce fraction={0.5}>
                        <Feature title="Smart Card NFT's" img={smartcardnft} />
                    </Fade>
                    <Fade direction='right' duration={500} triggerOnce fraction={0.5}>
                        <Feature title="" img={carddeligation} />
                    </Fade>
                </Row>

      </div>
    )
  }
}
