import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './AuthContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import routes from './routes/routes.jsx';
import './styles/index.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className='flex flex-col justify-between h-screen'>
            <header className='h-20'>
                <Header />
            </header>
            <main className='container mx-auto mb-auto grow'>
                <RouterProvider router={router} />
            </main>
            <footer className='h-12'>
                <Footer />
            </footer>
        </div>
    </React.StrictMode>
);
