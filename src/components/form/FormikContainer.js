import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import FormikControls from './FormikControls';


const FormikContainer = () => {
    const initialValues = {};
    const validationSchema = {};//funzione che deve tornare un oggetto errore
    const onSubmit = values => console.log(values);
    return (
        <Formik initialValues={initialValues} validate={validationSchema} onSubmit={onSubmit}>
            {
                formik => <Form>
                    <FormikControls control='input' type='email' name='email' label='email' />
                    <Button type='submit'>Submit</Button>
                </Form>
            }
        </Formik>
    )
}

export default FormikContainer
