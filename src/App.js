import React, {useState} from "react";
import './App.css';
import Form  from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDo] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>ReactJS To-Do list App</h1>
      </header>
      <Form todos ={todos} inputText={inputText} setToDo={setToDo} setInputText={setInputText}/>
      <TodoList setToDo={setToDo} todos ={todos}/>
    </div>
  );
}

export default App;
