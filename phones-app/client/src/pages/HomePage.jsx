import React from "react"
import {Button,Carousel} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "../App.css";
import Slide1 from "../components/img/iphone-13_overview__cw1zea9uif0i_og.png"
import Slide2 from "../components/img/02_Product-Image_Galaxy-A33-5G-e1647529131212.png"
import Slide3 from "../components/img/401940_1215269.jpg"
import "./Page.css"

function HomePage() {
  const navigate=useNavigate()
  const goToPhones=()=>navigate("/phones")

  return (
    <div className="homepage">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="iphone"
          />
          <Carousel.Caption>
            <h3>Are you ready for the Iphone?</h3>
            <Button variant="warning" onClick={goToPhones}> Check out our lastest deals !
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide2}
            alt="Samsung"
          />

          <Carousel.Caption>
            <h3>Are you ready for the Samsung?</h3>
            <Button variant="warning" onClick={goToPhones}> Check out our lastest deals !
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Are you ready for the Xaomi?</h3>
            <Button  variant="warning" onClick={goToPhones}> Check out our lastest deals !
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>

  );
}

export default HomePage;
