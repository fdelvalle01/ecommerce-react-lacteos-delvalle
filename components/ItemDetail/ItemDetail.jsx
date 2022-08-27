import React from 'react'
import { Col, Card, Row, Container, ListGroup} from 'react-bootstrap'
import ItemCount from '../itemCount/ItemCount'
import './ItemDetail.css'
import NavbarFooter from '../navbarFooter/NavbarFooter'

const ItemDetail = ({props, key, onAdd}) => {

    const {titulo, img, descriptions, precio, stock, ofertPrice, category, contNeto} = props

    const textPriv = 'Todos tus productos aqui en Lácteos Del Valle tienda de quesos online, recuerda leer nuestras políticas de privacidad y de compra';

  return (
    <div>
        <Container>
        <Card className='Card' body color="primary" key={key} style={{ maxWidth: '1500px', border:'none' }}>
        <Row>
            <Col sm="6" > 
                <Card.Img variant="top" src={img} style={{ marginTop:"50px", maxWidth: "300px",  maxHeight: "300px"}}/>
            </Col>
            <Col sm="6" > 
                <Card.Body>
                    <Card.Header id='CardHeaderDetail'>{titulo}</Card.Header>
                    <ListGroup  variant="flush" >
                        <ListGroup.Item id="listGroup"><h2> <span className="text-danger">${ofertPrice}</span></h2></ListGroup.Item>
                        <ListGroup.Item id="listGroup">     <small className="text-muted"><span>{category}</span></small></ListGroup.Item>
                        <ListGroup.Item id="listGroup">     <small className="text-muted"><span>{descriptions}</span></small></ListGroup.Item>
                        <ListGroup.Item id="listGroup">     <small className="text-muted">{textPriv}</small></ListGroup.Item>
                        <ListGroup.Item id="listGroup"><small className="text-muted"><span className="text-success "> {stock} Unidades Disponibles </span></small></ListGroup.Item>
                        
                        {/* Item Count --Componente */}
                        <ListGroup.Item><ItemCount stock={stock} initial={0} onAdd={onAdd} /></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer id='CardFooterDetail'>
                    <ListGroup  variant="flush" >
                        <ListGroup.Item id="listGroup"><small className="text-muted"><span>SKU: C10-001</span></small></ListGroup.Item>
                        <ListGroup.Item id="listGroup"><small className="text-muted"><span>Categorias: {category}</span></small></ListGroup.Item>
                        <ListGroup.Item id="listGroup">
                            <table>
                                <thead>
                                <tr>
                                    <td><small className="text-muted"><span>Share: </span></small> </td>
                                    <td><small className="text-muted"><span><a><span class="fa fa-facebook"></span></a></span>    </small> </td>
                                    <td></td>
                                    <td><small className="text-muted"><a><span class="fa fa-instagram"></span></a></small></td>
                                </tr>
                                </thead>
                            </table>
                       </ListGroup.Item>
                       <ListGroup.Item id="listGroup"><small className="text-muted"><span>Despacho Gratis sobre $ 100.000 </span></small></ListGroup.Item>
                    </ListGroup>
                </Card.Footer>
            </Col>
            <Col sm="3" > 
                {/* <h1>Col 3</h1> */}
            </Col>            
        </Row>
        
            <NavbarFooter/>
       
        
        </Card>
        </Container>
    </div>
  )
}

export default ItemDetail