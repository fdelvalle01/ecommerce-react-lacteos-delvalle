import React from 'react'
import { Button, Card,  Nav, ListGroup} from 'react-bootstrap'
import './NavbarFooter.css'

const navbarFooter = () => {
  return (
    <div>
    <Card style={{border:'none'}}>
      <Card.Header id='CardHeaderFooter'>
        <Nav variant="tabs" defaultActiveKey="#linkDesk">
          <Nav.Item >
            <Nav.Link href="#linkDesk"> <span className="text-muted">Descripción</span></Nav.Link> 
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link href="#linkAddInfo"> <span className="text-muted">Informacion Adicional</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#linkValo"> <span className="text-muted">Valoraciones</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#linkPoliticas"><span className="text-muted">Politicas De Compra y Despacho</span></Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Card.Header>
      <Card.Body>
        <ListGroup  variant="flush" >
            <ListGroup.Item id="listGroup"><small className="text-muted"><span>  100 grs forma parte de la exclusiva familia de Tres Arauco. Encuentra todos tus productos aquí en Tres Arauco tienda de quesos online, recuerda leer nuestras políticas de privacidad y de compra. .</span></small></ListGroup.Item>
            <ListGroup.Item id="listGroup"><small className="text-muted"><span>  Nuestros clientes avalan el servicio entregado, con la precisión y calidad humana en la relación con ellos, llegamos a sus puertas con el mejor producto y una excelente atención..</span></small></ListGroup.Item>
        </ListGroup>

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
  )
}

export default navbarFooter