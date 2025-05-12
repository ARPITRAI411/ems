import React, { useState } from 'react'
import "tailwindcss";


const Login = ({handleLogin}) => {

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

  const submitHandler =(e)=>{
    e.preventDefault()
    handleLogin(email,password)
     setEmail("")
    setPassword("")

  }




  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 rounded-xl p-20'>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}
           className='flex  flex-col justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
             required  className='text-white outline-none bg-transparent  border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type="email" placeholder='Enter your Email'/>
            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            
            required className='text-white outline-none bg-transparent  border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-3 placeholder:text-gray-400' type="password" placeholder='Enter Password'/>
            <button className='text-white outline-none  border-none bg-emerald-600 rounded-full text-xl py-3 px-5 mt-2'>Log in</button>
          </form>
        </div>
        
    </div>
  )
}

export default Login