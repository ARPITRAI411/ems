import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
  return (
    <div id='alltask' className='bg-[#1c1c1c] p-5 py-3 mt-5 rounded capitalize h-50 overflow-hidden'>
        
        <div className='py-2 px-4 mt-2 bg-red-400 flex justify-between rounded' >
        <h2 className='text-xl font-medium w-1/5'>employee name</h2>
        <h3 className='text-xl font-medium w-1/5' >new task</h3>
        <h5 className='text-xl font-medium w-1/5' >active task</h5>
        <h5 className='text-xl font-medium w-1/5' >completed task</h5>
        <h5 className='text-xl font-medium w-1/5' >failed task</h5>
          </div>

          <div id='abc' className='h-[80%] overflow-auto '>
          {userData.map(function(elem,idx){
        return <div key={idx} className='py-2 px-4 mt-2 bg-transparent-300 flex justify-between rounded' >
        <h2 className='text-xl font-medium  w-1/5'>{elem.name}</h2>
        <h3 className='text-xl font-medium  w-1/5 text-blue-600' >{elem.taskCounts.newTask}</h3>
        <h5 className='text-xl font-medium  w-1/5 text-yellow-400' >{elem.taskCounts.active}</h5>
        <h5 className='text-xl font-medium  w-1/5 text-white-600' >{elem.taskCounts.completed}</h5>
        <h5 className='text-xl font-medium  w-1/5 text-red-600' >{elem.taskCounts.taskFail}</h5>
          </div>
       })}
          </div>

     
          
    </div>
  )
}

export default AllTask