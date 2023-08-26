import Employees from "./Employees";
const EmployeeList = ({ employees, deleteEmp }) => {
  return (
    <>
      {employees.map((val, index) => {
        return <Employees val={val} deleteEmp={deleteEmp} index={index} />;
      })}
    </>
  );
};

export default EmployeeList;
