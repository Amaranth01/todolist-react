import './App.css';
import {useState} from "react";
import {RemoveCheck} from "../RemoveCheck/RemoveCheck";
import {Progress} from "../Progress/Progress";
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
            <div className='title'>
                <h1>TODOLIST</h1>
            </div>
            <div>
               <Task/>
            </div>
            <div>
                <RemoveCheck/>
                <Progress/>
            </div>
        </>
    );
}

export default App;
