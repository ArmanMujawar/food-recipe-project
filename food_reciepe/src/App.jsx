import React from 'react'

import './App.css'

import MealInfo from './components/MealInfo'
import { Route, Routes } from 'react-router-dom'
import Mainpage from './components/Mainpage'

function App() {
 
  return (
    <>
     <Routes>
        <Route path='/' element={<Mainpage/>}/>
         <Route path="/:mealid" element ={<MealInfo/>}/>

       
     </Routes>
    
    </>
  )
}

export default App
