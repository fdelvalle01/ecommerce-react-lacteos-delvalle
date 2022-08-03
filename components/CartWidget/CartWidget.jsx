import React from 'react'
import './CartWidget.css'

 /* Componente Carrito de compras {CartWidget} contiene un icono que se muestra en el front lado derecho. */
const CartWidget = () => {

  return (
    <div className='my-2 my-sm-0'>
      <ul class="navbar-nav">
        <li class="nav-item">
          {/* Se que es un cart, pero es mas bonito el bag */}
          <a href="!#" class="btn btn-secondary" aria-label="View 3 items in your shopping cart">
            <i class="fa fa-shopping-bag" id="CartWidget" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default CartWidget