import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import FormikControls from '../components/form/FormikControls';

//example use of Formik
const FormikContainer = () => {
    const initialValues = {};//it's use to create a form state (the keys must match name of the child input)
    const validationSchema = {};//function that must return an error object or a yup object(but you must use the validationSchema props instead of validation)
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
