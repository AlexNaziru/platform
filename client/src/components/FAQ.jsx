import React, { useState, useEffect } from 'react';

const FAQ = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const faqs = [
        {
            question: "How do you approach custom application development?",
            answer: "We start by thoroughly understanding your business needs and challenges. Our development process involves detailed requirement analysis, user experience design, technical architecture planning, and iterative development with regular feedback loops to ensure the final product exceeds your expectations."
        },
        {
            question: "Can you build an app suited to my company's specific needs?",
            answer: "Absolutely! Every business has unique requirements, and we specialize in creating tailored solutions. Whether you need a web application, desktop software, we work closely with you to understand your workflow and build applications that integrate seamlessly with your existing processes."
        },
        {
            question: "What technologies and frameworks do you use?",
            answer: "We work with a wide range of modern technologies including React, Node.js, C#/.NET, Python, databases like PostgreSQL and MongoDB, cloud platforms like AWS and Azure, and specialized tools like GIS mapping libraries. We choose the best technology stack based on your project requirements."
        },
        {
            question: "Can I customize and modify the applications after delivery?",
            answer: "Yes, we build applications with flexibility and scalability in mind. We provide comprehensive documentation, source code access, and can offer ongoing maintenance and feature development. We also ensure our code is well-structured so your internal team can make modifications if needed."
        },
        {
            question: "How long does it typically take to develop a custom application?",
            answer: "Project timelines vary based on complexity and requirements. Simple applications might take 4-8 weeks, while complex enterprise solutions can take 3-6 months or more. We provide detailed project timelines during the planning phase and keep you updated throughout development."
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, security updates, and feature enhancements. We can provide different support packages based on your needs, from basic maintenance to full ongoing development partnerships."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
                {/* Header section */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Animated badge */}
                    <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-violet-400 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm text-gray-300">FAQ's</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                          Looking for
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
                          Answers?
                        </span>
                                </h1>

                    <p className={`text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        Find answers to common questions about our development process, technologies, and services. Still have questions? We're here to help.
                    </p>
                </div>

                {/* FAQ Container */}
                <div className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="space-y-0">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border-b border-gray-700/50 last:border-b-0 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${600 + index * 100}ms` }}
                            >
                                <div
                                    className="py-6 cursor-pointer group hover:bg-violet-500/5 transition-all duration-300 rounded-lg px-4 -mx-4"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors duration-300 flex-1 text-left pr-4">
                                            {faq.question}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out text-violet-400 group-hover:text-violet-300`}
                                            >
                                                <path
                                                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                            openIndex === index
                                                ? "max-h-[400px] opacity-100"
                                                : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <p className={`text-gray-400 leading-relaxed pr-8 transform transition-all duration-500 ease-in-out ${
                                            openIndex === index
                                                ? "translate-y-0 pt-4"
                                                : "-translate-y-2"
                                        }`}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
export default FAQ
