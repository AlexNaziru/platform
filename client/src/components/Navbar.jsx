import { useEffect, useState } from "react";

const navItems = ["Home", "Products", "Services", "About", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    // Scroll detection
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Optional: lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [open]);

    // Shared background/blur/shadow styles
    const bgClasses =
        (scrolled || open)
            ? "bg-gray-800/60 backdrop-blur-lg shadow-lg"
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
                    <div className="size-8 rounded-full bg-white/10" />
                    <span className="hidden sm:block font-semibold tracking-wide">Alex</span>
                </div>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-8 text-sm">
                    {navItems.map((item) => (
                        <li key={item} className="relative group cursor-pointer">
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-1 rounded-xl
                               bg-gradient-to-r from-[#FF0A7F] to-[#780EFF]
                               transition-all duration-300 group-hover:w-full" />
                        </li>
                    ))}
                </ul>

                {/* Right actions (desktop) */}
                <div className="hidden md:flex items-center">
                    <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                        <button className="px-6 text-sm py-1 text-gray-200 rounded-full font-medium bg-gray-800">
                            Log In
                        </button>
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
                            <li key={item} className="relative">
                                <button
                                    className="w-full text-left py-2"
                                    onClick={() => setOpen(false)}
                                >
                                    {item}
                                </button>
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

