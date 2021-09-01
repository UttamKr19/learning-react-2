
import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div className={`h5 bg-${this.props.theme} text-white p-2`}>
                {this.props.msg}
            </div>
        )
    }
}
