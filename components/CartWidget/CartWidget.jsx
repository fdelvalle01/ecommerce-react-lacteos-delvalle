import React, {useState, useContext} from 'react'
import './CartWidget.css'
import { Button, Container, Table} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { GlobalContext } from '../../context/CartContext';

 /* Componente Carrito de compras {CartWidget} contiene un icono que se muestra en el front lado derecho. */
const CartWidget = () => {

  const styles = {
    padding: '50px 15px',
    textAlign:'left'
  }
  const stylesPriceFinal = {
    padding: '10px 10px',
    textAlign:'right'
  }

  const {cart, sumaTotal, clear, removeItem} = useContext(GlobalContext);

  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // OJO=>  El counter que se refleja en el carrito debe ser un useEffect, que cada vez que se modifique el cart este se actualice. 

  const myModal = () => {
    if(cart.length === 0){
      setShow(true);
    }else{
      setModalShow(true);
    }
  }
  const clearCart = () => {
    clear();
    setModalShow(false);
  }

  function MytExitsCart() {
    return(
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tu Carrito esta vacio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Antes de continuar con el pago, debe agregar algunos productos a su carrito de compras.
        Encontrará muchos productos interesantes en nuestra página "Tienda".
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" id="ButtonDetails"  onClick={handleClose}>
            Volver a la tienda
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }


  function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter"   size="lg" >
        <Modal.Header closeButton id='listGroup'>
          <Modal.Title id="contained-modal-title-vcenter" >
            Carrito
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid" id='listGroup'>
          <Container >
          <Table  responsive >
            <thead>
                <tr>
                  <td colspan="1"></td>
                  <td><p style={{margin:'auto'}}>PRODUCTO</p></td>
                  <td>PRECIO</td>
                  <td>CANTIDAD</td>
                  <td colspan="2">SUBTOTAL</td>
                </tr>
              </thead>
              <>
              {cart.length > 0 ? (
                cart.map((item, index)=> (
                  <tbody className='justify-content-around aling-items-center'>
                  <tr>
                    <td><img src={item.item.img} alt="log" style={{maxWidth: "100px",  maxHeight: "100px"}}></img></td>
                    <td style={styles}>{item.item.titulo}</td>
                    <td style={styles}>{item.item.ofertPrice}</td>
                    <td style={styles}>{item.counter}</td>
                    <td style={styles}>{item.item.ofertPrice}</td>
                    <td style={styles}><Button onClick={() => removeItem(item.item)} id="ButtonDetails"  style={{padding: '2px 10px'}}>X</Button></td>
                  </tr>
                </tbody>
                ))
                ) : (
                  <MytExitsCart show={modalShow} onHide={() => setModalShow(true)}/>
                )
              }
              </>
            </Table>
          </Container>
        </Modal.Body>
        <Modal.Footer id='listGroup'>
            <Table style={{borderTop:'none'}}>
            <thead>
                <tr>
                  <td><Button id="ButtonDetails"  style={{float:'left', marginTop:'10px'}} onClick={() => clearCart()}>Vaciar</Button></td>
                  <td><p style={stylesPriceFinal}>Total a pagar: $ 100.000</p></td>
                  <td><Button id="ButtonDetails"  style={{float:'right', marginTop:'10px'}}>Comprar</Button></td>
                </tr>
              </thead>
            </Table>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className='my-2 my-sm-0'>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Button className="btn btn-secondary" onClick={() => myModal()}style={{ backgroundImage: `url("https://ak.picdn.net/shutterstock/videos/16468963/thumb/1.jpg?ip=x480")` }}>
            <span className="fa fa-shopping-cart" id="CartWidget" aria-hidden="true"></span>
            {/* Contador futuro */}
            <span className="badge badge-light" style={{backgroundColor: "#73440e", marginLeft: "5px"}}>{sumaTotal}</span>
          </Button>
        </li>
      </ul>
        <MytExitsCart show={modalShow} onHide={() => setModalShow(false)}/>

        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)}/>
    </div>
  )
}

export default CartWidget