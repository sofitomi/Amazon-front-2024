
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header"
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login";
import { useStateValue } from "./Component/Stateprovider";
import { auth } from "./Component/firebase";
import Payment from "./Component/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Component/Orders";

const promise = loadStripe(
  "pk_test_51OO3k1DisYtKipiz0DdF5cVR3whwfUUXZ9k4fo1nzuiAMiV8ANx2JdU1g3S0LefRNvrwykWnZtOgEHculwtElbkT00WD9wdKU8"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/ckeckout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

