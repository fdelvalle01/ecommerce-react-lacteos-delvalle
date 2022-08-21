import React, {useState, useEffect} from 'react'
import { Col, Card, CardGroup, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Item = ({index, item, onAdd}) => {

const {titulo, img, descriptions, stock} = item;

  // Lectura de contador, agregar o disminuir, dependiente del stock del producto
  const [counter, setCounter] = useState(0);

  //useEffect depende del contador y ademas debe depender del stock del proudcto de la lista productos. 
  useEffect(() => {
    if(counter !== 0){
      if(counter > stock ){
        alert(`No queda stock del Producto:  ${titulo}`);
     }
    }
  }, [counter]); 

  const aumentarContador = () => {
    if(counter < stock) setCounter(counter + 1); 
  }

  return (
    <Col sm="3" key={index}> 
    <CardGroup>
      <Card className='Card' body color="primary" >
      <Card.Header id='CardHeader'>{titulo}</Card.Header>
      <Card.Img variant="top" src={img} style={{maxWidth: "200px",  maxHeight: "200px"}}/>
        <Card.Body>
          <Card.Text>
          {descriptions}
          </Card.Text>
          {/* <Link to={'/item-detail'} id="ButtonDetails" variant="light" onClick={() => onAdd(counter)}>Ver Detalles del producto</Link> */}
          <Link to={`/item-detail/:${index}`} className="nav-link" id="ButtonDetails" variant="light" onClick={() => onAdd(counter)}>Ver Detalles del producto</Link>
        </Card.Body>
        <Card.Footer id='CardFooter'>
          <small id="stockId" className="text-muted">Stock: {stock}</small>
          <Card.Body>
            <Button id="ButtonRest" variant="light" disabled={counter <= 0}  className='float-left border border-warning' onClick={() => setCounter(counter - 1)} >-</Button>
            <small className="text-muted"> {counter} </small>
            {/* Con funcion directa en onclick y lo que estacomentado abajo es con disabled */}
            <Button id="ButtonSum" variant="light" className='float-right border border-warning' onClick={aumentarContador}>+</Button>
            {/* <Button id="ButtonSum" variant="light"  disabled={counter >= stock}  className='float-right border border-warning' onClick={() => setCounter(counter + 1)}>+</Button> */}
          </Card.Body>
        </Card.Footer>
      </Card>
      </CardGroup>
    </Col>
  )
}

export default Item