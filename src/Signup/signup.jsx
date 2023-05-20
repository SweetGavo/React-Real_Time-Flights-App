import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import "../Signup/signup.css";

const loginUser = (credentials) => {
  return fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data);
};

const Login = ({ setToken }) => {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
        userName,
        email,
      password,
    });
    try {
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={"signup-wrapper "}>
      <h1 className={"text-grey text-center text-uppercase"}>Sign up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId={"formBasicName"}>
          <Form.Label
            className={"text-grey"}
            onChange={(e) => setUserName(e.target.value)}
          >
            NAME
          </Form.Label>
          <Form.Control type="text" placeholder=" Name" />
          <Form.Text className="text-grey">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label
            className={"text-grey"}
            onChange={(e) => setEmail(e.target.value)}
          >
            Email
          </Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-grey"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label
            className={"text-grey"}
            onChange={(e) => setPassword(e.target.value)}
          >
            Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-grey">
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
            <a
              href="/login"
              style={{ textDecoration: "none" }}
            >
              SUBMIT
            </a>
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
