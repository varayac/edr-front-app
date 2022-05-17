import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// imports components
import NavBar from './layouts/NavBar'
import Home from './components/Home'
import Clients from './components/Clients'
import Products from './components/Products'
import Purchases from './components/Purchases'
import Sales from './components/Sales'
import NewClient from './components/NewClient'
import EditClient from './components/EditClient'
import NewProduct from './components/NewProduct'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index='home' element={<Home />} />
            <Route path='clients' element={<Clients />} />
            <Route path='newClient' element={<NewClient />} />
            <Route path='editClient/:id' element={<EditClient />} />
            <Route path='products' element={<Products />} />
            <Route path='purchases' element={<Purchases />} />
            <Route path='sales' element={<Sales />} />
            <Route path='newProduct' element={<NewProduct />} />
            <Route path='*' element={<Navigate replace to={'/'} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
