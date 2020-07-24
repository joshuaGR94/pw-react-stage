import React, { useEffect, useState, Fragment } from 'react'
import useFullPageLoader from '../hooks/useFullPageLoader';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Container, Button } from 'react-bootstrap'
import { AddButton } from '../components/Button-CRUD/AddButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const TodosTable = () => {
    const [todos, setTodos] = useState([])
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const { SearchBar } = Search;
    const noData = 'nessun dato';
    
    
    
    const deleteRow = () => {
        const data = this.node.selectionContext.selected;
        console.log(data)
        //todos.filter(row => row.id !== data.id);
    }

    
    const actionFormatter = (cell, row, rowIndex) => {
        return (<div className="d-flex justify-content-around">
            <Button variant='secondary' size='sm' onClick={() => console.log(row)} ><FontAwesomeIcon icon='edit' />Modifica</Button>
            <Button variant="danger" size='sm' onClick={() => console.log(row.id)} ><FontAwesomeIcon icon='trash-alt' /> Elimina</Button>
            </div>)
    }

    //dataField must match the key of the json obj  
    const column = [

        { dataField: "name", text: "Titolo",/* filter: textFilter(),*/ sort: true },
        { dataField: "email", text: "email", filter: textFilter(), sort: true },
        { dataField: "body", text: "body", filter: textFilter(), sort: true },
        { datafield: "action", text: "action", isDummyField: true, formatter: actionFormatter ,classes: {verticalAling: "top"}}

    ];
    const selectRow = {
        mode: 'checkbox',

        onSelect: (row, isSelect) => {
            console.log(row);
        }

    }

   const getData = () => {

        showLoader();

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(json => {
                hideLoader();
                setTodos(json);
            }).catch(err => {
                hideLoader();
                console.log(err)
            });
    };

    useEffect(() => {

        getData();

    }, []);


    return (
        <Container >
            <ToolkitProvider
                bootstrap4={true}
                keyField="id"
                data={todos}
                columns={column}

                search
            >
                {
                    props => (
                        <Fragment>
                            <div className='row'>
                                <SearchBar {...props.searchProps} />
                              
                                    <AddButton/>


                            </div>

                            <div className='table table-responsive table-sm '>
                                <BootstrapTable
                                    classes='thead-dark'
                                    {...props.baseProps}
                                    pagination={paginationFactory()}
                                    selectRow={selectRow}
                                    filter={filterFactory()}
                                    filterPosition='inline'
                                    hover={true}
                                    noDataIndication={noData}
                                    condensed={true}
                                />
                            </div>
                        </Fragment>
                    )
                }
            </ToolkitProvider>

            {loader}


        </Container>
    )
}

export default TodosTable;
