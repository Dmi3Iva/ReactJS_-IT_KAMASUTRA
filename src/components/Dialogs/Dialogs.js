import React from 'react';
import styles from './Dialogs.css';

const Dialogs = props => {
	return (<div>
		<h2 className={styles.dialogs__header}>Dialogs</h2>
		<div className="dialogs">
			<div className="dialogs__list">
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
			<div className="dialogs__messages messages">
				<div className="messages__item">
					<div className="messages__user">
						<div className="messages__avatar">ava</div>
						<div className="messages__user_name">Me</div>
					</div>
					<div className="messages__text">Hello, how is your mood today?</div>
				</div>
				<div className="messages__item">
					<div className="messages__user">
						<div className="messages__avatar">ava</div>
						<div className="messages__user_name">Andrew</div>
					</div>
					<div className="messages__text">Hello, how is your mood today?</div>
				</div>
				<div className="messages__item">
					<div className="messages__user">
						<div className="messages__avatar">ava</div>
						<div className="messages__user_name">Me</div>
					</div>
					<div className="messages__text">Hello, how is your mood today?</div>
				</div>
			</div>
		</div>
	</div>);
}

export default Dialogs;
