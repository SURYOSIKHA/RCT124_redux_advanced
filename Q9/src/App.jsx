import React from 'react'
import Sidebar from './components/Sidebar'
import CoffeeList from './components/CoffeeList'

const App = () => {
  return (
    <div className='app-container'>
      <Sidebar/>
      <CoffeeList/>
    </div>
  )
}

export default App