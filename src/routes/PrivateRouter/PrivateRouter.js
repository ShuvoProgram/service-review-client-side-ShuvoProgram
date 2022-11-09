import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthProvider);
    const location = useLocation();
   
    if (loading) {
        return <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gray-400 animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full bg-gray-400 animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full bg-gray-400 animate-pulse dark:bg-violet-400"></div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;;

};

export default PrivateRouter;


