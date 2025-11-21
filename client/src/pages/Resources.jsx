import React, {useEffect, useState} from 'react'

const Resources = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <>
            <div className='"w-full bg-slate-950 flex flex-col items-center justify-center text-white relative overflow-hidden py-24'>

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
                    </div>
                </div>

                {/* Main content */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-fuchsia-400 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm text-gray-300">Software Solutions Ready to Use</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                Power Your Business
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-500 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
                                With Our Apps
                            </span>
                        </h1>

                        <p className={`text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            Explore our suite of applications designed for efficiency. From the **simple, free CRM** perfect
                            for startups to the other essential services for small companies, you can download and use our tools immediately to simplify your daily operations.
                        </p>
                    </div>
                </div>



            </div>
        </>
    )
}
export default Resources
