import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const applications = [
        {
            id: 1,
            title: "GIS Data",
            category: "Web GIS Application",
            icon: "🌾",
            description: "A web-based GIS platform that empowers farmers to visualize neighboring plots in real-time, facilitating seamless land exchanges for optimal crop rotation.",
            features: [
                "Real-time plot visualization",
                "Direct farmer-to-farmer contact",
                "Eliminates city hall bureaucracy",
                "Interactive mapping interface"
            ],
            tech: ["GIS", "Web Mapping", "Real-time Data"],
            gradient: "from-blue-500 to-indigo-600",
            path: "/webdev"
        },
        {
            id: 2,
            title: "Management System",
            category: "Desktop Application",
            icon: "🏥",
            description: "A comprehensive C# desktop application built with MVVM + WPF, designed to digitize patient management in spa sanatoriums with standardized documentation.",
            features: [
                "Paperless patient records",
                "Real-time data synchronization",
                "Standard patient sheet generation",
                "Multi-sanatorium compatibility"
            ],
            tech: ["C#", "MVVM", "WPF", "Desktop"],
            gradient: "from-purple-500 to-violet-600"
        },
        {
            id: 3,
            title: "Invoicing",
            category: "Web Application",
            icon: "💼",
            description: "An intuitive web application that bridges the gap between small businesses and national billing platforms, streamlining invoice management and compliance.",
            features: [
                "National platform integration",
                "Automated billing workflows",
                "Small business optimization",
                "Compliance management"
            ],
            tech: ["Web App", "API Integration", "Billing"],
            gradient: "from-purple-500 to-fuchsia-600"
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
                <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Animated badge */}
                    <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-violet-400 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm text-gray-300">Our Story</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                          Crafting Digital
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
                          Solutions
                        </span>
                    </h1>

                    <p className={`text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        We believe in the power of technology to transform industries and simplify complex processes. Our journey has led us to create three revolutionary applications that address real-world challenges across agriculture, healthcare, and business sectors.
                    </p>
                </div>

                {/* Applications showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {applications.map((app, index) => (
                        <div
                            key={app.id}
                            className={`relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-500 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${500 + index * 200}ms` }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Icon and category */}
                            <div className="flex items-center justify-between mb-6">
                                <div className={`text-4xl p-4 rounded-2xl bg-gradient-to-r ${app.gradient} bg-opacity-20 backdrop-blur-sm`}>
                                    {app.icon}
                                </div>
                                <span className="text-xs font-medium text-violet-300 bg-violet-500/20 px-3 py-1 rounded-full">
                                  {app.category}
                                </span>
                            </div>

                            {/* Title and description */}
                            <h3 className="text-2xl font-bold mb-4 text-white">{app.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">{app.description}</p>

                            {/* Features list */}
                            <div className="space-y-3 mb-6">
                                {app.features.map((feature, featureIndex) => (
                                    <div
                                        key={featureIndex}
                                        className={`flex items-center gap-3 transform transition-all duration-300 ${hoveredCard === index ? 'translate-x-2' : ''}`}
                                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                                    >
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${app.gradient}`}></div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {app.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/30"
                                    >
                                    {tech}
                                  </span>
                                ))}
                            </div>

                            {/* CTA button */}
                            <Link to={app.path} className="block">
                                <button className={`group/btn w-full py-3 px-4 bg-gradient-to-r ${app.gradient} rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden`}>
                                    <span className="relative flex items-center justify-center gap-2">
                                      Learn More
                                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                      </svg>
                                    </span>
                                </button>
                            </Link>

                            {/* Floating decoration */}
                            <div className={`absolute top-4 right-4 w-12 h-12 border border-violet-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`}></div>

                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${app.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-20 left-10 w-20 h-20 border border-green-500/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-32 right-16 w-16 h-16 border border-blue-500/20 rounded-lg animate-bounce opacity-50"></div>
            <div className="absolute top-1/3 left-16 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full animate-pulse"></div>

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
                  animation: spin-slow 15s linear infinite;
                }
              `}</style>
        </div>
    )
}
export default About
