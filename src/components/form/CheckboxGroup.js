import React, { Fragment } from 'react'
import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'
import { Form } from 'react-bootstrap'

const checkboxGroup = (props) => {
    const {label,name,options,...rest}= props
    return (
        <Form.Control>
        <label htmlFor={name}>{label}</label>
        <Field name={name} {...rest}>
            {({ field }) => {
                options.map(option => {
                    return (
                        <Fragment key={option.key}>
                            
                            <input type='checkbox' id={option.value}{...field} value={option.value} checked={field.value.include(option.value)}></input>
                            <label htmlFor={option.value}>
                                {option.key}
                            </label>
                        </Fragment>)
                })
            }

            } 
        </Field>
        <ErrorMessage name={name} component={TextError} />
    </Form.Control>
    )
}

export default checkboxGroup
