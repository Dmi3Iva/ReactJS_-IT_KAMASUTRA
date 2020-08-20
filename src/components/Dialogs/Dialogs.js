import React from 'react';
import styles from './Dialogs.css';

const Dialogs = props => {
	return (<div className={`${styles.dialogs} ${props.className}`}>Dialogs</div>);
}

export default Dialogs;
