import React from "react";
import {House, Layers, LogOut, Settings, Users, ChartBar, FileUser} from "lucide-react";
import {NavLink} from "react-router-dom";
import {useUser, useClerk} from "@clerk/clerk-react";

const navItems = [
    {to: "/ai", label: "Dashboard", Icon: House},
    {to: "/ai/users", label: "Users", Icon: Users},
    {to: "/ai/uploads", label: "Uploads", Icon: Layers}
]

const Sidebar = ({sidebar, setSidebar}) => {

    const {user} = useUser();
    const {signOut, openUserProfile} = useClerk();

    return (
        <div
            className={`
                    w-60 
                    fixed top-14 bottom-0 left-0 z-50
                    flex flex-col
                    bg-slate-950/95 
                    border-r border-gray-800/80 
                    shadow-[0_0_40px_rgba(15,23,42,0.8)]
                    backdrop-blur-xl
                    transform transition-transform duration-300 ease-in-out
                    ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"}
                  `}
            >

            {/* Middle: nav items (scrollable) */}
            <div className="flex-1 flex flex-col bg-slate-950/80 overflow-hidden">
                <nav className="flex-1 px-3 pt-4 pb-3 space-y-1 overflow-y-auto">
                    {navItems.map(({ to, label, Icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === "/ai"}
                            onClick={() => setSidebar(false)}
                            className={({ isActive }) =>
                                [
                                    "px-3.5 py-2.5 flex items-center gap-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                                    isActive
                                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-500/30"
                                        : "text-gray-400 hover:text-white hover:bg-gray-800/60",
                                ].join(" ")
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <Icon
                                        className={[
                                            "w-4 h-4 transition-transform duration-200 group-hover:scale-110",
                                            isActive ? "text-white" : "text-gray-400",
                                        ].join(" ")}
                                    />
                                    <span>{label}</span>
                                    {isActive && (
                                        <span className="ml-auto w-2 h-2 rounded-full bg-white/90 animate-pulse" />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Bottom: user + logout */}
            <div className="flex-shrink-0 border-t border-gray-800/80 bg-slate-950/95 px-4 py-3 flex items-center justify-between">
                <button
                    type="button"
                    onClick={openUserProfile}
                    className="flex items-center gap-2 cursor-pointer group"
                >
                    <img
                        src={user.imageUrl}
                        alt="User Profile"
                        className="w-8 h-8 rounded-full border border-gray-700 group-hover:border-violet-500 transition"
                    />
                    <div className="text-left">
                        <p className="text-xs text-gray-400">Signed in as</p>
                        <p className="text-sm font-medium text-gray-100 truncate max-w-[120px]">
                            {user.fullName}
                        </p>
                    </div>
                </button>

                <button
                    type="button"
                    onClick={signOut}
                    className="p-2 rounded-lg hover:bg-red-500/10 transition group"
                >
                    <LogOut className="w-4 h-4 text-gray-500 group-hover:text-red-400 transition" />
                </button>
            </div>
        </div>
    )
}

export default Sidebar;