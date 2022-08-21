import React from 'react'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const params = useParams();
    console.log(params)

  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer