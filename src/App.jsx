import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// imports components
import NavBar from './layouts/NavBar'
import Home from './components/Home'
import Users from './components/UsersList'
import Products from './components/Products'
import Purchases from './components/Purchases'
import Sales from './components/Sales'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='Home' element={<Home />} />
            <Route path='Users' element={<Users />} />
            <Route path='Products' element={<Products />} />
            <Route path='Purchases' element={<Purchases />} />
            <Route path='Sales' element={<Sales />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
