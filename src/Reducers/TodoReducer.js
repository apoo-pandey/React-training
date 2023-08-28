let initialState = [
  {
    name: "make your bed",
    status: "completed",
  },
  {
    name: "meditate",
    status: "incomplete",
  },
];

const TodoReducer = (state = initialState, action) => {
  console.log(state, action);

  if (action.type == "addTodo") {
    let newTodo = action.payload;
    let newState = [...state, newTodo];
    //console.log("new", newState);
    return newState;
  }

  if (action.type == "deleteTodo") {
    let index = action.payload;
    const ns = state.filter((val, indx) => index != indx);
    console.log(ns);
    return ns;
  }

  if (action.type == "reset") {
    return [];
  }

  if (action.type == "fetch_todos") {
    let newTodos = action.payload;
    // let newState = [...state, newTodos];
    return newTodos;
  }
  return state;
};

export default TodoReducer;
