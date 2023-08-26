import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";

const EmployeeFrom = ({ addEmp }) => {
  return (
    <form onSubmit={addEmp}>
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
  );
};

export default EmployeeFrom;
