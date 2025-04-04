import { Link } from 'react-router';
import classes from './Post.module.css';

export default function Post(props) {
  const { author, body, id } = props;
  return (
    <li className={classes.post}>
        <Link to={`/${id}`}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </Link>
    </li>
  );
}
