import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [error, setError] = useState('')

  const resetForm = () => {
    setAssignTo('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')
    setError('')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setError('')

    if (!taskTitle || !taskDescription || !taskDate || !assignTo) {
      setError('Please fill required fields and choose an employee')
      return
    }

    // find employee by name (case-insensitive)
    const employees = Array.isArray(userData) ? [...userData] : []
    const empIdx = employees.findIndex((em) => em.name.toLowerCase() === assignTo.trim().toLowerCase())
    if (empIdx === -1) {
      setError(`Employee "${assignTo}" not found`) 
      return
    }

    const taskObj = {
      tasktitle: taskTitle,
      taskdescription: taskDescription,
      taskdate: taskDate,
      category: category || 'general',
      active: false,
      newTask: true,
      completed: false,
      taskFail: false,
    }

    // mutate employee tasks
    employees[empIdx].tasks = employees[empIdx].tasks || []
    employees[empIdx].tasks.push(taskObj)

    // ensure taskCounts exists and update
    employees[empIdx].taskCounts = employees[empIdx].taskCounts || { active: 0, newTask: 0, completed: 0, taskFail: 0 }
    employees[empIdx].taskCounts.newTask = (employees[empIdx].taskCounts.newTask || 0) + 1

    // update context (trigger UI updates for admin lists)
    setUserData(employees)

    // persist employees to localStorage
    localStorage.setItem('employees', JSON.stringify(employees))

    // if the assigned employee is currently logged in, update that session and notify App to refresh
    const logged = JSON.parse(localStorage.getItem('loggedInUser') || 'null')
    if (logged?.role === 'employee' && logged.data?.email === employees[empIdx].email) {
      const updatedLogged = { role: 'employee', data: employees[empIdx] }
      localStorage.setItem('loggedInUser', JSON.stringify(updatedLogged))
      // notify other parts of the app (App.jsx listens for this)
      window.dispatchEvent(new CustomEvent('ems:employee-updated', { detail: employees[empIdx] }))
    }

    resetForm()
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded capitalize'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between capitalize'>

        <div className='w-1/2 capitalize'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>task title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounde outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='text'
              placeholder='Enter Task Title'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 '>date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounde outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type='date'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>assign to</h3>
            {/* prefer a select to avoid typos */}
            <select
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounde outline-none  bg-black border-[1px] border-gray-400 mb-4'
            >
              <option value=''>-- choose employee --</option>
              {Array.isArray(userData) && userData.map((emp) => (
                <option key={emp.email} value={emp.name}>{emp.name} — {emp.email}</option>
              ))}
            </select>
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type='text'
              placeholder='design,dev etc'
              className='text-sm py-1 px-2 w-4/5 rounde outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            />
          </div>
        </div>

        <div className='w-1/2'>
          <h3 className='text-sm text-gray-300 mb-0.5'>description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 '
          />
        </div>

        {error ? <div className='text-sm text-red-400 w-full mt-3'>{error}</div> : null}

        <button className='bg-emerald-400 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>create task</button>
      </form>
    </div>
  )
}

export default CreateTask