import React from 'react'
import { Col, Card, CardGroup} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Item = ({index, item, onAdd}) => {

const {titulo, img, descriptions, precio, ofertPrice} = item;

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
          <Card.Text>
            <h3><span className="text-danger">${ofertPrice}</span></h3><small className="text-muted">($8.990 x Kg)</small>
          </Card.Text>
          <Card.Text>
            <h6 className='text-muted'>Antes: <small className='text-decoration-line-through'>${precio}</small> </h6>
          </Card.Text> 
        </Card.Body>
        <Card.Footer id='CardFooter'>
            <Link to={`/item-detail/${index}`}   className="nav-link" style={{borderRadius: '10px'}} id="ButtonDetails" variant="light">Detalles del producto</Link>
        </Card.Footer>
      </Card>
      </CardGroup>
    </Col>
  )
}

export default Item