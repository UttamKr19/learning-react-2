import React from 'react'

export default function BookDetails(props) {

    return (
        <div>
            {/* <button style={{float:"left"}} className="btn btn-sm btn-info"
             onClick={()=>onBack()}>back</button> */}
             
            <div className="container justify-center">
                <span style={{float:"left"}}>Book Name : <span className="font-weight-bold">{props.item.title}</span> </span><br />
                <span style={{float:"left"}}> Author : <span className="font-weight-bold">{props.item.author}</span> </span><br /> <hr />
                About : <p className="font-weight-bold">{props.item.desc}</p>
            </div>
        </div>

    )
}
