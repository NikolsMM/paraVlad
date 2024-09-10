import React, {useState} from 'react';

function ToDoList(){

    const[tasks, setTasks] = useState([]);
    const[newTask, setNewTask] = useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }
    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i !== index))
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks); 
        }
        
    }
    function moveTaksDown(index){
        if(index < tasks.length - 1 ){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks); 
        }
    }
    
    


    return(
        <>
        <div className='to-do-list'>
            <h1 className='to-do-head'>To-Do-List</h1>
            <input type='text' value={newTask} placeholder='Enter a task...' onChange={handleInputChange} className='to-do-input'/>
            <button onClick={addTask} className='to-do-button'>Add</button>
            <ul className='to-do-ul'>
                {tasks.map((task,index) =>
                     <li key={index} className='to-do-li'>
                        <div className='to-do-div'><b>{task}</b>
                            <button onClick={() => 
                                deleteTask(index)} className='to-do-delete'>Delete</button>
                            <button onClick={() => 
                                moveTaskUp(index)} className='to-do-up'>Up</button>
                            <button onClick={() => 
                                moveTaksDown(index)} className='to-do-down'>Down</button>
                        </div>
                    </li>)}
            </ul>
        </div>
        </>
    );
}

export default ToDoList