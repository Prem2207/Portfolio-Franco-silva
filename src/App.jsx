
import './App.css'
import { Contact } from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Project from './components/Project'

function App() {
  

  return (
    
      <div className='App font-["sen"] min-h-screen bg-gradient-to-t from-black via-gray-50 to-black'>
        
        <NavBar/>
        <Header/>
        <Project/>
        <Contact/>
        <Footer/>

      </div>
     
   
  )
}

export default App
