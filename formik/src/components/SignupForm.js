import React from 'react'
import { Formik,Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
const SignupForm = () => {
    const validate = Yup.object({
        userName:Yup.string()
        .max(15,'Must be 15 charecters or less')
        .required(' Username Required'),
        email:Yup.string()
        .email('Email is invalid')
        .required('Email Required'),
        password:Yup.string()
        .min(6,'Password must be at least 6 charecters')
        .required('Password Required'),
        confirmpassword:Yup.string()
        .oneOf([Yup.ref('password'),null],'Password Must Be same')
        .required('Confirm Password Required'),
    })
  return (
    <div>
        <Formik
        initialValues={{
            userName:'',
            email:'',
            password:'',
            confirmpassword:''
        }}
        validationSchema={validate}
        onSubmit = {values => {
            console.log(values)
        }}
        >
            {formik => (
                <div>
                    <h1 className='text-center'>SignupForm</h1>
                    <Form>
                        <TextField label='firstName' name='userName' type='text' />
                        <TextField label='Email' name='email' type='email' />
                        <TextField label='Password' name='password' type='password' />
                        <TextField label='confirm password' name='confirmpassword' type='password' />
                        <button className='btn btn-dark mt-3'>Register</button> 
                    </Form>
                </div>
            )}
        </Formik>
    </div>
  )
}

export default SignupForm