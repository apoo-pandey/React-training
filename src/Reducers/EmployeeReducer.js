let initialState = [
  {
    name: "Ram",
    age: 23,
    salary: 35000,
    city: "Bengaluru",
    employeeId: 2,
  },
];

const EmployeeReducer = (state = initialState, action) => {
  console.log(state, action);

  if (action.type == "add") {
    let newEmp = action.payload;
    let newState = [...state, newEmp];
    return newState;
  }

  if (action.type == "delete") {
    let index = action.payload;
    const newState = state.filter((val, indx) => index != indx);
    console.log(newState);
    return newState;
  }

  if (action.type == "reset") {
    return [];
  }
  if (action.type == "fetch_emp") {
    let newEmp = action.payload;
    return newEmp;
  }
  return state;
};

export default EmployeeReducer;
