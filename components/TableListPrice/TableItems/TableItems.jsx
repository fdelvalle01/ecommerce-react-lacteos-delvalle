import React from 'react'
import {Table } from 'react-bootstrap'

/*
    Componente que muestra en una tabla los item en la lista de precios del producto de forma especifica.   
    @textFilter Parametro que contiene el textFilter o texto a filtrar, de acuerdo a este parametro se filtra la tabla.   
*/
const TableItems = ({textFilter, tableRef}) => {
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

export default TableItems