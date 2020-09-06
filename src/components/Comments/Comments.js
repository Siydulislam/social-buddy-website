import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowComments from './ShowComments';

const Comments = () => {
    const { postId } = useParams();
    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComment(data));
    }, [])

    return (
        <div>
            {
                comment.map(comment => (<ShowComments comments={comment}></ShowComments>))
            }
        </div>
    );
};

export default Comments;