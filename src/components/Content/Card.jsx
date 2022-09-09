import React from 'react';
import styles from './Content.module.scss';
import { getListItems } from '../../utils';
import { motion } from 'framer-motion';

const Card = ({ setShowCard, data }) => {
	return (
		<motion.div
			animate={{ opacity: [0, 1], transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.3 } }}
			className={styles.Overlay}
			onClick={() => setShowCard(false)}
		>
			<motion.div
				animate={{ y: '0', opacity: 1, transition: { duration: 0.5, stiffness: 80, type: 'spring', delay: 0.3 } }}
				initial={{ y: '-70%', opacity: 0 }}
				exit={{ y: '-100%', opacity: [0.2, 0], transition: { duration: 0.3 } }}
				className={styles.Card}
				onClick={(e) => e.stopPropagation()}
			>
				<h2>~ {data.expression} ~</h2>
				<ul>{getListItems(data.definition)}</ul>
				{data.examples && (
					<>
						<h2 className={styles.HeaderExamples}>Examples</h2>
						<ul className={styles.Examples}>{getListItems(data.examples)}</ul>
					</>
				)}
			</motion.div>
		</motion.div>
	);
};

export default Card;
