import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = () => {
	console.log(styles);
	return (<div>
		<h2 className={styles.dialogs__header}>Dialogs</h2>
		<div className={styles.dialogs}>
			<div className={styles.dialogs__list}>
				<ul>
					<li>Andrew</li>
					<li>Oleg</li>
					<li>Sasha</li>
					<li>Sveta</li>
					<li>Olga</li>
					<li>Kristy</li>
					<li>Katerine</li>
					<li>Luisa</li>
				</ul>
			</div>
			<div className={`${styles.dialogs__messages} ${styles.messages}`}>
				<div className={styles.messages__item}>
					<div className={styles.messages__user}>
						<div className={styles.messages__avatar}>ava</div>
						<div className={styles.messages__user_name}>Me</div>
					</div>
					<div className={styles.messages__text}>Hello, how is your mood today?</div>
				</div>
				<div className={styles.messages__item}>
					<div className={styles.messages__user}>
						<div className={styles.messages__avatar}>ava</div>
						<div className={styles.messages__user_name}>Andrew</div>
					</div>
					<div className={styles.messages__text}>Hello, how is your mood today?</div>
				</div>
				<div className={styles.messages__item}>
					<div className={styles.messages__user}>
						<div className={styles.messages__avatar}>ava</div>
						<div className={styles.messages__user_name}>Me</div>
					</div>
					<div className={styles.messages__text}>Hello, how is your mood today?</div>
				</div>
			</div>
		</div>
	</div>);
}

export default Dialogs;
