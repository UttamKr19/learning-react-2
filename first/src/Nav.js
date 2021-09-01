import React, { Component } from 'react'
import './nav.css';
export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: 'none'
        }

        this.toggleNavbar=this.toggleNavbar.bind(this)
    }

    toggleNavbar() {
        this.setState({show:this.state.show==='none'?'block':'none'});
    }

    render() {
        return (
            <div>
                <div>
                    <button id="navIcon" onClick={this.toggleNavbar} className="fas fa-bars btn-dark "></button>
                </div>

                <div id="myNav" style={{display:this.state.show}}>
                    <nav className="navbar navbar-light bg-light font-weight-bold">
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Products</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>


            </div>
        )
    }
}
