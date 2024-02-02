import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Project from './Pages/Project'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Auth/>}></Route>
          <Route path='/register' element={<Auth insideRegister/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/projects' element={<Project/>}></Route>
          <Route path='/*' element={<Navigate to={'/'}/>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
