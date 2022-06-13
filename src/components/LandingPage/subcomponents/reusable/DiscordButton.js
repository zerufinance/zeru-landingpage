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
                <Button id='discordbtn' type="primary" size='large' style={{ border:'none',borderRadius:'1.75rem' }}>
                    <a style={{display:'flex',alignItems:'center',justifyContent:'center',color:'white'}}>
                        {this.props.value}
                        <FaDiscord style={{height:'30px',width:'30px',paddingLeft:'5px'}}/>
                    </a>
                </Button>
            </div>
        )
    }
}