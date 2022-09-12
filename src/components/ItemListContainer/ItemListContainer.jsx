import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import SliderHome from '../SliderHome/SliderHome'
import { Row, Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import db from '../../services/services'
import { collection, getDocs, query, where  } from 'firebase/firestore'

/*
    Componente que contiene toda la lista de productos y lo muestra en un card, se utiliza en la pagina inicial del e-comerce. 
    @{listProducts}, parametro que obtiene y setea todos los productos existentes ya sea de un json o del mismo firebase.
*/
const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const {categoryId} = useParams();
  console.log(categoryId)

  // Conection for firebase data and products 
  useEffect(() => {
    
    const getColData = async () => {
      try {
        const data = collection(db, 'productos');
        const col = await getDocs(data);
        const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data() }); //genera un nuevo array, con la id y ademas el resto del doc
        setProducts(res)
      } catch (error) {
        console.log(error)
      }
    }

    getColData();
    return () => {
    }
  }, [categoryId]);

  useEffect(()=> {
    const getColDataFilter = async () => {
    if(categoryId !== undefined){
        try{
          const q = query(collection(db, "productos"), where("categoryId", "==", categoryId))
          getDocs(q).then((snapshot)=> {
            if(snapshot.size === 0){
                console.log("No Results");
            }
            setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
        })
        } catch (error) {
          console.log(error)
        }
      }
    }

  getColDataFilter();
  return () => {
  }
  }, [categoryId])
  
  return (
    <>
      <Container>
      <SliderHome/>
        <Row>
        {products.length ? (
          //Queda a la espera de la carga de productos. se ejecuta un Spinners
         // Cuando carga los productos. 
          <ItemList listProducts={products}/>
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