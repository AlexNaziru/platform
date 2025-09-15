import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Products from "./pages/Products.jsx";
import Admin from "./pages/Admin.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/ai' element={<Layout/>}>
                    <Route index element={<Dashboard/>} />
                    <Route path='admin' element={<Admin/>} />
                </Route>
            </Routes>
        </div>
    )
}

export default App



