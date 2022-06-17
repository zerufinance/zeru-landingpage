import React, { Component } from 'react'

export default class Feature extends Component {

    render() {
        return (
            <div className='featurediv' style={{backgroundImage:`url(${this.props.img})`}}>
                <div style={{marginTop:'6rem',marginBottom:'auto'}}>
                    <div className='gradientline'>
                    </div>
                    {this.props.title}
                </div>
            </div>
        )
    }
}
