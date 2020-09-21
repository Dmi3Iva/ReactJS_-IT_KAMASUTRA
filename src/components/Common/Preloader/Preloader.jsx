import React from 'react';
import styles from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['lds-ripple']}>
                <div/>
                <div/>
            </div>
        </div>
    );
}

export default Preloader;