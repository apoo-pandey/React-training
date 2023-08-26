import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
const Employees = ({ val, deleteEmp, index }) => {
  return (
    <div className="emp-list">
      <b>Name:</b> {val.name}
      <br />
      <b>Age: </b>
      {val.age}
      <br />
      <b>Salary: </b> {val.salary}
      <br />
      <b>City: </b>
      {val.city}
      <br />
      <IconButton
        onClick={() => {
          deleteEmp(index);
        }}
        aria-label="delete"
        size="large"
      >
        <DeleteIcon />
      </IconButton>
      <br /> <br />
    </div>
  );
};

export default Employees;
