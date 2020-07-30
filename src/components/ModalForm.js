import React from 'react'
import { Modal } from 'react-bootstrap'
import CommentsForm from '../pages/CommentsForm'




const ModalForm = (props) => {
  const { show, onHide, data, onSubmit,heading, ...rest } = props
  return (
    
    
      <Modal show={show} onHide={onHide} {...rest}>
        <Modal.Header closeButton >{heading}</Modal.Header>
        <CommentsForm initialValues={data} onSubmit={onSubmit} />
      </Modal>
  )
}

export default ModalForm
