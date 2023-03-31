import './TaskList.css';
import {useState} from 'react';
import {Task} from "../Task/Task";
import {TaskProgress} from "../TaskProgress/TaskProgress";
import {RemoveCheck} from "../RemoveCheck/RemoveCheck";

export const TaskList = function () {
    // Stores the task list
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = (e) => {
        //prevent page loading
        e.preventDefault();
        setTasks([...tasks, {name: newTask, completed: false}]);
        setNewTask('');
    }

    const handleEditTask = (index, newName) => {
        const newTasks = [...tasks];
        newTasks[index].name = newName;
        setTasks(newTasks);
    };

    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    //Manage the checkbox
    const handleToggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    //Delete Task if completed is true
    const handleRemoveCheck = () => {
        const newTasks = tasks.filter(task => !task.completed);
        setTasks(newTasks);
    }

    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;

    return (
        <div className='formTaskList'>
            <form onSubmit={handleAddTask} >
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} className='addTaskForm'/>
                <button type="submit" className='addButton'>+</button>
            </form>
            <div>
                {tasks.map((task, index) => (
                        <Task key={index} name={task.name} completed={task.completed}
                              onDelete={() => handleDeleteTask(index)}
                              onEdit={(newName) => handleEditTask(index, newName)}
                              onToggle={() => handleToggleTask(index)}
                        />
                    )
                )}
            </div>

            <div className='details'>
                {tasks.length > 0 &&
                    <>
                        <TaskProgress completed={completedTasks} total={totalTasks}/>
                        <RemoveCheck onRemoveCheck={handleRemoveCheck}/>
                    </>
                }
            </div>


        </div>
    );
}