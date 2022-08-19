import React, {useState, useEffect} from 'react'
import ItemList from './ItemList/ItemList'
import itemListData from '../../jsons/listaProductos.json'
import { Row, Container, Spinner } from 'react-bootstrap'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  //Tenemos un useEffect que tiene una promise y consume un json. 
  useEffect(() => {
    
    const {listProducts} = itemListData;
    new Promise((resolve) => {
      setTimeout(()=> {
        resolve(listProducts); 
      }, 2000);
    }).then((data) => {
      setProducts(data);
    });
  }, []);

  const onAdd = (counter) => {
    console.log(`Cantidad de elementos agregados. ${counter}`);
  }

  return (
    <>
      <Container>
        <Row>
        {products.length ? (
          //Queda a la espera de la carga de productos. se ejecuta un Spinners
         // Cuando carga los productos. 
          <ItemList listProducts={products} onAdd={onAdd}/>
          ) : (
            <Container>
              <Spinner animation="grow" />
            </Container>
              )
          }
        </Row>
      </Container>
    </>
  )
}

export default ItemListContainer