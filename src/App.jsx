import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddHotel from './pages/AddHotel';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
   return (
      <div className='w-screen h-screen flex flex-col items-center justify-between'>

         <Navbar />

         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/addHotel' element={<AddHotel />}></Route>
         </Routes>

         <Footer />
      </div>
   )
}

export default App;