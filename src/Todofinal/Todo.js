import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

const Todo = () => {
  let [todolist, settodolist] = useState([]);

  useEffect(() => {
    getData();
    const destructorFunction = () => {
      alert("are you sure you want to leave?");
    };
    return destructorFunction;
  }, []);
  useEffect(() => {
    console.log("useEffect got fired!");
  }, [todolist]);
  const getData = () => {
    axios.get("todos").then(function (response) {
      settodolist(response.data);
    });
  };
  const addTodo = (event) => {
    event.preventDefault(); // to prevent the form from auto submitting
    const formObject = event.target; // it will give you form html object
    console.log(formObject);
    const inputObject = formObject.todoname;
    console.log(inputObject); // access the name of the input field.
    const inputValue = inputObject.value;
    console.log(inputValue);
    //to get the value inside the input field.
    let todob = { name: inputObject.value, status: formObject.status.value };
    {
      /*let newTodo=[...todolist,todob];
        settodolist(newTodo);
    inputObject.value="";*/
    }
    axios.post("/todos", todob).then((response) => {
      console.log(response);
    });
    getData();
  };
  const deleteTodo = (indexToDelete) => {
    axios.delete(`/todos/${indexToDelete}`).then((response) => {
      console.log(response);
    });
    getData();
  };
  const reset = () => {
    settodolist([]);
  };
  return (
    <div className="Tlist">
      <Button onClick={reset} variant="contained">
        Clear all
      </Button>
      <Todoform addTodo={addTodo} />
      <Todolist todolist={todolist} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
