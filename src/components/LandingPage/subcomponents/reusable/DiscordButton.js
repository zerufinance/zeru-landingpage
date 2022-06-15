import React, { Component } from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { FaDiscord } from 'react-icons/fa'


export default class DiscordButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Button id='discordbtn' type="primary" size='large' style={{ border:'none',borderRadius:'1.75rem'}}>
                    <a href='https://discord.com/invite/yW2BU288Kw' target="_blank" style={{display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'1.2rem',fontWeight:'500'}}>
                        {this.props.value}
                        <FaDiscord style={{height:'30px',width:'30px',paddingLeft:'5px'}}/>
                    </a>
                </Button>
            </div>
        )
    }
}
