import './ToDoItem.css';
//import {useState} from 'react';
function ToDoItem(props){
    const deleteItem = (elem,id) => {
        props.deleteItem(elem,id);
    }

    const editItem = (elem,id) => {
        let message = prompt("edit your task :",elem);
        props.editItem(id,message);
    }

    return (
        <div>{
            props.item.map((elem,index)=>{
            return(
                    <div className = "button-icon" key={index}>
                        <button className="btn flex-container" style={{textAlign:props.isShowingPending?'left':'center'}}>{elem}
                        <i className="fa fa-pencil-square-o edit-icon" id={`${props.isShowingPending?'notHidden':'hidden'}`} onClick={()=>editItem(elem,index)}></i>
                        <i className="fa fa-trash delete-icon" id={`${props.isShowingPending?'notHidden':'hidden'}`} onClick={()=>deleteItem(elem,index)}></i>
                        </button>
                        </div>
                )
            })}
        </div>
    )
}

export default ToDoItem;