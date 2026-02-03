import React, { useState, useEffect } from 'react'

const Header = ({ changeUser, data }) => {
  const [displayName, setDisplayName] = useState('')

  useEffect(() => {
    // prefer prop data (from App) when available
    if (data && data.name) {
      setDisplayName(data.name)
      return
    }

    const logged = JSON.parse(localStorage.getItem('loggedInUser') || 'null')
    if (logged?.role === 'admin') {
      setDisplayName('Admin')
    } else if (logged?.role === 'employee' && logged.data?.name) {
      setDisplayName(logged.data.name)
    } else {
      setDisplayName('')
    }
  }, [data])

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    // notify parent (App) to show login screen
    if (typeof changeUser === 'function') changeUser(null)
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello<br /><span className='text-3xl font-semibold'>{displayName || 'User'}</span></h1>

      <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white rounded-sm px-5 py-2'>Log out</button>
    </div>
  )
}

export default Header;