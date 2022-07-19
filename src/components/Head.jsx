import todo from '../images/todo.png';
import './Head.css'
function Head(){
    return (
        <div>
            <figure>
                <img src={todo} alt="todologo" className="todo-image"/>
                <figcaption className="caption">ToDoMatic : Add your tasks here</figcaption>
            </figure>
        </div>
    )
}

export default Head;