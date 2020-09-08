import React from 'react';
import styles from "./Paginator.module.css";

const Paginator = ({currentPage, pages, onPageChanged}) => {
    return (
        <div className="pagination">
            {pages.map(p => <div onClick={() => {
                onPageChanged(p)
            }} className={currentPage === p && styles.pagination__current}>{p}</div>)}
        </div>
    );
}

export default Paginator;