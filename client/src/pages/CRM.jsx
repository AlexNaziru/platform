import React, {useEffect, useState} from 'react'
import Footer from "../components/Footer.jsx";
import crm1 from "../assets/crm1.png";
import crm2 from "../assets/crm2.png";
import crm3 from "../assets/crm3.png";

const Crm = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const screenshots = [
        {
            url: crm1,
            title: "Main Dashboard",
            description: "Main interface showing real time data"
        },
        {
            url: crm2,
            title: "Clients Tab ",
            description: "Keep your clients in one place with a search bar & filters"
        },
        {
            url: crm3,
            title: "Invoicing",
            description: "Make invoices, track payments, and send reminders"
        }
    ];

    const techStack = [
        { name: "Python", color: "from-teal-500 to-emerald-500" },
        { name: "SQLite", color: "from-emerald-500 to-green-500" },
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
                        <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-600/20 border border-green-500/30 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm text-gray-300">Desktop Development</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                Basic CRM
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-teal-400 via-emerald-500 to-green-500 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
                                Your Essential CRM Tool
                            </span>
                        </h1>

                        <p className={`text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            A **simple, intuitive CRM built in Python**, designed specifically for **small companies and startups** at the beginning of their journey. Focus on growing your business without the overhead. This essential tool for managing your client relationships is **completely free to use**. If you find value in our work, donations are appreciated!
                        </p>
                    </div>

                    {/* Screenshots Gallery */}
                    <div className={`mb-20 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-3xl font-bold mb-8 text-center">Platform Screenshots</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {screenshots.map((screenshot, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500"
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

                    {/* Additional Info */}
                    <div className="mt-8 pt-8 border-t border-gray-700/50">
                        <p className="text-gray-400 text-center leading-relaxed">
                            If your are interested in this product, feel free to downloaded it for free, from our Resources page,
                            download section, in the navigation menu.
                            If you find value in our work, donations are appreciated!
                        </p>
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
export default Crm
