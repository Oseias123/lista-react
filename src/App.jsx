import React, {useState} from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";

const App = () => {
    const [ tasks, setTasks ] = useState([
        {
            id: "1",
            title:"Estudar Programação",
            completed: false,
        },
        {
            id:"2",
            title: "Ler Livros",
            completed: true,
        }
        
    ]);

    const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };

			return task;
        });

        setTasks(newTasks)
    };

     

    const handleTaskAddition = (taskTitle) => {
        const newTasks  = [
            ...tasks, 
            {
                title: taskTitle,
                id: Math.random(10),
                completed: false,
            },
        ];        

        setTasks (newTasks); 
    }
    
    const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter((task) => task.id  !== taskId); 


         setTasks(newTasks)  
    };
    
    return (
        <>
         <div className="container">
            <AddTask handleTaskAddition= {handleTaskAddition} /> 
            <Tasks 
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}            
            />
        </div>
        </>
    );
};

export default App;