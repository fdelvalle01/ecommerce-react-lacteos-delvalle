import React, {useContext, useState} from 'react'
import Table from 'react-bootstrap/Table';
import { Container, Card, Nav, Button, Row, Col, ListGroup, Form } from 'react-bootstrap';

const Formulario = ({total, cart}) => {
    
    const [formulario, setFormulario] = useState({
        buyer:{
            email: "",
            nombre: "",
            apellido: "",
            telefono: "",
        }, 
        total: total,
        items: cart
    });
    
    const [error, setError] = useState({});
    
    const {buyer: {email, nombre, apellido, telefono},} = formulario;

    const handlerChange = (e) => {
        const {name, value} = e.target;

        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [name]: value,
            }
        })
        console.log(formulario)
    }

    return (
        <Container>
            <Form>
                <Form.Text className="text-muted">
                    <h1>Datos Recipiente</h1>
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handlerChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText"> 
                    <Form.Control 
                    type="text" 
                    name="nombre"
                    value={nombre}
                    onChange={handlerChange}
                    placeholder="Enter Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control 
                    type="text" 
                    placeholder="Enter Apellido" 
                    name="apellido"
                    value={apellido}
                    onChange={handlerChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control 
                    type="text" 
                    name="telefono"
                    value={telefono}
                    onChange={handlerChange}
                    placeholder="Enter Telefono"/>
                </Form.Group>
                <Form.Text className="text-muted">
                <p style={{float:'center'}} id="centerButton">Pago total: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format((cart.reduce((pv, cv) => pv + (cv.ofertPrice * cv.counter), 0)))}</p>
                </Form.Text>
                <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Terminar la compra 
                </Button>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Button variant="primary" type="submit">
                        Volver a Comprar 
                    </Button>
                </Form.Group>
            </Form>
        </Container>
        )
}

export default Formulario