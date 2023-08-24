import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

const Todo=()=>{
    let [todolist,settodolist]=useState([]);

    useEffect(()=>{
        getData();
    },[])
    useEffect(()=>{
        console.log("useEffect got fired!");
    },[todolist])
    const getData=()=>{
        axios.get("todos").then(function(response){
            settodolist(response.data);
        });
    }
    const addTodo=(event)=>{
        event.preventDefault();// to prevent the form from auto submitting
        const formObject=event.target;// it will give you form html object
        console.log(formObject);
        const inputObject=formObject.todoname;
        console.log(inputObject); // access the name of the input field.
        const inputValue=inputObject.value;
        console.log(inputValue); //to get the value inside the input field.
        let newTodo=[...todolist,inputValue];
        settodolist(newTodo);
    };
    const deleteTodo=(indexToDelete)=>{
        let newTodo=[...todolist];
        newTodo.splice(indexToDelete,1);
        settodolist(newTodo);
    }
    const reset=()=>{
        settodolist([]);
    }
    return(
       <div className="Tlist">
          <form onSubmit={addTodo}>
           {/*<Button variant="contained" onClick={getData}>Get Data</Button>*/}
            <TextField className="input" id="outlined-basic" label="Outlined" variant="outlined" name="todoname"/> {/*<input type="text" name="todoname"/>*/}
            <Button type="submit" variant="contained">Add</Button> 
            <Button onClick={reset} variant="contained">Clear all</Button> {/*<button type="submit" onClick={reset}>Clear all</button>*/}
          </form>
          {todolist.map((val,index)=>{
            return <div>
            Name:{val.name}
            <br/>
            Status:{val.status}<button onClick={()=>{deleteTodo(index)}}>Delete</button><br/> <br />
            </div>
          })
        }
       </div> 
    )
}

export default Todo;