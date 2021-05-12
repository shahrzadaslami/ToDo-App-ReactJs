import React from "react";

const ToDo = ({text,todo , setToDo, todos}) =>{
    //Events
    const DeleteHandler = ()=>{
        setToDo(todos.filter(el => el.id !== todo.id));
    };
    return(
        <div className="toDO">
            <li className="todo-item">{text}</li>
            <button onClick={DeleteHandler} className="trash-btn">Delete</button>
            <button  className="check">check</button>
        </div>
    );
}
export default ToDo;