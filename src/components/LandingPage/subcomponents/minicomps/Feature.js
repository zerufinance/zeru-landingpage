import React, { Component } from 'react'

export default class Feature extends Component {

    render() {
        return (
            <div className='featurediv' style={{backgroundImage:`url(${this.props.img})`}}>
            </div>
        )
    }
}
