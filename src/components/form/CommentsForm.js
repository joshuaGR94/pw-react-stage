import React from 'react'
import { Form } from 'react-bootstrap'
import { useFormik } from 'formik'

const CommentsForm = () => {

    const formikPost = useFormik({
        initialValues: {

        },
        onSubmit: values => { console.log(values) }//prende autamaticamente le value del from come parametro
        ,
        validate: values => {
         //deve tornare un oggetto
         // values.value1 values.value2 
         // errors.value1 errors.value2
         //errors.value1 questo campo è obbligatorio
         let errors ={};
         return errors; 
        }
    }
    )


    return (
        <Form>


        </Form>
    )
}
export default CommentsForm
