import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import img1Slider from '../../img/img1Slider.jpg'
import labelsPageQuienesSomosCard from '../../jsons/listaQuienesSomos.json'
import './QuienesSomos.css'

const QuienesSomos = () => {

    const {labelsPageQuienesSomos} = labelsPageQuienesSomosCard;

  return (
    <Container>
        <Row>
            <Col style={{marginTop:'100px'}}>
                <img src={img1Slider} style={{maxWidth:'800px'}}></img>
            </Col>
            <Col>
            <div class="jumbotron" style={{backgroundColor:'white'}}>
                <h1 class="display-4" id='CardHeaderQuienesSomos'>LÁCTEOS DEL VALLE</h1>
                <p class="lead">Los mejores productos del mercado de primera seleccion.</p>
             
                <p>Distribuidora Del Valle es una empresa familiar iniciada hace más de 15 años , preocupada de distribuir y acercar a su hogar las distintas variedades de Quesos y Cecinas existentes a lo largo de Chile, teniendo como prioridad siempre, la buena calidad de los productos a un muy buen precio.
                  Desde el año 2015 la empresa comenzó a expandir sus horizontes, iniciando importaciones de quesos a lo largo de todo chile.
                </p>
                <p>Distribuidora Del Valle Busca satisfacer sus necesidades de stock junto a una atención personalizada, despachando directo a su local.
                    Brindamos felxibilidad, confianza y estabilidad a nuestros clientes.
                </p>
                </div>
            </Col>
        </Row>
        <Row>
            <div class="jumbotron" style={{backgroundColor:'white'}}>
                <h1 class="display-4" id='CardHeaderQuienesSomos'>Con queso la vida es mas sabrosa</h1>
            </div>
        </Row>
        <Row>
            {/*       
            {
             labelsPageQuienesSomos.map((item, index)=> (

                    <Col sm="3" >
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><h3>{item.titulo}</h3></Card.Title>
                            <Card.Text>
                                {item.text}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                ))
            } */}
 
        </Row>
    </Container>
  )
}

export default QuienesSomos