import s from './Posts.module.css';

const Posts = (props) => {
  return (
    <div className={s.item}>
      <div key='message-wrapper'>
        {props.Message}
        </div>
      <div>
      <span>
        like {props.Like}
      </span>
      </div>
    </div>
  );
}

export default Posts;
