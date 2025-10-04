import React, { useState, useEffect } from 'react';
import eBon from '../assets/ebon.png';
import Csharp from '../assets/Csharp_App.png';
import GISApp from '../assets/GIS_App.png';
import GameDev from '../assets/game_dev.png';

const Creations = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => setIsVisible(true), []);

    // Your existing data
    const creationsData = [
        { id: 1, src: eBon,    title: "Web Development",             category: "Web applications" },
        { id: 2, src: Csharp,  title: "Desktop Application",         category: "Designing and building" },
        { id: 3, src: GISApp,  title: "Web GIS Application",         category: "Development and deployment" },
        { id: 4, src: GameDev, title: "Game development",            category: "With Unity" },
    ];

    return (
        <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center text-center text-white relative overflow-hidden py-20">
            {/* BG decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            {/* Main content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-violet-400 rounded-full mr-2 animate-pulse" />
                        <span className="text-sm text-gray-300">Portfolio</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Our Latest
            </span>
                        <br />
                        <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
              Creations
            </span>
                    </h1>

                    <p className={`text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        A visual collection of our most recent works - each piece crafted with intention, emotion, and style.
                    </p>
                </div>

                {/* === Gallery (Main + Thumbnails) === */}
                <ImageGallery images={creationsData.map(c => ({ src: c.src, alt: c.title }))} />

            </div>

            {/* Floating decorations */}
            <div className="absolute top-20 left-10 w-20 h-20 border border-purple-500/20 rounded-full animate-spin-slow" />
            <div className="absolute bottom-32 right-16 w-16 h-16 border border-pink-500/20 rounded-lg animate-bounce opacity-50" />
            <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse" />

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-gradient-x { animation: gradient-x 3s ease infinite; }
                .animate-spin-slow { animation: spin-slow 12s linear infinite; }
            `}</style>
        </div>
    );
};

/** Reusable gallery with thumbnails */
function ImageGallery({ images }) {
    const [activeIdx, setActiveIdx] = useState(0);
    const active = images[activeIdx] || images[0];

    return (
        <div className="flex flex-col items-center space-y-4">
            {/* Main image */}
            <div className="w-full max-w-3xl">
                <img
                    src={active.src}
                    alt={active.alt || "Main Image"}
                    className="w-full rounded-lg object-cover"
                />
            </div>

            {/* Thumbs */}
            <div className="grid grid-cols-4 gap-4 max-w-3xl w-full">
                {images.map((img, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setActiveIdx(i)}
                        aria-label={`Show ${img.alt || `image ${i + 1}`}`}
                        className={`rounded-lg overflow-hidden ring-2 transition
                        ${i === activeIdx ? "ring-fuchsia-400" : "ring-transparent hover:ring-white/30"}`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt || `Thumb ${i + 1}`}
                            className="w-full md:h-24 h-14 object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Creations;