import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => {
	return (
		<nav className={styles.Navigation}>
			<ul className={styles.NavList}>
				<li>Words</li>
				<li>Idioms</li>
				<li>Phrasal Verbs</li>
				<li>Common Phrases</li>
			</ul>
		</nav>
	);
};

export default Navigation;
