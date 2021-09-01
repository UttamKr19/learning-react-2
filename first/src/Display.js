import React from 'react'
import { useState } from 'react';
import BookDetails from './BookDetails';
// const [content,setContent]=useState();
export default function Display(props) {

    const [content,setContent]=useState();

    const [tabDisplay,setTabDisplay]=useState('block');
    const [descDisplay,setDescDisplay]=useState('block');
    

    function viewDetails(item){
        console.log(item)
        setContent(<BookDetails item={item}/>)
        setTabDisplay('none')
        setDescDisplay('block')
    }

    function onBack(){
        setTabDisplay('block')
        setDescDisplay('none')

    }

    const items=props.bookData.map((item)=>{
        return(
            <tr key={props.bookData.bookid}>
                <td>{item.bookid}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.price}</td>
                <td><button className="btn btn-sm btn-light" 
                    onClick={()=>{viewDetails(item)}}>
                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                    </button></td>
            </tr>
        )
    })

    return (
        <div className="text-center">
            <button style={{float:"left"}} className="btn btn-sm btn-info"
             onClick={()=>onBack()}>back</button>
            <p className="font-weight-bold"> Book details </p> <hr/>

            <table class="table table-striped table-dark" style={{display:tabDisplay}}>
                <thead className="thead-light font-weight-bold">
                    <tr>
                        <th scope="col">Book-Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>

            <div style={{display:descDisplay}}>
                {content}
            </div>
            
        </div>
    )
}
