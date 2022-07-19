function FilterButtons(props){
    const showCompletedTasks=()=>{
        props.showCompletedTasks();
    }
    const showPendingTasks=()=>{
        props.showPendingTasks();
    }
    return(
        <div>
            <button onClick = {showPendingTasks}>Pending Tasks</button>
            <button onClick = {showCompletedTasks}>Completed Tasks</button>
        </div>
    )
}

export default FilterButtons;