
import './RemoveCheck.css';

export const RemoveCheck = function (props) {
    const handleClick = () => {
        props.onRemoveCheck();
    };
    return(
        <div>
            <button className="clearTaskCompleted" onClick={handleClick}>Supprimer les tâches terminées</button>
        </div>
    );
}