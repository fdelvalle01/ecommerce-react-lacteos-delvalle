import React from 'react'
import './Navbar.css'
import logo from '../../../src/img/LogoFinal.png'
import NavbarItem from './NavbarItem/NavbarItem'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    const navBarItems = ["Home","Productos", "Lista Precios", "¿Quienes Somos?", "Contacto", "Login", "Registro"]; 

    return (
        <div id='toolbar'>
          <div id="tolbarTop"><p id="textToolbar">Envios GRATIS sobre: $100.000 RM</p></div>
        
            <nav class="navbar navbar-expand-lg navbar-light bg-white container"  id="NavbarPrimary" >
                <div class="navbar-header" >
                    <img src={logo} width='120' height='90' alt="log"/>
                </div>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        { 
                        navBarItems.map((item)=> (
                            /* Componente NavbarItem, Que recorre la lista de items en el menu con sus nombres. */
                            <NavbarItem name={item} />
                        ))
                        }
                    </ul>
                     {/* Componente carrito de compras lado derecho. */}
                    <CartWidget />
                </div> 
            </nav>
        </div>
    )
}

export default Navbar