import React, {useEffect, useState} from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl';
import Footer from "../components/Footer.jsx";

const SpaceShooter = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Initializing Unity Context
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "/unity/Build/WebGL.loader.js",
        dataUrl: "/unity/Build/WebGL.data",
        frameworkUrl: "/unity/Build/WebGL.framework.js",
        codeUrl: "/unity/Build/WebGL.wasm",
    });

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
                            <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm text-gray-300">Game Development</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                Space Shooter
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
                                A fun 2D arcade game
                            </span>
                        </h1>

                        <p className={`text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            **Blast off into deep space** in this classic 2D arcade shooter! Battle endless waves of hostile alien fleets, survive as long as possible, and chase the high score across treacherous asteroid fields and volatile nebulas.
                        </p>
                    </div>

                    {/* Unity Game Container */}
                    <div className={`mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-3xl overflow-hidden p-4">
                            {/* Loading Progress */}
                            {!isLoaded && (
                                <div className="flex flex-col items-center justify-center py-20">
                                    <div className="w-16 h-16 mb-6">
                                        <svg className="animate-spin" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </div>
                                    <p className="text-gray-300 mb-2">Loading Game...</p>
                                    <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
                                            style={{ width: `${loadingProgression * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-2">{Math.round(loadingProgression * 100)}%</p>
                                </div>
                            )}

                            {/* Unity Canvas */}
                            <div className={`${!isLoaded ? 'hidden' : ''}`}>
                                <Unity
                                    unityProvider={unityProvider}
                                    style={{
                                        width: "50%",
                                        maxWidth: "960px",
                                        aspectRatio: "9/16",
                                        margin: "0 auto",
                                        borderRadius: "1rem"
                                    }}
                                />
                            </div>

                            {/* Game Controls Info */}
                            {isLoaded && (
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                                        <div className="text-2xl mb-2">🎮</div>
                                        <p className="text-gray-300 font-semibold">Arrow Keys</p>
                                        <p className="text-gray-400 text-sm">Move your ship</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                                        <div className="text-2xl mb-2">🔫</div>
                                        <p className="text-gray-300 font-semibold">Space Bar or Left Mouse Button</p>
                                        <p className="text-gray-400 text-sm">Fire weapons</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                                        <div className="text-2xl mb-2">🎯</div>
                                        <p className="text-gray-300 font-semibold">Objective</p>
                                        <p className="text-gray-400 text-sm">Survive & score</p>
                                    </div>
                                </div>
                            )}
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
export default SpaceShooter
