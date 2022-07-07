import React from "react";
import "./login-items.scss";

const LoginItems = () => {
  return (
    <>
      <div className="loginItems container">
        <div className="loginItems_signup">
          <h2>New to our Shop?</h2>
          <p>
            There are advances being made in science and technology everyday,
            and a good example of this is the
          </p>
          <button className="signupBtn">CREATE AN ACCOUNT</button>
        </div>

        <div className="loginItems_signin">
          <h3>Welcome Back ! Please Sign in now</h3>
          <form>
            <input type={"text"} placeholder="Username" />
            <input type={"password"} placeholder="Password" />
          </form>
          <div className="rememberMe">
            <input type={"checkbox"}  id="remember" />
            <label htmlFor="remember"> Remember Me</label><br></br>
          </div>
          <button className="signinBtn">LOG IN</button>
          <span>Forget Password?</span>
        </div>
      </div>
    </>
  );
};

export default LoginItems;
