import s from './MyPosts.module.css';
import React from "react";
import Posts from './Posts/Posts';
import { Field, Form, Formik } from 'formik';


const MyPosts = React.memo(props => {
  let postsElement =
    props.posts.map(p => <Posts Message={p.message} Like={p.likesCount} key={p.key} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h4>My posts</h4>
      <Formik
        initialValues={{
          message: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>New Post:
              <div>
                <Field 
                type="message"
                 name="message"
            value={props.newPostText}
            onChange={onPostChange}
            ref={newPostElement}  />
              </div>
            </label>
            <div>
              <button onClick={addPost} type="submit" disabled={isSubmitting} className={s.submit}>
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {postsElement}
    </div>
  );
})

export default MyPosts;
