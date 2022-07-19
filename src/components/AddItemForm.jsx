import React,{ useState } from 'react';
import './AddItemForm.css'

function AddItemForm(props){

    const[data,setData] = useState('');

    const addItem = () =>{
        if(data!==''){
            props.saveItem(data);
        }
        setData('');
    }

    return(
        <div className="input-icons">
                <input
                    placeholder="Add new task"
                    className="input-field"
                    value = {data}
                    onChange = {(e) => setData(e.target.value)}
                />
                <i
                className="fa fa-plus icon"
                onClick = {addItem}
                ></i>
        </div>
    )
}

export default AddItemForm;