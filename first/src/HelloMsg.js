import React, { Component } from 'react'

// export default class HelloMsg extends Component {
//     constructor(props){
//         super(props);
        
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello {this.props.name}</h1>
//             </div>
//         )
//     }

// }

export const HelloMsg=props=><h1>Hello {props.name} {props.children}</h1>