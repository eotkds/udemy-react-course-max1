import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';


export default function PostsList({isPosting, onStopPosting}) {

    /*
        250330  왜 NewPost 안에서 useState를 선언하지 않았을까?
        아마도 posts list 데이터를 보내주기 위해서 일수도, 실제 프로젝트라면 그렇지 않았을 수도 있다.
    */
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');


    function changeBodyHandler(event) {
      setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
      }
    return (
        <>
            {isPosting && (
            <Modal onClose={onStopPosting}>
                <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
            </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Max" body="Learning React is fun!" />
            </ul>
        </>
    )
}