import React from 'react'
import {Button, Table } from 'react-bootstrap';
import ItemCount from '../../itemCount/ItemCountCart'

/*
    Componente que muestra la informacion de los productos dentros de una tabla. 
    @{cart}, parametro de la lista de productos. 
    @{removeItem}, metodo para eliminar un elemento del cart. este viene de nuestra CartContext llamado en nuestro componente cart. 
*/

const TableProductsCart = ({cart, removeItem}) => {

    const styles = {
        padding: '50px 15px',
    }

  return (
    <Table responsive>
        <thead>
            <tr>
                <th colSpan={2} className='textColor'>Producto</th>
                <th className='textColor'>Precio</th>
                <th className='textColor'>Cantidad</th>
                <th className='textColor'>Sub Total</th>
                <th></th>
            </tr>
        </thead>
    <>
    {cart.length > 0 ? (
        cart.map((item, index)=> (
            <tbody>
                <tr>
                    <td><img src={item.img} alt="log" style={{maxWidth: "100px",  maxHeight: "100px"}}></img></td>
                    <td style={styles}>{item.titulo}</td>
                    <td style={styles}>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(item.ofertPrice)}</td>
                    <td style={styles}> 
                        <ItemCount cart={item} stock={item.stock} initial={item.counter}/>
                    </td>
                    <td style={styles}>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format((parseInt(item.ofertPrice) * parseInt(item.counter)))}</td>
                    <td style={styles}><Button onClick={() => removeItem(item)} id="ButtonDetails"  variant="light" style={{padding: '2px 10px'}}><i class="fa fa-trash-o" aria-hidden="true"></i></Button></td>
                </tr>
            </tbody>
            ))
            ) : ( 
            <h1>No hay productos</h1>
            )
        }
        </>
    </Table>
  )
}

export default TableProductsCart