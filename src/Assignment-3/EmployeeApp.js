import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import EmployeeFrom from "./EmployeeFrom";
import EmployeeList from "./EmployeeList";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import { render } from "react-dom";

const EmployeeApp = () => {
  let [employees, setemployees] = useState([
    { name: "Ram", age: 23, salary: 35000, city: "Bengaluru", employeeId: 4 },
  ]);
  const [open, setOpen] = useState(0);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log("useEffect got fired:");
  }, [employees]);

  const getData = () => {
    axios.get("/employee").then(function (response) {
      setemployees(response.data);
    });
  };

  const addEmp = (event) => {
    event.preventDefault();
    const formObject = event.target; // it will give you form html object
    console.log(formObject);
    let todob = {
      name: formObject.empname1.value,
      age: formObject.empname2.value,
      salary: formObject.empname3.value,
      city: formObject.empname4.value,
      employeeId: formObject.empname5.value,
    };
    axios.post("/employee", todob).then((response) => {
      console.log(response);
    });
    getData();
    setOpen(1);
  };

  const deleteEmp = (indexToDelete) => {
    axios.delete(`/employee/${indexToDelete}`).then((response) => {
      console.log(response);
    });
    getData();
    setOpen(2);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(0);
  };

  const reset = () => {
    setemployees([]);
    setOpen(3);
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
      <Button onClick={reset} variant="contained">
        Clear all
      </Button>
      <EmployeeFrom addEmp={addEmp} />
      <EmployeeList employees={employees} deleteEmp={deleteEmp} />
    </div>
  );
};

export default EmployeeApp;
