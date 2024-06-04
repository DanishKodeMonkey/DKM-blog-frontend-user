import { Link } from 'react-router-dom';
import '../styles/App.css';

function App() {
    return (
        <>
            <h1 className='text-3xl font-bold underline'>Hello world</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='blog'>blog</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default App;
