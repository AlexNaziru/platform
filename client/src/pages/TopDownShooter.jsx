import React, {useEffect, useState} from 'react'
import Footer from "../components/Footer.jsx";
import TopDownShooterClip from "../assets/TopDownShooter.mp4";

const TopDownShooter = () => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        setIsVisible(true);
    }, []);

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
                        <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border border-indigo-500/30 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm text-gray-300">Currently in active development</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                3D Top Down Shooter
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
                                Experience vibrant 3D fast-paced action
                            </span>
                        </h1>

                        <p className={`text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            Dive into the chaos of this addictive top-down shooter! Choose from a diverse arsenal of unique weapons and face off against hordes of relentless enemies. Your agility and reflexes will be pushed to the limit as you fight to survive the overwhelming assault.
                        </p>
                    </div>

                    {/* Video Showcase */}
                    <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-3xl overflow-hidden">
                            <div className="relative h-96 md:h-[500px] overflow-hidden group">
                                <video
                                    src={TopDownShooterClip}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Game Features */}
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                            <div className="text-4xl mb-4">🔫</div>
                            <h3 className="text-xl font-bold mb-2">Diverse Arsenal</h3>
                            <p className="text-gray-400">Choose from multiple unique weapons, each with distinct playstyles and abilities</p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                            <div className="text-4xl mb-4">👾</div>
                            <h3 className="text-xl font-bold mb-2">Endless Waves</h3>
                            <p className="text-gray-400">Face hordes of relentless enemies that increase in difficulty as you progress</p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold mb-2">Action</h3>
                            <p className="text-gray-400">Test your reflexes and agility in intense combat scenarios</p>
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
export default TopDownShooter
