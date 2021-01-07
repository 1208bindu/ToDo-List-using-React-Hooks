import React from 'react';


const TodoListHooks=({todos,deleteTodo})=>  {  
     
      
    return (
        <div className="todo collection">
        { todos.length?(
        todos.map(todo=>{
            return (
                <div className="collection-item" key={todo.id}>
                    {todo.text}
                    <span style={{color:"red",marginLeft:"20px",fontSize:"20px"}} 
                          onMouseOver={(e)=>{e.target.style.cursor="pointer"}} 
                          onClick={()=>{deleteTodo(todo.id)}}>
                      <b>X</b>  
                    </span>
                </div>
            )
        })
    ):(<p className="center"> Nothing To Do </p>) }
      </div>
    )
  }

export default TodoListHooks

