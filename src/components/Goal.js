import Delete from './Delete';

function Goal(props) {
    const goalId = props.goal.id;

    return (
        <div className="column">
            <div className="flex">
                <label>
                    <input type="checkbox" defaultChecked={props.goal.fields.completed} disabled />
                </label>
                <h1>{props.goal.fields.title}</h1>
            </div>
            <h2>Details</h2>
            <p>{props.goal.fields.description}</p>
            <h3>Updates</h3>
            {props.updates.map((update, index) => <div key={index}>{update.fields.update}</div>)}
            <Delete className="delete" goalId={goalId} updateId={props.goal.fields.progress} />
            <br />
        </div>
    )
}

/*
<Delete className="delete" goalId={goalId} updateId={props.goal.fields.progress} />
*/

export default Goal