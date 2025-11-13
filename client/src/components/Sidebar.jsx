import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';

const Sidebar = () => {
    const { user } = useUser();
    const { signOut } = useClerk();
    const location = useLocation();
    const [hoveredItem, setHoveredItem] = useState(null);

    const menuItems = [
        {
            name: 'Dashboard',
            path: '/ai',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            name: 'Users',
            path: '/ai/users',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            name: 'Uploads',
            path: '/ai/uploads',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
            )
        }
    ];

    const isActive = (path) => {
        if (path === '/ai') {
            return location.pathname === '/ai';
        }
        return location.pathname.startsWith(path);
    };

    const handleLogout = async () => {
        await signOut();
        window.location.href = '/'; // Redirect to home
    };

    return (
        <div className="flex flex-col h-screen bg-slate-950">
            {/* Top Toolbar */}
            <div className="h-16 bg-gray-800/60 backdrop-blur-lg border-b border-gray-700/50 flex items-center px-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="text-md font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Sprite Labs
                    </span>
                </div>

                {/* User badge */}
                {user?.publicMetadata?.role === 'admin' && (
                    <span className="ml-2 px-2 py-1 text-xs font-semibold bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30">
                        Admin
                    </span>
                )}
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 flex flex-col bg-gray-900/50 backdrop-blur-sm border-r border-gray-700/50">
                {/* Menu Items */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                                isActive(item.path)
                                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                            }`}
                        >
                            <div className={`transition-transform duration-300 ${hoveredItem === index ? 'scale-110' : ''}`}>
                                {item.icon}
                            </div>
                            <span className="font-medium">{item.name}</span>

                            {/* Animated indicator */}
                            {isActive(item.path) && (
                                <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Logout Button at Bottom */}
                <div className="p-4 border-t border-gray-700/50">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-red-900/20 hover:border-red-500/50 border border-transparent transition-all duration-300 group"
                    >
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
