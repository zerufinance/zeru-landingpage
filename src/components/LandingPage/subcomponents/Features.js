import React, { Component } from 'react'
import { Row } from 'antd'
import Feature from './minicomps/Feature';
import { Fade } from 'react-awesome-reveal';
import featureone from '../../../images/featureone.png'
import featuretwo from '../../../images/featuretwo.png'
import featurethree from '../../../images/featurethree.png'

export default class Features extends Component {
    render() {
        return (
            <div className='features' id='features' >
                <Fade duration={500} direction='up' triggerOnce='true' >
                    <div>
                        Features
                        <div className='underline'>
                        </div>
                    </div>

                </Fade>

                <Row style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', textAlign: 'left',gap:'1rem' }}>
                    <Fade direction='left' duration={500} triggerOnce fraction={0.5}>
                        <Feature title="Zero Collateral Loans" img={featureone} />
                    </Fade>
                    <Fade direction='up' duration={500} triggerOnce fraction={0.5}>
                        <Feature title="Smart Card NFT's" img={featuretwo} />
                    </Fade>
                    <Fade direction='right' duration={500} triggerOnce fraction={0.5}>
                        <Feature title="" img={featurethree} />
                    </Fade>
                </Row>
            </div>
        )
    }
}
