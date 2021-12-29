
import Todos from "./Todos"
import "./Todolist.scss"

export default function Todolist({todos}){
    return(
        <div className="todo-container">
            <ul className="todo-list" >
                {todos.map((el,i )=> 
                    <Todos key={i} text = {el}/>
                    )}
            </ul>
        </div>
    )
}