import React from 'react'
import { Users } from './Users'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  )
}

export default App
