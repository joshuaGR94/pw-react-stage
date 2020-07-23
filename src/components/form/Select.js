import React from 'react'
import { Form } from 'react-bootstrap'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';

const Select = (props) => {
    const { label, name, options, ...rest } = props; //option è un array di oggetti {key:''.value:''}
   
    return (
        <Form.Control>
            <label htmlFor={name}> {label}</label>
            <Field as='select' name={name} id={name} {...rest}>
                {
                    options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>{option.key}</option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </Form.Control>
    )
}

export default Select
