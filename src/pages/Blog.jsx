import { useEffect, useState } from 'react';
import { fetchAllBlogPosts } from '../api';
import DefaultArticle from '../components/DefaultArticle';
import BlogSidebar from '../components/BlogSidebar';
import parse from 'html-react-parser';

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

    if (loading) return <div>Loading... please wait.</div>;
    if (error) return <div>A network error was encountered.</div>;
    if (posts.length === 0) return <div>No posts found.</div>;

    return (
        <div className='flex bg-white w-full'>
            <div className='w-1/6 p-4 border-r bg-gray-100'>
                <BlogSidebar
                    posts={posts}
                    onSelectPost={handleSelectPost}
                    selectedPost={selectedPost}
                />
            </div>
            <div className='w-5/6 p-4'>
                <h1 className='text-2xl font-bold mb-4 w-full'>
                    The journey of a danish Kode Monkey
                </h1>
                <hr />
                <br />
                <div className='flex'>
                    {selectedPost ? (
                        <div
                            key={selectedPost.id}
                            className='mt-2 mb-4 p-2 border rounded-lg bg-slate-100 w-full'
                        >
                            <div className='text-center'>
                                <h2 className='text-xl font-semibold'>
                                    {selectedPost.title}
                                </h2>

                                <div className='mt-2 mb-4'>
                                    {parse(selectedPost.text)}
                                </div>
                                <h4 className='text-sm text-slate-800'>
                                    author - {selectedPost.author.username}
                                </h4>
                                <p className='text-sm text-gray-500'>
                                    {new Date(
                                        selectedPost.timestamp
                                    ).toLocaleString()}
                                </p>
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>
                                    comments:
                                </h3>
                                {selectedPost.comments.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className='mt-2 mb-4 p-2 border rounded-lg bg-gray-50 max-w-lg'
                                    >
                                        <h4>{comment.author.username}</h4>
                                        <div>{comment.text}</div>
                                        <p className='text-sm text-gray-500'>
                                            {new Date(
                                                comment.timestamp
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col w-full'>
                            {posts.map((post) => (
                                <div
                                    key={post.id}
                                    className='mt-2 mb-4 p-2 border rounded-lg bg-slate-100 w-full'
                                >
                                    <h2 className='text-xl font-semibold'>
                                        {post.title}
                                    </h2>
                                    <h4 className='text-sm text-slate-800'>
                                        {post.author.username}
                                    </h4>
                                    <div className='mt-2'>
                                        {parse(post.text)}
                                    </div>
                                    <p className='text-sm text-gray-500'>
                                        {new Date(
                                            post.timestamp
                                        ).toLocaleString()}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
