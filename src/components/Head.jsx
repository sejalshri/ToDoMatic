import todo from '../images/todo.jpg';
import './Head.css'
function Head(){
    return (
        <div>
            <figure>
                <img src={todo} alt="todologo" className="todo-image"/>
                <figcaption>Add your tasks here</figcaption>
            </figure>
        </div>
    )
}

export default Head;