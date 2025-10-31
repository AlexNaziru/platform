import React, {useEffect, useState} from 'react'
import Footer from "../components/Footer.jsx";
import  red1 from "../assets/red1.png";
import  red2 from "../assets/red2.png";
import  red3 from "../assets/red3.png";
import  red4 from "../assets/red4.png";

const Red = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0); // image slider


    useEffect(() => {
        setIsVisible(true);
    }, []);


    // Slide functionality
    const slides = [
        {
            image: red1,
            title: "The Beginning",
            description: "Red stands at the entrance of the mysterious sewer, unaware of the adventure that awaits him"
        },
        {
            image: red2,
            title: "Into the Depths",
            description: "Navigate through dark tunnels and treacherous obstacles in this underground labyrinth"
        },
        {
            image: red3,
            title: "Face the Challenges",
            description: "Encounter strange creatures and solve puzzles to find your way out"
        },
        {
            image: red4,
            title: "The Escape",
            description: "Use your wits and reflexes to help Red escape the infamous sewer"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

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
                                2D Indie Game
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-lime-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
                                Experience the infamous sewer saga of Red
                            </span>
                        </h1>
                        <p className={`text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            It's a tale of curiosity, catastrophe, and a really bad hair day. Red, with his fiery
                            locks and insatiable thirst for adventure, had always been warned by his family to steer
                            clear of the old, mysterious sewer entrance on the outskirts of town.

                        </p>
                        <p className={`text-lg sm:text-xl text-yellow-400 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            Do you have what it takes to get him out ?
                        </p>
                    </div>

                    {/* Image Slider */}
                    <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-3xl overflow-hidden p-6">
                            <div className="relative">
                                {/* Slider Container */}
                                <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-all duration-700 ${
                                                index === currentSlide
                                                    ? 'opacity-100 translate-x-0'
                                                    : index < currentSlide
                                                        ? 'opacity-0 -translate-x-full'
                                                        : 'opacity-0 translate-x-full'
                                            }`}
                                        >
                                            {/* Image */}
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="w-full h-full object-contain bg-slate-900"
                                            />

                                            {/* Sprite Labs Branding - Left Side */}
                                            <div className="absolute left-4 top-1/7 -translate-y-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-gray-700/50">
                                                <span className="text-white font-bold text-lg tracking-wide">Sprite Labs</span>
                                            </div>

                                            {/* Description Overlay - Bottom */}
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                                                <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                                                <p className="text-gray-300">{slide.description}</p>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-md p-3 rounded-full border border-gray-700/50 transition-all duration-300 hover:scale-110 z-10"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 backdrop-blur-md p-3 rounded-full border border-gray-700/50 transition-all duration-300 hover:scale-110 z-10"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Slide Indicators */}
                                <div className="flex justify-center gap-2 mt-6">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`transition-all duration-300 rounded-full ${
                                                index === currentSlide
                                                    ? 'w-8 h-3 bg-gradient-to-r from-lime-400 to-yellow-500'
                                                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Game Features */}

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
export default Red
