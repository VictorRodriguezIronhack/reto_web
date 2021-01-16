import { Carousel } from 'react-bootstrap'

import React, { useState } from 'react'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} style={{height: '100vh', position:'absolute', top: '0', bottom: '0', zIndex: '-1000'}}>
        <Carousel.Item>
          <img style={{height:'100vh'}}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>In your free time...</h3>
            <p><strong>PhoneZone</strong> relaxes with you</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'100vh'}}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1588058365603-85e71b44df2f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>When working...</h3>
            <p><strong>PhoneZone</strong> is your work colleague</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'100vh'}}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1547038971-11186a09425e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>When travelling...</h3>
            <p><strong>PhoneZone</strong> explores with you</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  
export default ControlledCarousel
