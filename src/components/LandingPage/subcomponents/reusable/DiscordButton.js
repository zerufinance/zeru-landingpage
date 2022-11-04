import React, { Component } from 'react'
import { Button } from 'antd';
import { FaDiscord } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa';


export default class DiscordButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Button id='discordbtn' type="primary" size='large' style={{ border:'none',borderRadius:'8.7px',background:'transparent'}}>
                    <a href='https://discord.com/invite/yW2BU288Kw' target="_blank" style={{display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'1.4rem',fontWeight:'600'}}>
                    <FaDiscord style={{height:'30px',width:'30px',paddingLeft:'5px', color:"#fff"}}/>
                    &nbsp;
                    {this.props.value}
                    </a>
                </Button>
            </div>
        )
    }
}
