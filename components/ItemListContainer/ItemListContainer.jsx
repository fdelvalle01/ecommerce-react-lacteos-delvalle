import React from 'react'

const ItemListContainer = (props) => {

  const {tituloItemList} = props;

  return (
    <div>
        {/* Items */}
      <h1>{tituloItemList}</h1> 
    </div>
  )
}

export default ItemListContainer