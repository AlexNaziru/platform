import React, { useState, useEffect } from 'react';

const Users = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Mock data - replace with actual data from your backend
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            avatar: 'JD',
            accountCreated: '2024-12-15',
            status: 'active',
            downloads: 12,
            purchases: 3,
            totalSpent: '$127.50',
            lastActive: '2025-01-15',
            role: 'user'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            avatar: 'JS',
            accountCreated: '2024-11-22',
            status: 'active',
            downloads: 5,
            purchases: 1,
            totalSpent: '$45.00',
            lastActive: '2025-01-14',
            role: 'user'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            email: 'mike.j@example.com',
            avatar: 'MJ',
            accountCreated: '2024-10-10',
            status: 'inactive',
            downloads: 3,
            purchases: 0,
            totalSpent: '$0.00',
            lastActive: '2024-12-20',
            role: 'user'
        },
        {
            id: 4,
            name: 'Sarah Williams',
            email: 'sarah.w@example.com',
            avatar: 'SW',
            accountCreated: '2025-01-05',
            status: 'active',
            downloads: 8,
            purchases: 2,
            totalSpent: '$89.99',
            lastActive: '2025-01-16',
            role: 'user'
        }
    ]);

    const statusOptions = [
        { value: 'all', label: 'All Users' },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' }
    ];

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const stats = {
        total: users.length,
        active: users.filter(u => u.status === 'active').length,
        inactive: users.filter(u => u.status === 'inactive').length,
        totalRevenue: users.reduce((sum, u) => sum + parseFloat(u.totalSpent.replace('$', '')), 0)
    };

    const getStatusColor = (status) => {
        return status === 'active'
            ? 'bg-green-500/20 text-green-400 border-green-500/30'
            : 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    };

    const getAvatarColor = (index) => {
        const colors = [
            'from-violet-500 to-purple-600',
            'from-blue-500 to-cyan-600',
            'from-green-500 to-emerald-600',
            'from-orange-500 to-red-600',
            'from-pink-500 to-rose-600'
        ];
        return colors[index % colors.length];
    };

    return (
        <div className="min-h-full bg-slate-950 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-2">
                        User Management
                    </h1>
                    <p className="text-gray-400">Manage and monitor user accounts and activities</p>
                </div>

                {/* Stats Cards */}
                <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Total Users</p>
                                <p className="text-2xl font-bold text-white">{stats.total}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Active Users</p>
                                <p className="text-2xl font-bold text-white">{stats.active}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Inactive Users</p>
                                <p className="text-2xl font-bold text-white">{stats.inactive}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Total Revenue</p>
                                <p className="text-2xl font-bold text-white">${stats.totalRevenue.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filter Bar */}
                <div className={`mb-6 flex flex-col md:flex-row gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Search */}
                    <div className="flex-1">
                        <div className="relative">
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search by name or email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Filter */}
                    <div className="flex gap-2">
                        {statusOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setFilterStatus(option.value)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    filterStatus === option.value
                                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                                        : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Users Table */}
                <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-800/50 border-b border-gray-700/50 text-sm font-semibold text-gray-400">
                            <div className="col-span-3">User</div>
                            <div className="col-span-2">Joined</div>
                            <div className="col-span-2">Status</div>
                            <div className="col-span-1">Downloads</div>
                            <div className="col-span-1">Purchases</div>
                            <div className="col-span-2">Total Spent</div>
                            <div className="col-span-1">Actions</div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-gray-700/30">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user, index) => (
                                    <div
                                        key={user.id}
                                        className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-800/30 transition-colors duration-200"
                                        style={{
                                            animation: `fadeIn 0.3s ease-out ${index * 0.1}s backwards`
                                        }}
                                    >
                                        {/* User Info */}
                                        <div className="col-span-3 flex items-center gap-3">
                                            <div className={`w-10 h-10 bg-gradient-to-br ${getAvatarColor(index)} rounded-lg flex items-center justify-center font-bold text-white text-sm`}>
                                                {user.avatar}
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{user.name}</p>
                                                <p className="text-gray-400 text-sm">{user.email}</p>
                                            </div>
                                        </div>

                                        {/* Joined Date */}
                                        <div className="col-span-2 flex items-center text-gray-400">
                                            {new Date(user.accountCreated).toLocaleDateString()}
                                        </div>

                                        {/* Status */}
                                        <div className="col-span-2 flex items-center">
                                            <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getStatusColor(user.status)}`}>
                                                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                                            </span>
                                        </div>

                                        {/* Downloads */}
                                        <div className="col-span-1 flex items-center">
                                            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium">
                                                {user.downloads}
                                            </span>
                                        </div>

                                        {/* Purchases */}
                                        <div className="col-span-1 flex items-center">
                                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium">
                                                {user.purchases}
                                            </span>
                                        </div>

                                        {/* Total Spent */}
                                        <div className="col-span-2 flex items-center">
                                            <span className="text-green-400 font-semibold">{user.totalSpent}</span>
                                        </div>

                                        {/* Actions */}
                                        <div className="col-span-1 flex items-center gap-2">
                                            <button
                                                className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors duration-200 group"
                                                title="View Details"
                                            >
                                                <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </button>
                                            <button
                                                className="p-2 hover:bg-yellow-500/20 rounded-lg transition-colors duration-200 group"
                                                title="Edit User"
                                            >
                                                <svg className="w-4 h-4 text-gray-400 group-hover:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button
                                                className="p-2 hover:bg-red-500/20 rounded-lg transition-colors duration-200 group"
                                                title="Delete User"
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
                                    <div className="text-4xl mb-4">👥</div>
                                    <p className="text-gray-400">No users found</p>
                                </div>
                            )}
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
    );
};

export default Users;