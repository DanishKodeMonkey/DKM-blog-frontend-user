import React from 'react';

const BlogSidebar = ({ posts, onSelectPost }) => {
    return (
        <div>
            <h3>Posts list</h3>
            {posts ? (
                <ul>
                    {posts.map((post) => (
                        <li
                            key={post._id}
                            onClick={() => onSelectPost(post)}
                        >
                            <h4>{post.title}</h4>
                            <p>{post.timestamp}</p>
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
