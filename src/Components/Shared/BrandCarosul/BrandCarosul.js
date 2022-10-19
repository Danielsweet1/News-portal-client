import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BrandCarosul = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dcassetcdn.com/design_img/3623981/695449/695449_19945668_3623981_32a6effc_image.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.dribbble.com/users/6290246/screenshots/15457238/media/97e98d609d9451b289f2d217b39624dc.jpg?compress=1&resize=400x300"
            alt="Third slide"
          />

          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarosul;
