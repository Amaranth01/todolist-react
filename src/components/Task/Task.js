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
        <div>
            <input type="checkbox" checked={completed} onChange={onToggle}/>
            <span className={completed ? 'completed-task' : ''}>{name}</span>
            <button onClick={() => setIsEditing(true)}><FaEdit/></button>
            <button onClick={onDelete}><FaTrashAlt/></button>
        </div>
    );
}