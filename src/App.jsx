import React, { useState, useEffect } from "react";
import Flight from "./Flights/Flights";
import Nav from "./Navbar/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/Login/login";
import Signup from "../src/Signup/signup";
function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Flight />}></Route>
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
