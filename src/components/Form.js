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
        <div className="content container col-12">
            <form className="col-lg-5 col-12">
                <input value={inputText} onChange={inputTextHandler} type="text" className="list-input form-control m-2" />
                <button onClick= {submitToDoHandler} className="btn btn-success m-2" type="submit">add</button>
                
                <div className="select m-2">
                    <select name="todos" className="filters form-select">
                        <option value="all">All</option>
                        <option value="To-do">To Do</option>
                        <option value="doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
            </form>
        </div>
       
    );
}

export default Form;