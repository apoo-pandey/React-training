function Login({title,hobby}){

    return (
        <div className="Login">
            <h4 className="Login-header">{title}</h4>
            <p className="txt">{hobby}</p>
            <input type="text" name="username" /><br />
            <input type="password" name="password" /><br />
            <button onClick={call} type="submit">Submit</button>
        </div>
    )
    function call(){
        alert("you are logged in");
    }
}

export default Login;