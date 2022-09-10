import React from 'react';
import styles from './Content.module.scss';
import { getListItems } from '../../utils';
import { motion } from 'framer-motion';

const wrapperVariants = {
	visible: {
		opacity: [0, 1],
		transition: { duration: 0.2 },
	},
	hidden: {
		opacity: [1, 0],
		transition: { duration: 0.2 },
	},
};

const Card = ({ setShowCard, data }) => {
	return (
		<motion.div
			variants={wrapperVariants}
			animate='visible'
			exit='hidden'
			className={styles.Overlay}
			onClick={() => setShowCard(false)}
		>
			<div className={styles.Card} onClick={(e) => e.stopPropagation()}>
				<h2>~ {data.expression} ~</h2>
				<ul>{getListItems(data.definition)}</ul>
				{data.examples && (
					<>
						<h2 className={styles.HeaderExamples}>Examples</h2>
						<ul className={styles.Examples}>{getListItems(data.examples)}</ul>
					</>
				)}
			</div>
		</motion.div>
	);
};

export default Card;
