import { Header } from './components/Header.jsx'
import './App.css'
import {Footer} from './components/Footer.jsx'
import Body from './components/Body.jsx'
import {Outlet} from 'react-router-dom'
function App() {
  

  return (
    <>
        <Header />
       <Outlet />
        
      <Footer />
    </>
  )
}

export default App
