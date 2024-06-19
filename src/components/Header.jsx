import NavBar from './Navbar';

function Header() {
    return (
        <div>
            <div className='banner'>
                <h1 className='text-4xl h-full'>The danishKodeMonkey blog</h1>
                <NavBar />
            </div>
        </div>
    );
}

export default Header;
