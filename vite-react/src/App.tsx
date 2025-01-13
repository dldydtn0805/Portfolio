import './App.css'
import Footer from './components/Footer/Footer'
import Abouts from './components/Abouts/Abouts'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Labs from './components/Labs/Labs'
import Tetris from './components/Labs/Tetris'
import Projects from './components/Projects/Projects'
import Articles from './components/Articles/Articles'

function App() {
  return (
    <div className="grid grid-rows-12 h-screen">
      <Header/>
      <Routes>
        <Route path="/" element={<Abouts></Abouts>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/articles" element={<Articles></Articles>}></Route>
        <Route path="/labs" element={<Labs></Labs>}>
          <Route path="tetris" element={<Tetris></Tetris>}></Route>
        </Route>
        <Route path="*" element={<div>403 ERROR</div>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
