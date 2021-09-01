import React, { Component } from 'react'

export default class ActionButton extends Component {
    render() {
        return (
            <div>
                <button className={`btn btn-${this.props.theme} m-2 p-2`}
                onClick={this.props.callback}>{this.props.text}</button>

            </div>
        )
    }
}
