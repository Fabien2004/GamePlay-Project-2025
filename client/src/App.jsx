import './App.css'
import { Routes, Route } from 'react-router'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {


  return (
    <>
      <div id='box'>
        <Header />
      </div>
      <main id="main-content">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Home />
      </main>
    </>

  )
}

export default App
