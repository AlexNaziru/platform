import React, { useState, useEffect } from 'react';

const Uploads = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const [dragActive, setDragActive] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const uploadCategories = [
        { id: 'all', name: 'All Files', icon: '📁' },
        { id: 'desktop', name: 'Desktop Apps', icon: '💻' },
        { id: 'games', name: 'Video Games', icon: '🎮' },
        { id: 'web', name: 'Web Apps', icon: '🌐' },
        { id: 'assets', name: 'Assets', icon: '🎨' }
    ];

    // Mock data
    const [uploads, setUploads] = useState([
        {
            id: 1,
            name: 'MediSpa_CRM_v2.0.exe',
            type: 'desktop',
            size: '45.2 MB',
            uploadDate: '2025-01-15',
            status: 'active',
            downloads: 127
        },
        {
            id: 2,
            name: 'Red_v1.5.zip',
            type: 'games',
            size: '156.8 MB',
            uploadDate: '2025-01-10',
            status: 'active',
            downloads: 342
        },
        {
            id: 3,
            name: 'FarmLands_GIS_Build.zip',
            type: 'web',
            size: '23.4 MB',
            uploadDate: '2025-01-08',
            status: 'active',
            downloads: 89
        }
    ]);

    const filteredUploads = activeTab === 'all'
        ? uploads
        : uploads.filter(upload => upload.type === activeTab);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // Handle file upload here
            console.log('Files dropped:', e.dataTransfer.files);
        }
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            // Handle file upload here
            console.log('Files selected:', e.target.files);
        }
    };

    const handleDelete = (id) => {
        // Add delete confirmation and logic
        console.log('Delete file:', id);
    };

    const getFileIcon = (type) => {
        const icons = {
            desktop: '💻',
            games: '🎮',
            web: '🌐',
            assets: '🎨'
        };
        return icons[type] || '📄';
    };

    const getStatusColor = (status) => {
        return status === 'active'
            ? 'bg-green-500/20 text-green-400 border-green-500/30'
            : 'bg-red-500/20 text-red-400 border-red-500/30';
    };

    return (
        <div className="bg-slate-950 p-6 ">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex items-center justify-between mb-2">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            File Uploads
                        </h1>
                        <div className="flex items-center gap-3">
                            <div className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl">
                                <span className="text-gray-400 text-sm">Total Files: </span>
                                <span className="text-white font-semibold">{uploads.length}</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-400">Manage your application files, games, and assets</p>
                </div>

                {/* Upload Area */}
                <div className={`mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div
                        className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                            dragActive
                                ? 'border-violet-500 bg-violet-500/10'
                                : 'border-gray-700/50 hover:border-gray-600/50'
                        }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            onChange={handleFileSelect}
                            multiple
                        />

                        <div className="mb-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {dragActive ? 'Drop files here' : 'Upload Files'}
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Drag and drop files here, or click to browse
                            </p>
                        </div>

                        <label
                            htmlFor="file-upload"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-semibold text-white cursor-pointer hover:scale-105 transition-transform duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Choose Files
                        </label>

                        <p className="text-sm text-gray-500 mt-4">
                            Supported: .exe, .zip, .apk, .dmg (Max size: 500MB)
                        </p>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className={`mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {uploadCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                                    activeTab === category.id
                                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                                        : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                            >
                                <span className="text-xl">{category.icon}</span>
                                <span>{category.name}</span>
                                {activeTab === category.id && (
                                    <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                                        {category.id === 'all' ? uploads.length : uploads.filter(u => u.type === category.id).length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Files List */}
                <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-800/50 border-b border-gray-700/50 text-sm font-semibold text-gray-400">
                            <div className="col-span-1">Type</div>
                            <div className="col-span-4">File Name</div>
                            <div className="col-span-2">Size</div>
                            <div className="col-span-2">Upload Date</div>
                            <div className="col-span-1">Downloads</div>
                            <div className="col-span-1">Status</div>
                            <div className="col-span-1">Actions</div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-gray-700/30">
                            {filteredUploads.length > 0 ? (
                                filteredUploads.map((file, index) => (
                                    <div
                                        key={file.id}
                                        className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-800/30 transition-colors duration-200"
                                        style={{
                                            animation: `fadeIn 0.3s ease-out ${index * 0.1}s backwards`
                                        }}
                                    >
                                        <div className="col-span-1 flex items-center">
                                            <span className="text-2xl">{getFileIcon(file.type)}</span>
                                        </div>
                                        <div className="col-span-4 flex items-center">
                                            <div>
                                                <p className="text-white font-medium">{file.name}</p>
                                            </div>
                                        </div>
                                        <div className="col-span-2 flex items-center text-gray-400">
                                            {file.size}
                                        </div>
                                        <div className="col-span-2 flex items-center text-gray-400">
                                            {new Date(file.uploadDate).toLocaleDateString()}
                                        </div>
                                        <div className="col-span-1 flex items-center">
                                            <span className="px-2 py-1 bg-violet-500/20 text-violet-300 rounded-lg text-sm font-medium">
                                                {file.downloads}
                                            </span>
                                        </div>
                                        <div className="col-span-1 flex items-center">
                                            <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getStatusColor(file.status)}`}>
                                                {file.status}
                                            </span>
                                        </div>
                                        <div className="col-span-1 flex items-center gap-2">
                                            <button
                                                className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors duration-200 group"
                                                title="Download"
                                            >
                                                <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(file.id)}
                                                className="p-2 hover:bg-red-500/20 rounded-lg transition-colors duration-200 group"
                                                title="Delete"
                                            >
                                                <svg className="w-4 h-4 text-gray-400 group-hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="py-12 text-center">
                                    <div className="text-4xl mb-4">📭</div>
                                    <p className="text-gray-400">No files in this category</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Storage Stats */}
                <div className={`mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Total Storage</p>
                                <p className="text-2xl font-bold text-white">225.4 MB</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Total Downloads</p>
                                <p className="text-2xl font-bold text-white">558</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Active Files</p>
                                <p className="text-2xl font-bold text-white">{uploads.filter(u => u.status === 'active').length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}
export default Uploads
