import React, { useState } from 'react';
import Card from './Card';
import styles from './Content.module.css';

const Content = () => {
	const [showCard, setShowCard] = useState(false);

	return (
		<ul className={styles.Content}>
			<li onClick={() => setShowCard(true)}>Run out of</li>
			<li>Look in on</li>
			<li>Check up on</li>
			<Card showCard={showCard} setShowCard={setShowCard} />
		</ul>
	);
};

export default Content;
