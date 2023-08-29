import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Login({ title, hobby }) {
  return (
    <div className="Login">
      <h4 className="Login-header">{title}</h4>
      <p className="txt">{hobby}</p>
      <label name="username">name: </label>
      <input type="text" name="username" />
      <br />
      <label name="username">password: </label>
      <input type="password" name="password" />
      <br />
      <button onClick={call} type="submit">
        Submit
      </button>
      <Link className="link-home" to="/Login/Forgetpass">
        <u>Forgot Password?</u>
      </Link>
      <br />
      <Outlet />
    </div>
  );
  function call() {
    alert("you are logged in");
  }
}

export default Login;
