import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signIn({ username, password });
            console.log(response);

            navigate('/');
        } catch (err) {
            setError('Sign in failed');
        }
    };
    return (
        <div>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input
                        id='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p>{error}</p>}
                <button type='submit'>Sign in</button>
            </form>
        </div>
    );
};

export default SignIn;
