import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './Login.module.css'
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { initialValues, SignupSchema } from '../../Validate/Validate';


const Login = (props) => {

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }
  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginForm login={props.login} />
    </div>
  );
}

const LoginForm = ({login}) => {
  return (
    <div className={s.loginform}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
             await login(
              values.email,
              values.password,
              values.rememberMe);
          }
          catch(error){
            setErrors({
              submit: error.message?.[0] || 'Неверные данные'
            })
          }
          finally {
            setSubmitting(false);
          }
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <div className={s.loginform}>
              <label>Email
                <div>
                  <Field type="email" name="email" className={s.input} />
                </div>
              </label>
              <ErrorMessage name="email" component="div" className={s.ErrorMessage} />
              <label>Password
                <div>
                  <Field type="password" name="password" className={s.input} />
                </div>
              </label>
              <ErrorMessage name="password" component="div" className={s.ErrorMessage} />
              <label>RememberMe
                <Field type="checkbox" name="rememberMe" className={s.input} />
              </label>
              <div>
                <button type="submit" disabled={isSubmitting} className={s.submit}>
                  Submit
                </button>
              </div >
              <div className={s.ErrorMessage}>{errors.submit}</div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);
