
import Navbar from '../navbar'
import { Outlet } from 'react-router-dom'


const Guestlayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
       
    </>
  )
}

export default Guestlayout