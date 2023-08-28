import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import {
  addEmp,
  deleteEmp,
  reset,
  fetchAction,
} from "../Actions/Employeeactions";

const ReduxEmployee = () => {
  let [open, setOpen] = useState(0);
  const dispatch = useDispatch();
  const [employeeslist] = useSelector((state) => {
    console.log(state);
    return [state.employeeslist];
  });

  useEffect(() => {
    dispatch(fetchAction());
  }, []);

  const add = (event) => {
    event.preventDefault();
    console.log("add employee");
    const payload = {
      name: event.target.empname1.value,
      age: event.target.empname2.value,
      salary: event.target.empname3.value,
      city: event.target.empname4.value,
    };
    event.target.empname1.value = "";
    event.target.empname2.value = "";
    event.target.empname3.value = "";
    event.target.empname4.value = "";
    event.target.empname5.value = "";
    setOpen(1);
    dispatch(addEmp(payload));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(0);
  };

  const del = (index) => {
    console.log("delete emp");
    setOpen(2);
    dispatch(deleteEmp(index));
  };

  const clearAll = () => {
    console.log("reset");
    setOpen(3);
    dispatch(reset());
  };

  return (
    <div className="Tlist">
      <Snackbar open={open == 1} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Employee Added Successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={open == 2} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Employee deleted!
        </Alert>
      </Snackbar>
      <Snackbar open={open == 3} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          All cleared!!
        </Alert>
      </Snackbar>
      <Button onClick={clearAll} variant="contained">
        Clear all
      </Button>
      <form onSubmit={add}>
        <TextField
          className="input"
          id="outlined-basic"
          label="Emp-Name"
          variant="outlined"
          name="empname1"
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Emp-age"
          variant="outlined"
          name="empname2"
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Emp-salary"
          variant="outlined"
          name="empname3"
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Emp-city"
          variant="outlined"
          name="empname4"
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Emp-Id"
          variant="outlined"
          name="empname5"
        />
        <Fab type="submit" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </form>
      <div>
        {employeeslist.map((val, indx) => {
          return (
            <div className="emp-list1">
              <strong> Name: </strong>
              {val.name}
              <br />
              <strong> age: </strong>
              {val.age} <br />
              <strong> salary: </strong> {val.salary}
              <br />
              <strong> city: </strong>
              {val.city}
              <br />
              <Button
                type="submit"
                variant="contained"
                onClick={() => del(indx)}
              >
                Delete
              </Button>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReduxEmployee;
