import React from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import '../../../../css/styles.css'

export default function Defiandnft() {
    
    return (
        <div >
            <Row className='defiandnftcardrow'>

                <Col span={11} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', background: 'transparent' }}>
                    <div >
                        <Fade direction='left' duration="500" triggerOnce='true' fraction={0.5}>
                            <Card className='bringingcard' style={{ width: 200, height: 200,borderRadius: '0.75rem', boxShadow: '0 6px 12px 0 rgba(3, 19, 84, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }} >
                                <span className='gradientext4'>
                                    DEFI
                                </span>
                                <p>Credit</p>
                            </Card>
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
                        <Card className='bringingcard' style={{ width: 200, height: 200, borderRadius: '0.75rem', boxShadow: '0 6px 12px 0 rgba(3, 19, 84, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                            <span className='gradientext4'>
                                NFT
                            </span>
                            <p>Smart Cards</p>
                        </Card>
                    </Fade>
                </Col>
            </Row>
        </div>
    )
}
