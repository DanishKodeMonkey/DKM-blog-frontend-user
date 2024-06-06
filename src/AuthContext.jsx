import { createContext, useState, useEffect } from 'react';
// Context handler wrapper for passing auth tokens between routing in the app
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // try to fetch token from local
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        // do this on mount
    }, []);

    const handleSignInToken = (token) => {
        // remove existing tokens on sign in
        localStorage.removeItem('token');
        // set token to storage on sign in
        setIsAuthenticated(true);
        localStorage.setItem('token', token);
    };

    const handleSignOutToken = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('token');
    };

    // wrap this component to all children components, w
    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                handleSignInToken,
                handleSignOutToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
