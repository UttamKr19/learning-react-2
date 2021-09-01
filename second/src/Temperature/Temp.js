import React, { Component } from 'react'
import { useState } from 'react'

export function GradConverter() {
    const [temp, updateTemp] = useState({ farenValue: 0, celciusValue: 0 })

    const updateC = e => updateTemp({
        celciusValue: e.target.value,
        farenValue: (+e.target.value * 9 / 5 + 32).toFixed(2)
    })

    const updateF = e => updateTemp({
        celciusValue: ((+e.target.value - 32) * 5 / 9).toFixed(2),
        farenValue: e.target.value
    })

    return (
        <div id="container">
            <div id="box1">
                <h1>Celsius</h1>
                <input
                    type="number"
                    value={temp.celciusValue}
                    onChange={updateC} >
                </input>
            </div>
            <div id="box2">
                <h1>Fahrenheit</h1>
                <input
                    type="number"
                    value={temp.farenValue}
                    onChange={updateF}>
                </input>
            </div>
        </div>
    )
}


export default class Temp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            celciusValue: 0,
            farenValue: 32,
            status: "cold"
        }
    }


    updateC = e => {
        let cel = e.target.value;
        this.setState({
            celciusValue: e.target.value,
            farenValue: (e.target.value * 9 / 5 + 32).toFixed(2)

        })
        this.changeStatus(cel)
    }

    updateF = e => {
        let cel = ((+e.target.value - 32) * 5 / 9).toFixed(2)
        this.setState({
            celciusValue: ((e.target.value - 32) * 5 / 9).toFixed(2),
            farenValue: e.target.value

        })
        this.changeStatus(cel)
    }

    changeStatus(cel) {
        if (cel > 20) {
            this.setState({ status: "hot" })
        }
        else {
            this.setState({ status: "cold" })
        }
    }

    render() {
        return (
            <div>
                <div id="container">
                    <div id="box1">
                        <h1>Celsius</h1>
                        <input
                            type="number"
                            value={this.state.celciusValue}
                            onChange={this.updateC} >
                        </input>
                    </div>
                    <div id="box2">
                        <h1>Fahrenheit</h1>
                        <input
                            type="number"
                            value={this.state.farenValue}
                            onChange={this.updateF}>
                        </input>
                    </div>

                    <div>
                        {this.state.status}
                    </div>
                </div>
            </div>
        )
    }
}
