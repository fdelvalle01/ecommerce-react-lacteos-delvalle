import React, {useContext, useState } from 'react'
import { GlobalContext } from '../../context/CartContext';

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