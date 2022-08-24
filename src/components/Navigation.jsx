import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
	return (
		<nav className={styles.Navigation}>
			<ul>
				<li>Words</li>
				<li>Idioms</li>
				<li>Phrasal Verbs</li>
				<li>Common Phrases</li>
			</ul>
		</nav>
	);
};

export default Navigation;
