import React, { Component } from 'react'
import { Row, Col } from 'antd';
import credit from '../../../images/credit.png'
import freeupcollateral from '../../../images/freeupcollateral.png'
import users from '../../../images/user.png'
import institution from '../../../images/institution.png'
import { Fade } from 'react-awesome-reveal';
import Feature from './minicomps/Feature';
import '../../../css/second.css'


export default class fifthview extends Component {
    render() {
        return (
            <div id='fifthview'>
                <Fade direction='up' duration={500} triggerOnce='true' fraction={1}>
                    <div className='heading'>
                        Zero Collateral Loans
                        <div className='gradientlinebottom'>
                        </div>
                        <p style={{ fontSize: '1rem' }}>Enabling Zero collateral loans to everyone in the world</p>
                    </div>
                </Fade>
                <div className='featurecontainer'>
                    <Fade direction='left' duration={500} triggerOnce='true' fraction={1}>
                        <Feature title="Get line of Credit" text=" orem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content." img={credit} width={60} />
                    
                        
                    </Fade>
                    <Fade direction='up' duration={500} triggerOnce='true' fraction={1}>
                   
                        <Feature title="Free up your collateral" text=" orem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content." img={freeupcollateral} width={60}/>

                    
                    </Fade>
                    <Fade direction='right' duration={500} triggerOnce='true' fraction={1}>
                    
                    
                        <Feature title="Community First" text=" Loans are given out to both Retail Borrowers and Institutional Borrowers alike." img={users} width={60}/>
                   
                    </Fade>
                    
                </div>
                
                {/* <Fade direction='up' duration={500} triggerOnce='true' fraction={1}>
                    <div className='heading'>
                        Zero Collateral Loans
                        <p style={{ fontSize: '1rem' }}>Enabling Zero collateral loans to everyone in the world</p>
                    </div>
                    
                </Fade>

                <div className='secondcenter'>
                    <Fade direction='left' duration={500} triggerOnce='true' fraction={1}>
                        <div className='d1'>
                            Get line of credit
                            <p>
                                orem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content.
                            </p>
                        </div>
                    </Fade>
                    <Fade direction='right' duration={500} triggerOnce='true' fraction={1}>
                        <div className='d2'>
                            <img src={Credit} alt="get credit" width={150} />
                        </div>
                    </Fade>
                    
                </div>

                <div className='secondcenter'>
                    <Fade direction='left' duration={500} triggerOnce='true' fraction={1}>
                        <div className='d2'>
                            <img src={collateral} alt="get credit" width={150} />
                        </div>
                    </Fade>
                    <Fade direction='right' duration={500} triggerOnce='true' fraction={1}>
                        <div className='d1'>
                            Free up your collateral
                            <p>
                                orem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content.
                            </p>
                        </div>
                    </Fade>
                    
                </div>

                <div className='secondcenter'>
                    <Fade direction='left' duration={500} triggerOnce='true' fraction={1}>
                        <div className='d1'>
                            Retail + Institutional
                            <p>
                                Loans are given out to both Retail Borrowers and Institutional Borrowers alike.
                            </p>
                        </div>
                    </Fade>
                    <Fade direction='right' duration={500} triggerOnce='true' >
                        <div className='d2'>
                            <div className='id1'>
                                <img src={users} alt="get credit" width={150} />
                                +
                                <img src={institution} alt="get credit" width={150} />
                            </div>
                        </div>
                    </Fade>
                   
                </div> */}
                
            </div>
        )
    }
}
