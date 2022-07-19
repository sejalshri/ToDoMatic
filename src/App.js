import {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Head from './components/Head';
import AddItemForm from './components/AddItemForm';
import ToDoItem from './components/ToDoitem';
import './index.css'
function App() {
    const [item,setItem]=useState([]);

    const onClickPlusIcon = (enteredData) => {
        setItem([...item,enteredData]);
    }

    const onClickDeleteIcon = (deletedId) => {
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

    return (
        <div>
            <Head/>
            <AddItemForm
                saveItem = {onClickPlusIcon}
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
