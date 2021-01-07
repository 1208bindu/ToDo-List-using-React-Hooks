import React,{useState} from 'react';
import TodoListHooks from "./TodoListHooks.js";
import AddTodoHooks from './AddTodoHooks';

const DisplayTodoHook = ()=>
{
    const [todos,setTodos] = useState([]);
   
    const addTodo=(e)=>{
     
     setTodos([...todos,{id:todos.length+1,text:e}]);
    } 
 
    const deleteTodo=(id)=>
    {
     let newTodos = todos.filter((todo) => todo.id!==id );
     setTodos(newTodos);
    }
 
        return (
       <div>     <TodoListHooks todos={todos} deleteTodo={deleteTodo}/>
            <AddTodoHooks addTodo={addTodo}/>
            </div>
                    );
    }

export default DisplayTodoHook;




