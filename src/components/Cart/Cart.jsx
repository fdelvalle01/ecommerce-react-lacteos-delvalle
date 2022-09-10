import React, {useContext, useState } from 'react'
import { GlobalContext } from '../../context/CartContext';
import Table from 'react-bootstrap/Table';
import { Container, Card, Nav, Button, Row, Col, ListGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Cart.css'
import ItemCount from '../itemCount/ItemCountCart'
import Formulario from '../Formulario/Formulario'

const Cart = () => {

const {cart, clearCart, removeItem} = useContext(GlobalContext);

const styles = {
    padding: '50px 15px',
}
const stylesColorCafe = {
    color:'#643907'
}
const [mostrarComponente, setMostrarComponente] = useState(true);

function TableProductos() {
    return (
        <Table responsive>
        <thead>
            <tr>
                <th colSpan={2} style={stylesColorCafe}>Producto</th>
                <th style={stylesColorCafe}>Precio</th>
                <th style={stylesColorCafe}>Cantidad</th>
                <th style={stylesColorCafe}>Sub Total</th>
                <th></th>
            </tr>
        </thead>
        <>
        {cart.length > 0 ? (
            cart.map((item, index)=> (
                <tbody>
                    <tr>
                        <td><img src={item.img} alt="log" style={{maxWidth: "100px",  maxHeight: "100px"}}></img></td>
                        <td style={styles}>{item.titulo}</td>
                        <td style={styles}>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(item.ofertPrice)}</td>
                        <td style={styles}> 
                            <ItemCount cart={item} stock={item.stock} initial={item.counter}/>
                        </td>
                        <td style={styles}>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format((parseInt(item.ofertPrice) * parseInt(item.counter)))}</td>
                        <td style={styles}><Button onClick={() => removeItem(item)} id="ButtonDetails"  variant="light" style={{padding: '2px 10px'}}><i class="fa fa-trash-o" aria-hidden="true"></i></Button></td>
                    </tr>
                </tbody>
                ))
                ) : ( 
                <h1>No hay productos</h1>
                )
            }
            </>
        </Table>
    )
}

function ProductInCart() {
    return (
    <Card style={{marginTop:'50px'}} > 
        <Card.Header className='bg-white'>
            <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                    <Nav.Link href="#first" style={stylesColorCafe} onClick={() => setMostrarComponente(true)}><span>Tu Carrito</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#link" style={stylesColorCafe} onClick={() => setMostrarComponente(false)}><span>Tus Datos</span></Nav.Link>
                </Nav.Item>
            </Nav>
        </Card.Header>
        <Card.Body>
        {mostrarComponente && <ListGroup  variant="flush" className={mostrarComponente ? "show-element" : null}>
        <ListGroup.Item>
                <Card.Body>
                    <TableProductos/>
                </Card.Body>
                <Card.Footer className='bg-white'>
                    <Row>
                        <Col sm={5}><Button id="ButtonDetails" onClick={() => clearCart()} className='float-center' variant="light">Vaciar Carrito</Button></Col>
                        <Col sm={2}><p style={{float:'center'}} id="centerButton">Pago total: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format((cart.reduce((pv, cv) => pv + (cv.ofertPrice * cv.counter), 0)))}</p></Col>
                        <Col sm={5}><Button id="ButtonDetails" className='float-center' variant="light">Terminar Compra</Button></Col>
                    </Row>
                </Card.Footer>
            </ListGroup.Item>
        </ListGroup>
        }
        {!mostrarComponente && <ListGroup  variant="flush" className={!mostrarComponente ? "show-element" : null}>
            <ListGroup.Item>
                <Formulario  cart={cart}/>
            </ListGroup.Item>
        </ListGroup>
        }
      </Card.Body>
    </Card>
    )
}

  return (
    <Container>
    <>
        {cart.length > 0 ? (
            <ProductInCart/>
            ) : (
                <Card className="text-center" style={{marginTop:'50px'}} >
                <Card.Header style={{backgroundColor: 'white'}}><h3>Tu Carrito Esta Vacio</h3></Card.Header>
                <Card.Body>
                  <Card.Title>
                    <img alt="log" style={{maxWidth:'150px'}} src='https://static.vecteezy.com/system/resources/previews/004/464/948/non_2x/cute-cheese-character-with-crying-and-tears-emotion-sad-face-depressive-eyes-arms-and-legs-melancholy-dairy-meal-or-snack-flat-illustration-vector.jpg'></img>
                  </Card.Title>
                  <Card.Text>
                  Antes de continuar con el pago, debe agregar algunos productos a su carrito de compras.
                  Encontrará muchos productos interesantes en nuestra página "Tienda".
                  </Card.Text>
                  <Link to={`/Home`}>
                    <Button id="ButtonDetails" variant="light">Volver a la tienda</Button>
                  </Link>
                </Card.Body>
              </Card>
            )
        }
    </>
    </Container>
  )
}

export default Cart