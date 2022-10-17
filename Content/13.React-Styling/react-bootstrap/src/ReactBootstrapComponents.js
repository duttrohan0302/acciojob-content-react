import React from "react";
import Alert from "react-bootstrap/Alert";
import Carousel from 'react-bootstrap/Carousel';

const ReactBoostrapComponent = () => {
    return( 
        <>
            <RBAlerts />
        </>
    )
}

const RBAlerts = () => {
    const colors = ["primary"," secondary","success", "danger","warning","info","light", "dark"]

    return(
        <>
            {
                colors.map((color)=>(
                    <Alert key={color} variant={color}>
                        This is a {color} alert-check it out!
                    </Alert>
                ))
            }
        </>
    )
}


function UncontrolledExampleCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ReactBoostrapComponent;