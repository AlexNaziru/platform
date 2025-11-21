import React, {useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {MenuIcon, X} from 'lucide-react';
import Sidebar from "../components/Sidebar.jsx";
import {useUser, SignIn} from "@clerk/clerk-react";

const Layout = () => {

    const [sideBar, setSidebar] = useState(false);
    const {user} = useUser();

    return user ? (
        <div className="flex flex-col h-screen">
            {/* Top nav */}
            <nav className="w-full px-4 sm:px-8 min-h-14 flex items-center justify-between border-b border-gray-800/80 fixed top-0 left-0 right-0 z-50 bg-slate-950/95">
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                        {/* Simple logo mark */}
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white"
                        >
                            <path
                                d="M12 2L4 6v6l8 4 8-4V6l-8-4z"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4 12l8 4 8-4"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                          Sprite Labs
                        </span>
                        {user?.publicMetadata?.role === "admin" && (
                        <span className="mt-0.5 px-2 py-0.5 text-[10px] text-center font-semibold bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/40">
                                Admin
                        </span>
                        )}
                    </div>
                </div>

                {/* RIGHT: mobile menu toggle */}
                <div className="flex items-center">
                    {sideBar ? (
                        <X
                            onClick={() => setSidebar(false)}
                            className="w-6 h-6 text-gray-300 sm:hidden cursor-pointer"
                        />
                    ) : (
                        <MenuIcon
                            onClick={() => setSidebar(true)}
                            className="w-6 h-6 text-gray-300 sm:hidden cursor-pointer"
                        />
                    )}
                </div>
            </nav>

            {/* Mobile overlay */}
            {sideBar && (
                <button
                    aria-label="Close sidebar overlay"
                    onClick={() => setSidebar(false)}
                    className="fixed inset-0 bg-black/40 z-40 sm:hidden"
                />
            )}

            <div className="flex-1 w-full flex pt-14">
                {/* Sidebar always rendered; desktop pushes content */}
                <Sidebar sidebar={sideBar} setSidebar={setSidebar} />

                {/* Content */}
                <div className="flex-1 bg-[#F4F7FB] min-h-screen overflow-auto sm:ml-60">
                    <Outlet />
                </div>
            </div>
        </div>
    ) : (
        <div className="flex items-center justify-center h-screen">
            <SignIn />
        </div>
    )
}

export default Layout;
