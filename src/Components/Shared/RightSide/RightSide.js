import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import BrandCarosul from "../BrandCarosul/BrandCarosul";

const RightSide = () => {
  return (
    <div className="mt-3">
      <ButtonGroup vertical>
        <Button className="mb-3" variant="outline-primary">
          <FaGoogle /> Login Via Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login Via Github
        </Button>
      </ButtonGroup>

      <div className="mt-4">
        <h5>Find Us On</h5>

        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-5">
        <BrandCarosul></BrandCarosul>
      </div>
    </div>
  );
};

export default RightSide;
