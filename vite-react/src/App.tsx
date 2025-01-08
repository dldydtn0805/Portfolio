import './App.css'
import Header from './components/Header/Header'
import Article from './components/Articles/Article'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Game from './components/Game/Game'
import Tetris from './components/Game/Tetris'

function App() {
  return (
    <div className="grid grid-rows-12 h-screen">
      <Footer/>
      <Routes>
        <Route path="/" element={<Article></Article>}></Route>
        <Route path="/project"></Route>
        <Route path="/article"></Route>
        <Route path="/game" element={<Game></Game>}>
          <Route path="tetris" element={<Tetris></Tetris>}></Route>
        </Route>
        <Route path="*" element={<div>403 ERROR</div>}></Route>
      </Routes>
      <Header/>
    </div>
  )
}

export default App
