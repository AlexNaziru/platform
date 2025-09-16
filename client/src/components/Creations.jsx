import React, { useState, useEffect } from 'react';
import eBon from '../assets/ebon.png';
import Csharp from '../assets/Csharp_App.png';
import GISApp from '../assets/GIS_App.png';
import GameDev from '../assets/game_dev.png';

const Creations = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);


    const creationsData = [
        {
            id: 1,
            src: eBon,
            title: "Web Development",
            category: "Web applications"
        },
        {
            id: 2,
            src: Csharp,
            title: "Desktop Application Development",
            category: "Designing and building"
        },
        {
            id: 3,
            src: GISApp,
            title: "Web GIS Application",
            category: "Development and deployment"
        },
        {
            id: 4,
            src: GameDev,
            title: "Game development",
            category: "With Unity"
        }
    ];

    return (
        <div className='min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center text-center text-white relative overflow-hidden py-20'>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                {/* Header section */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Animated badge */}
                    <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-violet-400 rounded-full mr-2 animate-pulse"></span>
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

                    <p className={`text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        A visual collection of our most recent works - each piece crafted with intention, emotion, and style.
                    </p>
                </div>

                {/* Gallery grid */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {creationsData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-violet-500/50 transition-all duration-500 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${600 + index * 100}ms` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Image container */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                                {/* Animated border on hover */}
                                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-violet-500 group-hover:to-purple-500 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
                            </div>

                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <div className={`transform transition-all duration-300 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                    <span className="text-xs font-medium text-purple-500 mb-1 block">{item.category}</span>
                                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                </div>
                            </div>

                            {/* Floating decoration */}
                            <div className="absolute top-4 right-4 w-8 h-8 border border-violet-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-20 left-10 w-20 h-20 border border-purple-500/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-32 right-16 w-16 h-16 border border-pink-500/20 rounded-lg animate-bounce opacity-50"></div>
            <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse"></div>

            <style jsx>{`
                @keyframes gradient-x {
                  0%, 100% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }
                }
                
                @keyframes spin-slow {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
                
                .animate-gradient-x {
                  animation: gradient-x 3s ease infinite;
                }
                
                .animate-spin-slow {
                  animation: spin-slow 12s linear infinite;
                }
              `}</style>
        </div>
    )
}

export default Creations