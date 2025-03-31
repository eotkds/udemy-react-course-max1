import { useState, useEffect } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';


export default function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            setPosts(data.posts);
        }
        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        /*
            250331 callback 함수를 사용하는 이유
            - 상태 업데이트가 비동기적으로 일어나기 때문에, 이전 상태를 참조할 수 있도록 해준다.
            - 안전하게 이전값을 참조할 수 있도록 해준다.
        */
        setPosts((prevPosts) => [postData, ...prevPosts]);
    }
    /*
    250330  왜 NewPost 안에서 useState를 선언하지 않았을까?
    아마도 posts list 데이터를 보내주기 위해서 일수도, 실제 프로젝트라면 그렇지 않았을 수도 있다.
    250331 NewPost로 이동 - 배우는 과정 + Post에서동적으로 변경할 수 있다는 것을 보여주기 위한 것으로 추정
    */

    return (
        <>
            {isPosting && (
            <Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
            </Modal>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, idx)=> <Post key={idx} author={post.author} body={post.body} />)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    )
}