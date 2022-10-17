import React, {useState} from "react";
import Task from "./Task";

const Tasks = ({ tasks,handletaskClick,handleTaskDeletion})=> {
       
    return (
        <>
        {tasks.map((task )=> (
             <Task  
             key={task.id}
             task ={task}
		     handletaskClick={handletaskClick}
			handleTaskDeletion={handleTaskDeletion}/>
        )
           )}
        </>
 )};
      

export default Tasks;