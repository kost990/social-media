import { NavLink } from 'react-router-dom';
import s from './Header.module.css'


const Header = (props) => {
     return (
    <header className={s.header}>
        <div className={s.loginblock}>
            {props.isAuth
            ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to='/login' className={s.login}>Login</NavLink>}
        </div>
    </header>);
}

 export default Header;
