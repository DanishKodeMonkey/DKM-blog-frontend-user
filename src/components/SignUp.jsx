import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../api';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await createUser({
                username,
                first_name,
                last_name,
                email,
                password,
            });
            console.log(response);
            navigate('/signin');
        } catch (err) {
            setError('Sign up failed');
        }
    };
    return (
        <div>
            <h1>Sign up</h1>
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
                    <label htmlFor='first_name'>First name</label>
                    <input
                        id='first_name'
                        type='text'
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='last_name'>Last name</label>
                    <input
                        id='last_name'
                        type='text'
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='confirm_password'>Confirm password</label>
                    <input
                        id='confirm_password'
                        type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                {error && <p>{error}</p>}
                <button type='submit'>Sign up</button>
            </form>
        </div>
    );
};

export default SignUp;
