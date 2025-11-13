import React, {useEffect, useState} from "react";
import logo from "../assets/computer.png";
import {Link, useNavigate} from 'react-router-dom';
import  {useClerk, UserButton, useUser} from '@clerk/clerk-react';

const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: null }, // null because it has a dropdown
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
];
const productDropdown = [
    {
        category: "Web Dev",
        items: [
            {
                name: "FarmLands GIS",
                path: "/webdev",
                description: "Real-time agricultural plot mapping and exchange platform"
            }
        ]
    },
    {
        category: "Desktop Dev",
        items: [
            {
                name: "CRM",
                path: "/crm",
                description: "Basic CRM system"
            }
        ]
    },
    {
        category: "Game Dev",
        items: [
            {
                name: "Space Shooter",
                path: "/space-shooter",
                description: "Classic 2D arcade space combat game"
            },
            {
                name: "Red",
                path: "/red",
                description: "Classic 2D indie game"
            },
            {
                name: "Top Down Shooter",
                path: "/top-down-shooter",
                description: "Fast-paced 3D action shooter"
            }
        ]
    }
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    // Clerk hooks
    const navigate = useNavigate();
    const { user } = useUser();
    const { openSignIn } = useClerk();

    // Scroll detection
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Optional: lock body scroll when a mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [open]);

    // Clear timeout on unmounting
    useEffect(() => {
        return () => {
            if (hoverTimeout) clearTimeout(hoverTimeout);
        };
    }, [hoverTimeout]);

    // Shared background/blur/shadow styles
    const bgClasses =
        (scrolled || open)
            ? "bg-gray-800 shadow-lg"
            : "bg-transparent shadow-none";

    return (
        <>
            <style>{`
        @keyframes rotate { 100% { transform: rotate(1turn); } }
        .rainbow::before {
          content: ''; position: absolute; z-index: -2; left: -50%; top: -50%;
          width: 200%; height: 200%; background-position: 100% 50%;
          background-repeat: no-repeat; background-size: 50% 30%; filter: blur(6px);
          background-image: linear-gradient(#FF0A7F,#780EFF); animation: rotate 4s linear infinite;
        }
      `}</style>

            {/* Top nav bar */}
            <nav
                className={`fixed left-1/2 -translate-x-1/2 top-5 z-50
                    flex items-center justify-between w-[92vw] max-w-5xl
                    px-5 sm:px-8 py-2 rounded-full transition-all duration-300 text-gray-200
                    ${bgClasses}`}
                aria-label="Main navigation"
            >
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="h-8 w-8 object-cover"
                    />
                    <span className="hidden sm:block font-semibold tracking-wide">Sprite Labs</span>
                </div>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-8 text-sm">
                    {navItems.map((item) => (
                        <li
                            key={item.name}
                            className="relative group cursor-pointer"
                            onMouseEnter={() => item.name === "Products" && setDropdownOpen(true)}
                            onMouseLeave={() => item.name === "Products" && setDropdownOpen(false)}
                        >
                            {item.path ? (
                                <Link to={item.path} className="flex items-center gap-1">
                                    {item.name}
                                </Link>
                            ) : (
                                <div className="flex items-center gap-1">
                                    {item.name}
                                    {item.name === "Products" && (
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </div>
                            )}
                            <span className="absolute left-0 -bottom-1 w-0 h-1 rounded-xl
                            bg-gradient-to-r from-[#FF0A7F] to-[#780EFF]
                            transition-all duration-300 group-hover:w-full" />

                            {/* Large Dropdown Menu */}
                            {item.name === "Products" && (
                                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4
                                transition-all duration-300 origin-top
                                ${dropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                                >
                                    <div className="bg-gray-800/90 backdrop-blur-xl shadow-lg rounded-2xl p-6 relative" style={{minWidth: '700px'}}>
                                        {/* Arrow pointer */}
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800/90 backdrop-blur-xl rotate-45"></div>

                                        <div className="relative z-10 grid grid-cols-3 gap-6">
                                            {productDropdown.map((category, index) => (
                                                <React.Fragment key={category.category}>
                                                    <div className="space-y-3">
                                                        {/* Category Header */}
                                                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-3">
                                                            {category.category}
                                                        </h3>

                                                        {/* Category Items */}
                                                        <div className="space-y-2">
                                                            {category.items.map((product) => (
                                                                <Link
                                                                    key={product.name}
                                                                    to={product.path}
                                                                    className="block px-3 py-3 rounded-xl hover:bg-gray-700/50 transition-all duration-200 group"
                                                                >
                                                                    <div className="flex items-start justify-between gap-2">
                                                                        <div className="flex-1">
                                                                            <div className="text-gray-200 font-medium mb-1 group-hover:text-white transition-colors">
                                                                                {product.name}
                                                                            </div>
                                                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                                                {product.description}
                                                                            </p>
                                                                        </div>
                                                                        <svg
                                                                            className="w-4 h-4 text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100
                                                                      group-hover:translate-x-0 transition-all duration-200 flex-shrink-0 mt-1"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                        </svg>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Divider line between columns (except last) */}
                                                    {index < productDropdown.length - 1 && (
                                                        <div className="absolute top-0 bottom-0 w-px bg-gray-700/50"
                                                             style={{left: `${((index + 1) / productDropdown.length) * 100}%`}}>
                                                        </div>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Right actions (desktop) */}
                <div className="hidden md:flex items-center">
                    <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">

                        {
                            user ? <UserButton />
                                :
                            (
                                <button onClick={openSignIn} className="px-6 text-sm py-1 text-gray-200 rounded-full font-medium bg-gray-800">
                                    Log In
                                </button>
                            )
                        }

                    </div>
                </div>

                {/* Mobile: hamburger */}
                <button
                    className="md:hidden p-2 -mr-2 active:scale-95"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {/* simple icon */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </nav>

            {/* Mobile overlay + panel (same bg/blur/shadow look) */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition
    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                aria-hidden={!open}
            >
                {/* Dim backdrop */}
                <div
                    className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setOpen(false)}
                />

                {/* Panel */}
                <div
                    className={`absolute left-1/2 -translate-x-1/2 top-24 w-[92vw] max-w-5xl
                    rounded-2xl px-6 py-6 text-gray-100 transition-transform duration-300
                    ${bgClasses} ${open ? "translate-y-0" : "-translate-y-4"}`}
                    role="dialog"
                    aria-modal="true"
                >
                    <ul className="flex flex-col gap-4 text-base">
                        {navItems.map((item) => (
                            <li key={item.name} className="relative">
                                {item.name === "Products" ? (
                                    <div>
                                        <button
                                            className="w-full text-left py-2 flex items-center justify-between"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                        >
                                            <span>{item.name}</span>
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        <div className={`overflow-hidden transition-all duration-300 ${dropdownOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <ul className="mt-2 ml-4 space-y-4">
                                                {productDropdown.map((category) => (
                                                    <li key={category.category}>
                                                        {/* Category Header */}
                                                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                                            {category.category}
                                                        </div>

                                                        {/* Category Items */}
                                                        <ul className="space-y-2">
                                                            {category.items.map((product) => (
                                                                <li key={product.name}>
                                                                    <Link
                                                                        to={product.path}
                                                                        className="block py-2 px-4 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-200"
                                                                        onClick={() => {
                                                                            setOpen(false);
                                                                            setDropdownOpen(false);
                                                                        }}
                                                                    >
                                                                        <div className="font-medium">{product.name}</div>
                                                                        <div className="text-xs text-gray-400 mt-0.5">{product.description}</div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className="w-full block text-left py-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                                <span className="absolute left-0 bottom-0 h-px w-full bg-white/10" />
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 flex gap-3">
                        <div className="rainbow relative z-0 overflow-hidden p-0.5 rounded-full flex-1">
                            <button
                                className="w-full px-6 py-2 text-sm text-gray-200 rounded-full font-medium bg-gray-800 active:scale-95 transition"
                                onClick={() => setOpen(false)}
                            >
                                Log In
                            </button>
                        </div>
                        <button
                            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition"
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

