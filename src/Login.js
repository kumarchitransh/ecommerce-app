import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import  {auth}  from "./firebase";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  //to keep track of the email and password of the user in the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    //e.preventDefault() prevents the page from refreshing
    e.preventDefault();

    //some fancy firebase login stuff

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    //e.preventDefault() prevents the page from refreshing
    e.preventDefault();

    //some fancy firebase register stuff

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            //value={email} is equal to and corresponds to the email state ie const[email, setEmail]
            value={email}
            //onChange is a function that is called when the user types in the input//keep traack when the user types in the field.
            onChange={(e) => setEmail(e.target.value)}
            //e.target.value is the value of the input field
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            //onChange is a function that is called when the user types in the input
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

//we want to trigger the function when the user clicks on the signIn button and create a amazon account button.{signIn} function and {register} function.

//button type is submit because we want to submit the email and password to the firebase.and due to submit onclick is available
