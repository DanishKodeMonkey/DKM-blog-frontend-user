import { useEffect, useState } from 'react';
import { fetchAllBlogPosts } from '../api';
import DefaultArticle from '../components/DefaultArticle';
import BlogSidebar from '../components/BlogSidebar';

// custom hook
const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
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

    const handleSelectPost = (post) => {
        setSelectedPost(post);
    };

    if (loading) return <p>Loading... please wait.</p>;
    if (error) return <p>A network error was encountered.</p>;
    if (posts <= 0) return <DefaultArticle />;

    return (
        <div className='blog-container'>
            <BlogSidebar
                posts={posts}
                onSelectPost={handleSelectPost}
            />
            <div className='main-content'>
                <h1>Blog posts</h1>
                {selectedPost ? (
                    <div key={selectedPost._id}>
                        <h2>{selectedPost.title}</h2>
                        <p>{selectedPost.text}</p>
                        <div>
                            <h3>comments:</h3>
                            {selectedPost.comments.map((comment) => (
                                <div key={comment._id}>
                                    <p>{comment.text}</p>
                                    <p>{comment.timestamp}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <h2>{post.title}</h2>
                                <p>{post.text}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
