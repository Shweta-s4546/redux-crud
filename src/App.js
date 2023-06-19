import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menus from './component/Menus'
import Homes from './component/Homes'
import Creates from './component/Creates'
import Updates from './component/Updates'
import Pnfs from './component/Pnfs'

function App() {
  return (
    <BrowserRouter>
      <Menus/>
      <Routes>
          <Route path={`/`} element={ <Homes/> }/>
          <Route path={`/create`} element={ <Creates/> }/>
          <Route path={`/update/:id`} element={ <Updates/> }/>
          <Route path={`/*`} element={ <Pnfs/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
