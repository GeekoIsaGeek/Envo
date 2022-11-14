import React from 'react';
import styles from './Navigation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setExpressionsType } from '../../store/slices/ExpressionsSlice';
import { motion } from 'framer-motion';
import { MdPostAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navigation = () => {
	const dispatch = useDispatch();
	const type = useSelector((state) => state.expressions.expressionType);
	const authenticated = useSelector((state) => state.add.authenticated);

	const handleClick = (value) => {
		dispatch(setExpressionsType(value));
	};

	return (
		<motion.nav className={styles.Navigation} animate={{ opacity: [0, 1] }} exit={{ opacity: [1, 0] }}>
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
					style={{ borderColor: type === 'Basic Phrases' ? 'white' : 'transparent' }}
				>
					Basic Phrases
				</li>
				{authenticated && (
					<li>
						<Link to='/add'>
							<MdPostAdd />
						</Link>
					</li>
				)}
			</ul>
		</motion.nav>
	);
};

export default Navigation;
