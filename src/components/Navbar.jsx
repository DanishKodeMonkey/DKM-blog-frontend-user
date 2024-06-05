import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink
                to={'/'}
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                }
            >
                Home
            </NavLink>
            <NavLink
                to={'/blog'}
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                }
            >
                Blog
            </NavLink>
            <NavLink
                to={'/user/signin'}
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                }
            >
                Sign in
            </NavLink>
            <NavLink
                to={'/user/signup'}
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ''
                }
            >
                Sign up
            </NavLink>
        </nav>
    );
};

export default NavBar;
