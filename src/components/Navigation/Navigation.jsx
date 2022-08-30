import React from 'react';
import styles from './Navigation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setExpressionsType } from '../../store/slices/ExpressionsSlice';

const Navigation = () => {
	const dispatch = useDispatch();
	const type = useSelector((state) => state.expressions.expressionType);

	const handleClick = (value) => {
		dispatch(setExpressionsType(value));
	};

	return (
		<nav className={styles.Navigation}>
			<ul className={styles.NavList}>
				<li
					onClick={(e) => handleClick(e.target.innerText)}
					style={{ borderColor: type === 'Words' ? 'white' : 'transparent' }}
				>
					Words
				</li>
				<li
					onClick={(e) => handleClick(e.target.innerText)}
					style={{ borderColor: type === 'Idioms' ? 'white' : 'transparent' }}
				>
					Idioms
				</li>
				<li
					onClick={(e) => handleClick(e.target.innerText)}
					style={{ borderColor: type === 'Phrasal Verbs' ? 'white' : 'transparent' }}
				>
					Phrasal Verbs
				</li>
				<li
					onClick={(e) => handleClick(e.target.innerText)}
					style={{ borderColor: type === 'Common Phrases' ? 'white' : 'transparent' }}
				>
					Basic Phrases
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
