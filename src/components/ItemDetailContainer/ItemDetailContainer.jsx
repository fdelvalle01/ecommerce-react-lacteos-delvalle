import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import itemListData from '../../jsons/listaProductos.json'
import { Container, Spinner } from 'react-bootstrap'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [products, setProducts] = useState([]);

    // Tenemos un useEffect que tiene una promise y consume un json. 
    useEffect(() => {
    const {listProducts} = itemListData;
    new Promise((resolve) => {
      setTimeout(()=> {
        resolve(listProducts.find( element => element.id === id)); 
      }, 2000);
    }).then((data) => {
      setProducts(data)
    });
  }, [id]);

  return (
    <>
    {
      products.length !== 0 ?  (
        // falta el componente ItemsDetail que debe ir aqui.
          <ItemDetail props={products}></ItemDetail>
      ) : (
        <Container>
          <Spinner animation="grow" />
        </Container>
      )
    }
    </>
  )
}

export default ItemDetailContainer