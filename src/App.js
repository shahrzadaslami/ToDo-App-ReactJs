import './App.css';
import Form  from './components/Form';
import todoList from './components/todoList';
function App() {
  return (
    <div className="App">
      <header>
        <h1>ReactJS To-Do list App</h1>
      </header>
      <Form/>
      <todoList />
    </div>
  );
}

export default App;
