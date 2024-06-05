import { useEffect, useState } from 'react';
import { fetchAllBlogPosts } from '../api';
import DefaultArticle from '../components/DefaultArticle';

// custom hook
const AllBlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchAllBlogPosts();
                console.log(data);
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getPosts();
    }, []);
    return { posts, error, loading };
};
const Blog = () => {
    const { posts, error, loading } = AllBlogPosts();

    if (loading) return <p>Loading... please wait.</p>;
    if (error) return <p>A network error was encountered.</p>;
    if (posts <= 0) return <DefaultArticle />;

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
