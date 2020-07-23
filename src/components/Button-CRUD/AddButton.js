import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AddButton = ({addRow,disable}) => {
    return (
       <Button variant= 'secondary' size ='sm' onClick={addRow} disabled={disable} ><FontAwesomeIcon icon="plus-circle" />Aggiungi</Button>
    )
}
