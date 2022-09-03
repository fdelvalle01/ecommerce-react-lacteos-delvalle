import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import SliderHome from '../SliderHome/SliderHome'
import itemListData from '../../jsons/listaProductos.json'
import { Row, Container, Spinner } from 'react-bootstrap'

import db from '../../services/services'
import { collection, getDocs  } from 'firebase/firestore'

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

// Conection for firebase data and products 
  useEffect(() => {
    
    const getColData = async () => {
      try {
        const data = collection(db, 'productos');
        const col = await getDocs(data);
        const res = col.docs.map((doc) => doc.data())
        console.log(res);
      } catch (error) {
        console.log(error)
      }
    }

    getColData();
    return () => {
      
    }
  }, [])
  
  return (
    <>
      <Container>
      <SliderHome/>
        <Row>
        {products.length ? (
          //Queda a la espera de la carga de productos. se ejecuta un Spinners
         // Cuando carga los productos. 
          <ItemList listProducts={products} onAdd={onAdd}/>
          ) : (
            <Container style={{marginTop:'50px'}}>
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