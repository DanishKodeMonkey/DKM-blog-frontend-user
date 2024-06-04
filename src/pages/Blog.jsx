import { useEffect, useState } from 'react';
import { fetchAllBlogPosts } from '../api';
import DefaultArticle from '../components/DefaultArticle';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchAllBlogPosts();
                console.log(data);
                setPosts(data);
            } catch (err) {
                setError(err.message);
            }
        };
        getPosts();
    }, []);
    if (error) {
        return <p>Error: {error}</p>;
    }

    if (posts.length === 0) {
        return <DefaultArticle />;
    }

    return (
        <div>
            <h1>Blog posts</h1>
            {posts.map((post) => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;
