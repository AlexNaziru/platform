import React, { useState, useEffect } from 'react';

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const socialLinks = [
        {
            name: "Facebook",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            href: "#"
        },
        {
            name: "Instagram",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            href: "#"
        },
        {
            name: "LinkedIn",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            href: "#"
        }
    ];

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" }
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" }
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

            {/* Main footer content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Top section */}
                <div className={`pt-20 pb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand section */}
                        <div className={`lg:col-span-2 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Logo placeholder - you can replace with your actual logo */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                  YourBrand
                                </span>
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                                We craft innovative digital solutions that transform businesses and simplify complex processes. From web applications to desktop software, we build technology that makes a difference.
                            </p>

                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className={`w-10 h-10 bg-gray-800/50 hover:bg-violet-500/20 border border-gray-700/50 hover:border-violet-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-violet-300 transition-all duration-300 hover:-translate-y-1 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                        style={{ transitionDelay: `${400 + index * 100}ms` }}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                            <ul className="space-y-4">
                                {quickLinks.map((link, index) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className={`text-gray-400 hover:text-violet-300 transition-all duration-300 hover:translate-x-1 inline-block transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}
                                            style={{ transitionDelay: `${600 + index * 100}ms` }}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h3 className="text-lg font-semibold mb-6 text-white">Get in Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-400">hello@yourbrand.com</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-gray-400">+40 722 123-456</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-400">Constanța, RO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={`border-t border-gray-800/50 transform transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* Bottom section */}
                <div className={`py-8 flex flex-col md:flex-row items-center justify-between gap-4 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <p className="text-gray-400 text-center md:text-left">
                        Copyright © <span>{new Date().getFullYear()}</span> <span className="text-violet-300 hover:text-violet-200 transition-colors duration-300">Alex</span>. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        {legalLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-gray-400 hover:text-violet-300 transition-all duration-300 text-sm transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                                style={{ transitionDelay: `${1100 + index * 100}ms` }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-20 left-10 w-16 h-16 border border-purple-500/10 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-20 right-16 w-12 h-12 border border-pink-500/10 rounded-lg animate-bounce opacity-30"></div>

            <style jsx>{`
                @keyframes spin-slow {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
                
                .animate-spin-slow {
                  animation: spin-slow 20s linear infinite;
                }
          `}</style>
        </div>
    )
}
export default Footer
