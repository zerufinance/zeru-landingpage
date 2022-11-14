import React from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import '../../../../css/styles.css'
import defi from '../../../../images/deficard.png'
import nft from '../../../../images/nftcard.png';


export default function Defiandnft() {
    
    return (
        <div >
            <Row className='defiandnftcardrow'>

                <Col span={11} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', background: 'transparent' }}>
                    <div >
                        <Fade direction='left' duration="500" triggerOnce='true' fraction={0.5}>
                            {/* <Card className='bringingcard' style={{ width: 200, height: 200,borderRadius: '0.75rem', boxShadow: '0 6px 12px 0 rgba(3, 19, 84, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white', background: '-webkit-linear-gradient(#AC19FF, #5b0ce9, #1E4FFF)', border: '2px', borderColor: '#AC19FF'}} >
                                <span style={{color: '#ffffff'}}>
                                    DEFI
                                </span>
                                <p style={{color: '#ffffff'}}>Credit</p>
                            </Card> */}
                            <div className='featurediv2' style={{backgroundImage:`url(${defi})`, width: '20', height: '20'}}>
            </div>
                        </Fade>
                    </div>
                    
                     
                </Col>

                <Col span={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'transparent' }}>
                    <Bounce triggerOnce='true' fraction={1}>
                        <span id='plus'>+</span>
                    </Bounce>
                </Col>

                <Col span={11} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', background: 'transparent'}}>
                    <Fade direction="right" duration="500" triggerOnce='true' fraction={0.5}>
                        {/* <Card className='bringingcard' style={{ width: 200, height: 200, borderRadius: '0.75rem', boxShadow: '0 6px 12px 0 rgba(3, 19, 84, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                            <span className='gradientext4'>
                                NFT
                            </span>
                            <p>Smart Cards</p>
                        </Card> */}
                        <div className='featurediv2' style={{backgroundImage:`url(${nft})`, width: '20', height: '20'}}></div>
                    </Fade>
                </Col>
            </Row>
        </div>
    )
}
