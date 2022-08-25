import React from 'react'
import './CartWidget.css'
import { Button } from 'react-bootstrap';

 /* Componente Carrito de compras {CartWidget} contiene un icono que se muestra en el front lado derecho. */
const CartWidget = () => {

  return (
    <div className='my-2 my-sm-0'>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Button className="btn btn-secondary" style={{ backgroundImage: `url("https://ak.picdn.net/shutterstock/videos/16468963/thumb/1.jpg?ip=x480")` }}>
            <span className="fa fa-shopping-cart" id="CartWidget" aria-hidden="true"></span>
            {/* Contador futuro */}
            <span className="badge badge-light" style={{backgroundColor: "#73440e", marginLeft: "5px"}}>{0}</span>
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default CartWidget