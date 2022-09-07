import React, {useContext} from 'react'
import './CartWidget.css'
import { Button} from 'react-bootstrap';
import { GlobalContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'

 /* Componente Carrito de compras {CartWidget} contiene un icono que se muestra en el front lado derecho. */
const CartWidget = () => {

  const {cart} = useContext(GlobalContext);
  
  return (
    <div className='my-2 my-sm-0'>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={`/Cart`}>
            <Button className="btn btn-secondary" style={{ backgroundImage: `url("https://ak.picdn.net/shutterstock/videos/16468963/thumb/1.jpg?ip=x480")` }}>
              <span className="fa fa-shopping-cart" id="CartWidget" aria-hidden="true"></span>
              {/* Contador futuro */}
              <span className="badge badge-light" style={{backgroundColor: "#73440e", marginLeft: "5px"}}>
                {!!cart.length && cart.reduce((pv, cv) => pv + cv.counter, 0)}</span>
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default CartWidget