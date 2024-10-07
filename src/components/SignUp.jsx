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
            navigate('/user/signin');
        } catch (err) {
            setError('Sign up failed');
        }
    };
    return (
        <div className='flex flex-col items-center bg-white w-full p-4'>
            <h1 className='text-3xl font-bold mb-6'>Sign up</h1>
            <form
                onSubmit={handleSubmit}
                className='w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md'
            >
                <div className='mb-4'>
                    {' '}
                    <label
                        htmlFor='username'
                        className='form-label'
                    >
                        Username
                    </label>
                    <input
                        id='username'
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='form-input'
                    />
                </div>
                <div className='mb-4'>
                    {' '}
                    <label
                        htmlFor='first_name'
                        className='form-label'
                    >
                        First name
                    </label>
                    <input
                        id='first_name'
                        type='text'
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='form-input'
                    />
                </div>
                <div className='mb-4'>
                    {' '}
                    <label
                        htmlFor='last_name'
                        className='form-label'
                    >
                        Last name
                    </label>
                    <input
                        id='last_name'
                        type='text'
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        className='form-input'
                    />
                </div>
                <div className='mb-4'>
                    {' '}
                    <label
                        htmlFor='email'
                        className='form-label'
                    >
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-input'
                    />
                </div>
                <div className='mb-4'>
                    {' '}
                    <label
                        htmlFor='password'
                        className='form-label'
                    >
                        Password
                    </label>
                    <input
                        id='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-input'
                    />
                </div>
                <div className='mb-4'>
                    {' '}
                    <label
                        htmlFor='confirm_password'
                        className='form-label'
                    >
                        Confirm password
                    </label>
                    <input
                        id='confirm_password'
                        type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='form-input'
                    />
                </div>
                {error && <p>{error}</p>}
                <button
                    type='submit'
                    className='w-full bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 transition ease-in-out duration-150'
                >
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
