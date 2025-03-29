import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

export default function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Parker" body="Hello" />
                <Post author="Max" body="Learning React is fun!" />
            </ul>
        </>
    )
}