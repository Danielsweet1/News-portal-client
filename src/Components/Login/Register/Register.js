import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [accepted, setAccepted] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { createUser, setUser,updateUserInfo,verify  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoURL.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log();
        setErr("");
        form.reset();
        handleProfileInfo(name, photoUrl)
        handleVerify()
        toast.success('Please Verify Your Email')
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setErr(e.message);
      });

    console.log(name, email, password);
  };

  
  const handleVerify = () =>{
    verify()
    .then(()=>{})
    .catch(e=> {
        setErr(e.message)
    })
  }

  const handleProfileInfo = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }
    updateUserInfo(profile)
  }

  return (
    <div className="border shadow p-3 m-4">
      <p className="text-danger">
        <small>{err}</small>
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Namel" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicphoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Photo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p>
          <small>
            <Link to="/login">Already Have an Account?</Link>
          </small>
        </p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={() => setAccepted(!accepted)}
          type="checkbox" label={<>Accept Our <Link to='/terms'>Terms And Conditions</Link></>} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
