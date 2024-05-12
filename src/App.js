import AddTask from './AddTask';
import './App.css';
import Header from './Header';
import ToDoList from './ToDoList';
import { useState } from 'react';


function App() {
  const [TaskList,setTaskList] = useState([
    {task:"Learn HTML",complete:false},
    {task:"Learn Javascript",complete:false},
    {task:"Learn React js",complete:false},
    {task:"Learn React Native",complete:false}
  ] )
  function handleToggle(index){
  let mapped =TaskList.map((e,i)=>{
    return(i==index?{...e,complete:!e.complete}:e)
  })
  setTaskList(mapped); 
  }
  function ClearCompleted(){
   let mapped= TaskList.filter(task=>
      {
        return !task.complete
      })
      setTaskList(mapped); 
  }
  function AddNewTasksToList(Newtasks){
 let copy = [...TaskList,Newtasks]
 setTaskList(copy); 
 console.log('Value',TaskList)
  }
  return (
  
    <>
    <div className='App'>
    <Header/>
    <ToDoList TaskList = {TaskList} ClearCompleted={ClearCompleted} handleToggle = {handleToggle}/>
    <AddTask AddNewTasksToList={AddNewTasksToList}/>
    </div>
    </>
  );
}

export default App;
