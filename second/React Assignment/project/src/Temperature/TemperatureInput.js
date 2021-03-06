import React, { Component } from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};


export default class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div >
                <span><b>Temperature in {scaleNames[scale]}</b></span> <br/>
                <input className="form-control-lg" value={temperature}
                    type="number"
                    onChange={this.handleChange} />
                   <br/><br/>
            </div>

        );
    }
}