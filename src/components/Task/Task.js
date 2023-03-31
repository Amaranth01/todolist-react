import './Task.css';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
export const Task = function ({name, completed, onDelete, onEdit, onToggle}) {
    //Get the task for a new name
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    const handleEditTask = () => {
        onEdit(newName);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setIsEditing(false);
        setNewName('');
    }

    //New form for edit task
    if(isEditing) {
        return(
            <form onSubmit={handleEditTask}>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                <button type="submit">Editer la tâche</button>
                <button type='button' onClick={handleCancel}>Annuler</button>
            </form>
        );
    }

    return(
        <div className='task'>
            <input type="checkbox" checked={completed} onChange={onToggle} className='check'/>
            <span className={completed ? 'completed-task' : ''}>{name}</span>
            <span>
                <button onClick={() => setIsEditing(true)} className='edit'><FaEdit/></button>
                <button onClick={onDelete}><FaTrashAlt/></button>
            </span>


        </div>
    );
}