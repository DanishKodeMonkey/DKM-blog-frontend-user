const API_URL = import.meta.env.VITE_API_URL;

// Security: Check for, and include JWT token on API requests
// Use for protected API routes.
const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    // Was a token found? If so attach, otherwise dont.
    return token ? { Authorization: `Bearer ${token}` } : {};
};

/// BLOG POSTS ///
// fetch all blog posts
export const fetchAllBlogPosts = async () => {
    try {
        const response = await fetch(`${API_URL}/blog/posts`);
        if (!response.ok) {
            throw new Error('Network response failed');
        }
        return await response.json();
    } catch (error) {
        console.error('Error: fetching blog posts: ', error);
        throw error;
    }
};

/// USERS ///
// Sign up new user

export const createUser = async (user) => {
    const response = await fetch(`${API_URL}/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error('Sign up failed');
    }
    return response.json();
};

/// AUTH ///

// Sign in user
export const signInUser = async (user) => {
    const response = await fetch(`${API_URL}/auth/sign-in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        throw new Error('Sign in failed');
    }
    return response.json();
};
