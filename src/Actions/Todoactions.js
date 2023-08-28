import axios from "axios";

const addTodo = (newTodo) => {
  const addFunc = (dispatch) => {
    axios.post("/todos", newTodo).then((response) => {
      dispatch({ type: "addTodo", payload: newTodo });
    });
  };
  return addFunc;
};

const deleteTodo = (index) => ({ type: "deleteTodo", payload: index });

const reset = () => ({ type: "reset" });

export { addTodo, deleteTodo, reset };

const fetchAction = () => {
  const fetchFunc = (dispatch) => {
    axios
      .get("/todos")
      .then((response) => {
        console.log("dataa", response.data);
        let todos = response.data;
        dispatch({ type: "fetch_todos", payload: todos });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return fetchFunc;
};

export { fetchAction };
