import React from 'react'
import { Col, Card, CardGroup, Button, Row, Container, ListGroup, Table, InputGroup, Form} from 'react-bootstrap'


const ItemDetail = ({props, key}) => {

    const {titulo, img, descriptions, precio, stock} = props

  return (
    <div>
        <Container>
        <Card className='Card' body color="primary" key={key} style={{ maxWidth: '1500px' }}>
        <Row>
            <Col sm="3" > 
                <Card.Img variant="top" src={img} style={{maxWidth: "200px",  maxHeight: "200px"}}/>
            </Col>
            <Col sm="4" > 
                <Card.Body>
                    <Card.Header id='CardHeader'>{titulo}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item> <h4 className='text-muted text-decoration-line-through float-left'> ${precio}</h4> <h2><span className="text-danger float-right">$ {precio}</span></h2></ListGroup.Item>
                        <ListGroup.Item><small className="text-muted"><span className="text-success"> {stock} Unidades Disponibles </span></small></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer id='CardFooter'>
                <Card.Body>
                <Row md={4}>
                    <Col><Button id="ButtonRest" variant="light" className='float-left border border-warning' >-</Button></Col>
                    <Col xs={6}><InputGroup>
                                <Form.Control aria-label="Small" aria-describedby=""   placeholder="0"/>
                            </InputGroup></Col>
                    <Col><Button id="ButtonSum" variant="light" className='float-right border border-warning' >+</Button></Col>
                    <Col><Button id="ButtonRest" variant="light" className='float-left border border-warning' >Agregar</Button></Col>
                </Row>
                </Card.Body>
                </Card.Footer>
            </Col>
            <Col sm="3" > 
                {/* <h1>Col 3</h1> */}
            </Col>            
        </Row>
        <Row>
        <Container>
            <Col sm="12" > 
                <Card.Header id='CardHeader'>Información del producto</Card.Header>
                <Card.Body>
                    <Card.Text>
                    {descriptions}
                    </Card.Text>
                    
                </Card.Body>
            </Col>
        </Container>
        </Row>
        </Card>
        </Container>
    </div>
  )
}

export default ItemDetail