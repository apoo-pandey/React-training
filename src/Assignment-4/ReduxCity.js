import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import { add, reset, del, show } from "./Cityactions";
import { Outlet } from "react-router-dom";

const ReduxCity = () => {
  const { loc } = useParams();
  const dispatch = useDispatch();
  const cities = useSelector((state) => {
    console.log(state);
    return state.cities;
  });

  //useEffect(() => {}, []);

  const addc = (event) => {
    event.preventDefault();
    let newCity = {
      name: event.target.city.value,
      news: event.target.news.value,
      description: event.target.descrip.value,
    };
    event.target.city.value = "";
    event.target.news.value = "";
    event.target.descrip.value = "";
    dispatch(add(newCity));
    dispatch(show());
  };

  const clearall = () => {
    dispatch(reset());
  };
  const dele = (index) => {
    dispatch(del(index));
  };

  return (
    <div>
      <IconButton
        className="del-btn"
        onClick={clearall}
        aria-label="delete"
        size="large"
      >
        <DeleteIcon />
      </IconButton>
      <form onSubmit={addc}>
        <TextField
          className="input"
          id="outlined-basic"
          label="name"
          variant="outlined"
          name="city"
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="news"
          variant="outlined"
          name="news"
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="description"
          variant="outlined"
          name="descrip"
        />
        <Fab type="submit" size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </form>
      <div className="row">
        {cities.map((val, indx) => {
          return (
            <div className="col-4">
              <Link
                className="link-home"
                to={"/Assignment-4/ReduxCity/" + indx}
              >
                {val.name}
              </Link>
              {/*<Link
                className="link-home"
                to={"/Assignment-4/ReduxCity/"}
          ></Link>*/}

              {/*<strong>News:</strong> {val.news} <br />
              <strong>Description:</strong> {val.description}*/}
              <br />
              <Button
                type="submit"
                variant="contained"
                onClick={() => dele(indx)}
              >
                Delete
              </Button>
              <br />
              <br />
            </div>
          );
        })}
        <Outlet context={cities} />
      </div>
    </div>
  );
};

export default ReduxCity;
