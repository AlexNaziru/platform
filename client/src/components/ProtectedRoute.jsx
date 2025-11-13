import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, requireAdmin = false}) => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
        return (
            <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    // redirect if needed
    if (!isSignedIn) {
        return <Navigate to="/" replace />;
    }

    // Check for an admin role
    if (requireAdmin) {
        const userRole = user?.publicMetadata?.role || user?.unsafeMetadata?.role;

        if (userRole !== 'admin') {
            return (
                <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
                        <p className="text-gray-400">You don't have permission to access this page.</p>
                    </div>
                </div>
            );
        }
    }

    return children;
}
export default ProtectedRoute
