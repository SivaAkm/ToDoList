import React, { useState } from "react";

export default function AddTask({AddNewTasksToList}){
    const [input,setInput] =useState(null);
    const [newtasks,setNewtasks]=useState(null);
    function InputHandler(e){
        setInput(e.target.value);
    const Value = {task:e.target.value,complete:false}
    
    setNewtasks(Value);
   
    }
    function handleSubmit(e){
    e.preventDefault();
    setInput('');
    AddNewTasksToList(newtasks);
    }
    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" value = {input} onChange = {(e)=>InputHandler(e)}placeholder="Enter new task here..."></input>
            &nbsp;<button>Add Task</button>
        </form>
    )
}