import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1Slider from '../../img/img1Slider.jpg'
import './SliderHome.css'

/*
    Componente Slider que se utiliza en la ventnaa inicial de nuestro front e-comerce .   
*/
const SliderHome = () => {
  return (
    // Esto se puede automatizar por parametros. 
        <Carousel className='container d-block w-100' style={{marginTop:"30px", maxWidth: '600px', maxHeight: '350px'}}>
        <Carousel.Item >
        <img src={img1Slider} class="responsive" alt="Los Angeles" style={{maxWidth: '800px', maxHeight: '350px'}}></img>
            <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
        <img src={img1Slider} alt="Los Angeles" class="responsive d-block w-100" style={{maxWidth: '800px', maxHeight: '350px'}}></img>
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={img1Slider} alt="Los Angeles" class="responsive d-block w-100" style={{maxWidth: '800px', maxHeight: '350px'}}></img>
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
  )
}

export default SliderHome