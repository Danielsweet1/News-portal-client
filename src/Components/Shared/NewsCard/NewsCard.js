import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, total_view, rating, author } = news;
  const { img, name, published_date } = author;

  return (
    <div>
      <Card className="text-center mt-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex fw-bold align-items-center ">
            <img
              width={"40px"}
              className="rounded-circle m-2"
              src={img}
              alt=""
            />
            <div className="d-flex flex-column align-items-start">
              <p className="m-0">
                <small>{name}</small>
              </p>
              <p className="m-0">
                <small>{published_date}</small>
              </p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2" />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <img className="img-fluid" src={image_url} alt="" />
          <Card.Text>
            {details.length > 250 ? (
              <>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted fw-bold">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center ">
              <FaStar className="text-danger"></FaStar>
              <small className="ms-2"> {rating.number}</small>
            </div>
            <div className="d-flex align-items-center ">
              <FaEye className="text-primary" />
              <small className="ms-2">{total_view}</small>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
