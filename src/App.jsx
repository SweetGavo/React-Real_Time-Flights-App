import React, { useState, useEffect } from "react";
import Flight from "./Flights/Flights";
import Nav from "./Navbar/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/Login/login";

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <div>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/flights" element={<Flight />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
