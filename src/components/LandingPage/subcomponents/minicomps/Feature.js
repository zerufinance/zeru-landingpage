import React, { Component } from 'react'

export default class Feature extends Component {

    render() {
        return (
            <div className='featurediv'>
                 <img src={this.props.img} width={this.props.width} style={{marginBottom:'10px'}}/>
                <div className='gradientline'>
                </div>
                <div>
                    {this.props.title}
                </div>
                <div>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}
