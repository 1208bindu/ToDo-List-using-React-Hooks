import React,{useState} from 'react';

const AddTodoHooks=({addTodo})=>{
    const [job,setJob] =useState('');
    
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        addTodo(job);
        setJob('');

    }
        return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add New To Do</label>
                <input type="text" id="job" value={job} onChange={(e)=>setJob(e.target.value)}/>
            </form>
        </div>
        )
    }



export default AddTodoHooks;