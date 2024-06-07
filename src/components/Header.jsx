import NavBar from './Navbar';

function Header() {
    return (
        <div>
            <div className='bg-gradient-to-r from-orange-200 from-5% via-orange-400 via-50%  to-orange-200 to-95% text-center h-full  pt-5 w-screen'>
                <h1 className='text-4xl h-full'>The danishKodeMonkey blog</h1>
                <NavBar />
            </div>
        </div>
    );
}

export default Header;
