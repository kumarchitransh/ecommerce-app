import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51L6H0mSFLPh2rJ6Z4YeLypNUrfNh132WmCkkG4rQcRvM346unUkE8akSCyhRUwXWKkoxSLFFtLJEhfqtcmhTMWke00BCGNDyAV"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM naming convention
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/orders"
            element={
              <Fragment>
                <Header />
                <Orders />
              </Fragment>
            }
          />
          <Route
            path="/login"
            element={
              <Fragment>
                <Login />
              </Fragment>
            }
          />
          <Route
            path="/checkout"
            element={
              <Fragment>
                <Header />
                <Checkout />
              </Fragment>
            }
          />
          <Route
            path="/payment"
            element={
              <Fragment>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </Fragment>
            }
          />
          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <Home />
              </Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
