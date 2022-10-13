import React, { Component } from 'react'
import { Button } from 'antd';
import { FaDiscord } from 'react-icons/fa'


export default class DiscordButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Button id='discordbtn' type="primary" size='large' style={{ border:'none',borderRadius:'8.7px'}}>
                    <a href='https://discord.com/invite/yW2BU288Kw' className='gradientext' target="_blank" style={{display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'20.8px',fontWeight:'600'}}>
                    <FaDiscord style={{height:'30px',width:'30px',paddingLeft:'5px', color: "background: -webkit-linear-gradient(left, #224df9, #5b0ce9, #ce00cd)"}}/>
                        {this.props.value}
                        
                    </a>
                </Button>
            </div>
        )
    }
}
