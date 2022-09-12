import React, {useContext, useState } from 'react'
import { GlobalContext } from '../../context/CartContext';

/*
    Componente que se utiliza para el conteo de los productos en la lista de detalles.   
    @{stock},     Parametro que obtiene cantidad del producto existente.
    @{initial},   Parametro que obtiene el valor inicial del contador, parte de 1 por defecto ya que no se puede agregar 0 producto al cart. 
    @{onAdd},     metodo onAdd que se utiliza para agregar o restar la cantidad de productos a la lista de este
*/
const ItemCountCart = ({cart, stock, initial, onAdd}) => {

  // Lectura de contador, agregar o disminuir, dependiente del stock del producto
  const [counter, setCounter] = useState(initial);
  //useEffect depende del contador y ademas debe depender del stock del proudcto de la lista productos. 
  const {addItem} = useContext(GlobalContext);

  const aumentarContador = () => {
    if(counter < stock) {
        setCounter(counter + 1); 
        addItem(cart, 1)
    }
  }
  const restarContador = () => {
    if(counter > 0) {
        addItem(cart, -1)
    }
  }

  return (
    <div>
        <div class="row">
            <div class="col-sm-7 mx-auto">
                <div class="input-group">
                    <span class="input-group-prepend">
                        <button type="button" onClick={restarContador} class="btn btn-outline-secondary btn-number" disabled={counter <= 1} data-type="minus" >
                            <span class="fa fa-minus"></span>
                        </button>
                    </span>
                    <input style={{width:'10px'}}   type="text" class="form-control input-number" value={counter} min="1" max="10"/>
                    <span class="input-group-append">
                        <button type="button" onClick={ aumentarContador} class="btn btn-outline-secondary btn-number" data-type="plus" >
                            <span class="fa fa-plus"></span>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCountCart