import './App.css'
import Movies from './components/Movies'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeNavbar from './components/HomeNav'

function App() {
  

  return (
    <div className=' min-h-screen pb-10 font-poppins bg-[#000] text-white'>
      <Router>
      <HomeNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </Router>
      
     
      
     
      
    </div>
   
  )
}

export default App
