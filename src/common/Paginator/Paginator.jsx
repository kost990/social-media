import s from './Paginator.module.css'

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
            {pages.map(p => {
                if (p === 1 || p === pagesCount || (p >= props.currentPage - 2 && p <= props.currentPage + 2)) {
                    return (
                        <span
                            key={p}
                            className={props.currentPage === p ? s.selectedPage : ''}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}>{p} </span>
                    );
                } else if (p === props.currentPage - 3 || p === props.currentPage + 3) {
                    return <span key={p}>... </span>;
                } else {
                    return null;
                }
            })}
        </div>
}

export default Paginator;