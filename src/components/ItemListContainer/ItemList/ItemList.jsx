import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({listProducts, onAdd}) => {

  return (
      <>
        {
          listProducts.map((item, index) => <Item index={index} item={item} onAdd={onAdd}/>)
        }
      </>
  )
}

export default ItemList