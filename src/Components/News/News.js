import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { Button } from "react-bootstrap";

const News = () => {
  const news = useLoaderData();
  const { category_id, title, details, image_url, rating, author } = news;
  const { img, name, published_date } = author;

  return (
    <div>
      <Card>
        <Card.Img className="img-fluid" variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="fs-5">{title}</Card.Title>
          <div className="d-flex justify-content-evenly">
            <p className="fw-bold"><small>Author: {name}</small></p>
            <p className="fw-bold"><small>Publish-Date: {published_date}</small></p>
            <div className="d-flex ">
              <FaStar className="text-danger"></FaStar>
              <small className="ms-2"> {rating.number}</small>
            </div>
          </div>
          <Card.Text>{details}</Card.Text>
          <Button><Link className="text-white" to={`/category/${category_id}`}>All News Of this Category</Link></Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
