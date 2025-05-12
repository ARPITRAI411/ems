import React from 'react'
// import { getLocalStorage,employees} from '../../utils/LocalStorage'

const TaskListN = ({data}) => {
  return (
    <div className='flex mt-10 justify-between screen gap-5'>

        <div className=' rounded-xl w-[40%] py-6 px-9 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className=' rounded-xl w-[40%] py-6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className=' rounded-xl w-[40%] py-6 px-9 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>

        <div className=' rounded-xl w-[40%] py-6 px-9 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.taskFail}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
        
        
     </div>
  )
}

export default TaskListN