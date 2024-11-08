import { useFormik } from 'formik'
import { useState } from 'react';
import React from 'react'
import axios from 'axios';
import * as yup from 'yup';
import { toast } from 'react-toastify';
export default function Register() {
    const [error , setError] = useState(null);
    const schema = yup.object({
        userName: yup.string().required('userName is required'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
      });
    const formik = useFormik({
        initialValues:{
            userName: '',
            email: '',
            password: '',
        },onSubmit:register,
        validationSchema:schema,
    })
    console.log(formik)
    async function register(){
        try{
              const {data} = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`,formik.values);
              toast.success("تم التسجيل بنجاح")
        console.log(data);
        }catch(e){
            setError(e.response.data.message);

        }
      
    }
  return (
    <>
   <form onSubmit={formik.handleSubmit} className='w-50 m-auto mt-5 shadow-lg p-3 mb-5 bg-body rounded'>
   {error?<div className="alert alert-danger ">{error}</div>:null}
   <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingInput" placeholder="userName"
    name="userName" value={formik.userName} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">userName</label>
    {formik.errors.userName?<div className="alert alert-danger">{formik.errors.userName}</div>:null}
  </div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
    name="email" value={formik.email} onChange={formik.handleChange}/>
    <label htmlFor="floatingInput">Email address</label>
    {formik.errors.email?<div className="alert alert-danger">{formik.errors.email}</div>:null}
  </div>
  <div className="form-floating mb-3">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
    name="password" value={formik.password} onChange={formik.handleChange}/>
    <label htmlFor="floatingPassword">Password</label>
    {formik.errors.password?<div className="alert alert-danger">{formik.errors.password}</div>:null}
  </div>
  <div className="form-floating mb-3">
    <button type='submit' className='btn btn-dark'>register</button>
  </div>
</form>

    </>
  )
}
