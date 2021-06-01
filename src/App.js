import React, {useState} from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jQuery/jquery';
import '../node_modules/@popperjs/core/dist/cjs/popper'
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/fortawesome/fontawesome-free/css/all.min.css'; 
import Form  from './components/Form';
import TodoList from './components/TodoList';
import Hedaer from './components/Header';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDo] = useState([]);
  return (
    <div className="App">
      {/*<header>
        <h1>ReactJS To-Do list App</h1>
      </header>*/}
      <Hedaer/>
      <Form todos ={todos} inputText={inputText} setToDo={setToDo} setInputText={setInputText}/>
      <TodoList setToDo={setToDo} todos ={todos}/>
    </div>
  );
}

export default App;
