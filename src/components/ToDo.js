import React from "react";

const ToDo = ({text,todo , setToDo, todos}) =>{
    //Events
    const DeleteHandler = ()=>{
        setToDo(todos.filter(el => el.id !== todo.id));
    };
    return(
        <div className="toDO">
            <li className="todo-item">{text}</li>
                <div className="btn-box">
                <button onClick={DeleteHandler} className="trash-btn"><i class="fas fa-trash-alt"></i></button>
                <button  className="check-btn"><i className="fas fa-check"></i></button>
                </div>
        </div>
    );
}
export default ToDo;