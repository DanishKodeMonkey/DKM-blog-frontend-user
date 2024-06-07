import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './styles/index.css';

function App() {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <header className='h-20 mb-10'>
                <Header />
            </header>
            <main className='container mx-auto mb-auto grow'>
                <Outlet />
            </main>
            <footer className='h-12'>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
