import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser)
      setUser(parsed.role)
      setloggedInUserData(parsed.data)
    }
  }, [])

  // update currently-logged-in employee if admin assigns them a task
  useEffect(() => {
    const handler = (e) => {
      const updatedEmployee = e?.detail
      if (!updatedEmployee) return
      const logged = JSON.parse(localStorage.getItem('loggedInUser') || 'null')
      if (logged?.role === 'employee' && logged.data?.email === updatedEmployee.email) {
        setloggedInUserData(updatedEmployee)
      }
    }

    window.addEventListener('ems:employee-updated', handler)
    return () => window.removeEventListener('ems:employee-updated', handler)
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      setloggedInUserData(null)
      return
    }

    if (userData) {
      const employee = userData.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        return
      }
    }

    alert('Invalid credentials')
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App

