import axios from "axios";

const addEmp = (newEmp) => {
  const addFunc = (dispatch) => {
    axios.post("/employee", newEmp).then((res) => {
      console.log("added succesfullt");
      dispatch(fetchAction());
    });
  };
  return addFunc;
};

const deleteEmp = (index) => {
  const delFunc = (dispatch) => {
    axios.delete(`/employee/${index}`).then((res) => {
      dispatch(fetchAction());
    });
  };
  return delFunc;
};

const reset = () => {
  const delallFunc = (dispatch) => {
    axios.delete("/deleteemployee").then((res) => {
      dispatch(fetchAction());
    });
  };
  return delallFunc;
};

const fetchAction = () => {
  const fetchFunc = (dispatch) => {
    axios
      .get("/employee")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "fetch_emp", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return fetchFunc;
};

export { fetchAction, addEmp, reset, deleteEmp };
