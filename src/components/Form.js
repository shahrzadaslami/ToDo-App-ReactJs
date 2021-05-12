import React from 'react';

const Form = () => {
    return(
        <form>
            <input type="text" className="list-input" />
            <button className="add-btn" type="submit">add</button>
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