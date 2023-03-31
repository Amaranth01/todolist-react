import './TaskProgress.css';

export const TaskProgress = function (props) {
    return(
        <div className='advancement'>
            <p>{props.completed}/{props.total} tâches terminées</p>
        </div>
    );
}