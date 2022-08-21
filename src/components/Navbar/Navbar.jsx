import React from 'react'
import './Navbar.css'
import logo from '../../../src/img/LogoFinal.png'
import NavbarItem from './NavbarItem/NavbarItem'
import CartWidget from '../CartWidget/CartWidget'
import listRoutesNav from '../../jsons/listRoutesNav.json'

const Navbar = () => {

    const routesList = listRoutesNav.listRoutesNav;
    const navBarItems = ["Home","Productos", "Lista Precios", "¿Quienes Somos?", "Contacto", "Login", "Registro"]; 

    return (
        <div id='toolbar'>
          <div id="tolbarTop"><p id="textToolbar">Envios GRATIS sobre: $100.000 RM</p></div>
        
            <nav className="navbar navbar-expand-lg navbar-light bg-white container"  id="NavbarPrimary" >
                <div className="navbar-header" >
                    <img src={logo}  width='120' height='90' alt="log"/>
                </div>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        { 
                        routesList.map((item, index)=> (
                            /* Componente NavbarItem, Que recorre la lista de items en el menu con sus nombres. */
                            <NavbarItem key={index} name={item.label} path={item.path}/>
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