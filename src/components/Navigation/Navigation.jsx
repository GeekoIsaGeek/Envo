import React from 'react';
import styles from './Navigation.module.scss';
import { useDispatch } from 'react-redux';
import { setExpressionsType } from '../../store/slices/ExpressionsSlice';

const Navigation = () => {
	const dispatch = useDispatch();

	return (
		<nav className={styles.Navigation}>
			<ul className={styles.NavList}>
				<li onClick={(e) => dispatch(setExpressionsType(e.target.innerText))}>Words</li>
				<li onClick={(e) => dispatch(setExpressionsType(e.target.innerText))}>Idioms</li>
				<li onClick={(e) => dispatch(setExpressionsType(e.target.innerText))}>Phrasal Verbs</li>
				<li onClick={(e) => dispatch(setExpressionsType(e.target.innerText))}>
					Common Phrases
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
