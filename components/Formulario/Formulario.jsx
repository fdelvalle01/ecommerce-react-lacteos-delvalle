import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/CartContext';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import db from '../../services/services'
import { collection, addDoc, doc, updateDoc} from 'firebase/firestore'
import { Link } from 'react-router-dom'

/*
    Componente que solicita la informacion del usuario para la compra del producto final. 
    @{total}, parametro del total de productos seleccionados.
    @{cart},  parametro que contiene toda la informacion del producto y de los productos. 
*/

const Formulario = ({total, cart}) => {

    const [validated, setValidated] = useState(false);
    const {clearCart} = useContext(GlobalContext);

    const setInFireBase = async (orden) => {
        try{
            const col = collection(db, 'ordenes');
            const generarOrden = await addDoc(col, orden);
            alert("Su Orden se genero correctamente..."+ generarOrden.id);
            clearCart();       
            updateOrderStock(formulario.items)
        } catch (error){
            console.error(error)
        }
    }

    const updateOrderStock = (items) => {
        items.map((item) => {
            let value = item.stock - item.counter;
            console.log(value)
            console.log(item)
            const orderDoc = doc(db, "productos", item.id); 
            updateDoc(orderDoc, {stock: (item.stock - item.counter)})
        })
    }


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            event.preventDefault();
            event.stopPropagation();
            setInFireBase(formulario);

        }
    
        setValidated(true);
      };

    const [formulario, setFormulario] = useState({
        buyer:{
            email: "",
            nombre: "",
            apellido: "",
            telefono: ""
        }, 
        total: total,
        items: cart,
        date: Date.now()
    });
    
    // const [error, setError] = useState({});
    
    const handlerChange = (e) => {
        const {name, value} = e.target;

        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [name]: value,
            }
        })
    }


    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Text className="text-muted">
                    <h1>Datos Recipiente</h1>
                </Form.Text>
                {
                    Object.keys(formulario.buyer).map((key, index) => (
                        <Form.Group 
                        className="mb-3">
                            <Form.Control
                            required 
                            type="text" 
                            name={`${key}`}
                            value={key.value}
                            placeholder={`Ingresa tu ${key}`}
                            onChange={handlerChange}
                        />
                    </Form.Group>
                    ))
                }
                    <Row>
                        <Col sm={5}>
                        <Link to={`/`}>    
                            <Button id="ButtonDetails" className='float-center' variant="light">Volver a Comprar</Button>
                        </Link>
                        </Col>
                        <Col sm={2}><p style={{float:'center'}} id="centerButton">Pago total x: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format((cart.reduce((pv, cv) => pv + (cv.ofertPrice * cv.counter), 0)))}</p></Col>
                        <Col sm={5}><Button id="ButtonDetails" className='float-center' type="submit" variant="light" >Realizar Pedido</Button></Col>
                    </Row>
            </Form>
        </Container>
        )
}

export default Formulario