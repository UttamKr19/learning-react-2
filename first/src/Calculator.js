import React from 'react'
import { useState } from 'react'
export default function Calculator() {
    
    
    
    const [inputValue,setInputValue]= useState('')
    
    function display(value){
        setInputValue(inputValue + value);
    }
    
    function clear(){
        setInputValue('');
    }

    function calculate(){
        try {
            var result = eval(inputValue);
            setInputValue(result);
        } catch(err) {
            setInputValue("Error");
        }

        
    }

    
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-5 shadow p-3 mb-5 bg-white rounded">
                <h1 className="text-center">React Calculator</h1>
                <table className="table">
                    <tr>
                        <td colSpan="3"><input type="text" value={inputValue} /></td>
                        <td><button className="btn-secondary" onClick={clear}>C</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>display('7')}>7</button></td>
                        <td><button onClick={()=>display('8')}>8</button></td>
                        <td><button onClick={()=>display('9')}>9</button></td>
                        <td><button className="btn-outline-info" onClick={()=>display('/')}>/</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>display('4')}>4</button></td>
                        <td><button onClick={()=>display('5')}>5</button></td>
                        <td><button onClick={()=>display('6')}>6</button></td>
                        <td><button className="btn-outline-info" onClick={()=>display('-')}>-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>display('1')}>1</button></td>
                        <td><button onClick={()=>display('2')}>2</button></td>
                        <td><button onClick={()=>display('3')}>3</button></td>
                        <td><button className="btn-outline-info" onClick={()=>display('+')}>+</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn-outline-dark"  onClick={()=>display('.')}>.</button></td>
                        <td><button onClick={()=>display('0')}>0</button></td>
                        <td><button className="btn-outline-success" onClick={()=>calculate()}>=</button></td>
                        <td><button className="btn-outline-info" onClick={()=>display('*')}>*</button></td>
                        
                    </tr>
                </table>

            </div>

        </div>
    )
}
