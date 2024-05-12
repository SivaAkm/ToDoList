import React from "react";

function ToDo({task,handleToggle,index}){
    return(
        <>
        <div onClick={()=>handleToggle(index)} className={task.complete ? "strike":""}>
            {task.task}
        </div>
        </>

    )
}

 function ToDoList({TaskList,handleToggle,ClearCompleted}){
   
    return(
        <>
        <div>
            {TaskList.map((task,i)=><ToDo task={task} index={i} handleToggle={handleToggle}/>)}
            &nbsp;
            <button onClick={()=>ClearCompleted()}>Clear Completed Tasks</button>
            
        </div>
        </>
    )
}
export default ToDoList;
