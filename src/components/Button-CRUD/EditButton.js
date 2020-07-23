import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const EditButton = ({editRow,disable}) => {
    return (
        <Button onClick ={editRow} disabled={disable}><FontAwesomeIcon icon="edit" />Modifica</Button>
    )
}
