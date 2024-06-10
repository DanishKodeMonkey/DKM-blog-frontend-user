import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';

const NavBar = () => {
    const { isAuthenticated, handleSignOutToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = async (e) => {
        e.preventDefault();
        try {
            // clears auth tokens and session
            handleSignOutToken();
            navigate('/');
        } catch (err) {
            console.error(err);
            throw new Error('Sign Out failed', err);
        }
    };

    return (
        <nav
            id='navbar'
            className=' border-b'
        >
            <div
                id='navlinkcontainer'
                className='flex items-center justify-center border-b-4 border-teal-200'
            >
                <NavLink
                    to={'/'}
                    className={
                        'text-white text-lg font-semibold mr-6 hover:text-teal-400'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to={'/blog'}
                    className={
                        'text-white text-lg font-semibold mr-6 hover:text-teal-400'
                    }
                >
                    Blog
                </NavLink>
                {isAuthenticated ? (
                    <>
                        <NavLink
                            to={'/user'}
                            className={
                                'text-white text-lg font-semibold mr-6 hover:text-teal-400'
                            }
                        >
                            User
                        </NavLink>

                        <button
                            onClick={handleSignOut}
                            className={
                                'text-white text-lg font-semibold mr-6 hover:text-teal-400'
                            }
                        >
                            Sign out
                        </button>
                    </>
                ) : (
                    <>
                        {' '}
                        <NavLink
                            to={'/user/signup'}
                            className={
                                'text-white text-lg font-semibold mr-6 hover:text-teal-400'
                            }
                        >
                            Sign up
                        </NavLink>
                        <NavLink
                            to={'/user/signin'}
                            className={
                                'text-white text-lg font-semibold mr-6 hover:text-teal-400'
                            }
                        >
                            Sign in
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
