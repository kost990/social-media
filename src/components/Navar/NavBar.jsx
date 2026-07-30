import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import React from "react";


const NavBar = (props) => {
    const getLinkClass = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}`: s.item;
  };
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={getLinkClass}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={getLinkClass}>Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/News" className={getLinkClass}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={getLinkClass}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className={getLinkClass}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" className={getLinkClass}>Found Users</NavLink>
      </div>
    </nav>);
}

export default NavBar;