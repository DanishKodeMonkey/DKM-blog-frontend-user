import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className='flex flex-col h-screen justify-between'>
            <header className='container mx-auto h-20'>
                <Header />
            </header>
            <main className='container px-20 mx-auto mb-auto grow'>
                <App />
            </main>
            <footer className='container mx-auto h-12'>
                <Footer />
            </footer>
        </div>
    </React.StrictMode>
);
