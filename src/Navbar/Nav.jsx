import React from "react";
import { FaPlane } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className={"text-center "}>
        <h2 bg="light" className={"text-dark mt-5 text-align-center"}>
          {" "}
          REAL-TIME INFORMATION OF ALL FLIGHTS AROUND THE WORLD
        </h2>
        <ul className={"nav d-flex justify-content-between"}>
          <li className={"nav-item"}>
            <a href="">
              <h4 className={"btn btn-outline-light btn-lg text-dark"}>
                {" "}
                <FaPlane />
                <br />
                AIRCRAFTS
              </h4>
            </a>
          </li>
          <li className={"nav-item"}>
            <a href="">
              <h4 className={"btn btn-outline-light btn-lg text-dark"}>
                {" "}
                <FaPlane />
                <br />
                DASHBOARD
              </h4>
            </a>
          </li>
          <li className={"nav-item"}>
            <a href={""}>
              <h4 className={"btn btn-outline-light btn-lg text-dark"}>
                {" "}
                <FaPlane />
                <br />
                LOGIN
              </h4>
            </a>
          </li>
          <li className={"nav-item"}>
            <a href="">
              <h4 className={"btn btn-outline-light btn-lg text-dark"}>
                {" "}
                <FaPlane /> <br />
                SIGN UP{" "}
              </h4>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
