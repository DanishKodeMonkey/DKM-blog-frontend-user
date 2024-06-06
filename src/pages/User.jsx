import { useState, useEffect, useContext } from 'react';
import { fetchCurrentUser } from '../api';
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
    }, []);

    return (
        <div>
            <h1>User Page</h1>
            {userData ? (
                <div>
                    <p>Username: {userData.username}</p>
                    <p>First name: {userData.first_name}</p>
                    <p>last name: {userData.last_name}</p>
                    <p>Email: {userData.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserPage;
