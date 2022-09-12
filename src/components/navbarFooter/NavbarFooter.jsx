import React, {useState} from 'react'
import {Card,  Nav, ListGroup} from 'react-bootstrap'
import './NavbarFooter.css'

/*
    Componente footer que nos muestra la informacion del producto en el itemDetail.   
*/
const NavbarFooter = ({descriptions, category, contNeto}) => {

  const [mostrarComponente, setMostrarComponente] = useState(true);
  const textDescriptions = '100 grs forma parte de la exclusiva familia de Lácteos Del Valle. Encuentra todos tus productos aquí en Lácteos Del Valle tienda de quesos online, recuerda leer nuestras políticas de privacidad y de compra. .'
  const textDescriptions2 = 'Nuestros clientes avalan el servicio entregado, con la precisión y calidad humana en la relación con ellos, llegamos a sus puertas con el mejor producto y una excelente atención..';

  return (
    <div>
    <Card style={{border:'none'}}>
      <Card.Header id='CardHeaderFooter'>
        <Nav variant="tabs" defaultActiveKey="#linkDesk">
          <Nav.Item >
            <Nav.Link href="#linkDesk" onClick={() => setMostrarComponente(true)}><span className="text-muted">Descripción</span></Nav.Link> 
          </Nav.Item>
          <Nav.Item >
            <Nav.Link href="#linkNutr"  onClick={() => setMostrarComponente(false)}> <span className="text-muted">Nutricion</span></Nav.Link> 
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
      {mostrarComponente &&  <ListGroup  variant="flush" className={mostrarComponente ? "show-element" : null}>
        <ListGroup.Item id="listGroup"><small className="text-muted"><span>{textDescriptions}</span></small></ListGroup.Item>
        <ListGroup.Item id="listGroup"><small className="text-muted"><span>{textDescriptions2}</span></small></ListGroup.Item>
        </ListGroup>}
        {!mostrarComponente && <ListGroup  variant="flush" className={!mostrarComponente ? "show-element" : null}>

            <ListGroup.Item id="listGroup"><small className="text-muted"><span>{descriptions}</span></small></ListGroup.Item>
            <ListGroup.Item id="listGroup"><small className="text-muted"><span>{category}</span></small></ListGroup.Item>
            <ListGroup.Item id="listGroup"><small className="text-muted"><span>{contNeto}</span></small></ListGroup.Item>
        </ListGroup>}
      </Card.Body>
    </Card>
    </div>
  )
}

export default NavbarFooter