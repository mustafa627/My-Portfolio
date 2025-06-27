 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Service from './pages/ContactPage'
import Project from './pages/Project'
import Navbar from './componenet/Navbar'

function App() {

  return (
  <>
   <Navbar />
<Routes>
<Route index element={<HomePage />}/>
<Route path='/about' element={<About />}/>
<Route path='/contact' element={<Service />}/>
<Route path='/project' element={<Project />}/>
</Routes>
</>
  )
}

export default App
