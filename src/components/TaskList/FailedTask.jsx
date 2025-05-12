import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] bg-yellow-400 rounded-xl p-5 '>
    <div className=' flex justify-between items-center'>
      <h3 className='bg-yellow-800 text-sm px-3 py-1 rounded'>{data.category}</h3>
      <h4 className='text-sm'>{data.taskdate}</h4>
    </div>
    <h2 className='mt-5 text-2xl capitalize  font-semibold'>{data.tasktitle}</h2>
    <p className='text-sm mt-2'>{data.taskdescription}</p>

    <div className='mt-4'>
            <button className=' bg-red-500 text-sm rounded w-full'>Failed Task</button>
        </div>
  </div>
  )
}

export default FailedTask