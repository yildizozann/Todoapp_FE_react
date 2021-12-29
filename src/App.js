
import { useEffect, useState } from 'react';
import './App.scss';
import Todolist from './components/Todolist';
import PostBackend from './api/PostBackend';
import GetBackend from './api/GetBackend';


function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [allTodos, setAllTodos] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    (async () => {
      let response;
      response = await GetBackend()
      setAllTodos(response.map(value => value.todo))
      console.log("çalıştın mı yavru")
    })();
  }, [todos])

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = async(e) => {
    e.preventDefault();
    setTodos([
      ...todos, input 
    ])
    let newData = {todo:input}
    PostBackend(newData)
    setInput("")    
  }
  const getAPI = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked)
  }
  return (
    <div className="App">
      <header className="To Do List">
        To Do List
      </header>
      
      <form>
        <input hidden={isClicked} placeholder="Add To Do " value={input} onChange={inputHandler} type="text" className="todo-input" required />
        <button hidden={isClicked} disabled={!input} onClick={submitHandler} type="submit" className="todo-button">Submit</button>
        <button  className="todo-button" onClick={getAPI}>{isClicked ? "Add Todo" : "Show All"}</button>
      </form>
      
      {isClicked ? <Todolist todos={allTodos} /> : <Todolist todos={todos} /> }
       

    </div>
  );
}

export default App;
