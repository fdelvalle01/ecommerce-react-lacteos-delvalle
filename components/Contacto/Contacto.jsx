import React from 'react'
import { Col, Container, Row, Form, Button, Table } from 'react-bootstrap'

const Contacto = () => {
  return (
    <Container style={{marginTop:'100px'}}>
        <Row>
            <Col>
            <Table responsive style={{textAlign:'left', border:'white'}}>
            <thead>
                <tr>
                    <th><p>Si tienes dudas o quieres realizar consultas llámanos o contáctanos por estos medios, o llena el siguiente formulario</p></th>
                </tr>
            </thead>
            <tbody >
                <tr>
                    <td>Fono Ventas 1: +56 9 8137 4051</td>
                </tr>
                <tr>
                    <td>Fono Ventas 2: +56 9 3862 5602</td>
                </tr>
                <tr>
                    <td>Fono Despachos (operaciones): +56 2 3339 9445</td>
                </tr>
                <tr>
                    <td>Horario de Atención: 09:30 a 17:30</td>
                </tr>
            </tbody>
            </Table>
            </Col>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu nombre " />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa un asunto" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Contacto