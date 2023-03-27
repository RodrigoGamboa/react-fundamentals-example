import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Example1 from './pages/Example1'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Example1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

