import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DeleteButton = ({onDelete,disable=true}) => {
   
   
    return (
     
          <Button disabled={disable}  ><FontAwesomeIcon icon="trash-alt"/>Elimina</Button>  
    )
}
