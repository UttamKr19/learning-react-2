import React from 'react'
import { useState } from 'react'

export default function Forms() {



    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[cPassword,setCPassword]=useState('')

    const[eusername,seteUserName]=useState('')
    const[eemail,seteEmail]=useState('')
    const[epassword,setePassword]=useState('')
    const[ecPassword,seteCPassword]=useState('')

    const[uColor,setuColor]=useState('')
    const[eColor,seteColor]=useState('')
    const[pColor,setpColor]=useState('')
    const[cpColor,setcpColor]=useState('')

    
    function validate(e){
        // e.preventDefault();

        if(username.length>3){
            seteUserName('');
            setuColor('green');
        }
        else{
            seteUserName('Length must be greater than 3');
            setuColor('red');
        }

        if(email.includes('@gmail.com')){
            seteEmail('');
            seteColor('green');
        }
        else{
            seteEmail('email not valid');
            seteColor('red');
        }


        if(password.length>3){
            setePassword('');
            setpColor('green');
        }
        else{
            setePassword('Length must be greater than 3');
            setpColor('red');
        }

        if(cPassword!=='' && cPassword===password){
            seteCPassword('');
            setcpColor('green');
        }
        else{
            seteCPassword('password does not match');
            setcpColor('red');
        }



    }
    
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-5 formClass">
                <h1>Form validation</h1>

                <input type="text" placeholder="username" className="form-control"
                style={{borderColor:uColor}}
                value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
                <p>{eusername}</p>

                <input type="email" placeholder="email" className="form-control"
                style={{borderColor:eColor}}
                value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <p>{eemail}</p>

                <input type="password" placeholder="password" className="form-control"
                style={{borderColor:pColor}}
                value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <p>{epassword}</p>

                <input type="password" placeholder="confirm password" className="form-control"
                style={{borderColor:cpColor}}
                value={cPassword} onChange={(e)=>{setCPassword(e.target.value)}}/>
                <p>{ecPassword}</p>

                <button className="btn btn-block btn-primary" onClick={validate}> Submit </button>
            </div>
        </div>
    )
}
