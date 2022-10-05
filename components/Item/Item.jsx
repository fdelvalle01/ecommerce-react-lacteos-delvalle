import React from 'react'
import { Col, Card, CardGroup} from 'react-bootstrap'
import { Link } from "react-router-dom";

/*
    Componente que obtiene el formato de un card item, para la muestra de este en el front.  
    @{index}, Parametro que obtiene la id del producto.
    @{item},  parametro que contiene 1 item de la lista solicitada. 
*/

const Item = ({index, item}) => {

const {titulo, img, descriptions, precio, ofertPrice} = item;

  return (
    <Col sm="3" key={index}> 
    <CardGroup style={{height: "100%"}}>
      <Card className='Card' body color="primary" >
      <Card.Header id='CardHeader'>{titulo}</Card.Header>
      <Card.Img variant="top" src={img}  style={{maxHeight: "150px", maxWidth:'150px', marginTop:'50px'}}/>
        <Card.Body >
          <Card.Text>
          {descriptions}
          </Card.Text>
          <Card.Text>
            <h3><span className="text-danger">{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(ofertPrice)}</span></h3><small className="text-muted">($8.990 x Kg)</small>
          </Card.Text>
          <Card.Text>
            <h6 className='text-muted'>Antes: <small className='text-decoration-line-through'>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(precio)}</small> </h6>
          </Card.Text> 
        </Card.Body>
        <Card.Footer id='CardFooter'>
            <Link to={`/item-detail/${index}`} className="nav-link" style={{borderRadius: '10px'}} id="ButtonDetails" variant="light">Detalles del producto</Link>
        </Card.Footer>
      </Card>
      </CardGroup>
    </Col>
  )
}

export default Item