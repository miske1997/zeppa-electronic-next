"use client"
import { Carousel } from "react-bootstrap";
import "./MobileHomeCarousel.css"

function MobileHomeCarousel() {
    return (
        <div className="mobile-carousel">
            <Carousel indicators={false} >
                <Carousel.Item>
                    <img src="/arduino-uno.png"></img>
                    <Carousel.Caption>
                        <h3>Najnoviji Arduino</h3>
                        <p>U nasem katalogu sada najnoviji arduino MAKRO</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/sensor.png"></img>
                    <Carousel.Caption>
                        <h3>Senzori</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/bord.png"></img>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MobileHomeCarousel;