import React from 'react';
import styles from './Content.module.css';

const Card = ({ showCard, setShowCard }) => {
	if (showCard)
		return (
			<div className={styles.Overlay} onClick={() => setShowCard(false)}>
				<div className={styles.Card}>
					<h2>Check up on</h2>
					<p>Es iseti magari ganmartebaa roooo</p>
				</div>
			</div>
		);
};

export default Card;
