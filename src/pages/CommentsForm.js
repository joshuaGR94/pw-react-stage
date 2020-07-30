import React from 'react'
import { Form, Formik } from 'formik'
import FormikControl from '../components/form/FormikControls'
import { Button, Container } from 'react-bootstrap';
import * as Yup from 'yup'


const CommentsForm = (props) => {
    const {data,onSubmit,...rest} = props;
        const initialValue = {
        name: '',
        email: '',
        body: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('required'),
        email: Yup.string().email('invalid format').required('required'),
        body: Yup.string().required('required')
    });



   // const onSubmit = (value) => console.log('Form Data', value)
    return (
        <Container className="mb-3 mt-3">

            <Formik initialValues={data|| initialValue} validationSchema={validationSchema} onSubmit={onSubmit} {...rest}>
                {formik => {
                    return (<Form>
                        <FormikControl control='input' type='text' name='name' label='Titolo' />
                        <FormikControl control='input' type='email' name='email' label='Email' />
                        <FormikControl control='textarea' name='body' label='Commento' />
                        <Button type='submit' disabled={!formik.isValid}> Invia </Button>
                    </Form>)
                }}
            </Formik>
            </Container>
  
    )
}

export default CommentsForm
