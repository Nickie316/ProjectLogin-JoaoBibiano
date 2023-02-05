import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { ProtectedLayout } from './components/Protected'
import { AuthProvider } from './context/AuthProvider'

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/profile' element={ 
            <ProtectedLayout children={ <h1>Olá, esse e o componente profile</h1> } />
          } />

          <Route path='/login' element={ <Login />  } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
