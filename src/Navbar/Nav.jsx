import React from "react";
import { FaPlane } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className={"text-center "}>
        <h2 bg="light" className={"text-light mt-5 text-align-center"}>
          {" "}
          REAL-TIME INFORMATION OF ALL FLIGHTS AROUND THE WORLD
        </h2>
        <ul className={"nav d-flex justify-content-between"}>
          <li className={"nav-item"}>
            <a href="">
              <h4 className={"btn btn-outline-dark btn-lg text-light"}>
                {" "}
                AIRCRAFTS
              </h4>
            </a>
          </li>
          <li className={"nav-item"}>
            <a href="">
              <h4 className={"btn btn-outline-dark btn-lg text-light"}>
                {" "}
                DASHBOARD
              </h4>
            </a>
          </li>
          <li className={"nav-item"}>
            <a href={""}>
              <h4 className={"btn btn-outline-dark btn-lg text-light"}>
                {" "}
                LOGIN
              </h4>
            </a>
          </li>
          <li className={"nav-item"}>
                          <a href="http://localhost:3000/signup">gg</a>
              <h4 className={"btn btn-outline-dark btn-lg text-light"}>
              {" "}

                SIGN UP{" "}
              </h4>
            
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
