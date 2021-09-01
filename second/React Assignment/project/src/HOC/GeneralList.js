import React, { Component } from 'react'

export default class GeneralList extends Component {
    render() {
        return (
            <div className={`bg-${this.props.theme} text-white p-2 m-2`}>
                {this.props.list.map((item, index) =>
                    <div key={item}>{index + 1}:{item}
                    </div>
                )}
            </div>
        )
    }
}
