import s from './Users.module.css'
import Paginator from '../../common/Paginator/Paginator';
import User from './User';

let Users = ({users, currentPage, onPageChanged, totalUsersCount,pageSize, ...props}) => {

    return <div className={s.users}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
        totalUsersCount= {totalUsersCount} pageSize={pageSize} />
        {
            users.map(u => <User user={u}
                 key={u.id}
                 followingInProgress={props.followingInProgress}
                 follow={props.follow}
                 unfollow={props.unfollow}
                 />)
}
</div>
}

export default Users;