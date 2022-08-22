import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import itemListData from '../../jsons/listaProductos.json'
import { Row, Container, Spinner } from 'react-bootstrap'
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const paramsId = useParams();
    const [products, setProducts] = useState([]);

    // Tenemos un useEffect que tiene una promise y consume un json. 
    useEffect(() => {
    const {listProducts} = itemListData;
    new Promise((resolve) => {
      setTimeout(()=> {
        resolve(listProducts); 
      }, 2000);
    }).then((data) => {
      setProducts(data.filter((data, index) => index == paramsId.id))
    });
  }, []);
 
  return (
    <>
    {
      products.length ?  (
        // falta el componente ItemsDetail que debe ir aqui.
        products.map((item, index) => 
          <ItemDetail key={index} props={item}></ItemDetail>
        )
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