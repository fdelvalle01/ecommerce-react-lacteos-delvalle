import React from 'react'
import './NavbarItem.css'

const NavbarItem = (props) => {

const{name} = props;

const dorpDownItems = ["Queso Fresco","Queso Gauda", "Queso Chanco", "Queso Cabra", "Todos"]; 

// Si el name de la lista de productos es Productos entonces es un dropdownList. caso contrario, solo retornara los botones normales del navbar.
  if(name === "Productos"){
    return (
      /*
        Componente <li/> para drowpdownList del boton del navbar llamado "Productos"
      */
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          {
          dorpDownItems.map((item)=> (
          /* Componente NavbarItem, Que recorre la lista de items en el menu con sus nombres. */ 
          <a class="dropdown-item" href="!#">{item}</a>
          ))
          }
        </div>
      </li>
    )
  }else{
    return (
      /*
        Componente <li/> para los link del navbar de forma dinamica. 
      */
      <li class="nav-item">
        <a class="nav-link" href="!#">{name}</a>
      </li>
    )
  }
}

export default NavbarItem


