import React from 'react'
import './todo.css'
import { useState } from 'react'

export default function Todo() {

    const [taskName,setTaskName]=useState('');
    const [taskList,setTaskList]=useState([]);


    function onAddTask(){
        setTaskList([...taskList,taskName]);
    }

    function onDeleteTask(index){
        var tempList=[...taskList];
        tempList.splice(index,1);
        setTaskList(tempList);
    }

    const taskListContent=taskList.map((task,index)=>{
        return <div>
                <p>
                    {index+1 } {task} 
                    {/* <button class="fas fa-shopping-cart" onClick={()=>onAddToCart(index)}></button> */}
                    <i class="fas fa-trash-alt" onClick={()=>onDeleteTask(index)}> </i>
                </p>
                
            </div>
    })

    return (
        <div className="row justify-content-center">
            <div className="col-md-5">
                
                <h1>My list</h1>
                <input type="text" placeholder="Enter task" className="form-control"
                value={taskName} onChange={(e)=> setTaskName(e.target.value)}/>
                <button className="btn btn-info" onClick={onAddTask}>Add task</button>

                <br/>
                <hr/>
                <div>{taskListContent}</div>

            </div>
            
        </div>
    )
}
