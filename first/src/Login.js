import React from 'react'
import './login.css'
import { useState } from 'react'
import swal from 'sweetalert'

export default function Login() {
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')

    function validate(e){
        e.preventDefault();

        if(username=='admin' && password=='admin'){
            swal('login successful','Congrats','success');
        }
        else{
            swal('login failed','wrong credentials','error');
        }

        
    }

    return (
        <div>
            <div className="text-center">
                <div className="" >
                    <h1>User Authentication</h1>
                </div>
                <div>
                    <form onSubmit={validate}>
                        <input type='text' placeholder='username' className='form-control'
                        value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
                        
                        <input type='password' placeholder='password' className='form-control'
                        value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        
                        <button type='sumbit' value='Submit' className='btn btn-success'>Submit</button>
                    </form>
                </div>
                


            </div>

        </div>
    )
}
