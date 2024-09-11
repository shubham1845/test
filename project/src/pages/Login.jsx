import { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
// import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export default function Login() {
  const notyf = new Notyf();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  //   const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password]);

  function loginUser(e) {
    e.preventDefault();

    setIsActive(false); // Disable the button while processing

    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "User logged in successfully") {
          notyf.success("Login successful!");
        } else if (data.message === "Incorrect email or password") {
          notyf.error("Incorrect email or password");
        } else if (data.message === "No email found") {
          notyf.error("No email found");
        } else if (data.message === "Invalid email format") {
          notyf.error("Invalid email format");
        } else {
          notyf.error("An unexpected error occurred");
        }
        setIsActive(true); // Enable the button again
      })
      .catch((error) => {
        console.error("Error during login:", error);
        notyf.error(
          "An error occurred while logging in. Please try again later."
        );
        setIsActive(false); // Enable the button again
      });
  }
  return (
    <>
      <Form onSubmit={(e) => loginUser(e)}>
        <h1 className="my-5 text-center">Login</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {isActive ? (
          //true
          <Button variant="primary" type="submit">
            Submit
          </Button>
        ) : (
          //false
          <Button variant="danger" type="submit" disabled>
            Submit
          </Button>
        )}
      </Form>
    </>
  );
}
