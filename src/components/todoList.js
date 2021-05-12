import React from "react";
import ToDo from './ToDo';
const TodoList = ({todos, setToDo}) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <ToDo setToDo={setToDo} todo={todo} todos ={todos} key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;