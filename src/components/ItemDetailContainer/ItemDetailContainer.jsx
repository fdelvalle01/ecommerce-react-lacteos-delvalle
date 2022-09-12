import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Container, Spinner } from 'react-bootstrap'
import ItemDetail from '../ItemDetail/ItemDetail'

import db from '../../services/services'
import { doc, getDoc  } from 'firebase/firestore'
/*
    Componente que se utiliza para la muestra todos los productos para su detail, en este valida si existen y los envia a ItemDetail, para su recorrido y mostrado.   
*/
const ItemDetailContainer = () => {

    const {id} = useParams();
    const [products, setProducts] = useState([]);

  // Conection for firebase data and products
  
  useEffect(() => {
    
    const getColData = async () => {
      try {
        const productRef = doc(db, 'productos', id);
        getDoc(productRef).then((snapshot) => {
          if(snapshot.exists()){
            setProducts({id: snapshot.id, ...snapshot.data()})
          }
        })

      } catch (error) {
        console.log(error)
      }
    }

    getColData();
    return () => {
      
    }
  }, [id])

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