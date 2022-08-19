import './ItemList.css'
import Items from './Items'

const ItemList = ({listProducts, onAdd}) => {

  return (
      <>
        {
          listProducts.map((item,i) => <Items key={i} item={item} onAdd={onAdd}/>)
        }
      </>
  )
}

export default ItemList