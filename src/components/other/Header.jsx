import React from 'react'
import { useState } from 'react';
import { setLocalStorage } from '../../utils/LocalStorage';
import { data } from 'autoprefixer';


const Header = (props) => {

  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.name)
  // }

 const logOutUser =()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  // window.location.reload()

  console.log(data);
  
 }
localStorage.clear()
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello<br /><span className='text-3xl font-semibold'>Admin👋🏻</span></h1>
        <button onClick={logOutUser}  className='bg-red-500 text-lg font-medium text-white rounded-sm px-5 py-2'>Log out</button>
    </div>
  );
};

export default Header;