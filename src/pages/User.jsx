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

    /* 
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('sending userData to updateUser', userData);
            await updateUser(userData);
            const updatedData = await fetchCurrentUser();
            setUserData(updatedData);
        } catch (error) {
            console.error('Error updating user: ', error);
        }
    }; */

    return (
        <div>
            <h1>User Page</h1>
            {userData ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            defaultValue={userData?.username}
                        />
                    </div>
                    <div>
                        <label htmlFor='firstName'>First Name:</label>
                        <input
                            type='text'
                            id='first_name'
                            name='first_name'
                            defaultValue={userData?.first_name}
                        />
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input
                            type='text'
                            id='last_name'
                            name='last_name'
                            defaultValue={userData?.last_name}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            defaultValue={userData?.email}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Enter new passwordd'
                        />
                    </div>
                    <button type='submit'>Update</button>
                </form>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserPage;
