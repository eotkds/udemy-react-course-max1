import { useLoaderData } from 'react-router';
import Post from './Post';
import classes from './PostsList.module.css';


export default function PostsList() {
    const posts = useLoaderData();


    /*
    250330  왜 NewPost 안에서 useState를 선언하지 않았을까?
    아마도 posts list 데이터를 보내주기 위해서 일수도, 실제 프로젝트라면 그렇지 않았을 수도 있다.
    250331 NewPost로 이동 - 배우는 과정 + Post에서동적으로 변경할 수 있다는 것을 보여주기 위한 것으로 추정
    */

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, idx)=> <Post key={idx} id={post.id} author={post.author} body={post.body} />)}
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