import React, { useState, useEffect } from 'react';
import ShowPost from './ShowPost';

const Post = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);

    return (
        <div>
            {
                post.map(post => (<ShowPost post={post}></ShowPost>))
            }
        </div>
    );
};

export default Post;