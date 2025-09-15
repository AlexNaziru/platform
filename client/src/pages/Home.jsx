import React, { useState, useEffect } from 'react';
import Creations from "../components/Creations.jsx";


const Home = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <div className='min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center text-center text-white relative overflow-hidden'>
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating orbs */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

                    {/* Animated grid */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
                    </div>
                </div>

                {/* Main content */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    {/* Animated badge */}
                    <div className={`inline-flex items-center px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm text-gray-300">Now Live</span>
                    </div>

                    {/* Main heading with gradient text */}
                    <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-pulse">
                        Welcome to the
                      </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
                        Future
                      </span>
                    </h1>

                    {/* Subtitle */}
                    <p className={`text-xl sm:text-2xl text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        Experience innovation like never before with our cutting-edge software designed to transform your digital journey into something extraordinary.
                    </p>

                    {/* CTA buttons */}
                    <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                            <span className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative flex items-center gap-2">
                                    Get Started
                              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </span>
                        </button>

                        <button className="group px-8 py-4 border border-gray-600 rounded-full font-semibold text-gray-300 hover:text-white hover:border-gray-400 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm">
                            <span className="flex items-center gap-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Learn More
                            </span>
                        </button>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 border border-purple-500/30 rounded-full animate-spin-slow"></div>
                    <div className="absolute bottom-20 right-10 w-16 h-16 border border-pink-500/30 rounded-lg animate-bounce"></div>
                    <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full animate-pulse"></div>
                </div>

                {/* Scroll indicator */}
                <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-gray-500 text-sm">Scroll</span>
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>

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
                      animation: spin-slow 8s linear infinite;
                    }
                  `}</style>
            </div>
            <Creations/>

        </>
    )
}
export default Home
