import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  reset,
  fetchAction,
} from "../Actions/Todoactions";

import { useEffect } from "react";

const ReduxTodo = () => {
  const dispatch = useDispatch();
  const [todolist] = useSelector((state) => {
    console.log(state);
    return [state.todos];
  });

  useEffect(() => {
    dispatch(fetchAction());
    //console.log("here", todolist);
  }, []);

  const add = (event) => {
    event.preventDefault();
    console.log("add todo");
    const payload = {
      name: event.target.todoname.value,
      status: event.target.status.value,
    };
    dispatch(addTodo(payload));
    dispatch(fetchAction());
  };

  const del = (index) => {
    console.log("delete Todo");
    dispatch(deleteTodo(index));
  };

  const clearAll = () => {
    console.log("reset");
    dispatch(reset());
  };

  return (
    <div className="Tlist">
      <Button onClick={clearAll} variant="contained">
        Clear all
      </Button>
      <form onSubmit={add}>
        <TextField
          className="input"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          name="todoname"
        />
        <select name="status">
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <Button type="submit" variant="contained">
          Add
        </Button>
      </form>
      <div>
        {todolist.map((t, indx) => (
          <div>
            <strong>Name:</strong> {t.name}
            <br />
            <strong>Status:</strong> {t.status}
            <br />
            <Button type="submit" variant="contained" onClick={() => del(indx)}>
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReduxTodo;
