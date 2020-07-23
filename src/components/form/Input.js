import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { Form } from 'react-bootstrap'
import TextError from './TextError'
const Input = (props) => {
    const { label, name, ...rest } = props
   
   
    return (
        <Form.Control>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />


        </Form.Control>
    )
}

export default Input
