import React, { useState, useEffect, Fragment } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Container } from 'react-bootstrap';
import * as ReactBoostrap from 'react-bootstrap';


const PhotosTable = () => {
    const [photos, setPhotos] = useState([]);
    const [loading,setLoading] = useState(false)
    const { SearchBar } = Search;
    
    
    const actionFormatter = (cell, row, rowIndex) => {
        return (<div className="d-flex justify-content-around">
            <img src={cell} alt={row.title}/>
        </div>)
    }
    
    
    const column = [

        { dataField: "title", text: "Titolo", filter: textFilter(), sort: true },
        { dataField: "url", text: "Link" },
        { dataField: "thumbnailUrl", text: "thumb",formatter: actionFormatter}


    ];

   

    const selectRow = {
        mode: 'checkbox',
        onSelect: (row, isSelect) => {
            console.log(row);
        }

    }

    const getData = () => {
        
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(json => {

                setPhotos(json);
                setLoading(true)
            }).catch(err => {

                console.log(err)
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
     
        <Container >
            {loading ?
            <ToolkitProvider
                bootstrap4={true}
                keyField="id"
                data={photos}
                columns={column}

                search
            >
                {props => (
                    <Fragment>
                        <div className='col-md-6'>
                            <SearchBar {...props.searchProps} />
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
                                condensed={true}
                            />
                        </div>
                    </Fragment>
                )
                }
            </ToolkitProvider> : 
            <ReactBoostrap.Spinner animation='border' />
            }
        </Container>
    )
}

export default PhotosTable
