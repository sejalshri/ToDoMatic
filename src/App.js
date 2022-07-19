import {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Head from './components/Head';
import AddItemForm from './components/AddItemForm';
import ToDoItem from './components/ToDoItem';
import FilterButtons from './components/filterButtons'
import './index.css'
function App() {

    const [pending,setPending]=useState([]);
    const [completed,setCompleted]=useState([]);

    const [item,setItem]=useState([]);

    const onClickPlusIcon = (enteredData) => {
        setPending([...pending,enteredData]);
        setItem([...pending,enteredData]);
    }

    const onClickDeleteIcon = (element,deletedId) => {
        setCompleted([...completed,item[deletedId]]);
        setPending(pending.filter((elem,index)=>{
            return index!==deletedId;
        }))
        setItem(item.filter((elem,index)=>{
            return index!==deletedId;
        }))
    }

    const onClickEditIcon = (editedId,newItem) => {
        let newArr = [];
        for(var i=0;i<item.length;i++){
            if(i===editedId){
                newArr.push(newItem);
            }
            else{
                newArr.push(item[i]);
            }
        }
        setItem([...newArr]);
    }

    const onClickShowPending = ()=>{
        setItem([...pending]);
    }

    const onClickShowCompleted = ()=>{
        setItem([...completed]);
    }

    return (
        <div>
            <Head/>
            <AddItemForm
                saveItem = {onClickPlusIcon}
            />
            <FilterButtons
                showPendingTasks = {onClickShowPending}
                showCompletedTasks = {onClickShowCompleted}
            />
            <ToDoItem
                item = {item}
                deleteItem = {onClickDeleteIcon}
                editItem = {onClickEditIcon}
            />
        </div>
    );
}

export default App;
