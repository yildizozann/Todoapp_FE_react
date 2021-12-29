
import "./Todo.scss"

export default function Todos({text}){
    return(
        <div className="todo">
            <li className="todo-item" >{text}</li>
        </div>
    )
}