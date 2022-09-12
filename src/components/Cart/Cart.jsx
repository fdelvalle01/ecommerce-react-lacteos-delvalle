import React, {useContext, useState } from 'react'
import { GlobalContext } from '../../context/CartContext';
import { Container, Card, Nav, Button, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Cart.css'
import Formulario from '../Formulario/Formulario'
import TableProductsCart from './TableProduct/TableProductsCart'

/*
    Componente que contiene la informacion del producto agregado al carrito. 
    @{cart}, parametro de la lista de productos.
    @{clearCart}, metodo para eliminar todos los elementos del cart. este viene de nuestra CartContext llamado en nuestro componente cart. 
    @{removeItem}, metodo para eliminar un elemento del cart. este viene de nuestra CartContext llamado en nuestro componente cart. 
*/

const Cart = () => {

const {cart, clearCart, removeItem} = useContext(GlobalContext);

const [mostrarComponente, setMostrarComponente] = useState(true);

function ProductInCart() {
    return (
        <Container>
        {mostrarComponente && <ListGroup  variant="flush" className={mostrarComponente ? "show-element" : null}>
        <ListGroup.Item>
                <Card.Body>
                    <TableProductsCart cart={cart} removeItem={removeItem}/>
                </Card.Body>
                <Card.Footer className='bg-white'>
                    <Row>
                        <Col sm={5}><Button id="ButtonDetails" onClick={() => clearCart()} className='float-center' variant="light">Vaciar Carrito</Button></Col>
                        <Col sm={2}><p style={{float:'center'}} id="centerButton">Pago total x: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format((cart.reduce((pv, cv) => pv + (cv.ofertPrice * cv.counter), 0)))}</p></Col>
                        <Col sm={5}><Button id="ButtonDetails" className='float-center' variant="light" onClick={() => setMostrarComponente(false)}>Finalizar Compra</Button></Col>
                    </Row>
                </Card.Footer>
            </ListGroup.Item>
        </ListGroup>
        }
        {!mostrarComponente && <ListGroup  variant="flush" className={!mostrarComponente ? "show-element" : null}>
            <ListGroup.Item>
                <Formulario total={new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format((cart.reduce((pv, cv) => pv + (cv.ofertPrice * cv.counter), 0)))} cart={cart}/>
            </ListGroup.Item>
        </ListGroup>
        }
        </Container>
    )
}

  return (
    <Container>
    <>
        {cart.length > 0 ? (
        <Card style={{marginTop:'50px'}}>
            <Card.Header className='bg-white'>
                <Nav activeKey={mostrarComponente} variant='tabs'>
                    <Nav.Item>
                        <Nav.Link eventKey={true} className='textColor' onClick={() => setMostrarComponente(true)}><span>Tu Carrito</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={false} className='textColor' onClick={() => setMostrarComponente(false)}><span>Tus Datos</span></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
        <Card.Body>   
            <ProductInCart/>
        </Card.Body>
        </Card>
            ) : (
                <Card className="text-center" style={{marginTop:'50px'}} >
                <Card.Header style={{backgroundColor: 'white'}}>
                    <h3>Tu Carrito Esta Vacio</h3>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <img alt="log" style={{maxWidth:'150px'}} src='https://static.vecteezy.com/system/resources/previews/004/464/948/non_2x/cute-cheese-character-with-crying-and-tears-emotion-sad-face-depressive-eyes-arms-and-legs-melancholy-dairy-meal-or-snack-flat-illustration-vector.jpg'></img>
                  </Card.Title>
                  <Card.Text>
                  Antes de continuar con el pago, debe agregar algunos productos a su carrito de compras.
                  Encontrará muchos productos interesantes en nuestra página "Tienda".
                  </Card.Text>
                  <Link to={`/`}>
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