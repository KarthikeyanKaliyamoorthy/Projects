import React, {useState} from "react";

function TodoForm(props: {addTodo:Function}){
    const [assigned, setAssigned] = useState('');
    const [desc,setDesc] = useState('');

    const submitTodo= () => {
        if(assigned !=='' && desc!==''){
            props.addTodo(assigned,desc);
            setAssigned('');
            setDesc('');
        }
    }

    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input className="form-control" type="text" required onChange={e => setAssigned(e.target.value)} value={assigned}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required onChange={e => setDesc(e.target.value)} value={desc}/>
                </div>
                <button className="btn btn-primary mt-3" type="button" onClick={submitTodo}>Add Todo</button>
            </form>

        </div>
    )

}
export default TodoForm