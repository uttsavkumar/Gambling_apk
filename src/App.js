import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import SignupPage from './Pages/SignupPage'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
    
    </>
  )
}

export default App