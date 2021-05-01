import React from 'react'
import { Users } from './Users'
import { BrowserRouter } from 'react-router-dom'
import AuthorizedUser from './AuthorizedUser'

const App = () => {
  return (
    <BrowserRouter>
      <AuthorizedUser />
      <Users />
    </BrowserRouter>
  )
}

export default App
