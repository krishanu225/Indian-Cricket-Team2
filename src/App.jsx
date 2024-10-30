
import { Outlet } from "react-router-dom"
import Aboutus from "./Aboutus"
import Footer from "./Footer"
import Navbar from "./navbar"

const App = () => {
    return (
      <div>
      <Navbar/>
      <Aboutus/>
      <Footer/>
      <Outlet/>
      </div>
    )
  }
  
  export default App