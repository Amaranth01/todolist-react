import './App.css';
import {useState} from "react";
import {TaskList} from "../TaskList/TaskList";
import {Task} from "../Task/Task";


function App() {
    const[taskList, setTaskList] = useState([]);
    const [isTaskUpdated, setIsTakUpdated] = useState(false);

    if(isTaskUpdated) {
        setTaskList(taskList);
        setIsTakUpdated(false);
    }

    return (
        <>
            <div className='app'>
                <div className='title'>
                    <h1>TODOLIST</h1>
                </div>
                <div>
                    <TaskList/>
                </div>
            </div>

        </>
    );
}

export default App;
