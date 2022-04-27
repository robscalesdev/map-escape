import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { signOut } from '../api/auth'

const SignOut = ({ clearUser, user }) => {
  const [shouldNavigate, setShouldNavigate] = useState(false)

  useEffect(() => {
    signOut(user)
    setShouldNavigate(true)
    clearUser()
  // eslint-disable-next-line
  }, [])


  if (!user || shouldNavigate) {
    return <Navigate to='/' />
  }

  return ''
}

export default SignOut
