import React from 'react'

const AcceptTask = ({data}) => {
 
  return (
    <div className='flex-shrink-0 h-full w-[350px] bg-red-400 rounded-xl p-5 '>
        <div className=' flex justify-between items-center'>
          <h3 className='bg-red-800 text-sm px-3 py-1 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.taskdate}</h4>
        </div>
        <h2 className='mt-5 text-2xl capitalize  font-semibold'>{data.tasktitle}</h2>
        <p className='text-sm mt-2'>{data.taskdescription}</p>
        <div className=' flex justify-between mt-4'>
            <button className=' bg-green-500 py-1 px-2 text-sm rounded'>Mark As Completed</button>
            <button className=' bg-red-500 py-1 px-2 text-sm rounded'>Mark As Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask