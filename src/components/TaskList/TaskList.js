import './TaskList.css';
import {useState} from 'react';
import {Task} from "../Task/Task";

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

    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                <button type="submit">+</button>
            </form>

            {tasks.map((task, index) => (
                    <Task key={index} name={task.name} completed={task.completed}
                          onDelete={() => handleDeleteTask(index)}
                          onEdit={(newName) => handleEditTask(index, newName)}
                          onToggle={() => handleToggleTask(index)}
                    />
                )
            )}

        </div>
    );
}