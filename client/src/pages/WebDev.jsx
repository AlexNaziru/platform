import React, {useEffect, useState} from 'react'
import Footer from "../components/Footer.jsx";

const WebDev = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const appFeatures = [
        {
            icon: "🗺️",
            title: "Real-Time Mapping",
            description: "Interactive GIS visualization showing plot boundaries and ownership in real-time"
        },
        {
            icon: "🔄",
            title: "Direct Exchange",
            description: "Connect farmers directly without bureaucratic delays or city hall visits"
        },
        {
            icon: "📍",
            title: "Location Intelligence",
            description: "Smart algorithms to find optimal neighboring plots for crop rotation"
        },
        {
            icon: "📱",
            title: "Mobile Responsive",
            description: "Access from any device - desktop, tablet, or smartphone"
        }
    ];

    const techStack = [
        { name: "JavaScript", color: "from-cyan-500 to-blue-500" },
        { name: "Leaflet.js", color: "from-green-500 to-emerald-500" },
        { name: "PostGIS", color: "from-blue-500 to-indigo-500" },
        { name: "PHP", color: "from-green-600 to-green-700" },
        { name: "PostgreSQL", color: "from-blue-600 to-cyan-600" }
    ];

    const screenshots = [
        {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            title: "Dashboard Overview",
            description: "Main interface showing plot visualization"
        },
        {
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            title: "Interactive Map",
            description: "GIS mapping with real-time data"
        },
        {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            title: "Contact System",
            description: "Direct farmer-to-farmer messaging"
        }
    ];

    return (
        <>
        <div className='min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center text-center text-white relative overflow-hidden py-30'>
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
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm text-gray-300">Web GIS Application</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            FarmLands
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
                            Exchange Platform
                        </span>
                    </h1>

                    <p className={`text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        A revolutionary GIS-based platform that empowers farmers to visualize neighboring plots in real-time and facilitate seamless land exchanges for optimal crop rotation without bureaucratic delays.
                    </p>
                </div>

                {/* Main App Showcase */}
                <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-3xl overflow-hidden">
                        {/* Hero Image */}
                        <div className="relative h-96 md:h-[500px] overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                                alt="AgriPlot Dashboard"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

                            {/* Floating info card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-2xl">
                                        🌾
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Live Demo Available</h3>
                                        <p className="text-gray-400 text-sm">Experience the platform in action</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300">
                                        View Live Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className={`mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {appFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-500 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${800 + index * 100}ms` }}
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Screenshots Gallery */}
                <div className={`mb-20 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-3xl font-bold mb-8 text-center">Platform Screenshots</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {screenshots.map((screenshot, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-500"
                            >
                                <img
                                    src={screenshot.url}
                                    alt={screenshot.title}
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-bold mb-2">{screenshot.title}</h3>
                                        <p className="text-gray-300 text-sm">{screenshot.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <div className={`mb-20 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
                        <div className="flex flex-wrap justify-center gap-4">
                            {techStack.map((tech, index) => (
                                <div
                                    key={index}
                                    className={`px-6 py-3 bg-gradient-to-r ${tech.color} rounded-full font-semibold text-white shadow-lg hover:scale-110 transition-transform duration-300`}
                                >
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Problem & Solution */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 transform transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gradient-to-br from-red-900/20 to-gray-900/50 backdrop-blur-sm border border-red-700/30 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <span className="text-3xl">❌</span>
                            The Problem
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Farmers traditionally face significant bureaucratic hurdles when attempting land exchanges for crop rotation. The process requires multiple city hall visits, extensive paperwork, and can take weeks or months to complete, resulting in missed agricultural opportunities and inefficient land use.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <span className="text-3xl">✅</span>
                            The Solution
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            AgriPlot Exchange eliminates these barriers by providing a real-time GIS platform where farmers can instantly visualize neighboring plots, identify potential exchange partners, and initiate direct contact. The system streamlines the entire process, reducing what used to take months into just days.
                        </p>
                    </div>
                </div>
            </div>

                {/* Floating elements */}
                <div className="absolute top-10 left-10 w-20 h-20 border border-purple-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 border border-pink-500/30 rounded-lg animate-bounce"></div>
                <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full animate-pulse"></div>
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-position: 0 50%;
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
        <Footer />
    </>
    )
}
export default WebDev
