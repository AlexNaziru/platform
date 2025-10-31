import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Admin from "./pages/Admin.jsx";
import Navbar from "./components/Navbar.jsx";
import WebDev from "./pages/WebDev.jsx";
import SpaceShooter from "./pages/SpaceShooter.jsx";
import CRM from "./pages/CRM.jsx";
import TopDownShooter from "./pages/TopDownShooter.jsx";
import Red from "./pages/Red.jsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path={'/webdev'} element={<WebDev/>} />
                <Route path={'/space-shooter'} element={< SpaceShooter />} />
                <Route path={'/top-down-shooter'} element={<TopDownShooter/>} />
                <Route path={'/red'} element={<Red/>} />
                <Route path={'/crm'} element={<CRM/>} />
                <Route path='/ai' element={<Layout/>}>
                    <Route index element={<Dashboard/>} />
                    <Route path='admin' element={<Admin/>} />
                </Route>
            </Routes>
        </div>
    )
}

export default App



