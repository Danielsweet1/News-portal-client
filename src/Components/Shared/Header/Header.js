import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import LeftSide from "../LeftSide/LeftSide";
import { FaUserCircle } from "react-icons/fa";
import { Button, Image } from "react-bootstrap";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="">
            <Link to="/">News Portal</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="me-3" to="/news">
                News
              </Link>
              <Link to="/category">Categories</Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <>
                {user?.uid ? (
                  <>
                    <Button variant="light" className="text-primary" onClick={logOut}>Log out</Button>
                    <span className="ms-3">{user.displayName}</span>
                  </>
                ) : (
                  <>
                    <Link className="me-3" to="/login">
                      Login
                    </Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
              </>
              <Nav.Link  href="#memes">
                {user?.email ? (
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUserCircle />
                )}
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSide></LeftSide>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
