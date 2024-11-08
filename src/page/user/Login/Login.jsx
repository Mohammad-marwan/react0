import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify';
import UserContext from '../../../component/context/User.jsx';
import { jwtDecode } from 'jwt-decode';
export default function Login() {
  const[errors , setErrors] = useState(null);
  const  {setIsLogin ,userData , setUserData} = useContext(UserContext);
  
  const schema = yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required').min(3, 'Password must be at least 8 characters long'),
  })
    const formik = useFormik({
      initialValues:{
        email:"",
        password:"",
      },onSubmit: loginfunction,
      validationSchema:schema,
    })
   async function loginfunction(){
    try{
      const {data}= await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`,formik.values);
      if(data.message == "success"){
        localStorage.setItem("userData",data.token);
        setIsLogin(true);
        const decode = jwtDecode(data.token);
        setUserData(decode);
      }
      
      console.log(data);
    }catch(e){
      setErrors(e.response.data.message);
      
    }

    }
  return (
   <form onSubmit={formik.handleSubmit}>
    {errors?<div className='alert alert-danger'>{errors}</div>:null}
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    name="email" value={formik.email} onChange={formik.handleChange} />
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
    <button type='submit' className='btn btn-dark'>Login</button>
  </div>
</form>

  )
}
