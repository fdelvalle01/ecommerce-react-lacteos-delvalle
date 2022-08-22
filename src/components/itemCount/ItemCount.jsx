import React, {useState, useEffect} from 'react'
import { Col, Card, CardGroup, Button, Container} from 'react-bootstrap'
import { Link } from "react-router-dom";

const ItemCount = ({stock, initial, onAdd}) => {

  // Lectura de contador, agregar o disminuir, dependiente del stock del producto
  const [counter, setCounter] = useState(initial);
  //useEffect depende del contador y ademas debe depender del stock del proudcto de la lista productos. 

  const aumentarContador = () => {
    if(counter < stock) setCounter(counter + 1); 
  }

  return (
    <Col sm="3">
    <CardGroup>
      <Card className='Card' body color="primary">
        <Card.Header id='CardHeader'>
        <small id="stockId" className="text-muted">Stock: {stock} </small>
          <Card.Body>
            <Button id="ButtonRest" variant="light" disabled={counter <= 0}  className='float-left border border-warning' onClick={() => setCounter(counter - 1)} >-</Button>
            <small className="text-muted"> {counter} </small>
            {/* Con funcion directa en onclick y lo que estacomentado abajo es con disabled */}
            <Button id="ButtonSum" variant="light" className='float-right border border-warning' onClick={aumentarContador}>+</Button>
            {/* <Button id="ButtonSum" variant="light"  disabled={counter >= stock}  className='float-right border border-warning' onClick={() => setCounter(counter + 1)}>+</Button> */}
          </Card.Body>
        </Card.Header>
        <Card.Footer id='CardFooter'>
            <Container>
                <Button  className="nav-link" id="ButtonDetails" variant="light" onClick={() => onAdd(counter)}>Agregar al carrito</Button>
            </Container>
        </Card.Footer>
      </Card>
      </CardGroup>
    </Col>
  )
}

export default ItemCount
