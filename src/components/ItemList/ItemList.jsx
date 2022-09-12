import './ItemList.css'
import Item from '../Item/Item'

/*
    Componente que recorre la lista de productos y las envia al componentne item la cual contiene la estructura base de este item o producto.   
    @{listProducts}, Parametro qu econtiene toda la lista de productos existentes.
*/
const ItemList = ({listProducts}) => {

  return (
      <>
        {
          listProducts.map((item, index) => <Item index={item.id} item={item}/>)
        }
      </>
  )
}

export default ItemList