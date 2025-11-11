import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Regiser'
import CatalogGame from './components/catalog-game/CatalogGame'
import CreateGame from './components/create-game/CreateGame'
import './App.css'
import DetailsGame from './components/details-game/DetailsGame'
import EditGame from './components/edit-game/EditGame'

function App() {


  return (
    <>
      <div id='box'>
        <Header />
      </div>
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<CatalogGame />} />
          <Route path='/games/:gameId/details' element={<DetailsGame />} />
          <Route path='/games/:gameId/edit' element={<EditGame />} />
          <Route path='/create' element={<CreateGame />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
         
        </Routes>
      </main>
    </>

  )
}

export default App
