import React, { Component } from 'react'

export default class Animal extends Component {


    render({ name, number, endangered } = this.props) {

        // const {name,number,endangered}=this.props.details;

        const content=this.props.details.map((item,index)=>{
            return <div>
                <ul>
                    <p>Animal : {item.name}</p>
                    <p>Number : {item.number}</p>
                    <p>Endangered : {item.endangered?'Yes':'No'}</p>
                    <hr/>
                </ul>
            </div>
        })

        return (
            <div>
                <p>{this.props.children}</p>
                {content}

            </div>
        )
    }
}


// export default function Animal({ name, number, endangered } ) {

    
//     return (
//         <div>
//             <p> Animal : {name}</p>
//             <p> Number : {number}</p>
//             <p> Endangered : {endangered ? 'Yes' : 'No'}</p>

//         </div>
//     )
// }

