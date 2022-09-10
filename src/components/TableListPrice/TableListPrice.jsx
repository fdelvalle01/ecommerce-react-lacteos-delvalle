import React, {useState, useEffect, useRef} from 'react'
import { Container, Table, Form , InputGroup, Spinner, Button } from 'react-bootstrap'
import itemListData from '../../jsons/listaProductos.json'
import './TableListPrice.css'
import { DownloadTableExcel } from 'react-export-table-to-excel';

const TableListPrice = () => {
    
    const [products, setProducts] = useState([]);
    const [textFilter, setTextFilter] = useState([]);

    //Tenemos un useEffect que tiene una promise y consume un json. 
    useEffect(() => {
      const {listProducts} = itemListData;
      new Promise((resolve) => {
        setTimeout(()=> {
          resolve(listProducts); 
        }, 1000);
      }).then((data) => {
        setProducts(data);
        setTextFilter(data);
      });
    }, []);

    const filterProduct = (e) => {
        console.log(e)  
        let value = products.filter( element => {
            return element.titulo.toLowerCase().includes(e.toLowerCase())
        });
        if(value.length !== 0){
            setTextFilter(value);
        }else{
            setTextFilter(products);
        }
    }
    const tableRef = useRef(null);

    function TableItems() {
        return (
            <Table responsive striped hover  data-toolbar="#toolbar" id="tableList" ref={tableRef}>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Categoria</th>
                        <th>Stock</th>
                        <th>Precio con IVA</th>
                        <th>Dct. Mayorista</th>
                        <th>Dct. Requisito</th>
                        <th>Unidad</th>
                    </tr>
                </thead>
            <tbody >
                <>
                    {textFilter.map((item, index) => 
                        <tr>
                            <td>{item.titulo}</td>
                            <td>{item.descriptions}</td>
                            <td>{item.category}</td>
                            <td>{item.stock}</td>
                            <td>{item.precio}</td>
                            <td>{item.ofertPrice}</td>
                            <td>{item.dctRequi}</td>
                            <td>{item.unidad}</td>
                        </tr>
                        )
                    }
                </>
            </tbody>
        </Table>
        )
    }
  return (
    <Container style={{marginTop:'50px'}} >
        <>
            {
                products.length !== 0 ?  (
                    <div>
                            <div>
                            <InputGroup className="mb-3" id="inputSearch" >
                                <InputGroup.Text style={{backgroundImage:'url("https://ak.picdn.net/shutterstock/videos/16468963/thumb/1.jpg?ip=x480")'}} id="basic-addon1"><i class="fa fa-search" style={{color:'white'}} aria-hidden="true"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Buscador.."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={(e) => filterProduct(e.target.value)}
                                />
                            </InputGroup>
                            </div>                 
                        <TableItems/>
                        <div>
                            <DownloadTableExcel
                                        filename="prudctos table"
                                        sheet="productos"
                                        currentTableRef={tableRef.current}
                                    >
                                    <Button variant="success" style={{float:'right'}}><i class="fa fa-file-excel-o" aria-hidden="true"></i></Button>
                            </DownloadTableExcel>
                            
                           <p style={{float:'right', marginRight:'20px', textAlign: 'center', padding:'5px'}}>Productos: {products.length}</p>
                        </div> 
                    </div>
                ) : (
                    <Container>
                        <Spinner animation="grow" />
                    </Container>
                )
            }
        </>
    </Container>
  )
}

export default TableListPrice