import React, { useState } from 'react'
import ModalForm from '../components/ModalForm';
import { useEffect } from 'react';


const Prova = () => {
    const [todos, setTodos] = useState([]);
    const [showed, setShowed] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClose = () => setShowed(false)

    //const handleShow = () => setShowed(true)
   
    const title = 'Aggiungi commento';
    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(json => {
                setTodos(json);
                setIsLoaded(true)
            }).catch(err => {
                console.log(err)
            });
    };
 
    useEffect(() => {
        getData();
    }, []);



    const add = (value) => {
        /*value.id = todos.length;
        setTodos(...todos, value);*/
        console.log(value)
        handleClose();
    }

    if(!isLoaded) return null  
    return (
        <div> 
             <ModalForm heading={title} data={todos[0]} show={showed} onHide={handleClose} onSubmit={add} />)
    
        </div>
    )
}

export default Prova
