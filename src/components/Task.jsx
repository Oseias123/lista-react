import React from "react";
import Button from "./Button";


const Task = ({ task, handletaskClick, handleTaskDeletion } )=> {
    return(
        <div className="task-container"
        style={task.completed ? { borderLeft: "6px solid chartreuse"} : {}}
        >
        
        <div className="task-title" onClick={() => handletaskClick(task.id)}>
        {task.title}
        </div>

        <div className="buttons-container">             
        
        <Button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
         X  
        </Button>
        </div>
         </div>
   );
};

     
 export default Task;