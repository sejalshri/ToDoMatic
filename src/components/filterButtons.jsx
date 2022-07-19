//import {useState} from 'react';
import './FilterButtons.css'

function FilterButtons(props){

    const showCompletedTasks=()=>{
        props.showCompletedTasks();
    }
    const showPendingTasks=()=>{
        props.showPendingTasks();
    }
    return(
        <div>
            <button onClick = {showPendingTasks} className={`${props.isShowingPending?'green':'white'}`}>Pending Tasks</button>
            <button onClick = {showCompletedTasks} className={`${props.isShowingPending?'white':'green'}`}>Completed Tasks</button>
        </div>
    )
}

export default FilterButtons;