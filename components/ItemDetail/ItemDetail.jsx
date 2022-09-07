import React, { useContext, useState }  from 'react'
import { Col, Card, Row, Container, ListGroup, Button} from 'react-bootstrap'
import ItemCount from '../itemCount/ItemCount'
import './ItemDetail.css'
import NavbarFooter from '../navbarFooter/NavbarFooter'
import { GlobalContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'

const ItemDetail = ({props, key}) => {

    const {titulo, img, descriptions, stock, ofertPrice, category, contNeto} = props

    const textPriv = 'Todos tus productos aqui en Lácteos Del Valle tienda de quesos online, recuerda leer nuestras políticas de privacidad y de compra';

    const {addItem} = useContext(GlobalContext);

    const [counter, setCounter] = useState(1);
    const [visibility, setVisibility] = useState(false);

    const onAdd = (value) => {
        setCounter(value);
    }

    const addItemFunctions = () => {
        addItem(props, counter);
        setVisibility(true);
    }

    
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
                        <ListGroup.Item id="listGroup">
                            <td>
                                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                            </td>
                            <td>
                                <Button id="ButtonDetails"  variant="light" className='float-left border border-warning'style={{width:"150px", marginLeft:'20px'}} onClick={() => addItemFunctions()}>Añadir al Carrito</Button>  
                               {
                                !! visibility && 
                                    <Link to={`/Cart`}>
                                        <Button id="ButtonDetails"  variant="light" className='float-left border border-warning'style={{width:"150px", marginLeft:'20px'}}>Comprar</Button>                        
                                    </Link> }
                            </td>
                        </ListGroup.Item>                        
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
                                    <td><small className="text-muted"><span><a href='#!'><span class="fa fa-facebook"></span></a></span></small></td>
                                    <td></td>
                                    <td><small className="text-muted"><a href='#!'><span class="fa fa-instagram"></span></a></small></td>
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
        
            <NavbarFooter descriptions={descriptions}
                          category={category}
                          contNeto={contNeto}/>
        </Card>
        </Container>
    </div>
  )
}

export default ItemDetail