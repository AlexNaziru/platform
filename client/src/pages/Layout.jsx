import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
        <div className="flex h-screen bg-slate-950 overflow-hidden">
            {/* Sidebar - Desktop: always visible, Mobile: toggleable */}
            <div className={`fixed md:relative z-40 md:z-0 w-64 flex-shrink-0 transition-transform duration-300 ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            }`}>
                <Sidebar />
            </div>

            {/* Backdrop for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content Area */}
            <div className="flex-1 overflow-auto">
                {/* Mobile menu button */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg text-white"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <Outlet />
            </div>
        </div>
    )
}
export default Layout
