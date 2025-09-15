import React, { useState, useEffect } from 'react';

const Creations = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const creationsData = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop",
            title: "Web Development",
            category: "Web applications"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop",
            title: "Desktop Application Development",
            category: "Designing and building"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=687&auto=format&fit=crop",
            title: "System Administration",
            category: "Managing and maintaining"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=862&auto=format&fit=crop",
            title: "Data Science",
            category: "Data visualization"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&w=687&auto=format&fit=crop",
            title: "Software Release Management",
            category: "Packaging, testing and deploying"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&w=703&auto=format&fit=crop",
            title: "Game Development",
            category: "With Unity"
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=736&auto=format&fit=crop",
            title: "DICOM & PACS",
            category: "Orthanc Ohif"
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=798&auto=format&fit=crop",
            title: "System architecture",
            category: "Designing systems"
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

                                    <button className="group/btn inline-flex items-center gap-2 text-sm text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300">
                                        <span>Explore</span>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"
                                        >
                                            <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Floating decoration */}
                            <div className="absolute top-4 right-4 w-8 h-8 border border-violet-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                        <span className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative flex items-center gap-2">
                              View All Works
                              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </span>
                    </button>
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