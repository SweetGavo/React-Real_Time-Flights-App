import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import "../Login/Login.css";

const loginUser = (credentials) => {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data);
};

const Login = ({ setToken }) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password,
    });
      try { 
          setToken(token)
      } catch (error) {
          console.log(error);
      }
  };
    
  return  (
    <div className={"login-wrapper "}>
      <h1 className={"text-dark text-center text-uppercase"}>Login</h1>
      <h3 className={"text-dark text-center"}>
        {" "}
        REAL-TIME INFORMATION OF ALL FLIGHTS AROUND THE WORLD
      </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId={"formBasicName"}>
          <Form.Label
            className={"text-dark"}
            onChange={(e) => setUserName(e.target.value)}
          >
            NAME
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
          <Form.Text className="text-dark">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label
            className={"text-dark"}
            onChange={(e) => setPassword(e.target.value)}
          >
            Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-dark">
            Password most be more than 4 characters.{" "}
          </Form.Text>
        </Form.Group>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            className={"btn-light btn-lg"}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Login;
