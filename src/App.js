
import { useEffect, useState } from 'react';
import './App.scss';
import Todolist from './components/Todolist';
import PostBackend from './api/PostBackend';
import GetBackend from './api/GetBackend';
import apiUrl from './utils/apiUrl';


function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [allTodos, setAllTodos] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    (async () => {
      let response;
      response = await GetBackend(apiUrl().url, apiUrl().port)
      if (!!response) {
        setAllTodos(response.map(value => value.todo))
      }
    })();

  }, [isClicked])
  
  const inputHandler = (e) => {
    setInput(e.target.value) 
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    let newData = { todo: input }
    let response = await PostBackend(apiUrl().url, apiUrl().port, newData)
    if (!!response) {
      setInput("")
      setIsClicked(!isClicked)
      setTodos([
        ...todos, input
      ])
    } 
  }

  return (
    <div className="App">
      <header className="To Do List">
        To Do List
      </header>

      <form>
        <input placeholder="Add To Do " value={input} onChange={inputHandler} type="text" className="todo-input" required />
        <button disabled={!input} onClick={submitHandler} type="submit" className="todo-button">Submit</button>
      </form>
      <Todolist todos={allTodos} />
      


    </div>
  );
}

export default App;
