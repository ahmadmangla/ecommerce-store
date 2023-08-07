import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./Slider.css";

function Slider(props) {
  const { images } = props;
  return (
    <>
      <Carousel className={`mb-4 customSlider`}>
        {images.map((item) => {
          return (
            <Carousel.Item key={item}>
              <img className="d-block w-100" src={item} alt="First slide" />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="slider-thumbs d-flex gap-4">
        {images.map((item) => {
          return (
            <Image
              height={70}
              width={70}
              className="object-fit-cover"
              src={item}
              rounded
            />
          );
        })}
      </div>
    </>
  );
}

export default Slider;
