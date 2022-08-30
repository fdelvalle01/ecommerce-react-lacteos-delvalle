import React from 'react'
import './NavbarItem.css'
import { NavLink } from "react-router-dom";
import itemDropDown from '../../jsons/listProductNav.json'

const NavbarItem = (props) => {

  const {listProductNav} = itemDropDown;

const{name, path} = props;

// const dorpDownItems = ["Queso Fresco","Queso Gauda", "Queso Chanco", "Queso Cabra", "Todos"]; 

// Si el name de la lista de productos es Productos entonces es un dropdownList. caso contrario, solo retornara los botones normales del navbar.
  if(name === "Productos"){
    return (
      /*
        Componente <li/> para drowpdownList del boton del navbar llamado "Productos"
      */
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {
          listProductNav.map((item, index)=> (
          /* Componente NavbarItem, Que recorre la lista de items en el menu con sus nombres. */ 
          // <a className="dropdown-item" key={index}>{item.label}</a>
          <NavLink className="dropdown-item" to={item.path} >{item.label}</NavLink>
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
      <li className="nav-item">
        <NavLink className="nav-link" to={path}>{name}</NavLink>
      </li>
    )
  }
}

export default NavbarItem


