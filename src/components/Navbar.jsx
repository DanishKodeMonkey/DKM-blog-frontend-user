import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
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
                <NavLink
                    to={'/user'}
                    className={
                        'text-white text-lg font-semibold mr-6 hover:text-teal-400'
                    }
                >
                    User
                </NavLink>
                <NavLink
                    to={'/user/signin'}
                    className={
                        'text-white text-lg font-semibold mr-6 hover:text-teal-400'
                    }
                >
                    Sign in
                </NavLink>
                <NavLink
                    to={'/user/signup'}
                    className={
                        'text-white text-lg font-semibold mr-6 hover:text-teal-400'
                    }
                >
                    Sign up
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
