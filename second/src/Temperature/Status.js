import React, { Component } from 'react'

export default function Status(props) {
    let val=props.celsius;
    let status="";
    let icon=<i className="fas fa-thermometer-half"></i>;
    let color;
   
    if(val<0){
        status="Extremely Cold"
        color="navy"
    }
    else if (val < 15) {
        status="Very Cold"
        color="blue"
    }
    else if(val<25){
        status="Cold"
        color="cornflowerblue"
    }
    else if(val <40){
        status="Warm"
        color="orange"
    }
    else if(val <60){
        status="Hot"
        color="coral"
    }
    else if(val <75){
        status="Very Hot"
        color="red"
    }
    else if(val >=75){
        status="Extremely Hot"
        color="darkred"
    }

    return <div>
        <b><p style={{color:color}}>{icon} {status}</p></b> 
    </div>
}