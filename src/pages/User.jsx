import { useState, useEffect, useContext } from 'react';
import { fetchCurrentUser, updateUser } from '../api';
import AuthContext from '../AuthContext';

const UserPage = () => {
    console.warn('Entered user page, starting operation =====');
    const [userData, setUserData] = useState(null);
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        console.warn('Starting useEffect...');
        const fetchUserData = async () => {
            console.warn('Starting fetchUserData');
            try {
                console.warn('Trying to start fetchCurrentUser...');
                const data = await fetchCurrentUser();
                console.log('data retrieved', data);
                console.log('Updating userData state...');
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data: ', error);
                return <p>Error retrieving.. {error}</p>;
            }
        };
        if (isAuthenticated) {
            console.log('user is authenticated, trying fetchUserData');
            fetchUserData();
        }
    }, [isAuthenticated]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const updatedUser = {
            username: form.username.value,
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            email: form.email.value,
            password: form.password.value,
            _id: userData._id,
        };

        try {
            console.log(
                `Sending userData to updateUser for user ${userData._id}`,
                updatedUser
            );
            await updateUser(updatedUser);
        } catch (error) {
            throw new Error('User update failed ', error);
        }
    };

    return (
        <div className='flex flex-col items-center bg-white w-full p-4'>
            <h1 className='text-3xl font-bold mb-6'>User Page</h1>
            {userData ? (
                <form
                    onSubmit={handleSubmit}
                    className='w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md'
                >
                    <div className='mb-4'>
                        <label
                            htmlFor='username'
                            className='form-label'
                        >
                            Username:
                        </label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            defaultValue={userData?.username}
                            className='form-input'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='firstName'
                            className='form-label'
                        >
                            First Name:
                        </label>
                        <input
                            type='text'
                            id='first_name'
                            name='first_name'
                            defaultValue={userData?.first_name}
                            className='form-input'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='lastName'
                            className='form-label'
                        >
                            Last Name:
                        </label>
                        <input
                            type='text'
                            id='last_name'
                            name='last_name'
                            defaultValue={userData?.last_name}
                            className='form-input'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='email'
                            className='form-label'
                        >
                            Email:
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            defaultValue={userData?.email}
                            className='form-input'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='password'
                            className='form-label'
                        >
                            Password:
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Enter new passwordd'
                            className='form-input'
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 transition ease-in-out duration-150'
                    >
                        Update
                    </button>
                </form>
            ) : (
                <p className='text-center text-gray-500'>Loading...</p>
            )}
        </div>
    );
};

export default UserPage;
