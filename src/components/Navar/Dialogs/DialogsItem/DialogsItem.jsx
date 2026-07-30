import { NavLink } from 'react-router-dom';
import s from './../DialogsItem/DialogsItem.module.css';

const DiologsItems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink className={s.dialogs} to={path}> {props.name}</NavLink>
        </div>
    );
}

export default DiologsItems;