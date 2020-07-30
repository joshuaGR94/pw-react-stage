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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalForm from '../components/ModalForm';



const CommentsTable = () => {
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [comment, setComment] = useState({});
    const { SearchBar } = Search;
    const noData = 'nessun dato';
    const title = 'Commento';

    const handleClose = () => {
        setComment({});
        setShow(false);
    }

    const handleShow = () => setShow(true)



    const editRow = (row) => {
        handleShow();
        setComment(row);
    }
    const update = (value) => {
        if (!comment) {
            value.id = comments.length;
            setComments([...comments, value]);
            setComment({});
            handleClose();
        }
        else {
            comment.name = value.name;
            comment.email = value.email;
            comment.body = value.body;
            console.log(comment)
            let datacomments=(comments.filter(rows => rows.id !== comment.id))
            setComments([comment,...datacomments]);
            handleClose();
        }
    
    }



    const deleteRow = (row) => {
        setComments(comments.filter(rows => rows.id !== row.id));
    }

    const actionFormatter = (cell, row, rowIndex) => {
        return (<div className="d-flex justify-content-around">
            <Button variant='secondary' size='sm' onClick={() => editRow(row)} ><FontAwesomeIcon icon='edit' />Modifica</Button>
            <Button variant="danger" size='sm' onClick={() => deleteRow(row)} ><FontAwesomeIcon icon='trash-alt' /> Elimina</Button>
        </div>)
    }

    //dataField must match the key of the json obj  
    const column = [
        { dataField: "name", text: "Titolo", filter: textFilter(), sort: true },
        { dataField: "email", text: "email", filter: textFilter(), sort: true },
        { dataField: "body", text: "body", filter: textFilter(), sort: true },
        { datafield: "action", text: "action", isDummyField: true, formatter: actionFormatter }

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
                setComments(json);
            }).catch(err => {
                hideLoader();
                console.log(err)
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container className='mb-5' >
            <ToolkitProvider
                bootstrap4={true}
                keyField="id"
                data={comments}
                columns={column}
                search
            >
                {props => (
                    <Fragment>
                        <div className='row'>
                            <div className='col-md-6'>
                                <SearchBar {...props.searchProps} />
                            </div>
                            <Button variant='secondary' size='sm' onClick={handleShow} ><FontAwesomeIcon icon="plus-circle" />Aggiungi</Button>

                        </div>

                        <div className='table table-sm '>
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
            <ModalForm show={show} onHide={handleClose} data={comment} heading={title} onSubmit={update} />
            {loader}
        </Container>
    )
}

export default CommentsTable;



    /* const add = (value) => {
         value.id = comments.length;
         setComments(...comments, value);
         handleClose();
     }
       const onAdd = () => {
         handleShow();
     }*/
     