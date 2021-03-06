import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// imports components
import NavBar from './layouts/NavBar'
import Home from './components/Home'
import Clients from './components/Clients'
import Products from './components/Products'
import Purchases from './components/Purchases'
import Sales from './components/Sales'
import Providers from './components/Providers'
import NewProvider from './components/NewProvider'
// Controllers
import NewClient from './components/NewClient'
import EditClient from './components/EditClient'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
import EditProvider from './components/EditProvider'

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
            <Route path='providers' element={<Providers />} />
            <Route path='newProvider' element={<NewProvider />} />
            <Route path='editProvider/:id' element={<EditProvider />} />
            <Route path='products' element={<Products />} />
            <Route path='newProduct' element={<NewProduct />} />
            <Route path='editProduct/:id' element={<EditProduct />} />
            <Route path='purchases' element={<Purchases />} />
            <Route path='sales' element={<Sales />} />
            <Route path='*' element={<Navigate replace to={'/'} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
