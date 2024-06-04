import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='bg-gray-800 p-4 text-white'>
            <ul className='flex space-x-4'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/signup'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/signin'>Sign In</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
