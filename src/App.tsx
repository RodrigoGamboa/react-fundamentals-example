import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Example1 from './pages/Example1'
import Example1Solved from './pages/Example1Solved'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/example1' element={<Example1 />} />
        <Route path='/example1-solved' element={<Example1Solved />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

