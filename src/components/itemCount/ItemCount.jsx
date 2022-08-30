import React, {useState} from 'react'
import {Button,Row, InputGroup, Form} from 'react-bootstrap'

const ItemCount = ({stock, initial, onAdd}) => {

  // Lectura de contador, agregar o disminuir, dependiente del stock del producto
  const [counter, setCounter] = useState(initial);
  //useEffect depende del contador y ademas debe depender del stock del proudcto de la lista productos. 

  const aumentarContador = () => {
    if(counter < stock) setCounter(counter + 1); 
  }

  return (
   
    <Row md={4}>
        <table>
            <thead>
            <tr>
                <td><Button id="ButtonDetails"  variant="light" disabled={counter <= 0}  className='float-left border border-warning' onClick={() => setCounter(counter - 1)} >-</Button></td>
                <td><InputGroup>
                <Form.Control aria-label="Small" aria-describedby="" placeholder={initial} value={counter} style={{width:"50px"}}/>
                </InputGroup></td>
                <td><Button id="ButtonDetails" variant="light" className='float-right border border-warning' onClick={aumentarContador} >+</Button></td>
                {/* <td><Button id="ButtonDetails"  variant="light" className='float-left border border-warning'style={{width:"150px"}} onClick={() => onAdd(counter)}>Añadir al Carrito</Button></td> */}
            </tr>
            </thead>
        </table>
    </Row>
  )
}

export default ItemCount
