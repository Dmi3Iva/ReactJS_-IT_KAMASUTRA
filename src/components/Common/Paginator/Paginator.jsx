import React, {useEffect, useState} from 'react';
import styles from "./Paginator.module.css";

const PaginatorContainer = (props) => {
    let currentPage = props.currentPage;
    let itemsPaginatorCount = props.itemsPaginatorCount;
    let leftEdge = Math.floor(currentPage / itemsPaginatorCount) * itemsPaginatorCount + 1;
    let rightEdge = Math.ceil(currentPage / itemsPaginatorCount) * itemsPaginatorCount;

    let [paginator, setPaginator] = useState({
        currentPage: props.currentPage,
        pagesCount: Math.ceil(props.totalUsersCount / props.pageSize),
        itemsPaginatorCount: itemsPaginatorCount,
        leftEdge: leftEdge,
        rightEdge: rightEdge,
        Pages: [...Array(rightEdge - leftEdge + 1)].map((element, index) => leftEdge + index)
    });

    useEffect(()=>{
        setPaginator((prevState)=>({
            ...prevState,
            pagesCount: Math.ceil(props.totalUsersCount / props.pageSize)
        }))
    }, [props.totalUsersCount, props.pageSize])

    const movePages = (nbr) => {
        let leftEdge = (paginator.leftEdge + nbr < 1)
            ? 1 : paginator.leftEdge + nbr;
        let rightEdge = (leftEdge + paginator.itemsPaginatorCount > paginator.pagesCount)
            ? paginator.pagesCount : leftEdge + paginator.itemsPaginatorCount;

        if(leftEdge > rightEdge)
            rightEdge = leftEdge;
        setPaginator((prevState) => ({
                ...prevState,
                leftEdge: leftEdge,
                rightEdge: rightEdge,
                Pages: [...Array(rightEdge - leftEdge + 1)].map((element, index) => leftEdge + index)
            })
        )
    }

    return <Paginator {...props} pages={paginator.Pages} movePages={movePages} pagesCount={paginator.pagesCount}/>;
}

const Paginator = ({currentPage, onPageChanged, pages, pagesCount, movePages, itemsPaginatorCount}) => {

    return (
        <div className={styles.pagination}>
            {((!pages.some(x => x < 11))) &&
            <button onClick={() => movePages(-itemsPaginatorCount)}>Prev</button>}
            {pages.map(p => <div key={p} onClick={() => {
                onPageChanged(p)
            }} className={styles.pagination__item + ' ' + (currentPage === p && styles.pagination__current)}>{p}</div>)}
            {!pages.some(x=> x > pagesCount - 10) && <button onClick={() => movePages(itemsPaginatorCount)}>Next</button>}
        </div>
    );
};

export default PaginatorContainer;