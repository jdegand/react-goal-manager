import base from "../api/base";

function Delete(props){

    const handleDelete = () => {

        base("progress").destroy(props.updateId, function(err, record){
            if(err){
                console.error(err)
            } 
        })

        base("goals").destroy(props.goalId, function(err, record){
            if(err){
                console.error(err)
            } 
            console.log(`Record ${props.goalId} deleted`)
        })
    }

    return (
        <>
            <button type="button" onClick={handleDelete}>Delete</button>
        </>
    )
}

export default Delete;