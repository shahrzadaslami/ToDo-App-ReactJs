import React from 'react';

const Form = ({setInputText, todos,setToDo, inputText}) => {
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitToDoHandler = (e)=> {
        e.preventDefault();
        setToDo([
            ...todos, 
            {text: inputText, Done: false, id:Math.random() * 1000},
        ]);
        setInputText("");
    };
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="list-input" />
            <button onClick= {submitToDoHandler} className="add-btn" type="submit">add</button>
            <div className="select">
                <select name="todos" className="filters">
                    <option value="all">All</option>
                    <option value="To-do">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        </form>
    );
}

export default Form;