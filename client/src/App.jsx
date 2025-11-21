import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Control from "./pages/Control.jsx";
import Navbar from "./components/Navbar.jsx";
import WebDev from "./pages/WebDev.jsx";
import SpaceShooter from "./pages/SpaceShooter.jsx";
import CRM from "./pages/CRM.jsx";
import TopDownShooter from "./pages/TopDownShooter.jsx";
import Red from "./pages/Red.jsx";
import Contact from "./pages/Contact.jsx";
import Resources from "./pages/Resources.jsx";
import Users from "./pages/Users.jsx";
import Uploads from "./pages/Uploads.jsx";
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    const location = useLocation();

    // Hide the navbar on certain pages
    const hideNavbarPaths = ['/ai', '/ai/control']; // I can add more paths here if needed
    const shouldHideNavbar = hideNavbarPaths.some(path => location.pathname.startsWith('/ai'));

    return (
        <div>
            {!shouldHideNavbar && <Navbar />}
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path={'/contact'} element={<Contact/>} />
                <Route path={'/resources'} element={<Resources/>} />
                <Route path={'/webdev'} element={<WebDev/>} />
                <Route path={'/space-shooter'} element={< SpaceShooter />} />
                <Route path={'/top-down-shooter'} element={<TopDownShooter/>} />
                <Route path={'/red'} element={<Red/>} />
                <Route path={'/crm'} element={<CRM/>} />
                <Route path='/ai'
                       element={
                           <ProtectedRoute requireAdmin={true}>
                               <Layout />
                           </ProtectedRoute>
                       }
                >
                    <Route path='control' element={<Control/>} />
                    <Route path='users' element={<Users />} />
                    <Route path='uploads' element={<Uploads />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App



