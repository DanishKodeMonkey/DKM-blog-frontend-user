import React from 'react';

const BlogSidebar = ({ posts, onSelectPost, selectedPost }) => {
    return (
        <div>
            <h3>Posts list</h3>
            {posts ? (
                <ul>
                    {posts.map((post) => (
                        <li
                            key={post._id}
                            onClick={() => onSelectPost(post)}
                            className={`p-2 mb-2 rounded cursor-pointer ${
                                selectedPost && selectedPost._id === post._id
                                    ? 'bg-teal-300 text-black'
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            <h4 className='font-semibold'>{post.title}</h4>
                            <p className='text-sm text-gray-700'>
                                {new Date(post.timestamp).toLocaleDateString()}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <li>No posts found</li>
            )}
        </div>
    );
};

export default BlogSidebar;
