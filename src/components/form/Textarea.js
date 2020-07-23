import React from 'react'
import { Form } from 'react-bootstrap'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Textarea = (props) => {
    const{label,name,...rest} = props
    return (
        <Form.Control>
         <label htmlFor={name}>{label}</label>
         <Field as='textarea' id={name} name={name} {...rest} />
         <ErrorMessage name={name} component={TextError}/>
        </Form.Control>
    )
}

export default Textarea
