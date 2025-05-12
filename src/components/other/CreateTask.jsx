import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'

const createtask = () => {

   const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})


  const submitHandler =(e)=>{
    e.preventDefault()

    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,NewTask:true,taskFail:false,completed:false})
     
     const data=  userData
    
     data.forEach(function(elem){
      if(assignTo == elem.name){

        elem.tasks.push(newTask)
        elem.takkCounts.newTask=elem.takkCounts.newTask+1
        
      }
     })

     setUserData(data)

    

     setAssignTo('')
     setCategory('')
     setTaskDate('')
     setTaskDescription('')
     settaskTitle('')
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded capitalize' > 
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between capitalize' >


            <div className='w-1/2 capitalize'>

             <div>
               <h3 className='text-sm text-gray-300 mb-0.5'>task title</h3>
               <input
               value={taskTitle} 
               onChange={(e)=>{
                settaskTitle(e.target.value)
               }}
                className='text-sm py-1 px-2 w-4/5 rounde outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Enter Task Title'  />
             </div>

              <div>
               <h3 className='text-sm text-gray-300 mb-0.5 '>date</h3>
               <input
                 value={taskDate} 
                 onChange={(e)=>{
                  setTaskDate(e.target.value)
                 }}
                 className='text-sm py-1 px-2 w-4/5 rounde outline-none bg-transparent border-[1px] border-gray-400 mb-4'  type="date"/>
              </div>

             <div>
               <h3 className='text-sm text-gray-300 mb-0.5'>assign to</h3>
               <input
                 value={assignTo} 
                 onChange={(e)=>{
                  setAssignTo(e.target.value)
                 }}
               
               type="text" placeholder='Emloyee name'  className='text-sm py-1 px-2 w-4/5 rounde outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
             </div>

             <div> 
              <h3 className='text-sm text-gray-300 mb-0.5'>category</h3>
               <input
                 value={category} 
                 onChange={(e)=>{
                  setCategory(e.target.value)
                 }}
               type="text" placeholder='design,dev etc'  className='text-sm py-1 px-2 w-4/5 rounde outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
             </div>
          </div>
          
            <div className='w-1/2'>
              <h3 className='text-sm text-gray-300 mb-0.5'>description</h3>
              <textarea
                value={taskDescription} 
                onChange={(e)=>{
                 setTaskDescription(e.target.value)
                }}
              
              className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 ' name="" id="" cols= "30" rows="10" ></textarea>
             </div>
            
            <button className='bg-emerald-400 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>create task</button>

        </form>
     </div>
  )
}

export default createtask